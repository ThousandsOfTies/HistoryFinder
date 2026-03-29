# HistoryFinder 引継ぎドキュメント

最終更新: 2026-03-29

---

## 1. プロジェクト概要

**HistoryFinder** — 世界史・数学史をエンジニア向けメタファーで可視化するReact製Webアプリ。
GitHub Pages でホスト: `https://thousandsofties.github.io/HistoryFinder/`

---

## 2. 現在のタブ構成（ヘッダー）

| タブ | モード名 | 機能 |
|---|---|---|
| 📖 世界史 | `classic` | グランドマップ（ReactFlow DAG）でノードクリック→詳細パネル |
| 🏗️ 文明ビルド | `civbuild` | 数学史の11ノード縦方向DAG（本ドキュメントのメイン対象） |
| ⚙️ 数学史 | `civos` | ニュース一覧＋「CivOS解析」ボタン→TechNoteパネル |
| 📰 ニュース | `news` | ニュース一覧＋「歴史的背景を解説」ボタン→因果チェーンパネル |

---

## 3. 🏗️ 文明ビルド タブの詳細

### 3.1 コンセプト
数学史を**「人類が現実世界をハックし、スケーラビリティを獲得するソフトウェア・アップデート」**として描く。
各数学的概念（Feature）がデプロイされると社会システムにどんな「新機能」が追加されたかを、
依存関係グラフ（DAG）で可視化。エンジニア向けメタファーとgitコミット風の語り口で解説。

### 3.2 ノード構成（11ノード、5フェーズ）

```
Phase 1: データのデジタル化（水色）
  [1] counting          — 数の誕生 (BC 30000年)
  [2] standardization   — 共通プロトコル統一 (BC 3000年)

Phase 2: 並列化と最適化（緑）
  [3] ratio_multiplication — 比率・掛け算の発明 (BC 2000年)
                             ← counting, standardization
  [4] division_of_labor    — 分業の開始 (BC 3000年)
                             ← standardization, ratio_multiplication

Phase 3: 未来のハックと次元拡張（黄〜紫）
  [5] negative_numbers  — 負の数の実装 (17世紀) ← ratio_multiplication
  [6] logarithms        — 対数の発明 (1614年) ← ratio_multiplication
  [7] calculus          — 微積分 (1687年) ← negative_numbers, logarithms
  [8] trig_imaginary    — 三角関数・虚数 (18世紀) ← negative_numbers

Phase 4: 不確実性のデータ化（オレンジ）
  [9] probability_stats — 確率・統計 (18-19世紀) ← calculus

Phase 5: 資本の集積と次世代R&D（ピンク〜ティール）
  [10] capital_accumulation — 巨大資本・国家 ← division_of_labor, negative_numbers, probability_stats
  [11] academia             — アカデミア支援 ★ ← capital_accumulation, calculus, trig_imaginary
```

academiaノード（★）が終点で、「これが最強のツール（数学）の力だ」という締めメッセージが表示される。

### 3.3 関連ファイル

| ファイル | 役割 |
|---|---|
| `src/data/civBuildPipeline.js` | ノードデータ定義（PIPELINE_NODES）、buildPipelineGraph() |
| `src/components/CivBuildPipelineView.jsx` | メインビュー（ReactFlow DAG + 右サイド詳細パネル） |
| `src/components/nodes/PipelineNode.jsx` | カスタムノードコンポーネント（カード型） |
| `src/utils/layoutEngine.js` | `getPipelineLayout()` — Dagreによる縦方向(TB)レイアウト |
| `src/constants/graphConfig.js` | `pipelineNodeTypes` エクスポート |
| `src/index.css` | `.pipeline-node`, `.civbuild-*` スタイル定義 |

### 3.4 ノードデータ構造

```js
{
  id: 'calculus',
  phase: 3,                      // フェーズ番号（1-5）
  phaseLabel: 'Phase 3: ...',
  step: 7,                       // ステップ番号（1-11）
  label: 'Calculus',             // 英語名
  sublabel: '微積分・動く世界の記述',
  era: '1687年',
  icon: '∫',                     // ノードに表示するシンボル
  color: '#ef4444',
  borderColor: '#f87171',
  glowColor: 'rgba(239,68,68,0.4)',
  role: '...',                   // 役割説明
  techMetaphor: '...',           // エンジニアメタファー（// コメント風）
  impact: '...',                 // 社会インパクト
  dependencies: ['negative_numbers', 'logarithms'],  // 依存ノードIDの配列
  commitMessage: 'feat: ...',
  version: 'v0.6.0',
  isTerminal: false,             // true = 締めメッセージ表示
}
```

---

## 4. ⚙️ 数学史（CivOS）タブの詳細

### 4.1 コンセプト
ニュースを「文明OSのアップデート通知」として解析。
GeminiでニュースのテキストからCivOS Feature（5つの数学的概念）を特定し、Tech Noteとして表示。

### 4.2 関連ファイル

| ファイル | 役割 |
|---|---|
| `src/data/civOsFeatures.js` | 5つのFeature DB（Negative Numbers / Functions / Trig & Imaginary / Probability / Calculus） |
| `src/services/aiService.js` | `suggestFeatureByNews(headline, description)` — GeminiでFeature判定 |
| `src/components/panels/TechNotePanel.jsx` | TechNote表示パネル（CivOS Update Log） |
| `src/components/panels/NewsFeedPanel.jsx` | `civOsMode` propで「⚙️ CivOS解析」ボタンのみ表示 |
| `src/hooks/usePanelManager.js` | `handleCivOsClick` — TechNoteパネル生成ロジック |

---

## 5. AIサービス構成

- **Gemini API**: `${PROXY_URL}/api/gemini` 経由（Cloud Run proxy）
- **プロキシURL**: `VITE_YOUTUBE_PROXY_URL` 環境変数から取得
  - 本番: `https://youtube-proxy-server-466107255470.asia-northeast1.run.app`
  - ローカル: `http://localhost:8085`
- **使用箇所**:
  - `getAiExplanation(keyword)` — キーワード解説 + Wikipedia画像取得
  - `generateCausalChain(headline, description)` — TOC因果チェーン生成
  - `suggestFeatureByNews(headline, description)` — CivOS Feature解析

---

## 6. デプロイフロー

```
git push origin main
  → GitHub Actions (.github/workflows/deploy.yml)
  → npm run build (VITE_YOUTUBE_PROXY_URL 設定済み)
  → GitHub Pages にデプロイ
```

---

## 7. ローカル開発

```bash
cd c:/VibeCode/HistoryFinder
npm run dev          # Vite dev server → http://localhost:5173/HistoryFinder/
npm run dev:server   # Express proxy server (port 8085, optional)
```

---

## 8. 今後の拡張候補

### 🏗️ 文明ビルド タブ
- ノードをフェーズ別に視覚的にグルーピング（背景色レーン）
- ノード間のエッジに「なぜこの依存があるか」のラベルを表示
- CivOSニュース解析結果と連動（ニュースが示すノードをハイライト）
- 「ゲーム理論」「暗号理論（RSA）」「情報理論（Shannon）」「グラフ理論」ノードの追加

### ⚙️ 数学史 タブ
- CivOS Feature DB拡充（calculus, probability などの既存ノードとの連携）
- Feature Timeline のCivBuildPipelineビューへのリンク

---

## 9. 既知の課題

- `index.js` バンドルが505KBでチャンクサイズ警告あり（機能上は問題なし）
- Gemini APIが失敗した場合はローカルキーワードマッチにフォールバック
