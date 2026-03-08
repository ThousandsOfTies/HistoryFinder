import { GoogleGenAI } from '@google/genai';
import { mockDictionary } from '../data/mockDictionary';

// Gemini API の初期化 (Viteの環境変数から取得)
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY || ''
});

/**
 * AIから解説を取得し、同時にWikipediaから画像を引っ張ってくる非同期関数。
 * @param {string} keyword - 解説を取得したい歴史用語
 * @returns {Promise<{text: string, imageUrl: string|null}>}
 */
export const getAiExplanation = async (keyword) => {
    try {
        let aiText = "";
        if (!import.meta.env.VITE_GEMINI_API_KEY) {
            return {
                text: mockDictionary[keyword] ? mockDictionary[keyword].description : "APIキー未設定",
                imageUrl: null
            };
        }

        const prompt = `あなたは世界史の専門家です。以下の歴史用語について、その背景、因果関係、歴史的意義をわかりやすく300字程度で解説してください。できれば、関連する他の歴史用語を2〜3個用いてください。文中に登場した歴史用語は、必ず前後に角括弧を二重に付けて [[キーワード]] の形式で出力してください。\n\n歴史用語: ${keyword}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        aiText = response.text;

        let imageUrl = null;
        try {
            const wikiRes = await fetch(`https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(keyword)}`);
            const wikiData = await wikiRes.json();
            if (wikiData.originalimage && wikiData.originalimage.source) {
                imageUrl = wikiData.originalimage.source;
            }
        } catch (e) {
            console.warn("Wikipedia Image Fetch Error:", e);
        }

        return { text: aiText, imageUrl };
    } catch (error) {
        console.error("AI Error:", error);
        return { text: "AIからのデータ取得に失敗しました。", imageUrl: null };
    }
};

// --- TOC ノードタイプごとのスタイル定義 ---
const tocStyles = {
    root_cause: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6' },
    context: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04' },
    event: { background: '#059669', color: '#fff', border: '2px solid #10b981' },
    action: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b' },
    result: { background: '#000000', color: '#fff', border: '2px solid #a855f7' },
};

/**
 * Gemini が返した因果チェーン JSON を ReactFlow 用の nodes/edges 配列に変換する。
 */
const convertToReactFlow = (causalData) => {
    const nodes = [];
    const edges = [];

    // 通常ノード
    causalData.nodes.forEach((n) => {
        const style = tocStyles[n.type] || tocStyles.event;
        // 国コードがあれば flagcdn.com の国旗画像をアイコンにする
        const iconUrl = n.countryCode
            ? `https://flagcdn.com/w80/${n.countryCode.toLowerCase()}.png`
            : null;
        nodes.push({
            id: n.id,
            type: 'default',
            data: {
                label: n.label,
                type: n.type,
                details: n.details,
                iconUrl,
            },
            position: { x: 0, y: 0 },
            style: { ...style, borderRadius: '4px', width: 250, padding: '10px' },
        });
    });

    // ロジックノード (AND/OR)
    if (causalData.logicNodes) {
        causalData.logicNodes.forEach((ln) => {
            nodes.push({
                id: ln.id,
                type: 'logic',
                data: { operator: ln.operator, symbol: ln.operator === 'AND' ? '＊' : '＋' },
            });
            // inputs → ロジックノードへのエッジ
            ln.inputs.forEach((inputId) => {
                edges.push({
                    id: `${inputId}-${ln.id}`,
                    source: inputId,
                    target: ln.id,
                    type: 'straight',
                    style: { stroke: '#6b7280', strokeWidth: 2 },
                });
            });
            // ロジックノード → 出力へのエッジ
            edges.push({
                id: `${ln.id}-${ln.output}`,
                source: ln.id,
                target: ln.output,
                type: 'straight',
                style: { stroke: '#d1d5db', strokeWidth: 3 },
            });
        });
    }

    // 通常エッジ（ロジックノードで既にカバーされているものは除外）
    const logicEdgeSet = new Set();
    if (causalData.logicNodes) {
        causalData.logicNodes.forEach(ln => {
            ln.inputs.forEach(inputId => logicEdgeSet.add(`${inputId}->${ln.output}`));
        });
    }

    causalData.edges.forEach((e) => {
        const key = `${e.source}->${e.target}`;
        if (!logicEdgeSet.has(key)) {
            edges.push({
                id: `edge-${e.source}-${e.target}`,
                source: e.source,
                target: e.target,
                type: 'straight',
                style: { stroke: '#9ca3af', strokeWidth: 2 },
                markerEnd: { type: 'arrowclosed', width: 20, height: 20, color: '#9ca3af' },
            });
        }
    });

    // 全エッジに矢印マーカー追加
    edges.forEach(edge => {
        if (!edge.markerEnd) {
            edge.markerEnd = { type: 'arrowclosed', width: 20, height: 20, color: edge.style?.stroke || '#9ca3af' };
        }
    });

    return { nodes, edges, title: causalData.title };
};

/**
 * ニュース見出しから TOC 因果関係チェーンを AI で生成し、ReactFlow 用データとして返す。
 * @param {string} headline - ニュースの見出し
 * @param {string} description - ニュースの概要文
 * @returns {Promise<{nodes: Array, edges: Array, title: string}>}
 */
export const generateCausalChain = async (headline, description) => {
    try {
        if (!import.meta.env.VITE_GEMINI_API_KEY) {
            return { nodes: [], edges: [], title: 'APIキーが設定されていません' };
        }

        const prompt = `あなたは世界史と現代国際政治の専門家です。
以下のニュース見出しについて、この出来事がなぜ起きたのかを、歴史的因果関係のチェーン（TOC：制約条件の理論のロジックツリー形式）で説明してください。

## ニュース見出し
${headline}

## ニュース概要
${description}

## 出力フォーマット
以下のJSON形式で出力してください。

\`\`\`json
{
  "title": "このニュースの歴史的背景（日本語タイトル）",
  "nodes": [
    {
      "id": "NODE-1",
      "label": "ノードの表示名（日本語、簡潔に2行以内）",
      "type": "root_cause | context | event | action | result",
      "countryCode": "ISO 3166-1 alpha-2 の国コード (例: us, gb, ir, il, ua, ru, jp, cn 等)",
      "details": "因果関係の説明。重要な歴史用語は[[キーワード]]で囲む。200字程度。"
    }
  ],
  "edges": [
    { "source": "NODE-1", "target": "NODE-2" }
  ],
  "logicNodes": [
    {
      "id": "LOGIC-AND-1",
      "operator": "AND",
      "inputs": ["NODE-1", "NODE-2"],
      "output": "NODE-3"
    }
  ]
}
\`\`\`

## ルール
- ノードのlabelにはメタ情報(【原因】など)を付けないこと。純粋な出来事や状態の名称のみ。
- typesは root_cause(根本原因), context(前提条件), event(事象), action(行動), result(結果) のいずれか。
- 複数の原因が合流する場合はlogicNodes（AND結合）を使用すること。
- detailsの中の重要な歴史用語は [[用語]] で囲むこと。
- detailsの中に登場する国名・地域名（例: [[イスラエル]]、[[イラン]]、[[レバノン]]）も必ず [[国名]] で囲むこと。子供でも国について調べられるようにする。
- 最後のノードが今日のニュースの出来事に対応するようにすること。
- ノードは5〜8個程度。最も古い歴史的根本原因から今日のニュースまでの因果フロー。
- countryCodeは、そのノードの出来事に最も関連する国のISO 3166-1 alpha-2コードを小文字で指定すること（例: us, gb, fr, de, it, ru, ua, il, ir, iq, sa, jp, cn, kr, in, tr, eg, sy, lb）。特定の国に関連しない場合はnullにすること。
- JSON以外の付帯テキストは一切出力しないこと。`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        const text = response.text;

        // JSONブロックを抽出
        const jsonMatch = text.match(/```json\s*([\s\S]*?)```/);
        let parsed;
        if (jsonMatch) {
            parsed = JSON.parse(jsonMatch[1]);
        } else {
            parsed = JSON.parse(text);
        }

        return convertToReactFlow(parsed);
    } catch (error) {
        console.error("Causal chain generation error:", error);
        return {
            nodes: [{
                id: 'ERROR',
                type: 'default',
                data: { label: 'エラー', type: 'result', details: `因果チェーンの生成に失敗しました: ${error.message}` },
                position: { x: 0, y: 0 },
                style: { background: '#7f1d1d', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' },
            }],
            edges: [],
            title: 'エラーが発生しました',
        };
    }
};
