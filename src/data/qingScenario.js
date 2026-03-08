import { addArrowMarkers } from './edgeUtils';

// ===== 明・清の超大国シナリオ =====

// ノード定義
export const qingNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-Bureaucracy',
        type: 'default',
        data: {
            label: '完成された官僚制と科挙\n(政治的基盤)',
            type: 'context',
            details: '皇帝に権力が集中する強力な専制体制と、科挙に合格した優秀な官僚（士大夫）が統治を支える成熟したシステム。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-Economy',
        type: 'default',
        data: {
            label: '銀の世界的流通と\n明代の経済発展',
            type: 'root_cause',
            details: '[[大航海時代と銀の流通|大航海時代]]以降、スペインが新大陸（ポトシ銀山など）で採掘した大量の銀や、日本の石見銀山から産出された銀が、絹や陶磁器を求めて中国に大量に流入しました。\n\nこれにより、明〜清代の中国では税金を銀で納める制度（[[一条鞭法]]、地丁銀）が定着し、商業がかつてない規模で発展しました。「特産品を作って銀を稼ぐ」という商業的農業が栄え、江南地方を中心に巨大な経済ブームが起きました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-FOUNDATION',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-DynastyChange',
        type: 'default',
        data: {
            label: 'モンゴル帝国(元)の崩壊と\n明の漢民族支配回復',
            type: 'context',
            details: '14世紀後半、飢饉や疫病（ペスト）、重税への不満から発生した[[紅巾の乱]]を契機に、モンゴル帝国（元）は万里の長城の北へと追いやられました。\n\n貧農出身の朱元璋（洪武帝）が建国した「[[明]]」は、漢民族による中国支配を回復し、海禁政策（民間貿易の禁止）や里甲制など、農村を中心とした厳格な統治システムによって社会の引き締めを図りました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-ThreeEmperors',
        type: 'default',
        data: {
            label: '清の三代皇帝による強固な統治\n(康熙・雍正・乾隆)',
            type: 'action',
            iconUrl: '/icons/qing.png',
            details: '少数派の満州族が多数派の漢民族を治めるため、「アメ（科挙の採用など）」と「ムチ（思想弾圧など）」を巧みに使い分け、最大版図を築いた。\n\n特に[[康熙帝]]は、三藩の乱を平定し台湾を領有、ネルチンスク条約でロシアと国境を画定するなど、清の基礎を固めました。[[雍正帝]]は軍機処を設置して皇帝独裁体制を強化し、[[乾隆帝]]の時代に清は最大版図を達成し、文化・経済ともに最盛期を迎えました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Hegemony',
        type: 'default',
        data: {
            label: '明の衰退と\n女真族の台頭',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: '銀の流入による極度のインフレや、豊臣秀吉の朝鮮出兵への援軍派遣（多額の戦費）、政治腐敗などで明の国力は急速に衰退しました。\n\nこの隙を突き、中国東北部（満州）で狩猟や農耕を行っていた女真族（のちの満州族）を[[ヌルハチ]]が統一。「[[八旗]]」という強力な軍事・社会組織を編成し、明に対して独立を宣言して後金（のちの大清）を建国しました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-WorldEconomy',
        type: 'default',
        data: {
            label: '近代西洋列強との衝突へ\n(アヘン戦争への布石)',
            type: 'result',
            iconUrl: '/icons/voyage.png',
            details: '東アジアで圧倒的な国力を誇った清は、海外貿易を[[広東システム (広州1港体制)|広州１港]]（公行という特権商人）のみに制限し、ヨーロッパ諸国を「野蛮な国（夷狄）」として見下す伝統的な「中華思想」を貫いていました。\n\nしかし、産業革命を経て圧倒的な世界帝国となったイギリスが、この閉鎖的な貿易体制と銀の流出に不満を募らせます。これがやがて、近代という荒波に飲み込まれる決定的な「[[アヘン戦争]]」へと繋がっていくことになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 超大国形成の前提
    { id: 'eqing-1', source: 'CTX-Bureaucracy', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eqing-2', source: 'RC-Economy', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eqing-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-DynastyChange', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 王朝交代から康雍乾全盛期へ
    { id: 'eqing-4', source: 'EVENT-DynastyChange', target: 'ACTION-ThreeEmperors', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 三代皇帝の治世の結果（政治的頂点と経済的繁栄）
    { id: 'eqing-5', source: 'ACTION-ThreeEmperors', target: 'RES-Hegemony', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'eqing-6', source: 'ACTION-ThreeEmperors', target: 'RES-WorldEconomy', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const qingEdges = addArrowMarkers(edges);
