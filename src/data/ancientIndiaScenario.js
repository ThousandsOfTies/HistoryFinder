import { addArrowMarkers } from './edgeUtils';

// ===== マウリヤ・グプタ朝（古代インド）シナリオ =====

// ノード定義
export const ancientIndiaNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-IndusAryan',
        type: 'default',
        data: {
            label: 'アーリヤ人の進入と\n先住民ドラヴィダ人',
            type: 'context',
            details: '紀元前1500年頃、中央アジアから遊牧民である[[インド・アーリア人|アーリヤ人]]が西北インド（パンジャーブ地方）へ進入を開始しました。\n\n彼らは先住民（ドラヴィダ系など）を征服・同化しつつ、インダス文明の跡地に新たな社会を築き始めます。この過程で、祭祀を司るブラフマン（バラモン）を頂点とする初期の身分制度（ヴァルナ制）と、自然神を信仰する[[ヴェーダ時代|バラモン教]]が形成されていきました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-IronGanges',
        type: 'default',
        data: {
            label: '鉄器の普及による\nガンジス川流域の開拓',
            type: 'root_cause',
            details: '紀元前1000年頃から鉄器が普及し始めたことで、鬱蒼とした密林に覆われていた[[ガンジス川]]流域の開拓が一気に進展しました。\n\n鉄製農具によって農業生産力が飛躍的に向上し、商工業や都市（[[十六大国 (古代インド)|十六大国]]）が発達しました。これにより、従来の農村中心のバラモン教の権威が揺らぎ、実力を持つ武士（クシャトリヤ）や商人（ヴァイシャ）の力が高まるという社会構造の大きな地殻変動が起きました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-INDIA',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Buddhism',
        type: 'default',
        data: {
            label: 'マウリヤ朝による初の統一と\n仏教の保護',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: '前4世紀末、アレクサンドロス大王の侵入による混乱に乗じてチャンドラグプタが[[マウリヤ朝]]を建国し、インド史上初の統一帝国を築きました。\n\n第3代[[アショーカ王]]の時代に全盛期を迎えましたが、カリンガ国征服の悲惨さを悔いた王は仏教に帰依します。彼は「ダルマ（法）」に基づく平和的な統治（武力によらない政治）を目指し、バラモン教の権威から離れた新しい普遍的な統治理念を掲げました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Hinduism',
        type: 'default',
        data: {
            label: 'クシャーナ朝と\n大乗仏教の東アジア伝播',
            type: 'action',
            details: 'マウリヤ朝の崩壊後、1世紀にイラン系の[[クシャーナ朝]]が西北インドを支配しました。\n\n東西交通の要衝を抑えたこの時代、カニシカ王の保護のもとで、個人の悟りよりも万人の救済を重んじる「[[大乗仏教]]」が成立しました。この新しい仏教は、ガンダーラ美術（ギリシャ彫刻の影響を受けた仏像）とともに、シルクロードを経由して中国から日本へと広く伝播していきます。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Caste',
        type: 'default',
        data: {
            label: 'グプタ朝における\nヒンドゥー教の確立',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '4世紀に成立した[[グプタ朝]]のもとで、インド古典文化が黄金期を迎えます。この時期、バラモン教は土着の民間信仰や神々（シヴァ、ヴィシュヌなど）を吸収し、現在に連なる「[[ヒンドゥー教]]」へと変貌・確立しました。\n\n『マハーバーラタ』や『ラーマーヤナ』といった叙事詩が編纂され、人々の生活規範を定めた『マヌ法典』が普及することで、仏教に代わって再びヒンドゥー教がインド社会の中心に返り咲きました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-ClassicalCulture',
        type: 'default',
        data: {
            label: 'インド古典文化の完成と波及',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'サンスクリット文学やゼロの発見などの数学が発展。この豊かな文化と宗教は海路を通じて東南アジア一帯へ強く波及した。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // インド古代国家形成の前提
    { id: 'eind-1', source: 'CTX-IndusAryan', target: 'LOGIC-AND-INDIA', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eind-2', source: 'RC-IronGanges', target: 'LOGIC-AND-INDIA', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eind-3', source: 'LOGIC-AND-INDIA', target: 'EVENT-Buddhism', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 仏教統一からヒンドゥー教確立への変遷
    { id: 'eind-4', source: 'EVENT-Buddhism', target: 'ACTION-Hinduism', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // ヒンドゥー・グプタ朝のもたらした結果
    { id: 'eind-5', source: 'ACTION-Hinduism', target: 'RES-Caste', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'eind-6', source: 'ACTION-Hinduism', target: 'RES-ClassicalCulture', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const ancientIndiaEdges = addArrowMarkers(edges);
