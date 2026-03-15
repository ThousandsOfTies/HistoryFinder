import { addArrowMarkers } from './edgeUtils';

// ===== Level 1: 世界史の全体像（山崎チャート準拠） =====
// Topはシンプルに。詳細は各ノードのサブフロー（Level 2）で展開。
// manualPosition: true で手動レイアウトを使用

// レイアウト定数
const CX = 1150;      // 中心X
const COL1 = 20;      // 左端列（原因ノード用）
const COL2 = 400;     // 左寄り列（ヨーロッパ）
const COL3 = 900;     // 中央列（中東）
const COL4 = 1400;    // 右寄り列（インド）
const COL5 = 1900;    // 右端列（中国）

export const grandNodes = [
    // ==========================================
    // 序章: 人類の出発点
    // ==========================================
    { id: 'GLOBAL-Origin', type: 'default', data: { label: '人類の出現・文明の誕生', type: 'root_cause', iconUrl: '/icons/human_origin.png', details: '狩猟採集から農耕牧畜への転換（農業革命）により、都市と文明が誕生した。', subGraphId: 'origin', manualPosition: true }, position: { x: CX - 125, y: 20 }, style: { background: '#57534e', color: '#fff', border: '3px solid #292524', borderRadius: '8px', width: 250, padding: '15px', fontWeight: 'bold' } },
    { id: 'GLOBAL-Mesopotamia', type: 'default', data: { label: 'ティグリス・ユーフラテス等の大河文明', type: 'macro_event', iconUrl: '/icons/sumerian.png', details: 'メソポタミア・エジプトなどで最古の文明が誕生し、各地に波及して独自の文明が発達していった。', subGraphId: 'mesopotamia', manualPosition: true }, position: { x: CX - 125, y: 150 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 250, padding: '10px' } },

    // ==========================================
    // 第1〜4章: 4つの地域史（横並び）
    // ==========================================
    { id: 'REGION-Europe', type: 'default', data: { label: 'ヨーロッパの歴史', type: 'macro_event', iconUrl: '/icons/greco_roman.png', details: '[[ギリシア・ローマ文明]]から[[封建社会]]を経て、[[十字軍]]と[[ルネサンス]]に至る。', subGraphId: 'europe', manualPosition: true }, position: { x: COL2, y: 350 }, style: { background: '#2563eb', color: '#fff', border: '2px solid #60a5fa', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-MiddleEast', type: 'default', data: { label: '中東の歴史', type: 'macro_event', iconUrl: '/icons/orient_persia.png', details: '[[オリエント帝国]]から[[イスラーム帝国]]、[[トルコ人王朝]]を経て[[オスマン帝国]]へ。', subGraphId: 'middle_east', manualPosition: true }, position: { x: COL3, y: 350 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-India', type: 'default', data: { label: 'インドの歴史', type: 'macro_event', iconUrl: '/icons/india_ancient.png', details: '[[マウリヤ朝]]・[[グプタ朝]]から[[イスラーム王朝]]の侵入を経て[[ムガル帝国]]へ。', subGraphId: 'india', manualPosition: true }, position: { x: COL4, y: 350 }, style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-China', type: 'default', data: { label: '中国の歴史', type: 'macro_event', iconUrl: '/icons/china_ancient.png', details: '[[秦・漢帝国]]から[[隋・唐]]、[[宋・元]]を経て[[明・清]]に至る。', subGraphId: 'china', manualPosition: true }, position: { x: COL5, y: 350 }, style: { background: '#be123c', color: '#fff', border: '2px solid #f43f5e', borderRadius: '8px', width: 180, padding: '12px', fontWeight: 'bold' } },

    // ==========================================
    // 原因ノード（大航海時代の原因）
    // ==========================================
    { id: 'CAUSE-Navigation', type: 'default', data: { label: '航海技術の発達', type: 'context', iconUrl: '/icons/navigation_tech.png', details: '[[羅針盤]]（中国から伝来）、[[キャラベル船]]の改良、天文航法の発展。', manualPosition: true }, position: { x: COL1 - 30, y: 350 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 180, padding: '10px' } },
    { id: 'CAUSE-OttomanBlock', type: 'default', data: { label: 'オスマン帝国による\n東方貿易路の遮断', type: 'context', iconUrl: '/icons/ottoman_blockade.png', details: '[[オスマン帝国]]が[[コンスタンティノープル]]を征服(1453年)し東地中海を支配。海路による新航路の開拓を余儀なくされた。', manualPosition: true }, position: { x: 630, y: 470 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    { id: 'GLOBAL-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: 715, y: 550 } },
    { id: 'GLOBAL-Discovery', type: 'default', data: { label: '大航海時代と\n西洋の世界進出', type: 'macro_event', iconUrl: '/icons/discovery.png', details: '[[ポルトガル]]と[[スペイン]]が先陣を切り、海路でアジア・アフリカ・新大陸に到達。世界の一体化が始まった時代。', subGraphId: 'discovery', manualPosition: true }, position: { x: 620, y: 620 }, style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 240, padding: '18px', fontWeight: 'bold' } },

    // ==========================================
    // 原因ノード（帝国主義の原因）
    // ==========================================
    { id: 'CAUSE-IndustrialRev', type: 'default', data: { label: '産業革命と\n資本主義の確立', type: 'context', iconUrl: '/icons/industrial_revolution.png', details: '[[蒸気機関]]の発明と石炭の利用により、生産力が爆発的に向上。経済が世界規模で膨張し始めた。', manualPosition: true }, position: { x: COL2 - 280, y: 740 }, style: { background: '#44403c', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    { id: 'CAUSE-NationState', type: 'default', data: { label: '市民革命と\n国民国家の形成', type: 'context', iconUrl: '/icons/renaissance.png', details: '[[主権国家体制]]と[[ナショナリズム]]。国民が国家の主体となったことで、教育の普及と国民皆兵による圧倒的な軍事能力が生まれた。', manualPosition: true }, position: { x: COL2 - 330, y: 840 }, style: { background: '#7c2d12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },
    { id: 'CAUSE-DevGap', type: 'default', data: { label: '各地域の発展格差', type: 'context', iconUrl: '/icons/development_gap.png', details: '科学革命と産業革命を経た西洋の優位と、伝統的帝国の内部矛盾による衰退。', manualPosition: true }, position: { x: 1140, y: 840 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'GLOBAL-AND-2', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: CX - 25, y: 950 } },
    { id: 'MODERN-Imperialism', type: 'default', data: { label: '帝国主義と\n世界大戦の時代', type: 'macro_event', iconUrl: '/icons/imperialism.png', details: '産業のパワーと国民国家のシステムが合体。非西洋世界の分割、二つの[[世界大戦]]と[[冷戦]]へ。', subGraphId: 'imperialism', manualPosition: true }, position: { x: CX - 110, y: 1030 }, style: { background: '#111827', color: '#fff', border: '2px solid #6b7280', borderRadius: '4px', width: 220, padding: '10px' } },

    // ==========================================
    // 帝国主義の結果: 4分岐（各地域の近代）
    // ==========================================
    { id: 'MODERN-Europe', type: 'default', data: { label: '近代のヨーロッパ', type: 'macro_event', details: '[[フランス革命]]を経て国民国家の時代へ。', subGraphId: 'revolution', manualPosition: true }, position: { x: COL2, y: 1180 }, style: { background: '#2563eb', color: '#fff', border: '2px solid #60a5fa', borderRadius: '4px', width: 180, padding: '10px' } },
    { id: 'MODERN-MiddleEast', type: 'default', data: { label: '近代の中東', type: 'macro_event', details: '[[オスマン帝国]]崩壊後、石油をめぐる大国の介入と対立。', subGraphId: 'modern_mideast', manualPosition: true }, position: { x: COL3, y: 1180 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 180, padding: '10px' } },
    { id: 'MODERN-India', type: 'default', data: { label: '近代のインド', type: 'macro_event', details: '[[イギリス]]による植民地支配から独立と分離へ。', manualPosition: true }, position: { x: COL4, y: 1180 }, style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 180, padding: '10px' } },
    { id: 'MODERN-China', type: 'default', data: { label: '近代の中国', type: 'macro_event', details: '[[辛亥革命]]から[[中華人民共和国]]の成立へ。', subGraphId: 'modern_china', manualPosition: true }, position: { x: COL5, y: 1180 }, style: { background: '#be123c', color: '#fff', border: '2px solid #f43f5e', borderRadius: '4px', width: 180, padding: '10px' } },

    // ==========================================
    // 現代の世界
    // ==========================================
    { id: 'GLOBAL-AND-3', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: CX - 25, y: 1300 } },
    { id: 'GLOBAL-Contemporary', type: 'default', data: { label: '現代の世界', type: 'result', iconUrl: '/icons/contemporary_world.png', details: '[[冷戦]]終結後のグローバリゼーション、複合危機の時代へ。', subGraphId: 'contemporary', manualPosition: true }, position: { x: CX - 140, y: 1380 }, style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 280, padding: '18px', fontWeight: 'bold' } },
];

const rawEdges = [
    // 序章から分岐
    { id: 'start-1', source: 'GLOBAL-Origin', target: 'GLOBAL-Mesopotamia', type: 'straight', style: { stroke: '#57534e', strokeWidth: 4 } },
    { id: 'start-eu', source: 'GLOBAL-Mesopotamia', target: 'REGION-Europe', type: 'straight', style: { stroke: '#2563eb', strokeWidth: 2 } },
    { id: 'start-me', source: 'GLOBAL-Mesopotamia', target: 'REGION-MiddleEast', type: 'straight', style: { stroke: '#059669', strokeWidth: 2 } },
    { id: 'start-in', source: 'GLOBAL-Mesopotamia', target: 'REGION-India', type: 'straight', style: { stroke: '#d97706', strokeWidth: 2 } },
    { id: 'start-cn', source: 'GLOBAL-Mesopotamia', target: 'REGION-China', type: 'straight', style: { stroke: '#be123c', strokeWidth: 2 } },

    // 4地域 + オスマン遮断 + 航海技術 → (*) → 大航海時代
    { id: 'to-and-1', source: 'REGION-Europe', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and-2', source: 'REGION-MiddleEast', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and-3', source: 'REGION-India', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and-4', source: 'REGION-China', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'cause-ottoman', source: 'CAUSE-OttomanBlock', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-navigation', source: 'CAUSE-Navigation', target: 'GLOBAL-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'and1-to-discovery', source: 'GLOBAL-AND-1', target: 'GLOBAL-Discovery', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 5 } },

    // 大航海時代 + 産業革命 + 国民国家 + 発展格差 → (*) → 帝国主義
    { id: 'disc-to-and2', source: 'GLOBAL-Discovery', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#4b5563', strokeWidth: 3 } },
    { id: 'ind-to-nation', source: 'CAUSE-IndustrialRev', target: 'CAUSE-NationState', type: 'straight', animated: true, style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-ind-rev', source: 'CAUSE-IndustrialRev', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-nation-state', source: 'CAUSE-NationState', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cause-devgap', source: 'CAUSE-DevGap', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'and2-to-imp', source: 'GLOBAL-AND-2', target: 'MODERN-Imperialism', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 5 } },

    // 帝国主義 → 4分岐（各地域の近代）
    { id: 'imp-eu', source: 'MODERN-Imperialism', target: 'MODERN-Europe', type: 'straight', style: { stroke: '#2563eb', strokeWidth: 2 } },
    { id: 'imp-me', source: 'MODERN-Imperialism', target: 'MODERN-MiddleEast', type: 'straight', style: { stroke: '#059669', strokeWidth: 2 } },
    { id: 'imp-in', source: 'MODERN-Imperialism', target: 'MODERN-India', type: 'straight', style: { stroke: '#d97706', strokeWidth: 2 } },
    { id: 'imp-cn', source: 'MODERN-Imperialism', target: 'MODERN-China', type: 'straight', style: { stroke: '#be123c', strokeWidth: 2 } },

    // 4地域の近代 → (*) → 現代の世界
    { id: 'to-and3-1', source: 'MODERN-Europe', target: 'GLOBAL-AND-3', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and3-2', source: 'MODERN-MiddleEast', target: 'GLOBAL-AND-3', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and3-3', source: 'MODERN-India', target: 'GLOBAL-AND-3', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-and3-4', source: 'MODERN-China', target: 'GLOBAL-AND-3', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'and3-to-contemporary', source: 'GLOBAL-AND-3', target: 'GLOBAL-Contemporary', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 5 } },
];

export const grandEdges = addArrowMarkers(rawEdges);
