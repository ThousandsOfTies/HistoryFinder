import { addArrowMarkers } from './edgeUtils';

// ===== フランク王国と封建社会シナリオ =====

// ノード定義
export const frankishNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-RomeFall',
        type: 'default',
        data: {
            label: '西ローマ帝国の弱体化と\nフン人の西進',
            type: 'context',
            details: '地中海を支配していた[[西ローマ帝国]]は、内部の政治腐敗や経済の衰退、疫病などにより徐々に弱体化し、395年に東西に分裂しました。\n\n同時期、アジア系遊牧民である[[フン族|フン人]]がヨーロッパ東部へ突如として侵入（西進）を開始。彼らの圧倒的な騎馬軍団の脅威に押し出される形で、ヨーロッパの歴史を塗り替えるドミノ倒しが始まりました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-Germanic',
        type: 'default',
        data: {
            label: 'ゲルマン人の大移動と\n西ローマ帝国の滅亡',
            type: 'root_cause',
            details: 'フン人の圧迫を受けた[[ゲルマン民族の大移動|ゲルマン民族諸派]]（西ゴート族、ヴァンダル族、フランク族など）は、375年を皮切りに一斉に西ローマ帝国領内へと大移動を開始しました。\n\n彼らは帝国を内側から破壊しながら各地に自分たちの王国（ゲルマン諸国）を次々と建国し、ついに476年、ゲルマン人傭兵隊長オドアケルによって[[西ローマ帝国の滅亡|西ローマ帝国は滅亡]]させられ、古代ヨーロッパは終焉しました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-FRANK',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Feudalism',
        type: 'default',
        data: {
            label: 'フランク王国による\n西欧世界の統一',
            type: 'event',
            iconUrl: '/icons/renaissance.png',
            details: '乱立したゲルマン系諸国の中で、元の居住地から近いガリア（現在のフランス）に定着した[[フランク王国|フランク族の王国]]だけが、長期的かつ強大に成長しました。\n\nクローヴィスによる建国（メロヴィング朝）の後、トゥール・ポワティエ間の戦いでイスラム勢力を撃退したカロリング家が実権を握り、8世紀末の「[[カール大帝]]」の時代に、西ヨーロッパのほぼ全域を武力で統一する大帝国を築き上げました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-FrankEmpire',
        type: 'default',
        data: {
            label: '封建社会(主従関係と荘園制)\nの確立',
            type: 'action',
            details: 'フランク王国が衰退・分裂し、さらにヴァイキング（ノルマン人）などの新たな外敵が侵入すると、中央の王権による保護は機能しなくなりました。\n\n人々は自衛のため、有力な騎士・貴族と土地（封土）を媒介とした契約を結ぶ「恩貸地制（主従関係）」と、農奴を土地に縛り付けて自給自足の農業を行わせる「[[荘園制]]」を組み合わせた、地方分権的な「[[封建制|封建社会]]（Feudalism）」を形成して身を守りました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Catholic',
        type: 'default',
        data: {
            label: '中世カトリック世界と\n十字軍への布石',
            type: 'result',
            iconUrl: '/icons/crusades.png',
            details: '「ゲルマン人の武力・封建制」「ローマの法と遺産」「キリスト教の絶対的価値観」の3つが融合し、私たちがイメージする「[[中世ヨーロッパ]]」という独特の社会が完成しました。\n\n外部を恐れて閉鎖的な社会を築き、教皇の権威が絶大となったこの西欧世界は、やがて外部（イスラーム世界）の脅威に対して狂信的なエネルギーを爆発させ、巨大な「十字軍遠征」を引き起こすことになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-CrusadesLegacy',
        type: 'default',
        data: {
            label: '十字軍遠征への土台\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/crusades.png',
            details: '教皇の権威向上と騎士階級のエネルギーの蓄積は、やがて異教徒に対する大規模な「十字軍の遠征」を引き起こす原動力となった。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 封建社会形成の前提
    { id: 'efra-1', source: 'CTX-RomeFall', target: 'LOGIC-AND-FRANK', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'efra-2', source: 'RC-Germanic', target: 'LOGIC-AND-FRANK', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'efra-3', source: 'LOGIC-AND-FRANK', target: 'EVENT-Feudalism', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 封建制から王国統一へ
    { id: 'efra-4', source: 'EVENT-Feudalism', target: 'ACTION-FrankEmpire', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 王国統一が生み出した結果
    { id: 'efra-5', source: 'ACTION-FrankEmpire', target: 'RES-Catholic', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'efra-6', source: 'ACTION-FrankEmpire', target: 'RES-CrusadesLegacy', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const frankishEdges = addArrowMarkers(edges);
