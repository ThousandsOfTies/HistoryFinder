import { addArrowMarkers } from './edgeUtils';

// ===== ギリシア・ローマ文明シナリオ =====

// ノード定義
export const grecoRomanNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-Mediterranean',
        type: 'default',
        data: {
            label: '温暖な地中海ネットワーク\n(海上交易の発展)',
            type: 'context',
            details: '[[地中海]]は波が比較的穏やかで、対岸に渡りやすいという地理的条件を備えていました。\n\nこのため、[[フェニキア]]人などの海洋民族によるオリーブやワインの海上交易ネットワークが早くから発達し、後に続くギリシアのポリスやローマ帝国がその恩恵とインフラを受け継ぎました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-IronAge',
        type: 'default',
        data: {
            label: '鉄器の普及と\n重装歩兵(平民)の台頭',
            type: 'root_cause',
            details: '安価な鉄器が普及したことで、貴族だけでなく一般の平民（農民）でも自費で武具を揃えられるようになりました。\n\n密集陣形（[[ファランクス]]）を組んで戦う平民たちが軍事力の主力となったことで、彼らはポリスの防衛に対する貢献を背景に、政治的権利（参政権）を強く要求するようになりました。'
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
        id: 'EVENT-GreekPolis',
        type: 'default',
        data: {
            label: 'ギリシアでの民主政発展と\nポリス社会の成熟',
            type: 'event',
            iconUrl: '/icons/greco_roman.png',
            details: 'アテネなどの[[ポリス]]（都市国家）において、平民の要求に応える形で[[アテナイの民主主義|民主政]]が段階的に発展しました。\n\nペルシア戦争での勝利（マラソンの戦いやサラミスの海戦）を通じて無産市民の発言力も強まり、ペリクレスの時代に「直接民主政」が完成しました。同時に、哲学・演劇・美術など人間中心のギリシア文化が黄金期を迎えました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-RomanEmpire',
        type: 'default',
        data: {
            label: 'ローマによる地中海統一\n(法とインフラによる統治)',
            type: 'action',
            details: 'イタリア半島の一都市国家から始まったローマは、共和政から帝政へと移行する過程でカルタゴなどを破り、地中海全域を「内海（我らが海）」として支配下に置きました。\n\nギリシアの人文主義的な文化を吸収しつつ、[[ローマ法]]（成文法）の整備や、街道・水道橋といった圧倒的なインフラ（建築工学）によって広大な帝国を合理的に統治し、「[[パクス・ロマーナ]]（ローマの平和）」を実現しました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Christianity',
        type: 'default',
        data: {
            label: 'キリスト教の国教化\n(中世の精神的支柱)',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '当初は迫害されていた[[初期キリスト教|キリスト教]]ですが、帝国の衰退期になると、[[ミラノ勅令]]による公認を経て、最終的にテオドシウス帝のもとでローマ帝国の国教となりました。\n\nこれにより、古代の多神教文化は終わりを告げ、来る「中世ヨーロッパ世界」を精神的に支配する強大なキリスト教教会の基盤が整いました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-ClassicalCulture',
        type: 'default',
        data: {
            label: 'ヨーロッパ文化の源流確立\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/renaissance.png',
            details: 'ギリシアの市民的・哲学的な精神と、ローマの法的・実践的なシステムは「[[古典古代|古典文化]]」として統合され、のちにフランク王国に引き継がれました。\n\nさらに数百年後、中世のキリスト教的価値観が行き詰まった際、ふたたびこのギリシア・ローマの「人間中心主義」への回帰を目指す「[[ルネサンス]]運動」の強烈な起爆剤となりました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // ギリシア・ローマ文明の前提
    { id: 'egr-1', source: 'CTX-Mediterranean', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'egr-2', source: 'RC-IronAge', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'egr-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-GreekPolis', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // ギリシアからローマ帝国へのバトンタッチ
    { id: 'egr-4', source: 'EVENT-GreekPolis', target: 'ACTION-RomanEmpire', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // ローマ帝国支配が残した巨大な2つの遺産（宗教と文化）
    { id: 'egr-5', source: 'ACTION-RomanEmpire', target: 'RES-Christianity', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'egr-6', source: 'ACTION-RomanEmpire', target: 'RES-ClassicalCulture', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const grecoRomanEdges = addArrowMarkers(edges);
