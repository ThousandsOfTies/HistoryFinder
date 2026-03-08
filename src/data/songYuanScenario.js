import { addArrowMarkers } from './edgeUtils';

// ===== 宋・元時代シナリオ =====

// ノード定義
export const songYuanNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-TangCollapse',
        type: 'default',
        data: {
            label: '武断政治(五代十国)への反省と\n士大夫階級の台頭',
            type: 'context',
            details: '唐末期の安史の乱から[[五代十国時代]]にかけて、軍事力を持つ武将（節度使・軍閥）が横暴を極める「武断政治」が続きました。これにより旧来の貴族層は完全に没落しました。\n\nその後、宋を建国した趙匡胤（太祖）は、武人が力を持つことを徹底して抑え込み（文治主義）、激しい競争である科挙試験を突破した文人官僚「[[士大夫]]（したいふ）」階層が皇帝を補佐して政治を動かす新しい社会体制を作り上げました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-AgriCommercialRev',
        type: 'default',
        data: {
            label: '江南開発による経済革命\n(商業・貨幣の爆発)',
            type: 'root_cause',
            details: '[[宋 (王朝)|宋代]]には、高温多湿に強い占城稲（チャンパ米）の導入などにより江南（長江下流域）の農業生産力が飛躍的に向上しました（「蘇湖熟すれば天下足る」）。\n\nまた、農村の市場（草市）が発展して商業が爆発的に活性化し、銅銭だけでは通貨が足りず、世界初の実用的な紙幣（[[交子 (世界初の紙幣)|交子・会子]]）が発行されるなど、中世西欧を遥かに凌ぐ極めて高度な「貨幣経済・商業革命」が進行しました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-SONGYUAN',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-SongCulture',
        type: 'default',
        data: {
            label: '宋による文治主義と\n士大夫(知識人)文化の成熟',
            type: 'event',
            details: '武断政治を嫌った宋は科挙を強化して文官が国を治める「文治主義」を採用し、武力は弱体化したが文化・経済・技術（火薬・羅針盤等）は最高潮に達した。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-MongolEmpire',
        type: 'default',
        data: {
            label: 'モンゴル帝国(元)の\n圧倒的な武力征服',
            type: 'action',
            details: '13世紀、チンギス・ハンによって統一された[[モンゴル帝国]]は、最強の騎馬軍団をもってユーラシア大陸を席巻しました。\n\n第5代フビライ・ハンの時代、ついに南宋を滅ぼして「[[元 (王朝)|元]]」を建国し、チベットや雲南なども含めた中国全土を完全支配しました。中国の歴史上初めて、漢民族以外の遊牧民族が中国大陸の全域を支配する「征服王朝」が完成した瞬間です。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-PaxMongolica',
        type: 'event',
        data: {
            label: '文治政治(宋)と\n北方民族(遼・金)の軍事圧力',
            type: 'event',
            iconUrl: '/icons/renaissance.png',
            details: '[[北宋|宋]]は、君主独裁と文人官僚（文治政治）による極めて安定した内政を実現しましたが、軍事力（武）を軽視したため、軍事的には非常に脆弱でした。\n\nそのため、強大な騎馬軍団を持つ北方の[[征服王朝]]（契丹族の遼、女真族の金など）に常に圧迫され、多額の銀や絹（歳幣）を支払うことで平和を買う「屈辱的な外交」を強いられました。最終的に北半分を金に奪われ、南へ逃れて「南宋」となりました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-TechnologyTransfer',
        type: 'default',
        data: {
            label: 'ルネサンス・大航海時代への\n発火点',
            type: 'result',
            iconUrl: '/icons/voyage.png',
            details: '宋で発明・実用化された[[中国の三大発明|三大発明]]（火薬、羅針盤、活版印刷術）は、このモンゴルの交通網（イスラーム商人を経由）に乗ってヨーロッパへと伝わりました。\n\nこれらの技術は、ヨーロッパにおける封建騎士の没落（火薬）、遠洋航海（羅針盤）、知の普及（印刷術による宗教改革・ルネサンス）を引き起こす決定的な触媒となり、のちの「[[大航海時代]]」へと繋がる劇的なパラダイムシフトの引き金となりました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 宋の時代への前提
    { id: 'esy-1', source: 'CTX-TangCollapse', target: 'LOGIC-AND-SONGYUAN', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'esy-2', source: 'RC-AgriCommercialRev', target: 'LOGIC-AND-SONGYUAN', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'esy-3', source: 'LOGIC-AND-SONGYUAN', target: 'EVENT-SongCulture', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 宋の文化とモンゴルの武力支配（歴史の転換）
    { id: 'esy-4', source: 'EVENT-SongCulture', target: 'ACTION-MongolEmpire', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // モンゴル帝国が世界へもたらした結果
    { id: 'esy-5', source: 'ACTION-MongolEmpire', target: 'RES-PaxMongolica', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'esy-6', source: 'ACTION-MongolEmpire', target: 'RES-TechnologyTransfer', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const songYuanEdges = addArrowMarkers(edges);
