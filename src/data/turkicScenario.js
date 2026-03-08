import { addArrowMarkers } from './edgeUtils';

// ===== トルコ人王朝（セルジューク朝等）シナリオ =====

// ノード定義
export const turkicNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-AbbasidDecline',
        type: 'default',
        data: {
            label: '遊牧民の軍事力と\n商業ネットワークの合体',
            type: 'context',
            details: '中央アジアの草原地帯には、過酷な環境で培われた高い機動力と強力な騎馬軍団を持つ「トルコ系遊牧民」が存在し、オアシス都市には交易路を支配して莫大な富を持つ「商人（[[ソグド人]]など）」が存在していました。\n\n6世紀、この「遊牧の武」と「オアシスの富」が結びつくことで、[[突厥]]（とっけつ）をはじめとする巨大な騎馬遊牧帝国が誕生し、ユーラシアの中央部を支配するようになりました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-MamlukSystem',
        type: 'default',
        data: {
            label: 'トルコ系軍人(マムルーク)の台頭\n(遊牧騎馬民族の軍事力)',
            type: 'root_cause',
            details: '中央アジアから購入・登用された屈強なトルコ系奴隷軍人が、軍の中核から次第に政治的な実権を握るようになった。'
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
        id: 'EVENT-Seljuk',
        type: 'default',
        data: {
            label: 'セルジューク朝の台頭と\nスンニ派の庇護者',
            type: 'event',
            iconUrl: '/icons/crusades.png',
            details: '奴隷兵ではなく自由民として移動を開始したトルコ系部族が、11世紀に[[セルジューク朝]]を建国し、中東へと怒涛の進撃を開始しました。\n\n彼らはバグダードに入城し、権威を失墜していたアッバース朝のカリフから「[[スルターン|スルタン]]（世俗の最高権力者）」の称号を授与されました。これによりトルコ系民族は、シーア派などの脅威から正統派（スンニ派）イスラーム社会を守護する「軍事・政治の絶対的覇者」としての地位を確立しました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-CrusadesFocus',
        type: 'default',
        data: {
            label: 'アラブ・ペルシア・トルコ\n三層文化の融合',
            type: 'action',
            details: 'セルジューク朝や、それに続くトルコ系王朝（ガズナ朝、マムルーク朝など）のもとで、独自の分業体制を伴うハイブリッドな文化が完成しました。\n\n宗教と法は「アラブ人（コーラン・シャリーア）」が、高度な行政・文学・学問は「[[ペルシア文化|ペルシア人]]（ペルシア語）」が、そして国家の防衛と統治・軍陣の指揮は「トルコ人軍人」がそれぞれ担うという、非常に機能的で重層的な「トルコ=イスラーム文化」社会が中東一帯に定着しました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Iqta',
        type: 'default',
        data: {
            label: 'イクター制による\n国家の軍事拠点化',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'トルコ系王朝は、騎馬軍団を維持するために「[[イクター制]]」という制度を広く導入しました。\n\nこれは軍人（アミールなど）に対して給与の代わりに「国から土地の徴税権を与える」制度です。アミールたちはその税収で自らの直属騎兵軍団を養い、戦争が起こればスルタンの元へ駆けつけました。このシステムの普及により、中東社会は強大な常備軍を抱える「軍事化された社会」へとその性格を変曲させました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-Legacy',
        type: 'default',
        data: {
            label: 'オスマン帝国への布石\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/voyage.png',
            details: 'モンゴル帝国による侵攻でセルジューク朝は崩壊し、ユーラシア全域が大きな打撃を受けましたが、中央アジアからのトルコ人の西への移住はかえって加速しました。\n\nビザンツ帝国と接する小アジア（アナトリア）の辺境に逃れて集結した「聖戦士（ガーズィー）」の集団は、その熱狂と優れた軍事力、ペルシアの行政システムを総動員して、やがて地中海世界全域を支配する超大国「[[オスマン帝国]]」へと急成長を遂げることになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // トルコ人政権誕生の前提
    { id: 'etur-1', source: 'CTX-AbbasidDecline', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'etur-2', source: 'RC-MamlukSystem', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'etur-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-Seljuk', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // セルジューク朝から十字軍・制度確立へ（並列）
    { id: 'etur-4', source: 'EVENT-Seljuk', target: 'ACTION-CrusadesFocus', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },
    { id: 'etur-5', source: 'EVENT-Seljuk', target: 'RES-Iqta', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },

    // 十字軍激突経験からの次代の覇権への繋がり
    { id: 'etur-6', source: 'ACTION-CrusadesFocus', target: 'RES-Legacy', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const turkicEdges = addArrowMarkers(edges);
