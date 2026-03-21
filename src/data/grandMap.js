import { addArrowMarkers } from './edgeUtils';

// ===== Level 1: 世界史の全体像（山崎チャート準拠） =====
// Topはシンプルに。詳細は各ノードのサブフロー（Level 2）で展開。

// レイアウト定数
const CX = 1150;      // 中心X
const COL1 = 20;      // 左端列（原因ノード用）
const COL2 = 400;     // 左寄り列
const COL3 = 900;     // 中央列
const COL4 = 1400;    // 右寄り列
const COL5 = 1900;    // 右端列

export const grandNodes = [
    // ==========================================
    // 序章: 人類の出発点
    // ==========================================
    { id: 'GLOBAL-Origin', type: 'default', data: { label: '人類の出現・文明の誕生', type: 'root_cause', iconUrl: '/icons/human_origin.png', details: '狩猟採集から農耕牧畜への転換（農業革命）により、都市と文明が誕生した。', subGraphId: 'origin', manualPosition: true }, position: { x: CX - 125, y: 20 }, style: { background: '#57534e', color: '#fff', border: '3px solid #292524', borderRadius: '8px', width: 250, padding: '15px', fontWeight: 'bold' } },
    { id: 'GLOBAL-Mesopotamia', type: 'default', data: { label: 'ティグリス・ユーフラテス等の大河文明', type: 'macro_event', iconUrl: '/icons/sumerian.png', details: 'メソポタミア・エジプトなどで最古の文明が誕生し、各地に波及して独自の文明が発達していった。', subGraphId: 'mesopotamia', manualPosition: true }, position: { x: CX - 125, y: 150 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 250, padding: '10px' } },

    // ==========================================
    // 第1〜4章: 4つの地域史（古代〜近世）
    // ==========================================
    { id: 'REGION-Europe', type: 'default', data: { label: 'ヨーロッパの歴史', type: 'macro_event', iconUrl: '/icons/greco_roman.png', details: '[[ギリシア・ローマ文明]]から[[封建社会]]を経て、[[十字軍]]と[[ルネサンス]]に至る。', subGraphId: 'europe', manualPosition: true }, position: { x: COL2, y: 350 }, style: { background: '#2563eb', color: '#fff', border: '2px solid #60a5fa', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-MiddleEast', type: 'default', data: { label: '中東の歴史', type: 'macro_event', iconUrl: '/icons/orient_persia.png', details: '[[オリエント帝国]]から[[イスラーム帝国]]、[[トルコ人王朝]]を経て[[オスマン帝国]]へ。', subGraphId: 'middle_east', manualPosition: true }, position: { x: COL3, y: 350 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-India', type: 'default', data: { label: 'インドの歴史', type: 'macro_event', iconUrl: '/icons/india_ancient.png', details: '[[マウリヤ朝]]・[[グプタ朝]]から[[イスラーム王朝]]の侵入を経て[[ムガル帝国]]へ。', subGraphId: 'india', manualPosition: true }, position: { x: COL4, y: 350 }, style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-China', type: 'default', data: { label: '中国の歴史', type: 'macro_event', iconUrl: '/icons/china_ancient.png', details: '[[秦・漢帝国]]から[[隋・唐]]、[[宋・元]]を経て[[明・清]]に至る。', subGraphId: 'china', manualPosition: true }, position: { x: COL5, y: 350 }, style: { background: '#be123c', color: '#fff', border: '2px solid #f43f5e', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },

    // ==========================================
    // 大航海時代への転換
    // ==========================================
    { id: 'CAUSE-Navigation', type: 'default', data: { label: '航海技術の発達', type: 'context', iconUrl: '/icons/navigation_tech_anime.png', details: '[[羅針盤]]、[[キャラベル船]]の改良。', subGraphId: 'navigation', manualPosition: true }, position: { x: COL1, y: 350 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 180, padding: '10px' } },
    { id: 'CAUSE-OttomanBlock', type: 'default', data: { label: '東方貿易路の遮断', type: 'context', iconUrl: '/icons/ottoman_blockade.png', details: '[[オスマン帝国]]による地中海支配。', subGraphId: 'ottoman', manualPosition: true }, position: { x: 630, y: 470 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    { id: 'GLOBAL-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: 715, y: 550 } },
    { id: 'GLOBAL-Discovery', type: 'default', data: { label: '大航海時代', type: 'macro_event', iconUrl: '/icons/discovery.png', details: '世界の一体化が始まった時代。', subGraphId: 'discovery', manualPosition: true }, position: { x: 620, y: 620 }, style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 240, padding: '18px', fontWeight: 'bold' } },

    // ==========================================
    // 近代の夜明けと帝国主義
    // ==========================================
    { id: 'CAUSE-IndustrialRev', type: 'default', data: { label: '産業革命', type: 'context', iconUrl: '/icons/industrial_revolution.png', details: '生産力の爆発的向上。', subGraphId: 'industrial_rev', manualPosition: true }, position: { x: COL2 - 280, y: 740 }, style: { background: '#44403c', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    { id: 'CAUSE-NationState', type: 'default', data: { label: '市民革命・国民国家', type: 'context', iconUrl: '/icons/nation_state_anime.png', details: 'ナショナリズムの誕生。', subGraphId: 'nation_state', manualPosition: true }, position: { x: COL2 - 330, y: 840 }, style: { background: '#7c2d12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    { id: 'CAUSE-DevGap', type: 'default', data: { label: '西洋の優位と格差', type: 'context', iconUrl: '/icons/development_gap.png', details: '西洋と他の地域の力のバランスが崩れた。', subGraphId: 'development_gap', manualPosition: true }, position: { x: 1140, y: 840 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    
    { id: 'GLOBAL-AND-2', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: CX - 25, y: 950 } },
    { id: 'MODERN-Imperialism', type: 'default', data: { label: '帝国主義と\n世界大戦の時代', type: 'macro_event', iconUrl: '/icons/imperialism_anime.png', details: '世界分割と二つの世界大戦。', subGraphId: 'imperialism', manualPosition: true }, position: { x: CX - 110, y: 1030 }, style: { background: '#111827', color: '#fff', border: '2px solid #6b7280', borderRadius: '4px', width: 220, padding: '10px' } },

    // ==========================================
    // 冷戦期: 2つの巨大な陣営（階層化の核心）
    // ==========================================
    { id: 'LOGIC-VS-COLDWAR', type: 'logic', data: { operator: 'VS', symbol: '⚔️', manualPosition: true }, position: { x: CX - 25, y: 1150 } },
    
    { id: 'CAMP-Liberalism', type: 'default', data: { 
        label: '自由主義陣営\n(西側)', 
        type: 'context', 
        iconUrl: '/icons/cold_war_liberalism.png', 
        details: 'アメリカをリーダーとし、自由と民主主義を掲げる陣営。クリックして各地域（欧州・中東・インド）の近代化を確認。', 
        subGraphId: 'liberalism', 
        manualPosition: true 
    }, position: { x: CX - 400, y: 1220 }, style: { background: '#1e3a8a', color: '#fff', border: '3px solid #3b82f6', borderRadius: '8px', width: 260, padding: '15px' } },
    
    { id: 'CAMP-Communism', type: 'default', data: { 
        label: '共産主義陣営\n(東側)', 
        type: 'context', 
        iconUrl: '/icons/cold_war_communism.png', 
        details: 'ソ連をリーダーとし、平等と計画経済を掲げる陣営。クリックしてソ連・中国の近代化を確認。', 
        subGraphId: 'communism', 
        manualPosition: true 
    }, position: { x: CX + 150, y: 1220 }, style: { background: '#991b1b', color: '#fff', border: '3px solid #ef4444', borderRadius: '8px', width: 260, padding: '15px' } },

    // ==========================================
    // 現代
    // ==========================================
    { id: 'GLOBAL-AND-3', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: CX - 25, y: 1400 } },
    { id: 'GLOBAL-Contemporary', type: 'default', data: { label: '現代の世界', type: 'result', iconUrl: '/icons/contemporary_world.png', details: '[[冷戦]]終結後の世界。', subGraphId: 'contemporary', manualPosition: true }, position: { x: CX - 140, y: 1480 }, style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 280, padding: '18px', fontWeight: 'bold' } },

];

const rawEdges = [
    { id: 'start-1', source: 'GLOBAL-Origin', target: 'GLOBAL-Mesopotamia', type: 'straight', style: { stroke: '#57534e', strokeWidth: 4 } },
    { id: 'start-eu', source: 'GLOBAL-Mesopotamia', target: 'REGION-Europe', type: 'straight', style: { stroke: '#2563eb', strokeWidth: 2 } },
    { id: 'start-me', source: 'GLOBAL-Mesopotamia', target: 'REGION-MiddleEast', type: 'straight', style: { stroke: '#059669', strokeWidth: 2 } },
    { id: 'start-in', source: 'GLOBAL-Mesopotamia', target: 'REGION-India', type: 'straight', style: { stroke: '#d97706', strokeWidth: 2 } },
    { id: 'start-cn', source: 'GLOBAL-Mesopotamia', target: 'REGION-China', type: 'straight', style: { stroke: '#be123c', strokeWidth: 2 } },

    { id: 'to-and-1', source: 'REGION-Europe', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and-2', source: 'REGION-MiddleEast', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and-3', source: 'REGION-India', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and-4', source: 'REGION-China', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'cause-ottoman', source: 'CAUSE-OttomanBlock', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-navigation', source: 'CAUSE-Navigation', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'and1-to-discovery', source: 'GLOBAL-AND-1', target: 'GLOBAL-Discovery', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 5 } },

    { id: 'disc-to-and2', source: 'GLOBAL-Discovery', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#4b5563', strokeWidth: 3 } },
    { id: 'cause-ind-rev', source: 'CAUSE-IndustrialRev', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-nation-state', source: 'CAUSE-NationState', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-devgap', source: 'CAUSE-DevGap', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'and2-to-imp', source: 'GLOBAL-AND-2', target: 'MODERN-Imperialism', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 5 } },

    { id: 'imp-to-cold-logic', source: 'MODERN-Imperialism', target: 'LOGIC-VS-COLDWAR', type: 'straight', style: { stroke: '#6b7280', strokeWidth: 3 } },
    { id: 'cold-logic-to-lib', source: 'LOGIC-VS-COLDWAR', target: 'CAMP-Liberalism', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'cold-logic-to-com', source: 'LOGIC-VS-COLDWAR', target: 'CAMP-Communism', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    // 二陣営 → (*) → 現代の世界
    { id: 'lib-to-and3', source: 'CAMP-Liberalism', target: 'GLOBAL-AND-3', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'com-to-and3', source: 'CAMP-Communism', target: 'GLOBAL-AND-3', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 3 } },
    { id: 'and3-to-contemporary', source: 'GLOBAL-AND-3', target: 'GLOBAL-Contemporary', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 5 } },

];

export const grandEdges = addArrowMarkers(rawEdges);
