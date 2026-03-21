import { addArrowMarkers } from './edgeUtils';

// ===== 西洋の優位と地域格差の発生シナリオ =====

export const developmentGapNodes = [
    {
        id: 'GAP-ScientificRev',
        type: 'default',
        data: {
            label: '科学革命と合理主義',
            type: 'root_cause',
            iconUrl: '/icons/scientific_rev_anime.png',
            details: 'ニュートン力学、ガリレオ、ベーコンなどの科学的手法の確立。自然を解明・操作の対象とする「合理的な知」の爆発。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'GAP-WesternAscent',
        type: 'default',
        data: {
            label: '産業と軍事の爆発的発展',
            type: 'macro_event',
            iconUrl: '/icons/western_ascent_anime.png',
            details: '先進的な[[産業革命]]による巨大な生産力、それに基づく近代的な軍制と兵器（ライフル、蒸気戦艦など）による圧倒的優勢。'
        },
        style: { background: '#056d4d', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'GAP-Logic-Vs',
        type: 'logic',
        data: { operator: 'VS', symbol: '⚔️' }
    },
    {
        id: 'GAP-EasternStagnation',
        type: 'default',
        data: {
            label: '伝統的帝国の内的限界',
            type: 'context',
            iconUrl: '/icons/eastern_stagnation_anime.png',
            details: '[[ムガル帝国]]、[[清]]、[[オスマン帝国]]など、高度な伝統的文明を持ちながらも、硬直した官僚制度や内部抗争、近代的な技術革新への遅れ。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'GAP-GreatDivergence',
        type: 'default',
        data: {
            label: '「大分岐」と西洋の優位',
            type: 'result',
            details: '歴史学で[[大分岐]]（Great Divergence）と呼ばれる、欧州とアジアの運命の決定的な分かれ道。これによって少数の欧州諸国が全世界を支配可能な格差が生まれた。',
            iconUrl: '/icons/great_divergence_anime.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    }
];

const edges = [
    { id: 'egap-1', source: 'GAP-ScientificRev', target: 'GAP-WesternAscent', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'egap-2', source: 'GAP-WesternAscent', target: 'GAP-Logic-Vs', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },
    { id: 'egap-3', source: 'GAP-EasternStagnation', target: 'GAP-GreatDivergence', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'egap-4', source: 'GAP-Logic-Vs', target: 'GAP-GreatDivergence', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } },
];

export const developmentGapEdges = addArrowMarkers(edges);
