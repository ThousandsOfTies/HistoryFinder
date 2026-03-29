import { addArrowMarkers } from './edgeUtils';

const styles = {
    root_cause: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' },
    ude: { background: '#7f1d1d', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' },
    context: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' },
    injection: { background: '#1e40af', color: '#fff', border: '2px solid #60a5fa', borderRadius: '4px', width: 250, padding: '10px', boxShadow: '0 0 10px rgba(96, 165, 250, 0.5)' },
    result: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' },
    action: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
};

// =====================================
// Phase 1
// =====================================
const p1Nodes = [
    { id: 'UDE-Memory', type: 'default', data: { label: '脳のメモリ限界と\n忘却・誤魔化し', type: 'ude', details: '◆ボトルネック\n人間の脳のメモリ不足により「忘れる・誤魔化す」というエラーが頻発。\nアナログな対象（羊、麦など）を管理する上で、約束ではなく「不変の記録」が必要とされた。' }, style: styles.ude },
    { id: 'INJ-Counting', type: 'default', data: { label: '数の概念と\n記号の発明', type: 'injection', details: '◆解決策\n現実世界のアナログデータをデジタル化する「ADC（Analog-to-Digital Converter）」としての数学。\n\n**Tech Metaphor:**\n人間の脳のバグをバイパスする最初のパッチ。「約束」ではなく「データベースへのコミット（記録）」によって所有権を確実なものに。' }, style: styles.injection },
    { id: 'LOGIC-P1A', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'RES-Inventory', type: 'default', data: { label: '在庫管理と\n所有権のデータベース化', type: 'result', details: '◆結果\n正確な在庫管理（Inventory）が可能になり、所有権の明確化と「信頼のデータベース」が構築された。' }, style: styles.result },
    { id: 'UDE-Mismatch', type: 'default', data: { label: 'ローカル方言による\nプロトコルの不一致', type: 'ude', details: '◆ボトルネック\n各地域で「1」の定義が異なるため、遠隔地において比率や単位をベースにした取引ができない。' }, style: styles.ude },
    { id: 'INJ-Standard', type: 'default', data: { label: '単位と記録の\n標準化 (API統一)', type: 'injection', details: '◆解決策\n「1」の定義をネットワーク全体で同期し、共通の度量衡を定める。\n\n**Tech Metaphor:**\n異なるシステム間を繋ぐ「共通通信プロトコル（HTTP/JSON）」。バラバラな方言を統一APIに変換。' }, style: styles.injection },
    { id: 'LOGIC-P1B', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'RES-Market', type: 'default', data: { label: '広域市場\n(Marketplace)の成立', type: 'result', details: '◆結果\n信頼が広域に展開され、巨大な市場が成立。国境を超えたデータパケット（商品）の交換が可能になる。' }, style: styles.result }
];
const p1Edges = [
    { id: 'e1-1', source: 'UDE-Memory', target: 'LOGIC-P1A', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e1-2', source: 'INJ-Counting', target: 'LOGIC-P1A', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e1-3', source: 'LOGIC-P1A', target: 'RES-Inventory', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'e1-4', source: 'UDE-Mismatch', target: 'LOGIC-P1B', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e1-5', source: 'INJ-Standard', target: 'LOGIC-P1B', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e1-6', source: 'LOGIC-P1B', target: 'RES-Market', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'e1-7', source: 'RES-Inventory', target: 'RES-Market', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 1, strokeDasharray: '5,5' } }
];
export const mathPhase1Nodes = p1Nodes;
export const mathPhase1Edges = addArrowMarkers(p1Edges);

// =====================================
// Phase 2
// =====================================
const p2Nodes = [
    { id: 'UDE-Sequential', type: 'default', data: { label: '逐次処理(1ずつ数える)\nのタイムスケーリング限界', type: 'ude', details: '◆ボトルネック\n大量の資材や年月を計算する際、1つずつ足していく逐次処理では計算負荷が大きすぎる。' }, style: styles.ude },
    { id: 'INJ-Multiplication', type: 'default', data: { label: '比率と掛け算\nのアルゴリズム', type: 'injection', details: '◆解決策\n一括演算（定数倍）によるアルゴリズムの改善。\n\n**Tech Metaphor:**\nO(n) の逐次ループを O(1) の乗算命令にリファクタリング。計算量の次元が変わる最初のアップグレード。これにより「シミュレーション（予測）」が可能になった。' }, style: styles.injection },
    { id: 'LOGIC-P2A', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'ACTION-Division', type: 'default', data: { label: '分業の開始\n(マイクロサービス化)', type: 'action', details: '◆展開\nシミュレーションにより「農業計画」の先読みが可能となり、全員が食料を作る必要がなくなる。\n\n**Tech Metaphor:**\nモノリスな組織を「マイクロサービス（専門職）」へデカップリング。' }, style: styles.action },
    { id: 'RES-Microservices', type: 'default', data: { label: 'スループット増大と\n国力の爆発的人口', type: 'result', details: '◆結果\n専門特化によるスループットの向上。「農民100人」より「農民70人＋職人30人」の方が全体生産量が指数関数的に増加した。' }, style: styles.result }
];
const p2Edges = [
    { id: 'e2-1', source: 'UDE-Sequential', target: 'LOGIC-P2A', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e2-2', source: 'INJ-Multiplication', target: 'LOGIC-P2A', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e2-3', source: 'LOGIC-P2A', target: 'ACTION-Division', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },
    { id: 'e2-4', source: 'ACTION-Division', target: 'RES-Microservices', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } }
];
export const mathPhase2Nodes = p2Nodes;
export const mathPhase2Edges = addArrowMarkers(p2Edges);

// =====================================
// Phase 3
// =====================================
const p3Nodes = [
    { id: 'UDE-ZeroBound', type: 'default', data: { label: '0以下の概念が存在せず\n手持ち以上の計画が不可', type: 'ude', details: '◆ボトルネック\n現物（実体）がないものは計算できないため、「将来手に入るはずの価値」を計算に組み込めない。' }, style: styles.ude },
    { id: 'INJ-Negative', type: 'default', data: { label: '負の数の実装\n(符号付き整数API)', type: 'injection', details: '◆解決策\n0以下の概念を「仕様」として承認。\n\n**Tech Metaphor:**\n符号付き整数（signed int）の導入。数直線をプラス側だけでなく両方向に拡張するAPIアップグレード。' }, style: styles.injection },
    { id: 'LOGIC-P3', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'RES-Leverage', type: 'default', data: { label: '現代金融とレバレッジ\n信用創造の基盤', type: 'result', details: '◆結果\n未来の価値を今持ってくる「レバレッジ」が可能に。負債を不滅の主体に負わせ、資産を拡大再生産する現代金融の全土台。' }, style: styles.result }
];
const p3Edges = [
    { id: 'e3-1', source: 'UDE-ZeroBound', target: 'LOGIC-P3', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e3-2', source: 'INJ-Negative', target: 'LOGIC-P3', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e3-3', source: 'LOGIC-P3', target: 'RES-Leverage', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } }
];
export const mathPhase3Nodes = p3Nodes;
export const mathPhase3Edges = addArrowMarkers(p3Edges);

// =====================================
// Phase 4
// =====================================
const p4Nodes = [
    { id: 'UDE-CalcCost', type: 'default', data: { label: '天文学的計算による\n乗算コストの増大', type: 'ude', details: '◆ボトルネック\n大航海時代や天文学において、巨大な数の掛け算・割り算が必要になり、計算エラーや遅延が頻発。' }, style: styles.ude },
    { id: 'INJ-Logarithms', type: 'default', data: { label: '対数の発明', type: 'injection', details: '◆解決策\n掛け算・割り算を足し算・引き算に変換する計算ショートカット。\n\n**Tech Metaphor:**\nネイピアの対数表はGPU登場以前の「計算アクセラレータ」。乗算をO(log n)に削減した最初のハードウェア的最適化。' }, style: styles.injection },
    { id: 'LOGIC-P4A', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'UDE-Static', type: 'default', data: { label: '連続的な物理変化を\n静止画でしか扱えない', type: 'ude', details: '◆ボトルネック\n速度や加速度など、常に変化する物理現象を固定された図形計算では解き明かせない。' }, style: styles.ude },
    { id: 'INJ-Calculus', type: 'default', data: { label: '微積分の発明\n(動く世界の記述)', type: 'injection', details: '◆解決策\n微分で「変化率」を、積分で「累積」を演算化。\n\n**Tech Metaphor:**\n「動く世界」をリアルタイムデバッグするフレームワーク。ニュートンの運動方程式は、宇宙のOSに対するシステムコール仕様書。' }, style: styles.injection },
    { id: 'LOGIC-P4B', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'RES-Industrial', type: 'default', data: { label: 'ニュートン力学と\n産業革命のエンジン', type: 'result', details: '◆結果\n蒸気機関・物理法則から自動運転の経路最適化まで、すべてが微積分の上で動く。文明のコアエンジンが起動した。' }, style: styles.result }
];
const p4Edges = [
    { id: 'e4-1', source: 'UDE-CalcCost', target: 'LOGIC-P4A', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e4-2', source: 'INJ-Logarithms', target: 'LOGIC-P4A', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e4-3', source: 'LOGIC-P4A', target: 'UDE-Static', type: 'straight', style: { stroke: '#9ca3af', strokeWidth: 3 } },
    { id: 'e4-4', source: 'UDE-Static', target: 'LOGIC-P4B', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e4-5', source: 'INJ-Calculus', target: 'LOGIC-P4B', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e4-6', source: 'LOGIC-P4B', target: 'RES-Industrial', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } }
];
export const mathPhase4Nodes = p4Nodes;
export const mathPhase4Edges = addArrowMarkers(p4Edges);

// =====================================
// Phase 5
// =====================================
const p5Nodes = [
    { id: 'UDE-Invisible', type: 'default', data: { label: '見えない波(電気・音・光)\nへの制御不能性', type: 'ude', details: '◆ボトルネック\n電気信号や音の振動など、姿の見えない「波」をどう数式に閉じ込めるかが最大の障壁だった。' }, style: styles.ude },
    { id: 'INJ-Complex', type: 'default', data: { label: '三角関数と虚数\nオイラーの公式', type: 'injection', details: '◆解決策\n回転と波を複素平面上の低コスト演算に統合。\n\n**Tech Metaphor:**\nFFT（高速フーリエ変換）はこのパッチの最重要デプロイ。あらゆる波形を周波数成分に分解・再構成する究極のデジタルコーデック。' }, style: styles.injection },
    { id: 'LOGIC-P5A', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'UDE-Uncertainty', type: 'default', data: { label: '個別の不運パラメーターが\nシステム全体を破壊する', type: 'ude', details: '◆ボトルネック\nパンデミックや事故など、予測できないランダムなノイズが社会を破綻させるリスク。' }, style: styles.ude },
    { id: 'INJ-Probability', type: 'default', data: { label: '確率・統計の誕生', type: 'injection', details: '◆解決策\n個別の不運（ノイズ）を全体の期待値で予測。\n\n**Tech Metaphor:**\n不確実性を「例外処理」ではなく「分布（Distribution）」としてモデル化。エラーハンドリングをシステム設計レベルで解決。' }, style: styles.injection },
    { id: 'LOGIC-P5B', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'RES-InfoAge', type: 'default', data: { label: '情報化社会の基盤\n(通信・AI・リスク管理)', type: 'result', details: '◆結果\n5G/量子コンピュータなどのデジタル信号処理と、AI（大規模確率モデル）・保険などの期待値コントロールが完成。' }, style: styles.result }
];
const p5Edges = [
    { id: 'e5-1', source: 'UDE-Invisible', target: 'LOGIC-P5A', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e5-2', source: 'INJ-Complex', target: 'LOGIC-P5A', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e5-3', source: 'UDE-Uncertainty', target: 'LOGIC-P5B', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e5-4', source: 'INJ-Probability', target: 'LOGIC-P5B', type: 'straight', style: { stroke: '#60a5fa', strokeWidth: 2 } },
    { id: 'e5-5', source: 'LOGIC-P5A', target: 'RES-InfoAge', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'e5-6', source: 'LOGIC-P5B', target: 'RES-InfoAge', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } }
];
export const mathPhase5Nodes = p5Nodes;
export const mathPhase5Edges = addArrowMarkers(p5Edges);

// =====================================
// Phase 6
// =====================================
const p6Nodes = [
    { id: 'CTX-Surplus', type: 'default', data: { label: '分業と金融によって\n生まれた圧倒的余剰リソース', type: 'context', details: '◆前提\nマイクロサービス化された社会とレバレッジによる金融資本主義により、巨大な資本が特定の中央（国家局等）に集まるようになった。' }, style: styles.context },
    { id: 'ACT-Academia', type: 'default', data: { label: '絶対君主や巨大資本による\n純粋数学・科学へのパトロン化', type: 'action', details: '◆行動\n巨大プロセスが「すぐには役に立たない純粋数学」を支援。虚数・微積分などの多くの概念は、最初は「遊び」として生み出された。\n\n**Tech Metaphor:**\nROIが測定不能な次世代基盤技術（AI、量子等）への先行ビルド。個人プロセスのメモリでは不可能な長期R&Dプログラムへの投資。' }, style: styles.action },
    { id: 'LOGIC-P6', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'RES-Terminal', type: 'default', data: { label: '次世代文明OS(AI・量子)\nへの先行ビルド', type: 'result', details: '◆最終結果\n「遊び」が生んだ式が、後に電気・通信・AIへと化け、文明を再び指数関数的にブーストさせた。\n\n**// これが文明をブーストさせる、最強のツール（数学）の力だ。**' }, style: { ...styles.result, border: '2px solid #2dd4bf', background: '#0f172a' } }
];
const p6Edges = [
    { id: 'e6-1', source: 'CTX-Surplus', target: 'LOGIC-P6', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'e6-2', source: 'ACT-Academia', target: 'LOGIC-P6', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'e6-3', source: 'LOGIC-P6', target: 'RES-Terminal', type: 'straight', style: { stroke: '#2dd4bf', strokeWidth: 4 } }
];
export const mathPhase6Nodes = p6Nodes;
export const mathPhase6Edges = addArrowMarkers(p6Edges);
