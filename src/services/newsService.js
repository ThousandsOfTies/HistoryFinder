/**
 * アルジャジーラ (Al Jazeera) ニュースフィードをプロキシ経由で取得し、
 * Gemini APIで日本語に一括翻訳するサービス。
 */
import { GoogleGenAI } from '@google/genai';

const ALJAZEERA_PROXY_URL = '/api/aljazeera/xml/rss/all.xml';

// Gemini API (翻訳用)
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY || ''
});

/**
 * ニュース記事の title と description を Gemini で日本語に一括翻訳する。
 */
const translateNews = async (items) => {
    if (!import.meta.env.VITE_GEMINI_API_KEY || items.length === 0) {
        return items; // APIキーなしならそのまま返す
    }

    try {
        // 一括翻訳用のテキストを構築
        const lines = items.map((item, i) =>
            `[${i}] TITLE: ${item.title}\nDESC: ${item.description}`
        ).join('\n---\n');

        const prompt = `以下の英語ニュース記事のタイトルと概要文を、すべて日本語に翻訳してください。
各記事は [番号] で区切られています。

## 出力フォーマット
以下のJSON配列形式で出力してください。JSON以外のテキストは一切出力しないでください。

\`\`\`json
[
  { "title": "日本語タイトル", "description": "日本語概要" },
  ...
]
\`\`\`

## 翻訳ルール
- 自然な日本語に翻訳する（機械翻訳調にしない）
- 固有名詞（人名・組織名）はカタカナにする
- 国名は日本語の一般的な表記にする（例: United States → アメリカ、United Kingdom → イギリス）
- 配列の順番は元の記事と同じ順序を維持する

## 翻訳対象
${lines}`;

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

        // 翻訳結果を元の記事にマージ
        return items.map((item, i) => ({
            ...item,
            title: parsed[i]?.title || item.title,
            description: parsed[i]?.description || item.description,
        }));
    } catch (error) {
        console.warn('Translation failed, using original text:', error);
        return items; // 翻訳失敗時は英語のまま返す
    }
};

/**
 * 最新の国際ニュース一覧を取得し、日本語に翻訳して返す。
 * @returns {Promise<Array<{title: string, description: string, pubDate: string, link: string, thumbnail: string}>>}
 */
export const fetchWorldNews = async () => {
    try {
        const response = await fetch(ALJAZEERA_PROXY_URL);
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // パースエラーのチェック
        const errorNode = xmlDoc.querySelector('parsererror');
        if (errorNode) {
            console.error('XML parsing error');
            return [];
        }

        const items = Array.from(xmlDoc.querySelectorAll('item')).slice(0, 10).map(item => {
            const getElementText = (selector) => {
                const node = item.querySelector(selector);
                return node ? node.textContent : '';
            };

            // descriptionからHTMLタグを削除
            const rawDesc = getElementText('description');
            const cleanDesc = rawDesc.replace(/<[^>]*>/g, '').trim();

            return {
                title: getElementText('title'),
                description: cleanDesc,
                pubDate: getElementText('pubDate'),
                link: getElementText('link'),
                // Al JazeeraのRSSは enclosure URL や content:encoded に画像を含まないことが多いが、
                // もしあれば取得するフォールバック
                thumbnail: item.querySelector('enclosure')?.getAttribute('url') || null,
            };
        });

        // Gemini で日本語翻訳
        return await translateNews(items);
    } catch (error) {
        console.error('News service error:', error);
        return [];
    }
};
