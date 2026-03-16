# HistoryFinder

歴史の因果関係をインタラクティブなフロー図で探求するWebアプリ。

**[Launch HistoryFinder →](https://thousandsofties.github.io/HistoryFinder/)**

## 機能

- **インタラクティブなフロー図** - 歴史的事象の因果関係をノードとエッジで可視化
- **AI 解説** - キーワードをクリックすると Gemini AI による詳細解説を表示
- **YouTube 動画** - 各トピックに関連する YouTube 動画をアプリ内でインライン再生
- **ニュースモード** - BBC・NYT の最新ニュースを歴史的文脈で表示

## 技術スタック

- **React 18** + **Vite**
- **React Flow** - フロー図の描画
- **Google Gemini API** - AI 解説生成
- **YouTube Data API v3** - 関連動画検索

## ローカル開発

```bash
npm install
npm run dev
```

`.env` ファイルに API キーを設定：

```
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```
