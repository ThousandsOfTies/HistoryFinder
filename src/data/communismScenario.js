import { addArrowMarkers } from './edgeUtils';

// ===== 社会主義・共産主義陣営（東側）の内部フロー =====

export const communismNodes = [
    {
        id: 'COM-Soviet-Lead',
        type: 'default',
        data: {
            label: 'ソ連の指導とコミンフォルム',
            type: 'root_cause',
            details: '第二次世界大戦後、ソ連は東欧諸国を衛星国化し、共産党間の情報機関（コミンフォルム）を設立して結束を強めた。',
            iconUrl: '/icons/cold_war_communism.png'
        },
        style: { background: '#991b1b', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'COM-USSR',
        type: 'default',
        data: {
            label: '近代のソ連(ロシア)',
            type: 'macro_event',
            details: '[[ロシア革命]]により史上初の社会主義国家が誕生。スターリン体制下で強権的な中央集権化と重工業化を推進した。',
            iconUrl: '/icons/cold_war.png',
            subGraphId: 'ussr'
        },
        style: { background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'COM-China',
        type: 'default',
        data: {
            label: '近代の中国',
            type: 'macro_event',
            details: '[[毛沢東]]率いる中国共産党が内戦に勝利し、[[中華人民共和国]]を建国。アジアにおける共産主義の巨大な拠点となった。',
            iconUrl: '/icons/modern_china.png',
            subGraphId: 'modern_china'
        },
        style: { background: '#be123c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    { 
        id: 'COM-End-Cause', 
        type: 'default', 
        data: { 
            label: '社会主義経済の停滞とペレストロイカ', 
            type: 'result', 
            details: '重工業中心の計画経済が、情報社会の進展に追いつけず深刻な物不足や成長鈍化に陥った。ゴルバジョフによる抜本的な改革と自由化が、結果として体制の崩壊を導いた。',
            iconUrl: '/icons/cold_war.png'
        }, 
        position: { x: 300, y: 350 }, style: { background: '#991b1b', color: '#fff', border: '3px solid #ef4444', borderRadius: '8px', width: 250, padding: '15px' } 
    },
];

const edges = [
    { id: 'com-e1', source: 'COM-Soviet-Lead', target: 'COM-USSR', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'com-e2', source: 'COM-Soviet-Lead', target: 'COM-China', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    
    // システムの限界が終焉を導く
    { id: 'com-e4', source: 'COM-USSR', target: 'COM-End-Cause', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'com-e5', source: 'COM-China', target: 'COM-End-Cause', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
];

export const communismEdges = addArrowMarkers(edges);
