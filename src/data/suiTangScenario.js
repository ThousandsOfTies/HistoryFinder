import { addArrowMarkers } from './edgeUtils';

// ===== 隋・唐帝国シナリオ =====

// ノード定義
export const suiTangNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-NorthernSouthern',
        type: 'default',
        data: {
            label: '魏晋南北朝の大分裂と\n民族大移動(五胡)',
            type: 'context',
            details: '漢王朝の崩壊（後漢末期・三国志の時代）から約400年間、中国大陸は深刻な政治的分裂状態（[[魏晋南北朝時代]]）に陥りました。\n\n気候寒冷化などを背景に、北方の５つの遊牧民族（五胡）が華北に侵入・建国（[[五胡十六国時代|五胡十六国]]）し、漢民族は南の長江流域へと追いやられました。この未曾有の混乱の中で、北方遊牧民の武力と漢民族の文化が激しく混ざり合う「胡漢融合」が進行しました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-GrandCanal',
        type: 'default',
        data: {
            label: '均田制の創設と\n府兵制による強兵',
            type: 'root_cause',
            details: '華北を統一した北魏（鮮卑族）は、荒廃した土地問題を解決するため、国家が農民に土地を等しく支給し耕作させる「[[均田制]]」を実施しました。\n\n後にこの制度を基盤として、土地を与える代わりに農民に兵役を課す「[[府兵制]]」が整備されました。これにより、強力で経済的な自作農民軍が創出され、その後の隋・唐という巨大な統一帝国を支える強靭な軍事力・財政基盤の土台となりました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-SUITANG',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Bureaucracy',
        type: 'default',
        data: {
            label: '科挙の創設と\n実力主義の官僚制度',
            type: 'event',
            details: '家柄ではなく試験（科挙）で優秀な人材を登用する制度が始まり、皇帝の権力を支える強力な官僚機構が形成された。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-TangSystem',
        type: 'default',
        data: {
            label: '唐の統治システム\n(律令制と科挙)の完成',
            type: 'action',
            details: '隋を引き継いだ唐は、刑法（律）と行政法（令）に基づく精緻な法治システム「[[律令制]]（三省六部）」を大成させました。\n\nまた、貴族の世襲による権力独占を防ぐため、実力主義の国家公務員試験である「[[科挙]]」を本格的に制度化し、皇帝に権力が集中する強力な中央集権官僚国家の完成形を作り上げました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Cosmopolitan',
        type: 'default',
        data: {
            label: '隋の再統一と\n大運河の建設',
            type: 'event',
            iconUrl: '/icons/delhi.png',
            details: '589年、[[隋]]（楊堅）が北の軍事力をもって約400年ぶりに中国大陸を再統一しました。\n\n続く煬帝は、華北の「政治的中心（長安・洛陽）」と、江南の「豊かな経済的中心（長江流域）」を水路で繋ぐ巨大インフラ「[[大運河 (中国)|大運河]]」を建設しました。隋自体は過酷な動員と高句麗遠征の失敗で単命に終わりますが、この大動脈は中国大陸を一体化させる決定的な役割を果たしました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-EastAsiaSphere',
        type: 'default',
        data: {
            label: '東アジア文化圏\n(唐風文化)の絶頂',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'シルクロードを通じた活発な東西交易により、首都・[[長安]]は人口100万を超え、ペルシア人やソグド人など多様な民族と宗教（ネストリウス派キリスト教、ゾロアスター教など）が交錯する超国際都市として繁栄しました。\n\n日本（遣唐使）、新羅、渤海などは[[唐]]の圧倒的な先進システム（律令制、漢字、仏教、儒教）を競って導入し、唐を中心とした強固な「東アジア文化圏」が最盛期を迎えました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 隋唐帝国形成の前提
    { id: 'est-1', source: 'CTX-NorthernSouthern', target: 'LOGIC-AND-SUITANG', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'est-2', source: 'RC-GrandCanal', target: 'LOGIC-AND-SUITANG', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'est-3', source: 'LOGIC-AND-SUITANG', target: 'EVENT-Bureaucracy', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 官僚制度から唐の律令国家へ
    { id: 'est-4', source: 'EVENT-Bureaucracy', target: 'ACTION-TangSystem', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 唐の高度なシステムが生み出した結果
    { id: 'est-5', source: 'ACTION-TangSystem', target: 'RES-Cosmopolitan', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'est-6', source: 'ACTION-TangSystem', target: 'RES-EastAsiaSphere', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const suiTangEdges = addArrowMarkers(edges);
