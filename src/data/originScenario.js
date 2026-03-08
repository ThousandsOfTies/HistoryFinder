import { addArrowMarkers } from './edgeUtils';

// ===== 人類の出現・文明の誕生シナリオ =====

// ノード定義
export const originNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-IceAgeEnd',
        type: 'default',
        data: {
            label: '氷期からの温暖化と\n自然環境の変化',
            type: 'context',
            details: '約1万年前、数万年続いた最後の氷期（[[最終氷期]]）が終わりを迎え、地球規模で気候が温暖化（[[完新世]]）へと転じました。\n\n氷河が後退して海面が上昇し、現在に近い地形や気候帯が形成されました。この温暖化により、中東などの特定の地域では野生の麦や豆類といった食用植物が群生し、ヤギやヒツジなど人間が狩猟しやすい（のちに家畜化される）動物の生息域が広がりました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-AgriRev',
        type: 'default',
        data: {
            label: '農業革命の発生\n(農耕・牧畜の開始)',
            type: 'root_cause',
            details: '気候変動を背景に、人类は自然界の動植物をただ「獲得（狩猟・採集）」する生活から、自ら育てて「生産」する生活へと大転換を遂げました。\n\nこれを「[[新石器革命]]（農業革命）」と呼びます。西アジアの「[[肥沃な三日月地帯]]」などで小麦や大麦の栽培、羊や牛の飼育が始まりました。これにより、狭い土地でも安定して多段階のカロリーを得られるようになり、人類の生存システムが根本から変わりました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-ORIGIN',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Settlement',
        type: 'default',
        data: {
            label: '定住化と集落(村落)の形成',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: '農耕を行うには、種まきから収穫まで同じ土地を手入れし続ける必要があり、また収穫した大量の穀物を備蓄（貯蔵）しなければなりません。\n\nそのため、獲物を追って移動する生活を捨て、特定の場所に[[定住]]して重い土器（貯蔵用）などを作り、複数の家族が集まった「集落（村落）」を形成するようになりました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Surplus',
        type: 'default',
        data: {
            label: '余剰生産物の蓄積と\n非農業従事者の誕生',
            type: 'action',
            details: '農耕技術（灌漑や農具）の発達により、人口を上回る莫大な「余剰生産物（余った食糧）」が生み出されるようになりました。\n\nこれにより、集落内の全員が農作業をする必要がなくなり、食糧生産から解放された「非農業従事者」が誕生しました。彼らは[[青銅器時代|青銅器]]などを作る専門の「職人」や、治水や祭祀（神事）を専門に主導する「神官・戦士」となり、[[社会階層]]（分業と支配）が一気に進みました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Civilization',
        type: 'default',
        data: {
            label: '大河文明誕生への土台\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '余剰食糧を管理し、集落間で水や土地を巡って争う中で、人々をまとめ上げる「権力（王）」と大きな「都市（国家）」が生まれました。\n\n徴税や記録のための「文字」や「暦」も発明され、これらを基盤として、ティグリス・ユーフラテス川、ナイル川、インダス川、黄河などの流域で高度な「[[四大文明]]」が花開いていくことになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 農業革命の前提
    { id: 'eori-1', source: 'CTX-IceAgeEnd', target: 'LOGIC-AND-ORIGIN', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eori-2', source: 'RC-AgriRev', target: 'LOGIC-AND-ORIGIN', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eori-3', source: 'LOGIC-AND-ORIGIN', target: 'EVENT-Settlement', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 定住化から余剰生産へ
    { id: 'eori-4', source: 'EVENT-Settlement', target: 'ACTION-Surplus', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 次代への繋がり
    { id: 'eori-5', source: 'ACTION-Surplus', target: 'RES-Civilization', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const originEdges = addArrowMarkers(edges);
