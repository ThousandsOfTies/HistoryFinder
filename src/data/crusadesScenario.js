import { addArrowMarkers } from './edgeUtils';

// ===== 十字軍の遠征シナリオ =====

// ノード定義
export const crusadesNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-FeudalExpansion',
        type: 'default',
        data: {
            label: '農業発展と\n封建社会(騎士)の膨張エネルギー',
            type: 'context',
            details: '農業技術の進歩で人口が増加し、土地を求める騎士階級など西欧社会全体に外へ向かう膨張エネルギーが蓄積されていた。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-SeljukThreat',
        type: 'default',
        data: {
            label: 'セルジューク朝の台頭と\n小アジアへの進出',
            type: 'context',
            details: '11世紀、イスラム世界の新たな覇者として台頭したトルコ系の[[セルジューク朝]]が、ビザンツ帝国（東ローマ帝国）の領土である小アジア（現在のアナトリア）へ進出し、[[マンジケルトの戦い]]で勝利を収めました。\n\nこれによりビザンツ帝国は深刻な軍事的危機に陥り、ローマ教皇へ救援を要請することになります。'
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
        id: 'EVENT-FirstCrusade',
        type: 'default',
        data: {
            label: '十字軍の遠征と\nエルサレム王国の建国',
            type: 'event',
            iconUrl: '/icons/crusades.png',
            details: '1096年に始まった第1回[[十字軍]]は、イスラム勢力の分裂に乗じて奇跡的に聖地エルサレムの奪還に成功し、「[[エルサレム王国]]」などの十字軍国家を中東に建国しました。\n\nしかし、圧倒的な兵站の不利とイスラム側の反撃（英雄サラディンなど）により、最終的にアッコーが陥落するまで約200年に渡る泥沼の争乱が続くことになります。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Exchange',
        type: 'default',
        data: {
            label: '遠征の失敗による教皇権の失墜と\n王権の伸張',
            type: 'action',
            details: '200年に及ぶ遠征は最終的に失敗に終わり（聖地喪失）、提唱者である教皇やカトリック教会の権威は大きく失墜（[[アナーニ事件]]など）しました。\n\n一方で、遠征に参加して戦死したり借金を抱えたりした封建諸侯（騎士）たちは没落し、相対的に「国王」の権力が強まったことで、中央集権的な[[絶対王政]]への道が開かれました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Decline',
        type: 'default',
        data: {
            label: '教皇・諸侯の没落と\n王権の強化',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '遠征が最終的に失敗したことで、主導した[[教皇権]]の権威が失墜し、従軍して疲弊した諸侯に代わって「国王の[[中央集権]]化」が進んだ。(政治的変化)'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-Trade',
        type: 'default',
        data: {
            label: '東方貿易(レヴァント貿易)の\n活発化と都市の繁栄',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '軍事的失敗の一方で、兵員や物資の輸送を担ったイタリアの港湾都市（[[ヴェネツィア共和国|ヴェネツィア]]やジェノヴァなど）は、イスラム世界との「[[東方貿易]]（レヴァント貿易）」を独占し、莫大な富を蓄積しました。\n\n香辛料や絹織物などの東方の物産が西欧に大量に流入し、商業の復活（商業ルネサンス）と貨幣経済が大きく発達しました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-Culture',
        type: 'default',
        data: {
            label: 'イスラーム・ビザンツ文化の流入\n(ルネサンスへの布石)',
            type: 'result',
            iconUrl: '/icons/renaissance.png',
            details: '十字軍による中東との恒常的な接触を通じ、当時西ヨーロッパよりもはるかに進んでいたイスラームの医学・天文学、そしてアラビア語に翻訳（[[大翻訳時代]]）されて保存されていた古代ギリシアの哲学（アリストテレスなど）がヨーロッパへ逆輸入されました。\n\n「[[12世紀ルネサンス]]」とも呼ばれるこの知と富の蓄積が、後の大航海時代やイタリアでの「ルネサンス運動」を大爆発させる決定的な土壌となりました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #14b8a6', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 十字軍開始の前提
    { id: 'ecru-1', source: 'CTX-FeudalExpansion', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'ecru-2', source: 'RC-SeljukThreat', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'ecru-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-FirstCrusade', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 十字軍の長期化（激突と交流）
    { id: 'ecru-4', source: 'EVENT-FirstCrusade', target: 'ACTION-Exchange', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 歴史を動かした3つの巨大な結果（政治、経済、文化への分岐）
    { id: 'ecru-5', source: 'ACTION-Exchange', target: 'RES-Decline', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'ecru-6', source: 'ACTION-Exchange', target: 'RES-Trade', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 3 } },
    { id: 'ecru-7', source: 'ACTION-Exchange', target: 'RES-Culture', type: 'straight', style: { stroke: '#14b8a6', strokeWidth: 4 } }
];

export const crusadesEdges = addArrowMarkers(edges);
