/**
 * Civilization Build Pipeline
 * 人類が「数える」から「アカデミア」へ至る、文明の依存関係グラフ（DAG）
 *
 * 各ノードは「文明をビルドする関数」であり、前のノードの出力を入力として受け取る。
 */

export const PIPELINE_NODES = [
  {
    id: 'counting',
    step: 1,
    label: 'Counting',
    sublabel: '数の誕生',
    icon: '◉',
    color: '#0ea5e9',
    borderColor: '#38bdf8',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    role: 'オブジェクトの数値化。正確な在庫管理（Inventory）を可能にする。',
    techMetaphor: '現実世界のアナログデータをデジタル化する「ADC（Analog-to-Digital Converter）」。',
    impact: '「忘れる・ごまかす」という人間のバグを回避し、信頼のデータベースを構築。個人間の取引が「約束」から「記録」へ昇格する。',
    dependency: null,
    commitMessage: 'init: bootstrap reality.count() — first commit of civilization',
    version: 'v0.0.1',
  },
  {
    id: 'standardization',
    step: 2,
    label: 'Standardization',
    sublabel: '共通プロトコル',
    icon: '⇄',
    color: '#8b5cf6',
    borderColor: '#a78bfa',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    role: '「1」の定義を共通化。遠隔地との「比率」による取引を可能にする。',
    techMetaphor: '異なるシステム間を繋ぐ「共通通信プロトコル（HTTP/JSON）」。バラバラな方言を統一APIに変換。',
    impact: '信頼が広域に展開され、巨大な「市場（Marketplace）」が成立。国境を超えたデータパケット（商品）の交換が可能になる。',
    dependency: 'counting',
    commitMessage: 'feat: define shared interface — enables cross-system interoperability',
    version: 'v0.1.0',
  },
  {
    id: 'division_of_labor',
    step: 3,
    label: 'Division of Labor',
    sublabel: '分業の開始',
    icon: '⌥',
    color: '#10b981',
    borderColor: '#34d399',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    role: '余剰の正確な計算と分配。全員が食料を作る必要がなくなる。',
    techMetaphor: 'モノリスな組織を「マイクロサービス（専門職）」へデカップリング。各サービスは独立して最適化可能になる。',
    impact: '専門特化によるスループットの向上。「農民100人」より「農民70人＋職人30人」の方が全体生産量が指数関数的に増加。',
    dependency: 'standardization',
    commitMessage: 'refactor: decouple monolith into specialized microservices',
    version: 'v0.2.0',
  },
  {
    id: 'specialization',
    step: 4,
    label: 'Specialization',
    sublabel: '専門職の高度化',
    icon: '⚙',
    color: '#f59e0b',
    borderColor: '#fbbf24',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    role: '暦、建築、会計などの「考える専門職」がバックグラウンド・タスクとして常駐。',
    techMetaphor: '特定ドメインに特化した「最適化ライブラリ」のビルド。汎用コードではなく、問題に特化した高性能モジュール。',
    impact: '運任せではない「設計図（シミュレーション）」に基づいた文明運営。洪水の予測、神殿の建設、税収の最大化が可能になる。',
    dependency: 'division_of_labor',
    commitMessage: 'build: compile domain-specific optimization libraries',
    version: 'v0.3.0',
  },
  {
    id: 'capital_accumulation',
    step: 5,
    label: 'Capital Accumulation',
    sublabel: '資本・国家の形成',
    icon: '⬡',
    color: '#ef4444',
    borderColor: '#f87171',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    role: '余剰リソースが「不滅の主体（国家・大資本）」に蓄積される。',
    techMetaphor: '巨大な「共有メモリ（共有資産）」の確保と、大規模プロセスのデプロイ。個人プロセスのメモリ上限を超えたタスクが実行可能になる。',
    impact: '個人では不可能な「巨大プロジェクト（インフラ建設、大航海）」の実行。システムの可用性と冗長性が個人の寿命を超えて維持される。',
    dependency: 'specialization',
    commitMessage: 'deploy: allocate shared memory beyond individual process limits',
    version: 'v0.4.0',
  },
  {
    id: 'academia',
    step: 6,
    label: 'Academia & R&D',
    sublabel: '知の支援とアカデミア',
    icon: '∞',
    color: '#ec4899',
    borderColor: '#f472b6',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    role: '巨大資本が「目先の利益を生まない純粋数学」を支援。',
    techMetaphor: '次世代技術（AI、量子、虚数等）の「先行R&D/先行ビルド」。ROIが測定不能なインフラへの投資。',
    impact: '虚数や微積分といった「次世代文明OS」のカーネルがここで誕生する。これが文明を再び指数関数的にブーストさせる、最強のツール（数学）の力だ。',
    dependency: 'capital_accumulation',
    commitMessage: 'feat: fund zero-ROI R&D that becomes the next civilization OS kernel',
    version: 'v1.0.0-alpha',
    isTerminal: true,
  },
];

/**
 * ReactFlow 用の nodes と edges を生成する。
 * 横方向（左→右）のパイプライン配置。
 */
export const buildPipelineGraph = () => {
  const SPACING_X = 280;
  const CENTER_Y = 0;

  const nodes = PIPELINE_NODES.map((n, i) => ({
    id: n.id,
    type: 'pipeline',
    position: { x: i * SPACING_X, y: CENTER_Y },
    data: n,
    draggable: false,
  }));

  const edges = PIPELINE_NODES
    .filter(n => n.dependency)
    .map(n => ({
      id: `${n.dependency}-${n.id}`,
      source: n.dependency,
      target: n.id,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#374151', strokeWidth: 2 },
      markerEnd: { type: 'arrowclosed', width: 16, height: 16, color: '#6b7280' },
    }));

  return { nodes, edges };
};
