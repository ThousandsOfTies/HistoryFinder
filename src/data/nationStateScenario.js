import { addArrowMarkers } from './edgeUtils';

// ===== 市民革命と国民国家の形成シナリオ =====

export const nationStateNodes = [
    {
        id: 'NAT-Enlightenment',
        type: 'default',
        data: {
            label: '啓蒙思想と社会契約説',
            type: 'root_cause',
            details: 'ロックやルソーなど、人間は生まれながらに自由であり、国家は国民との契約（[[社会契約]]）に基づくと考えられるようになった。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'NAT-CivilRevolution',
        type: 'default',
        data: {
            label: '市民革命(英・米・仏)',
            type: 'macro_event',
            details: '絶対王政を倒し、個人の権利（自由権・平等権）と民主制を求めた革命。フランス革命における[[人権宣言]]は近代社会の設計図となった。'
        },
        style: { background: '#056d4d', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'NAT-AND-1',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' }
    },
    {
        id: 'NAT-Nationalism',
        type: 'default',
        data: {
            label: 'ナショナリズムの覚醒',
            type: 'context',
            details: '自分たちは「国民」という一つの集団であるという[[ナショナリズム]]。ナポレオン戦争を経て全ヨーロッパにこの意識が広まった。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'NAT-ModernState',
        type: 'default',
        data: {
            label: '近代国民国家の形成',
            type: 'result',
            details: '主権を持つ国民、統一された法律、共通の教育、国民皆兵に基づく強大な軍隊。これらがセットになった「国民国家」というシステムが完成した。',
            iconUrl: '/icons/nationalism_anime.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    }
];

const edges = [
    { id: 'enat-1', source: 'NAT-Enlightenment', target: 'NAT-CivilRevolution', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'enat-2', source: 'NAT-CivilRevolution', target: 'NAT-AND-1', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },
    { id: 'enat-3', source: 'NAT-Nationalism', target: 'NAT-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'enat-4', source: 'NAT-AND-1', target: 'NAT-ModernState', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } },
];

export const nationStateEdges = addArrowMarkers(edges);
