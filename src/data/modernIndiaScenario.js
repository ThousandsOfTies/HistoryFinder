import { addArrowMarkers } from './edgeUtils';

// ===== 近代のインド：植民地化から独立・分断シナリオ =====

export const modernIndiaNodes = [
    {
        id: 'MIND-ColonialRule',
        type: 'default',
        data: {
            label: 'プラッシーの戦いと英東インド会社',
            type: 'root_cause',
            details: '1757年、ベンガル地方の領有。これによりイギリスが[[ムガル帝国]]を退け、徴税権を獲得。植民地の本格的な搾取が始まった。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'MIND-SipoyMutiny',
        type: 'default',
        data: {
            label: 'シパーヒー（セポイ）の反乱',
            type: 'macro_event',
            details: '1857年、英兵らによる大反乱。イギリスはこれを鎮圧した後、ムガル帝国を完全に滅ぼし「インド帝国」を樹立。直接統治へ移行。'
        },
        style: { background: '#056d4d', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'MIND-Nationalism',
        type: 'default',
        data: {
            label: '国民会議の設立と民族運動',
            type: 'context',
            details: '最初は英協力者の集まりだった[[インド国民会議]]が、次第にインドの自立を求めナショナリズムの波が高まった。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'MIND-Gandhi',
        type: 'default',
        data: {
            label: 'ガンディーと非暴力不服従運動',
            type: 'action',
            details: '[[マハトマ・ガンディー]]による、非協力・非暴力運動。塩の行進などを通じ、民衆の意識を一つにまとめ上げた。'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'MIND-Independence',
        type: 'default',
        data: {
            label: '独立と印パ分断',
            type: 'result',
            details: '1947年、ついに独立。しかし、ヒンドゥー教徒とイスラーム教徒の激しい対立により、[[インド]]と[[パキスタン]]（東パキスタンは後のバングラデシュ）として分離。カシミール問題などの禍根を残した。',
            iconUrl: '/icons/modern_india.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    }
];

const edges = [
    { id: 'emind-1', source: 'MIND-ColonialRule', target: 'MIND-SipoyMutiny', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'emind-2', source: 'MIND-SipoyMutiny', target: 'MIND-Nationalism', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },
    { id: 'emind-3', source: 'MIND-Nationalism', target: 'MIND-Gandhi', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'emind-4', source: 'MIND-Gandhi', target: 'MIND-Independence', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 3 } },
];

export const modernIndiaEdges = addArrowMarkers(edges);
