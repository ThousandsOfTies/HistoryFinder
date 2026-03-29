import { addArrowMarkers } from './edgeUtils';

const rawNodes = [
    { id: 'MATH-PHASE1', type: 'default', data: { label: 'Phase 1: データのデジタル化\n(Counting & Protocol)', type: 'macro_event', iconUrl: '/icons/renaissance.png', details: 'アナログな現実世界を数値データに変換する初期OS。\n\n**◆概要**\n脳のメモリ限界とプロトコルの不一致を突破し、在庫管理と共通市場を成立させる。\n\n💡**クリックして詳細フェーズ（TOCツリー）を開く**', subGraphId: 'math_phase1' }, style: { background: '#0ea5e9', color: '#fff', border: 'none', borderRadius: '4px', width: 280, padding: '15px', fontWeight: 'bold' } },
    { id: 'MATH-PHASE2', type: 'default', data: { label: 'Phase 2: システムの並列化\n(Ratio & Division)', type: 'macro_event', iconUrl: '/icons/renaissance.png', details: '計算のO(1)化によるシミュレーション能力の獲得。\n\n**◆概要**\n逐次処理の限界を掛け算で突破し、分業（社会のマイクロサービス化）を可能にした。\n\n💡**クリックして詳細フェーズ（TOCツリー）を開く**', subGraphId: 'math_phase2' }, style: { background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', width: 280, padding: '15px', fontWeight: 'bold' } },
    { id: 'MATH-PHASE3', type: 'default', data: { label: 'Phase 3: 未来のハック\n(Negative & Leverage)', type: 'macro_event', iconUrl: '/icons/renaissance.png', details: '「0以下」の概念によるレバレッジ。\n\n**◆概要**\n0以下の概念を導入し、未来の価値を今に持ってくる現代金融（信用創造）の基礎を構築。\n\n💡**クリックして詳細フェーズ（TOCツリー）を開く**', subGraphId: 'math_phase3' }, style: { background: '#f59e0b', color: '#fff', border: 'none', borderRadius: '4px', width: 280, padding: '15px', fontWeight: 'bold' } },
    { id: 'MATH-PHASE4', type: 'default', data: { label: 'Phase 4: 動態の解析\n(Logarithms & Calculus)', type: 'macro_event', iconUrl: '/icons/industrial_revolution.png', details: '計算のO(log n)化と微積分の発明。\n\n**◆概要**\n対数による天文学・航海の計算量削減と、微積分による「動く世界」の解析。産業革命エンジンの起動。\n\n💡**クリックして詳細フェーズ（TOCツリー）を開く**', subGraphId: 'math_phase4' }, style: { background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', width: 280, padding: '15px', fontWeight: 'bold' } },
    { id: 'MATH-PHASE5', type: 'default', data: { label: 'Phase 5: 波のコントロール\n(Probability & Complex)', type: 'macro_event', iconUrl: '/icons/contemporary_world.png', details: '不確実性と「波」のデジタル化。\n\n**◆概要**\n個別のノイズを確率・統計で処理し、波形を三角関数・虚数で制御。情報化社会への突入。\n\n💡**クリックして詳細フェーズ（TOCツリー）を開く**', subGraphId: 'math_phase5' }, style: { background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '4px', width: 280, padding: '15px', fontWeight: 'bold' } },
    { id: 'MATH-PHASE6', type: 'default', data: { label: 'Phase 6: 次世代R&D\n(Academia & Terminal)', type: 'macro_event', iconUrl: '/icons/development_gap.png', details: '巨大資本による純粋数学への投資（先行ビルド）。\n\n**◆概要**\n経済的な余剰リソースが「すぐには役に立たない」純粋数学を支援し、結果的に次世代の文明OS（量子、AI）を生む事となった。\n\n💡**クリックして詳細フェーズ（TOCツリー）を開く**', subGraphId: 'math_phase6' }, style: { background: '#14b8a6', color: '#fff', border: 'none', borderRadius: '4px', width: 280, padding: '15px', fontWeight: 'bold' } }
];

const rawEdges = [
    { id: 'em-1', source: 'MATH-PHASE1', target: 'MATH-PHASE2', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 4 } },
    { id: 'em-2', source: 'MATH-PHASE2', target: 'MATH-PHASE3', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 4 } },
    { id: 'em-3', source: 'MATH-PHASE3', target: 'MATH-PHASE4', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 4 } },
    { id: 'em-4', source: 'MATH-PHASE4', target: 'MATH-PHASE5', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 4 } },
    { id: 'em-5', source: 'MATH-PHASE5', target: 'MATH-PHASE6', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 4 } }
];

export const mathHistoryNodes = rawNodes;
export const mathHistoryEdges = addArrowMarkers(rawEdges);
