import { addArrowMarkers } from './edgeUtils';

// ===== オリエント・ペルシア帝国シナリオ =====

// ノード定義
export const orientNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-AncientCivs',
        type: 'default',
        data: {
            label: '古代文字文明の成熟と\n民族移動(海の民)',
            type: 'context',
            details: 'メソポタミアとエジプトで始まった高度な大河文明は、数百年の時を経て大国（エジプト新王国など）へ成長し、東地中海地域で成熟した外交や交易網を築いていました。\n\nしかし、紀元前1200年頃、系統不明の謎の武装集団である「[[海の民]]」が突如として各地を襲撃。彼らの侵攻により多くの古代帝国や都市国家が連鎖的に崩壊（[[前1200年のカタストロフ]]）し、オリエント世界は一時的な権力の空白期に突入しました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-IronHittites',
        type: 'default',
        data: {
            label: '鉄器の普及と\n遊牧民(騎馬)の軍事力',
            type: 'root_cause',
            details: 'かつてアナトリアの[[ヒッタイト]]帝国が独占していた「鉄器の製法」が、帝国の滅亡によって一気にオリエント全域へと拡散（普及）しました。\n\n石器や青銅器よりも遥かに強力で安価な[[鉄器時代|鉄製の武器]]と、遊牧民族が生み出した乗馬技術（騎馬軍団や戦車）が組み合わさることで、軍事力や機動力のパラダイムシフトが起き、大規模な征服戦争が可能になりました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-ORIENT',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Assyria',
        type: 'default',
        data: {
            label: 'アケメネス朝ペルシアの\n「寛容な」再統一',
            type: 'action',
            details: 'アッシリア崩壊後の四国分立時代を経て、イラン高原から興った[[アケメネス朝]]ペルシア（[[キュロス2世]]、ダレイオス1世ら）が、紀元前525年にオリエントを再び統一しました。\n\nアッシリアの失敗に学んだペルシアは、圧倒的な軍事力で支配しつつも、服属と貢納さえ誓えば各民族の宗教や言語、風習を尊重する「寛容な統治」を行いました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Achaemenid',
        type: 'default',
        data: {
            label: 'アッシリアによる\n初のオリエント武力統一',
            type: 'event',
            iconUrl: '/icons/orient_persia.png',
            details: 'メソポタミア北部から台頭した[[アッシリア]]帝国は、普及した鉄製の武器と戦車、そして残虐とも言えるほどの徹底した恐怖政治を用いて、紀元前7世紀に史上初めて全オリエント（メソポタミアとエジプトの両方）を武力で統一しました。\n\n各地に総督を派遣し、駅伝制を敷くなど広域支配のシステムを作り上げましたが、被征服民への苛酷な弾圧と重税への反発が激しく、統一からわずか半世紀ほどで反乱により急速に滅亡してしまいました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-EastWestTrade',
        type: 'default',
        data: {
            label: '東西交易路の確立と繁栄',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '広大な帝国が安定したことで、「[[王の道]]」を中心に東西の交易ネットワーク（[[シルクロード]]）が大きく結ばれ、経済が発展した。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-IslamicFoundation',
        type: 'default',
        data: {
            label: 'イスラーム世界への土台\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/islamic_empire.png',
            details: 'ペルシアをはじめとする高度に統合された広域専制統治のシステムは、後世の巨大な「イスラーム帝国」の行政基盤として引き継がれた。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 帝国形成の前提
    { id: 'eori2-1', source: 'CTX-AncientCivs', target: 'LOGIC-AND-ORIENT', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eori2-2', source: 'RC-IronHittites', target: 'LOGIC-AND-ORIENT', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eori2-3', source: 'LOGIC-AND-ORIENT', target: 'EVENT-Assyria', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // アッシリアからペルシアの統治体系へ
    { id: 'eori2-4', source: 'EVENT-Assyria', target: 'ACTION-Achaemenid', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 大帝国の平和が生み出した結果
    { id: 'eori2-5', source: 'ACTION-Achaemenid', target: 'RES-EastWestTrade', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'eori2-6', source: 'ACTION-Achaemenid', target: 'RES-IslamicFoundation', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const orientEdges = addArrowMarkers(edges);
