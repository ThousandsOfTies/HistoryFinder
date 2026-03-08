import { addArrowMarkers } from './edgeUtils';

// ===== イスラーム王朝のインド侵入シナリオ =====

// ノード定義
export const indiaIslamicNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-HinduSociety',
        type: 'default',
        data: {
            label: 'インドにおける\nカースト社会の定着',
            type: 'context',
            details: '古代インド（グプタ朝以降）において、[[ヒンドゥー教]]と『マヌ法典』に基づく強固な身分制度（[[カースト]]制度）が社会の隅々まで定着していました。\n\nこの厳格な階層社会は、上位カースト（バラモン等）への不満や、下位カーストの抑圧による社会的な分断を常に内包しており、外部からの「平等」を謳う新しい価値観（イスラーム）が浸透する下地ともなりました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-IslamicExpansion',
        type: 'default',
        data: {
            label: 'ガズナ・ゴール朝による\n北インド侵入',
            type: 'root_cause',
            details: '11世紀から12世紀にかけて、アフガニスタン方面からトルコ系・アフガン系のイスラーム王朝（[[ガズナ朝]]、[[ゴール朝]]）が豊かなインドの富を求めて北インドへの軍事侵攻を繰り返しました。\n\n彼らはヒンドゥー教の寺院を破壊しながら略奪を繰り返し、強力な騎馬軍団によって分裂していた北インドの諸侯（ラージプート）を打ち破って、イスラーム支配の橋頭堡を築きました。'
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
        id: 'EVENT-DelhiSultanate',
        type: 'default',
        data: {
            label: 'デリー・スルタン朝の成立\n(奴隷王朝の建国)',
            type: 'event',
            iconUrl: '/icons/delhi.png',
            details: '1206年、ゴール朝の有力な武将であったトルコ系奴隷出身のアイバクが、主君の暗殺を機にインドのデリーで独立し、「[[奴隷王朝]]」を建国しました。\n\nこれ以降およそ300年間にわたり、デリーを都とする5つのイスラーム系王朝（ハルジー朝、トゥグルク朝など）が北インド一帯を交代で支配します。これらを総称して「[[デリー・スルタン朝]]」と呼び、インドにおける本格的なイスラーム支配が始まりました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Jizya',
        type: 'default',
        data: {
            label: 'ヒンドゥー教徒の改宗と\n緩やかな共存',
            type: 'action',
            details: '支配層となったムスリムは、当初は異教徒を弾圧したものの、次第に「[[ジズヤ]]（人頭税）」を納めればヒンドゥー教徒の信仰や慣習を認める現実的な統治へと転換しました。\n\n一方で、「神の前の平等」を説くイスラーム教は、厳格なカースト制度で抑圧されていたインドの下半身層（下位カースト）から大きな支持を集め、多くの人々が自発的に[[インドにおけるイスラーム|イスラームへ改宗]]していきました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Conversion',
        type: 'default',
        data: {
            label: '下層民・商人を中心とした\nイスラームへの自発的改宗',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'カースト制度で虐げられていた下層民や、平等な取引を望む商人らが、「神の前の平等」を説くイスラーム教へ自発的に改宗していった。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-IndoIslamicCulture',
        type: 'default',
        data: {
            label: 'インド・イスラーム文化\n(ウルドゥー語など)の開花',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '長期にわたる共存の中で、外来の強烈なイスラーム文化（ペルシア語や[[インド・イスラム建築|イスラーム建築]]）と、土着のヒンドゥー気風（サンスクリット文化）が融合する「インド・イスラーム文化」が開花しました。\n\nアラビア語の文字を使いつつ現地の言葉をベースにした「[[ウルドゥー語]]（軍営の言語の意）」が誕生し、後世のクトゥブ・ミナールなどの独特な巨大建造物にもその融合の跡が見られます。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // イスラーム政権誕生の前提
    { id: 'ein-isl-1', source: 'CTX-HinduSociety', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'ein-isl-2', source: 'RC-IslamicExpansion', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'ein-isl-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-DelhiSultanate', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // スルタン朝の統治方針へ
    { id: 'ein-isl-4', source: 'EVENT-DelhiSultanate', target: 'ACTION-Jizya', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 統治政策がもたらした2つの結果（社会構造変化と文化融合）
    { id: 'ein-isl-5', source: 'ACTION-Jizya', target: 'RES-Conversion', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'ein-isl-6', source: 'ACTION-Jizya', target: 'RES-IndoIslamicCulture', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const indiaIslamicEdges = addArrowMarkers(edges);
