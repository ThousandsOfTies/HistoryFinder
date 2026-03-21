import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 現代の世界（グローバリズム vs ナショナリズム） =====

export const contemporaryNodes = [
    { 
        id: 'CON-ColdWarEnd', 
        type: 'default', 
        data: { 
            label: '冷戦の終結（1989-1991）', 
            type: 'root_cause', 
            details: '[[ベルリンの壁]]崩壊と[[ソ連]]解体。「世界は民主主義と自由経済で一つになる」という楽観的な期待が広がった。',
            iconUrl: '/icons/contemporary_world.png'
        }, 
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' } 
    },

    { 
        id: 'CON-Globalization', 
        type: 'default', 
        data: { 
            label: 'グローバリゼーション\n（世界の一体化）', 
            type: 'event', 
            details: 'インターネットの普及や自由貿易により、お金も情報も国境を越えて動くように。「効率」と「融合」を重視する動き。',
            iconUrl: '/icons/trade_network.png'
        }, 
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } 
    },

    { 
        id: 'LOGIC-VS-GN', 
        type: 'logic', 
        data: { operator: 'VS', symbol: '⚔️' } 
    },

    { 
        id: 'CON-Nationalism', 
        type: 'default', 
        data: { 
            label: 'ナショナリズムの再燃\n（自国優先主義）', 
            type: 'event', 
            details: 'グローバル化による格差や変化への不安から、「自分たちの国や文化、境界を守ろう」とする動き。トランプ現象やBREXITなど。',
            iconUrl: '/icons/nationalism_anime.png'
        }, 
        style: { background: '#991b1b', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' } 
    },

    { 
        id: 'CON-Terror', 
        type: 'default', 
        data: { 
            label: '9.11と宗教的対立', 
            type: 'context', 
            details: '2001年の同時多発テロ以降、経済的な対比だけでなく、宗教や価値観の深い溝も顕在化。テロとの戦いによる不安定化。',
            iconUrl: '/icons/orient_persia.png'
        }, 
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } 
    },

    { 
        id: 'CON-AND-RESULT', 
        type: 'logic', 
        data: { operator: 'AND', symbol: '＊' } 
    },

    { 
        id: 'CON-MultiCrisis', 
        type: 'default', 
        data: { 
            label: '複合危機の時代', 
            type: 'result', 
            details: '米中対立、[[ウクライナ]]戦争、パンデミック、気候変動。一つになろうとする力と、離れようとする力の衝突により、世界が再び揺れ動いている。',
            iconUrl: '/icons/contemporary_world.png'
        }, 
        style: { background: '#000000', color: '#fff', border: '3px solid #a855f7', borderRadius: '8px', width: 280, padding: '18px', fontWeight: 'bold' } 
    },
];

const rawEdges = [
    { id: 'con-1', source: 'CON-ColdWarEnd', target: 'CON-Globalization', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'con-2', source: 'CON-Globalization', target: 'LOGIC-VS-GN', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'con-3', source: 'CON-Nationalism', target: 'LOGIC-VS-GN', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 3 } },
    
    { id: 'con-4', source: 'LOGIC-VS-GN', target: 'CON-AND-RESULT', type: 'straight', style: { stroke: '#6b7280', strokeWidth: 2 } },
    { id: 'con-5', source: 'CON-Terror', target: 'CON-AND-RESULT', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'con-6', source: 'CON-AND-RESULT', target: 'CON-MultiCrisis', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 5 } },
];

export const contemporaryEdges = addArrowMarkers(rawEdges);
