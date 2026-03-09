/**
 * BBC と アルジャジーラ (Al Jazeera) のニュースフィードを並行取得し、
 * 統合してGemini APIで日本語に一括翻訳するサービス。
 */
import { GoogleGenAI } from '@google/genai';

const RSS2JSON_BASE = 'https://api.rss2json.com/v1/api.json';
const BBC_WORLD_RSS = 'https://feeds.bbci.co.uk/news/world/rss.xml';
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
 * BBCニュースを取得する内部関数
 */
const fetchBBCNews = async () => {
    try {
        const url = `${RSS2JSON_BASE}?rss_url=${encodeURIComponent(BBC_WORLD_RSS)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'ok' || !data.items) return [];

        return data.items.map(item => ({
            title: `[BBC] ${item.title}`,
            description: item.description?.replace(/<[^>]*>/g, '') || '',
            pubDate: item.pubDate,
            link: item.link,
            thumbnail: item.thumbnail || item.enclosure?.link || null,
        })).slice(0, 5); // 最大5件
    } catch (e) {
        console.error('BBC fetch error:', e);
        return [];
    }
};

/**
 * Al Jazeeraニュースを取得する内部関数
 */
const fetchAlJazeeraNews = async () => {
    try {
        const response = await fetch(ALJAZEERA_PROXY_URL);
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        if (xmlDoc.querySelector('parsererror')) return [];

        return Array.from(xmlDoc.querySelectorAll('item')).slice(0, 5).map(item => {
            const getElementText = (selector) => {
                const node = item.querySelector(selector);
                return node ? node.textContent : '';
            };
            const rawDesc = getElementText('description');
            return {
                title: `[Al Jazeera] ${getElementText('title')}`,
                description: rawDesc.replace(/<[^>]*>/g, '').trim(),
                pubDate: getElementText('pubDate'),
                link: getElementText('link'),
                thumbnail: item.querySelector('enclosure')?.getAttribute('url') || null,
            };
        });
    } catch (e) {
        console.error('Al Jazeera fetch error:', e);
        return [];
    }
};

/**
 * 最新の国際ニュース一覧（BBCとAl Jazeeraの混成）を取得し、日本語に翻訳して返す。
 * @returns {Promise<Array<{title: string, description: string, pubDate: string, link: string, thumbnail: string}>>}
 */
export const fetchWorldNews = async () => {
    try {
        // 並列で両方のニュースを取得
        const [bbcItems, ajItems] = await Promise.all([
            fetchBBCNews(),
            fetchAlJazeeraNews()
        ]);

        // 両メディアのニュースを交互に混ぜる (Interleave)
        const mixedItems = [];
        const maxLength = Math.max(bbcItems.length, ajItems.length);
        for (let i = 0; i < maxLength; i++) {
            if (i < bbcItems.length) mixedItems.push(bbcItems[i]);
            if (i < ajItems.length) mixedItems.push(ajItems[i]);
        }

        // Gemini で一括翻訳 (最大10件程度)
        return await translateNews(mixedItems.slice(0, 10));
    } catch (error) {
        console.error('News service error:', error);
        return [];
    }
};
