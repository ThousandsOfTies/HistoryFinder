HistoryFinder Context: Civilization Build Log (Mathematics & Society)

1. Executive Summary
本プロジェクトは、数学史を「人類が現実世界をハックし、スケーラビリティを獲得するためのソフトウェア・アップデート」として描く。
TOC（制約条件の理論）ロジックツリーに基づき、「人類社会の前提条件やボトルネック（UDE）」が、数学という「解決策（Injection）」によってどう突破され、最終的にどのような「新機能・結果（Result）」が社会にデプロイされたかを視覚化する。

2. Data Structure (Macro & Micro Levels)

ノード数が多いため、全体像を把握する「マクロレベル」と、各フェーズの詳細な因果関係を表示する「ミクロレベル（サブフロー）」の2階層で実装する。

## 2.1 Macro Level (`mathHistoryScenario.js`)
数学史における6つの大きな「メジャーバージョンアップ（Phase）」をマクロノードとして定義し、それらを順に接続（DAG）して全体像をユーザーに提示する。
各ノードをクリックすると、対応する `subGraphId` のミクロレベル（詳細サブフロー）情報が開く。

- Phase 1: データのデジタル化と信頼構築 (`subGraphId: 'math_phase1'`)
- Phase 2: システムの並列化と最適化 (`subGraphId: 'math_phase2'`)
- Phase 3: 未来のハックと次元拡張 (`subGraphId: 'math_phase3'`)
- Phase 4: 計算量の削減と動態の解析 (`subGraphId: 'math_phase4'`)
- Phase 5: 不確実性と波のコントロール (`subGraphId: 'math_phase5'`)
- Phase 6: 資本の集積と次世代R&D (`subGraphId: 'math_phase6'`)

## 2.2 Micro Level (`mathSubflows.js`)
各フェーズの内部は、以下のような因果連鎖を論理結合点（AND/OR）で接続して構成する。

【Phase 1: データのデジタル化と信頼の構築】
- Context / UDE (制約): 人間の脳のメモリ不足による「忘れる・誤魔化す」という制約と、ローカルな物々交換の限界。
- Injection (解決策): 「数の概念と記号の誕生 (Counting)」および「単位標準化 (Standardization)」
- Logic: UDE AND Injection
- Result (結果): 正確な在庫管理（Inventory）と所有権の明確化。広域な市場（Marketplace）の成立。

【Phase 2: システムの並列化と最適化】
- UDE (制約): 「1つずつ数える」逐次処理の天文学的なタイムスケーリング課題。
- Injection (解決策): 「比率・掛け算の発明」
- Logic: UDE AND Injection
- Result (結果): O(n) から O(1) 倍への改善。「分業の開始」によるマイクロサービス化と国力の爆発。

【Phase 3: 未来のハックと次元拡張】
- UDE (制約): 0以下の状態を表現できず、手持ち以上の計画ができない。
- Injection (解決策): 「負の数の実装」
- Logic: UDE AND Injection
- Result (結果): 0以下の概念をAPI仕様として承認。「未来の価値を今に持ってくる（レバレッジ）」が可能になり金融土台が完成。

【Phase 4: 計算量の削減と動態の解析】
- UDE (制約): 連続的に変化する物理現象を静止画でしか解析できず、また乗算コストが重い。
- Injection (解決策): 「対数の発明」および「微積分の発明」
- Logic: UDE AND Injection
- Result (結果): 乗算を足し算に変換（O(log n)化）。変化率(微分)と累積(積分)を演算化し、産業革命のコアエンジン（ニュートン力学）が起動。

【Phase 5: 不確実性と波のコントロール】
- UDE (制約): 個別のランダム性に社会が破壊されるリスク。電気などの見えない「波」を制御できない。
- Injection (解決策): 「確率・統計の誕生」および「三角関数・虚数とオイラーの公式」
- Logic: UDE AND Injection
- Result (結果): 不確実性を例外処理ではなく分布・期待値としてカプセル化（保険、AI推論）。波を低コスト演算に統合し、デジタル通信を成功。

【Phase 6: 資本の集積と次世代R&D】
- Context: 分業とレバレッジで生まれた圧倒的余剰リソース。
- Action: 「巨大資本の形成とアカデミア支援」
- Logic: Context AND Action
- Result (結果): 目先の利益を生まない「純粋数学」へ投資し、次世代OS（AI、量子システム）の先行ビルドを永続的に行うエコシステムが完成。

3. Implementation Logic (For Agent)
3.1 Commentary Tone (The "Yurufuwa" Style)
解説や詳細テキスト(`details`)には、以下のトーンを必ず組み込む：
- 「これは現代のエンジニアリングで言うところの〇〇（キャッシュ、API、非同期処理など）にあたります」というメタファーを含める。
- 結論として「これが文明をブーストさせる、最強のツール（数学）の力だ」と締める。

3.2 Visual Requirement
- マクロレベルとミクロレベルは、UI上の標準ReactFlow表示コンポーネントのルールに従う。
- 論理結合は明示的な論理結合点（AND / OR）ノードを用いること。