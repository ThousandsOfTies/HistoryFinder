const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const yts = require('yt-search');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.set('trust proxy', 1); // Cloud Run はリバースProxy背後で動作するため必要
app.use(express.json());

// ローカル開発時は origin が undefined になる場合があるため !origin も許可
const ALLOWED_ORIGINS = [
  'https://thousandsofties.github.io',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin not allowed: ${origin}`));
    }
  }
}));

// Rate Limit: 1IPあたり1分間に60リクエストまで
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'リクエスト数が上限を超えました。しばらくしてから再試行してください。' },
});
app.use(limiter);

// Gemini クライアント（環境変数から取得）
const geminiApiKey = process.env.GEMINI_API_KEY;
const ai = geminiApiKey ? new GoogleGenAI({ apiKey: geminiApiKey }) : null;

/**
 * GET /api/search
 * YouTube動画を検索して返す
 * 例: /api/search?q=産業革命&limit=3
 */
app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;
    const limit = parseInt(req.query.limit, 10) || 3;

    if (!query) {
      return res.status(400).json({ error: '検索キーワード (q) が必要です' });
    }

    console.log(`[GET /api/search] Searching YouTube for: "${query}" (limit: ${limit})`);

    const r = await yts(query);
    const videos = r.videos.slice(0, limit).map(v => ({
      id: v.videoId,
      title: v.title,
      thumbnail: `https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`,
      channel: v.author.name,
    }));

    res.json(videos);
  } catch (err) {
    console.error('[/api/search Error]:', err);
    res.status(500).json({ error: 'スクレイピング中にエラーが発生しました', details: err.message });
  }
});

/**
 * POST /api/gemini
 * Gemini APIへのプロキシ
 * Body: { model: string, prompt: string }
 */
app.post('/api/gemini', async (req, res) => {
  if (!ai) {
    return res.status(503).json({ error: 'GEMINI_API_KEY が設定されていません' });
  }

  const { model, prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'prompt が必要です' });
  }

  try {
    console.log(`[POST /api/gemini] model=${model || 'gemini-2.5-flash'}, prompt length=${prompt.length}`);

    const response = await ai.models.generateContent({
      model: model || 'gemini-2.5-flash',
      contents: prompt,
    });

    res.json({ text: response.text });
  } catch (err) {
    console.error('[/api/gemini Error]:', err);
    res.status(500).json({ error: 'Gemini APIでエラーが発生しました', details: err.message });
  }
});

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(` HistoryFinder Proxy Server is Running!  `);
  console.log(` Port: ${PORT}                           `);
  console.log(` YouTube: http://localhost:${PORT}/api/search?q=hello `);
  console.log(` Gemini:  http://localhost:${PORT}/api/gemini (POST)  `);
  console.log(`=========================================`);
});
