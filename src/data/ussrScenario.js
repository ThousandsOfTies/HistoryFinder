import { addArrowMarkers } from './edgeUtils';

// ===== 近代のソ連（ロシア）詳細フロー =====

export const ussrNodes = [
    {
        id: 'USSR-Revolution',
        type: 'default',
        data: {
            label: '1917年：ロシア革命',
            type: 'root_cause',
            details: '第一次世界大戦の混乱の中、レーニン率いるボリシェヴィキが権力を掌握。史上初の社会主義国家が誕生した。',
            iconUrl: '/icons/cold_war_communism.png'
        },
        style: { background: '#991b1b', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'USSR-Stalin',
        type: 'default',
        data: {
            label: 'スターリンの独裁と五カ年計画',
            type: 'macro_event',
            details: '農業の集団化と強引な重工業化を推進。反対派を大規模に粛清し、強力な全体主義体制を築いた。',
            iconUrl: '/icons/cold_war.png'
        },
        style: { background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'USSR-WW2',
        type: 'default',
        data: {
            label: '独ソ戦と対日参戦',
            type: 'macro_event',
            details: '第二次世界大戦でナチス・ドイツを撃退。戦後、東欧諸国を勢力圏に収め、アメリカと並ぶ超大国となった。',
            iconUrl: '/icons/ww2_anime.png'
        },
        style: { background: '#111827', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'USSR-Collapse',
        type: 'default',
        data: {
            label: '1991年：ソ連崩壊',
            type: 'result',
            details: '経済の停滞とアフガニスタン侵攻の失敗、ゴルバチョフの改革（ペレストロイカ）を経て解体。冷戦が終結した。',
            iconUrl: '/icons/contemporary_world.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ef4444', borderRadius: '8px', width: 220, padding: '15px' }
    }
];

const edges = [
    { id: 'ussr-e1', source: 'USSR-Revolution', target: 'USSR-Stalin', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'ussr-e2', source: 'USSR-Stalin', target: 'USSR-WW2', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'ussr-e3', source: 'USSR-WW2', target: 'USSR-Collapse', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
];

export const ussrEdges = addArrowMarkers(edges);
