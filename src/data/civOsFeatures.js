/**
 * CivOS Feature Set - 人類が手に入れた数学的武器のリリースノート
 *
 * 歴史上の出来事は、数学的概念が社会実装されたことで
 * システムのスループットが劇的に向上した結果である。
 */

export const CIV_OS_FEATURES = [
  {
    id: 'negative_numbers',
    name: 'Negative Numbers',
    version: 'v0.1.7',
    releaseEra: '17th Century',
    releaseYear: 1600,
    icon: '➖',
    tagline: '「負債」という概念をシステムにマージ',
    solvingBugs: [
      '現物がないと取引できない物理的制約',
      '未来の価値を前借りできない仕様バグ',
      '国家規模の資本フローが記録不能だった問題',
    ],
    optimization: '国家（不滅の主体）への負債アサインにより、未来の価値の「前借り」を実現。メモリ効率が劇的に向上。',
    modernNewsMapping: ['国債', '財政赤字', 'MMT', '金融緩和', '利上げ', '利下げ', 'QE', '中央銀行', 'Fed', '日銀', '財政政策'],
    keywords: ['債務', '国債', '財政', '利子', '金融', '貸借', '赤字', '黒字', 'ローン', '借金', '投資', '資本'],
    commitMessage: 'feat: enable debt assignment to immortal entities (nation-states)',
    techNote: 'このパッチにより、国家は「現在の税収」を超えたスループットで公共サービスをデプロイ可能になりました。負の整数という抽象概念が、物理的制約をバイパスするAPIとして機能しています。',
  },
  {
    id: 'functions',
    name: 'Functions',
    version: 'v0.2.3',
    releaseEra: '17th Century',
    releaseYear: 1637,
    icon: 'ƒ',
    tagline: '統治アルゴリズムを「関数」として定義',
    solvingBugs: [
      '王の気まぐれによる統治（ハードコードされた例外処理の乱発）',
      '個別の計算が共通化されず、再利用不可能だった問題',
      '入出力が不明瞭で予測不可能な行政プロセス',
    ],
    optimization: 'Input → Logic → Output の共通インターフェースを確立。法律という「仕様書」による統治が可能になり、国家の保守性が向上。',
    modernNewsMapping: ['行政DX', 'スマートコントラクト', '法整備', 'AI規制', 'デジタル政府', '憲法', '法案', '規制'],
    keywords: ['法律', '規制', '条約', '契約', '制度', '法令', '憲法', 'ガバナンス', 'コンプライアンス', 'ルール', '政策'],
    commitMessage: 'feat: refactor governance from hardcoded exceptions to declarative functions',
    techNote: '「法の支配」とは、統治ロジックをハードコードから宣言的関数へリファクタしたことで実現しました。Input（市民の行動）→ Logic（法律）→ Output（結果）の明確な仕様書が、システムの予測可能性を数桁向上させました。',
  },
  {
    id: 'trig_imaginary',
    name: 'Trigonometry & Imaginary Numbers',
    version: 'v0.3.1',
    releaseEra: '18th Century+',
    releaseYear: 1748,
    icon: 'ℂ',
    tagline: '「波」と「回転」を低コスト演算にリファクタ',
    solvingBugs: [
      '周期的現象（音・光・電波）の計算コストが膨大だった問題',
      '実数軸上では解けない方程式（回転・振動系）',
      '情報の物理的伝達に依存したボトルネック',
    ],
    optimization: '複素平面上での演算により、波・回転・振動を統一的に処理。情報をデジタル信号にカプセル化する高効率プロトコルを確立。',
    modernNewsMapping: ['5G', '6G', '量子計算', '暗号通貨', '衛星', '通信', '半導体', 'AI', '画像認識', '音声認識'],
    keywords: ['通信', '量子', '暗号', '電波', '半導体', 'チップ', 'デジタル', '信号', '周波数', '衛星', 'AI', '機械学習'],
    commitMessage: 'feat: compress wave/rotation operations to O(n log n) via complex plane',
    techNote: 'FFT（高速フーリエ変換）はこのパッチの最重要デプロイメントです。あらゆる波形を周波数成分に分解・再構成する能力が、現代デジタル通信インフラの根幹をなしています。量子コンピュータも同じ複素数演算の延長線上にあります。',
  },
  {
    id: 'probability_statistics',
    name: 'Probability & Statistics',
    version: 'v0.4.0',
    releaseEra: '19th Century+',
    releaseYear: 1812,
    icon: '∑',
    tagline: '「不確実性」を計算可能なコストに変換',
    solvingBugs: [
      '個別の不運（ノイズ）が全体の意思決定を支配していた問題',
      '未来の不確実性を「運」としか扱えなかった仕様',
      '大規模データから知識を抽出できなかったボトルネック',
    ],
    optimization: '期待値・分散という概念で不確実性をカプセル化。リスクを計算可能なコストに変換し、保険・金融・公衆衛生のスループットを指数関数的に向上。',
    modernNewsMapping: ['AI推論', '保険', 'パンデミック', '選挙予測', 'リスク管理', 'ウイルス', 'ワクチン', '感染症', '株価', '経済予測'],
    keywords: ['確率', 'リスク', '予測', 'AI', '機械学習', '感染', 'ウイルス', '統計', '調査', '世論', 'データ', '分析'],
    commitMessage: 'feat: encapsulate uncertainty as computable cost via expected value',
    techNote: 'ChatGPTを含む現代AIは、本質的に「確率的オートコンプリート」です。このFeatureがなければ、AIは存在しえませんでした。保険業界もパンデミック対応も、不確実性を期待値として扱うこの数学的抽象化の上に構築されています。',
  },
  {
    id: 'calculus',
    name: 'Calculus',
    version: 'v0.5.0',
    releaseEra: 'late 17th Century',
    releaseYear: 1687,
    icon: '∫',
    tagline: '「動く世界」をリアルタイムデバッグ可能に',
    solvingBugs: [
      '連続的に変化する物理現象を静止画としてしか解析できなかった問題',
      '運動・熱・流体を記述する共通言語の欠如',
      '最適化問題（最大・最小の発見）が解けなかった制約',
    ],
    optimization: '微分で「変化率」を、積分で「累積」を演算可能にした。物理法則のリアルタイムデバッグと産業革命のコアエンジンを提供。',
    modernNewsMapping: ['自動運転', '気象予測', 'ロボティクス', '宇宙開発', 'エネルギー', '気候変動', '電気自動車', 'SpaceX'],
    keywords: ['自動運転', '宇宙', 'ロケット', '気候', '温暖化', 'エネルギー', 'エンジン', '流体', 'ロボット', '制御', '最適化', '物理'],
    commitMessage: 'feat: enable real-time debugging of continuous physical systems',
    techNote: 'ニュートンの運動方程式は微分方程式です。SpaceXのロケット軌道計算も、気候変動モデルも、自動運転の経路最適化も、すべてこのFeatureの上で動いています。「動く世界」を記述する共通言語が、産業文明のOSカーネルを形成しました。',
  },
];

/**
 * ニュースのキーワードからCivOS Featureを候補リストとして返す（ローカルマッチング）。
 * 完全な解析はAI（suggestFeatureByNews）で行う。
 * @param {string} text
 * @returns {string[]} マッチしたFeature ID配列
 */
export const localMatchFeatures = (text) => {
  const lower = text.toLowerCase();
  return CIV_OS_FEATURES
    .filter(f => f.keywords.some(kw => lower.includes(kw.toLowerCase())))
    .map(f => f.id);
};

/**
 * Feature IDからFeatureオブジェクトを取得。
 * @param {string} id
 * @returns {object|undefined}
 */
export const getFeatureById = (id) => CIV_OS_FEATURES.find(f => f.id === id);
