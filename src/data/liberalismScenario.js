import { addArrowMarkers } from './edgeUtils';

// ===== 自由主義・資本主義陣営（西側）の内部フロー =====

export const liberalismNodes = [
    {
        id: 'LIB-US-Lead',
        type: 'default',
        data: {
            label: 'アメリカのリーダーシップ',
            type: 'root_cause',
            details: 'マーシャル・プランなどの経済援助を通じて、自由主義諸国の復興を支援した。',
            iconUrl: '/icons/cold_war_liberalism.png'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'LIB-Europe',
        type: 'default',
        data: {
            label: '近代のヨーロッパ',
            type: 'macro_event',
            details: '西欧諸国はNATOを結成し、安全保障と経済統合（EC・EU）を推進した。',
            iconUrl: '/icons/modern_europe.png',
            subGraphId: 'revolution'
        },
        style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'LIB-MiddleEast',
        type: 'default',
        data: {
            label: '近代の中東',
            type: 'macro_event',
            details: '石油資源をめぐる大国間の駆け引きの中で、親欧米派と反欧米派が対立。',
            iconUrl: '/icons/modern_mid_east.png',
            subGraphId: 'modern_mideast'
        },
        style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'LIB-India',
        type: 'default',
        data: {
            label: '近代のインド',
            type: 'macro_event',
            details: '独立後、民主主義体制を維持しつつ、独自の非同盟政策を貫いた。',
            iconUrl: '/icons/modern_india.png',
            subGraphId: 'modern_india'
        },
        style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    { 
        id: 'LIB-End-Cause', 
        type: 'default', 
        data: { 
            label: '西側の経済的優位と戦略的圧力', 
            type: 'result', 
            details: '1980年代、IT革命による経済のハイテク化と、レーガン政権の強い軍事外交（SDI計画等）が東側を圧倒。冷戦終結の決定打となった。',
            iconUrl: '/icons/state_patron_anime.png'
        }, 
        position: { x: 300, y: 350 }, style: { background: '#1e3a8a', color: '#fff', border: '3px solid #3b82f6', borderRadius: '8px', width: 250, padding: '15px' } 
    },
];

const edges = [
    { id: 'lib-e1', source: 'LIB-US-Lead', target: 'LIB-Europe', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'lib-e2', source: 'LIB-US-Lead', target: 'LIB-MiddleEast', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'lib-e3', source: 'LIB-US-Lead', target: 'LIB-India', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    
    // 各地の発展が西側の優位を構成する
    { id: 'lib-e4', source: 'LIB-Europe', target: 'LIB-End-Cause', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'lib-e5', source: 'LIB-MiddleEast', target: 'LIB-End-Cause', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'lib-e6', source: 'LIB-India', target: 'LIB-End-Cause', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
];

export const liberalismEdges = addArrowMarkers(edges);
