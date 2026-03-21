import { addArrowMarkers } from './edgeUtils';

// ===== 産業革命と資本主義の確立シナリオ =====

export const industrialRevNodes = [
    {
        id: 'IND-AgriRev',
        type: 'default',
        data: {
            label: '農業革命と囲い込み',
            type: 'root_cause',
            details: '第二次の[[囲い込み]]（エンクロージャー）により、土地を失った農民が都市へ流入。安価な労働力が確保された。',
            iconUrl: '/icons/agri_rev_anime.png'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'IND-CottonTech',
        type: 'default',
        data: {
            label: '綿織物工業の機械化',
            type: 'action',
            details: 'ジョン・ケイの「[[飛び杼]]」から始まる糸紡ぎや機織りの技術革新。手工業から工場制機械工業への転換。',
            iconUrl: '/icons/cotton_tech_anime.png'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'IND-SteamEngine',
        type: 'default',
        data: {
            label: '蒸気機関の発明と改良',
            type: 'action',
            details: 'ジェームズ・ワットによる[[蒸気機関]]の大幅な改良。動力としての蒸気が工場のみならず、交通機関（鉄道・蒸気船）にも応用された。',
            iconUrl: '/icons/steam_engine_anime.png'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'IND-Railway',
        type: 'default',
        data: {
            label: '交通における革命(鉄道)',
            type: 'result',
            details: 'スティーブンソンの蒸気機関車などの成功により、大量の物資や人員を高速で輸送する[[鉄道]]網が構築され、国内・国際市場の一体化が進んだ。',
            iconUrl: '/icons/railway_rev_anime.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'IND-Capitalism',
        type: 'default',
        data: {
            label: '資本主義社会の成立',
            type: 'result',
            details: '機械という巨大な資本を持つ「資本家」と、労働力を売る「労働者」という二大階級が形成され、現代の経済システムの根幹が確立された。',
            iconUrl: '/icons/industrial_2nd_anime.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    }
];

const edges = [
    { id: 'eind-1', source: 'IND-AgriRev', target: 'IND-CottonTech', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eind-2', source: 'IND-CottonTech', target: 'IND-SteamEngine', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 3 } },
    { id: 'eind-3', source: 'IND-SteamEngine', target: 'IND-Railway', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 3 } },
    { id: 'eind-4', source: 'IND-Railway', target: 'IND-Capitalism', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } },
];

export const industrialRevEdges = addArrowMarkers(edges);
