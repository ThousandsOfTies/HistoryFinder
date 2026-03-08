import { addArrowMarkers } from './edgeUtils';

// ===== 秦・漢帝国（中華帝国の原型）シナリオ =====

// ノード定義
export const qinHanNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-SpringAutumn',
        type: 'default',
        data: {
            label: '春秋戦国時代の\n激しい生存競争',
            type: 'context',
            details: '周王朝の権威が失墜した紀元前8世紀以降、数百の諸侯が覇権を争う[[春秋戦国時代]]が500年も続きました。\n\nこの時代、生き残るために旧来の身分にとらわれない実力主義（下克上）が広まりました。鉄製農具の普及による農業生産力の向上や、富国強兵のための思想家たち「[[諸子百家]]（儒家、法家など）」の活躍により、中国大陸の社会システムは劇的な進化を遂げました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-IronTool',
        type: 'default',
        data: {
            label: '法家思想の採用と\n徹底した富国強兵',
            type: 'root_cause',
            details: '西方の辺境国であった秦は、[[商鞅]]（しょうおう）などの法家思想家を登用し、君主への絶対服従と信賞必罰を定めた厳格な「[[法家|法]]」による国家改造（変法）を断行しました。\n\n家族単位での連帯責任や、農業と戦争に専念させる極端な軍国主義体制を敷き、他の六国を圧倒する経済力と冷徹な軍事マシーンを作り上げました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-QINHAN',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-QinUnify',
        type: 'default',
        data: {
            label: '秦による史上初の統一と\n中央集権化(始皇帝)',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: '紀元前221年、秦の王・政はついに中国大陸を初統一し、自らを初めて「皇帝（[[始皇帝]]）」と名乗りました。\n\n法家思想に基づき、全国を郡と県に分けて中央から官僚を派遣する「[[郡県制]]」を実施し、度量衡（長さや重さの基準）、貨幣の統一、さらには文字の統一（小篆）を強行的に推し進め、中国2000年の歴史の基本となる専制君主制の骨格を完成させました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-HanConfucian',
        type: 'default',
        data: {
            label: '急進的な改革への反発と\n漢王朝の成立',
            type: 'action',
            details: '万里の長城建設（対匈奴防衛）などの過酷な土木工事や、思想統制（焚書坑儒）、厳しすぎる法治に対する民衆の不満が爆発し、[[陳勝・呉広の乱]]を契機に秦はわずか15年で滅亡しました。\n\nその後の[[楚漢戦争]]（項羽と劉邦の戦い）を制した農民出身の劉邦（高祖）は「漢」を建国。秦の急進性を反省し、当初は直轄地以外の支配を諸侯に委ねる妥協的な「郡国制」を採用して社会を安定させました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-SilkRoad',
        type: 'default',
        data: {
            label: 'シルクロードの開拓と\n東アジア文化圏の原点',
            type: 'result',
            iconUrl: '/icons/voyage.png',
            details: '北方遊牧民（匈奴）を討伐するために張騫を西域へ派遣したことが契機となり、東西を結ぶ交易路「[[シルクロード]]（絹の道）」が開拓されました。\n\n漢の圧倒的な国力と文化（漢字、儒家思想など）は、朝鮮半島や日本、ベトナムといった周辺諸国に多大な影響を与え、ローマ帝国やペルシアとも間接的に繋がる「[[東アジア文化圏 (漢字文化圏)|東アジア文化圏]]」という巨大な枠組みがこの時代に形成されました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-ChinaSystem',
        type: 'default',
        data: {
            label: '儒教の国教化と\n「中華」国家体制の完成',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '第7代[[漢武帝|武帝]]の時代になると、漢は再び強力な中央集権体制（事実上の郡県制）を完成させます。\n\nこの時、董仲舒の建白により、統治の正当性を「天 mệnh」に求め、家族の倫理と君臣の秩序を重んじる「[[儒教]]」が国家の正統思想として採用されました（儒教の国教化）。厳格な「法」を骨格とし、道徳的な「儒」を皮とすることで、中国歴代王朝の統治システム（外儒内法）が完成しました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 帝国誕生の前提
    { id: 'eqnh-1', source: 'CTX-SpringAutumn', target: 'LOGIC-AND-QINHAN', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eqnh-2', source: 'RC-IronTool', target: 'LOGIC-AND-QINHAN', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eqnh-3', source: 'LOGIC-AND-QINHAN', target: 'EVENT-QinUnify', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 秦の武闘から漢の安定統治へ
    { id: 'eqnh-4', source: 'EVENT-QinUnify', target: 'ACTION-HanConfucian', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 漢帝国による結果と影響
    { id: 'eqnh-5', source: 'ACTION-HanConfucian', target: 'RES-SilkRoad', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'eqnh-6', source: 'ACTION-HanConfucian', target: 'RES-ChinaSystem', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const qinHanEdges = addArrowMarkers(edges);
