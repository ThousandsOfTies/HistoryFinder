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
