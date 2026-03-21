const express = require('express');
const cors = require('cors');
const yts = require('yt-search');

const app = express();

// どの発信元からのアクセスも許可する (ローカルホスト上のReactアプリからのCORSエラーを防ぐため)
app.use(cors());

/**
 * /api/search エンドポイント
 * 例: http://localhost:8080/api/search?q=産業革命%20解説&limit=3
 */
app.get('/api/search', async (req, res) => {
    try {
        const query = req.query.q;
        const limit = parseInt(req.query.limit, 10) || 3;

        if (!query) {
            return res.status(400).json({ error: '検索キーワード (q) が必要です' });
        }

        console.log(`[GET /api/search] Searching YouTube for: "${query}" (limit: ${limit})`);

        // yt-search を使って YouTube を直接スクレイピング
        const r = await yts(query);

        // 動画情報だけを取り出し、必要な数だけ削って整形する
        const videos = r.videos.slice(0, limit).map(v => ({
            id: v.videoId,
            title: v.title,
            thumbnail: `https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`,
            channel: v.author.name
        }));

        res.json(videos);
    } catch (err) {
        console.error('[Error details]:', err);
        res.status(500).json({ error: 'スクレイピング中にエラーが発生しました', details: err.message });
    }
});

// Cloud Run用に環境変数PORTを使用（ローカルでのデフォルトは競合を避けて8085）
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(` YouTube Scraper Proxy Server is Runing! `);
    console.log(` Port: ${PORT} `);
    console.log(` Test url: http://localhost:${PORT}/api/search?q=hello `);
    console.log(`=========================================`);
});
