import { addArrowMarkers } from './edgeUtils';

// ===== ティグリス・ユーフラテス等の大河文明（メソポタミア等）シナリオ =====

// ノード定義
export const mesopotamiaNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-Agriculture',
        type: 'default',
        data: {
            label: '氷期からの温暖化と\n自然環境の変化',
            type: 'context',
            details: '約1万年前、地球規模の気候変動により[[氷期]]が終わり、沖積平野や大河周辺の自然環境が大きく変化しました。\n\n氷河が後退して気候が温暖化した（[[完新世]]）ことで、野生の麦など栽培可能な植物群落や、家畜化に適した動物が生息地を広げました。これが後の農業革命の舞台を整えることになります。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-Irrigation',
        type: 'default',
        data: {
            label: '大河川流域における\n大規模な治水・灌漑の必要性',
            type: 'root_cause',
            details: '[[メソポタミア文明]]やエジプトなどの乾燥地帯で農業を行うには、大河の氾濫を制御し水を引く（[[灌漑]]）ための大規模な共同作業が不可欠だった。'
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
        id: 'EVENT-CityState',
        type: 'default',
        data: {
            label: '大河沿いへの定住と\n治水(灌漑)システムの構築',
            type: 'event',
            iconUrl: '/icons/sumerian.png',
            details: 'ティグリス川・ユーフラテス川、ナイル川などの大河がもたらす肥沃な泥土を利用するため、人々は川沿いに定住しました。\n\n毎年のように起こる洪水を制御し、乾燥地帯に水を引くための大規模な「[[灌漑農業]]」システムを構築するには、多くの人々の労働力を組織し、統率する強力なリーダーシップが必要不可欠となりました。これが後の王権成立に繋がります（[[メソポタミア]]）。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-WritingSystem',
        type: 'default',
        data: {
            label: '余剰生産と社会階層の誕生\n(神官・役人・職人)',
            type: 'action',
            details: '灌漑農業によって莫大な食糧の「余剰」が生まれ、全員が農作業をする必要がなくなりました。\n\nこれにより、治水を指導する王や神官、穀物を管理する役人、青銅器や土器を作る専業職人など、非農業従事者が誕生し、社会に明確な身分階層（ヒエラルキー）が形成される（[[文明]]）に至りました。[[楔形文字]]や暦もこの管理の必要性から発明されました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-TradeNetwork',
        type: 'default',
        data: {
            label: '広域な交易ネットワーク\nの成立',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '大河川の恩恵で豊かな穀物を持つ一方、メソポタミアでは金属や木材が不足していました。このため、遠方の地域（アナトリア、イラン高原、インダス文明など）との間で、穀物と引き換えにこれらの資源を得るための広域な[[古代の貿易]]路が大きく開拓されました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-EmpireFoundation',
        type: 'default',
        data: {
            label: 'オリエント世界(四大文明)の隆盛\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/orient_persia.png',
            details: 'メソポタミアとエジプトを中心とする[[古代オリエント]]の高度な文明システムは、その後数千年にわたって周辺地域へと波及し続けました。\n\nのちのヒッタイトの鉄器やアッシリアなどの巨大武力国家の台頭を経て、やがて広大な「オリエント・ペルシア帝国」へと統合されていく強力な土台となりました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 文明誕生の前提
    { id: 'emes-1', source: 'CTX-Agriculture', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'emes-2', source: 'RC-Irrigation', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'emes-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-CityState', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 国家の統治システムの発展
    { id: 'emes-4', source: 'EVENT-CityState', target: 'ACTION-WritingSystem', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 社会的・歴史的な結果
    { id: 'emes-5', source: 'ACTION-WritingSystem', target: 'RES-TradeNetwork', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'emes-6', source: 'ACTION-WritingSystem', target: 'RES-EmpireFoundation', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const mesopotamiaEdges = addArrowMarkers(edges);
