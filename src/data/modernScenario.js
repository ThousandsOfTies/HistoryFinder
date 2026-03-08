import { addArrowMarkers } from './edgeUtils';

// ===== 近現代シナリオ：王国の衰退・国民国家の発生と世界大戦への歩み =====

export const modernNodes = [
    // --- 政治のパラダイムシフト ---
    {
        id: 'MODERN-CivilRevolution',
        type: 'default',
        data: {
            label: '市民革命と国民国家の誕生',
            type: 'macro_event',
            details: 'イギリス革命、フランス革命、アメリカ独立など。王から主権を獲得した国民が「自分たちの国」を守るために戦う国民軍となり、国家の軍事力と戦争動員力が爆発的に向上した。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #6b7280', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 経済のパラダイムシフト ---
    {
        id: 'MODERN-IndustrialRevolution',
        type: 'default',
        data: {
            label: '産業革命と資本主義',
            type: 'macro_event',
            iconUrl: '/icons/industrial_revolution.png',
            details: '蒸気機関による機械化と大量生産技術の確立。国家は圧倒的な経済力とテクノロジーを得たが、機械を動かし続けるための「無限の原料」と「無限の市場」が不可欠となった。'
        },
        style: { background: '#be123c', color: '#fff', border: '2px solid #f43f5e', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 政治力 AND 経済力 ---
    {
        id: 'LOGIC-AND-IMPERIALISM',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 世界への膨張 ---
    {
        id: 'MODERN-Imperialism',
        type: 'default',
        data: {
            label: '帝国主義と世界分割',
            type: 'macro_event',
            iconUrl: '/icons/imperialism.png',
            details: '強大な軍隊（政治力）と大量生産力（経済力）が結合。列強諸国が競ってアジア・アフリカを植民地として奪い合い、地球上の「空き地」が消滅した。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 破局 ---
    {
        id: 'MODERN-WorldWars',
        type: 'default',
        data: {
            label: '総力戦：二つの世界大戦',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '分割する土地がなくなった列強同士の衝突。国民全員が兵となり、全産業が兵器を作り続ける究極の「総力戦」による破滅を経て、現代への枠組みが構築された。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

const edges = [
    // 政治力(国民国家)と経済力(産業革命)の結合
    { id: 'emod-1', source: 'MODERN-CivilRevolution', target: 'LOGIC-AND-IMPERIALISM', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 2 } },
    { id: 'emod-2', source: 'MODERN-IndustrialRevolution', target: 'LOGIC-AND-IMPERIALISM', type: 'straight', style: { stroke: '#be123c', strokeWidth: 2 } },
    { id: 'emod-3', source: 'LOGIC-AND-IMPERIALISM', target: 'MODERN-Imperialism', type: 'straight', style: { stroke: '#1e3a8a', strokeWidth: 4 } },

    // 帝国主義からの破局競争（世界大戦へ）
    { id: 'emod-4', source: 'MODERN-Imperialism', target: 'MODERN-WorldWars', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 4 } },
];

export const modernEdges = addArrowMarkers(edges);
