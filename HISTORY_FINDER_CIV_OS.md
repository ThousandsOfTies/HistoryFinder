# HistoryFinder: "Civilization OS Update" Mode Specification

## 1. Vision & Concept
HistoryFinderを単なるニュース解説アプリから、**「人類が手に入れた数学的武器（新機能/Feature）のリリースノート」**へとアップグレードする。

- **コア哲学:** 歴史上の出来事は、その裏にある数学的概念（負の数、関数、微積分など）が社会実装されたことで、システムのスループットが劇的に向上した結果である。
- **ターゲット:** エンジニア的な論理思考を好み、技術的なメタファーで世界を理解したいユーザー。

## 2. Mathematical Feature Set (The Knowledge Base)

エージェントは以下の概念を「社会システムのアップデートパッチ」として扱うこと。

| Feature Name | Release Era | Solving "Bugs" & Optimization | Modern News Mapping |
| :--- | :--- | :--- | :--- |
| **Negative Numbers** | 17th Century | 「現物がないと取引できない」物理的制約を、**国家（不滅の主体）への負債アサイン**で解決。未来の価値の「前借り」を可能にした。 | 国債, 財政赤字, MMT |
| **Functions** | 17th Century | 個別の計算を `Input -> Logic -> Output` に共通化。王の気まぐれではなく、**仕様書（法）による統治アルゴリズム**を可能にした。 | 行政DX, スマートコントラクト |
| **Trigonometry & Imaginary Numbers** | 18th Century+ | 「回転」と「波」を複素平面上の低コスト演算にリファクタ。情報をデジタルにカプセル化する**高効率プロトコル**を確立。 | 5G/6G, 画像圧縮, 量子計算 |
| **Probability & Statistics** | 19th Century+ | 「個別の不運（ノイズ）」を「全体の安定（期待値）」でカプセル化。不確実な未来を**計算可能なコスト（保険・投資）**に変換。 | AI推論, 保険, パンデミック予測 |
| **Calculus** | late 17th Century | 「動く世界」を極限まで細かく切り、静止画として解析。物理法則の**リアルタイム・デバッグ**と産業革命のエンジン。 | 自動運転, 気象予測, ロボティクス |

## 3. Implementation Requirements

### 3.1 logic: `CivOSAnalyzer`
- **Input:** 現代のニュース記事（テキスト）。
- **Process:** 1. キーワード抽出（例：「利上げ」→ 負の数, 期待値）。
    2. 関連する数学的Featureの紐付け。
    3. 歴史的背景を「エンジニア・メタファー」で生成。
- **Output:** `{ news_summary, related_features: [], tech_meta_commentary: string }`

### 3.2 UI/UX: Visual Style
- **Timeline:** 文明OSのアップデート履歴を示す、GitHubのコミットグラフのような視覚表現。
- **Font:** コードエディタを彷彿とさせる等幅フォント（MS GothicやMonaco等）をアクセントに使用。
- **Tone & Manner:** 「この機能のデプロイにより、国家のメモリ効率が向上しました」といった、ウィットに富んだシステムエンジニア風の語り口。

## 4. Prompt for Coding Agent (Direct Instruction)
エージェントに対して以下のタスクを依頼せよ：

1. **Schema Design:** 上記Feature Setを管理するためのJSON/Database定義を作成して。
2. **Logic Implementation:** ニュースのテキストからFeatureをサジェストする `suggestFeatureByNews(text)` 関数を実装して。
3. **Component Creation:** エンジニア向けの「技術解説メモ（Tech Note）」を表示するReactコンポーネントを作成して。