import { addArrowMarkers } from './edgeUtils';

// ===== 航海技術・科学の発達シナリオ =====

export const navigationNodes = [
    {
        id: 'NAV-Compass',
        type: 'default',
        data: {
            label: '羅針盤の伝来と改良',
            type: 'context',
            details: '宋代の中国で発明された[[羅針盤]]が、イスラーム世界を経てヨーロッパに伝播。14世紀頃には航海に耐えうる実用的な計器へと改良された。'
        },
        style: { background: '#0f766e', color: '#fff', border: '1px dashed #14b8a6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'NAV-Map',
        type: 'default',
        data: {
            label: 'トスカーネリの地球球体説',
            type: 'context',
            details: '古代のトポグラフィアやプトレマイオスの地理学が再発見され、[[地球球体説]]が知識人の間で定説化。トスカーネリが西回りのアジア到達を主張し、コロンブスに強い影響を与えた。'
        },
        style: { background: '#0f766e', color: '#fff', border: '1px dashed #14b8a6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'NAV-AND-1',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' }
    },
    {
        id: 'NAV-Ship',
        type: 'default',
        data: {
            label: 'キャラベル船・ガレオン船の開発',
            type: 'action',
            details: '従来の地中海用ガレー船ではなく、外洋の荒波や逆風に耐えられる[[キャラベル船]]（カラベル船）や大型のガレオン船が開発された。'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'NAV-DeepSea',
        type: 'default',
        data: {
            label: '遠洋航海能力の確立',
            type: 'result',
            details: '技術、知識、船形が結びついたことで、海岸沿いを進む「沿岸航海」から、陸地を見失っても進める「遠洋航海」へとステージが上がった。',
            iconUrl: '/icons/navigation_simple.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    }
];

const edges = [
    { id: 'enav-1', source: 'NAV-Compass', target: 'NAV-AND-1', type: 'straight', style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'enav-2', source: 'NAV-Map', target: 'NAV-AND-1', type: 'straight', style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'enav-3', source: 'NAV-AND-1', target: 'NAV-Ship', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 3 } },
    { id: 'enav-4', source: 'NAV-Ship', target: 'NAV-DeepSea', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } },
];

export const navigationEdges = addArrowMarkers(edges);
