import { addArrowMarkers } from './edgeUtils';

// ===== Level 1: 世界史の全体像（山崎チャート準拠） =====
// Topはシンプルに。詳細は各ノードのサブフロー（Level 2）で展開。
// manualPosition: true で手動レイアウトを使用

// レイアウト定数
const CX = 600;       // 中心X
const COL1 = 0;       // 左端列（原因ノード用）
const COL2 = 150;     // 左寄り列（ヨーロッパ）
const COL3 = 450;     // 中央左列（中東）
const COL4 = 750;     // 中央右列（インド）
const COL5 = 1050;    // 右端列（中国）

export const grandNodes = [
    // ==========================================
    // 序章: 人類の出発点
    // ==========================================
    { id: 'GLOBAL-Origin', type: 'default', data: { label: '人類の出現・文明の誕生', type: 'root_cause', iconUrl: '/icons/human_origin.png', details: '狩猟採集から農耕牧畜への転換（農業革命）により、都市と文明が誕生した。', subGraphId: 'origin', manualPosition: true }, position: { x: CX - 125, y: 0 }, style: { background: '#57534e', color: '#fff', border: '3px solid #292524', borderRadius: '8px', width: 250, padding: '15px', fontWeight: 'bold' } },
    { id: 'GLOBAL-Mesopotamia', type: 'default', data: { label: 'ティグリス・ユーフラテス等の大河文明', type: 'macro_event', iconUrl: '/icons/sumerian.png', details: 'メソポタミア・エジプトなどで最古の文明が誕生し、各地に波及して独自の文明が発達していった。', subGraphId: 'mesopotamia', manualPosition: true }, position: { x: CX - 125, y: 150 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 250, padding: '10px' } },

    // ==========================================
    // 第1〜4章: 4つの地域史（横並び）
    // ==========================================
    { id: 'REGION-Europe', type: 'default', data: { label: 'ヨーロッパの歴史', type: 'macro_event', iconUrl: '/icons/greco_roman.png', details: '[[ギリシア・ローマ文明]]から[[封建社会]]を経て、[[十字軍]]と[[ルネサンス]]に至るヨーロッパ独自の歴史。', subGraphId: 'europe', manualPosition: true }, position: { x: COL2, y: 310 }, style: { background: '#2563eb', color: '#fff', border: '2px solid #60a5fa', borderRadius: '8px', width: 200, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-MiddleEast', type: 'default', data: { label: '中東の歴史', type: 'macro_event', iconUrl: '/icons/orient_persia.png', details: '[[オリエント帝国]]から[[イスラーム帝国]]、[[トルコ人王朝]]、[[オスマン帝国]]へと至る中東の通史。', subGraphId: 'middle_east', manualPosition: true }, position: { x: COL3, y: 310 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '8px', width: 200, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-India', type: 'default', data: { label: 'インドの歴史', type: 'macro_event', iconUrl: '/icons/india_ancient.png', details: '[[マウリヤ朝]]・[[グプタ朝]]から[[イスラーム王朝]]の侵入を経て[[ムガル帝国]]に至るインドの通史。', subGraphId: 'india', manualPosition: true }, position: { x: COL4, y: 310 }, style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '8px', width: 200, padding: '12px', fontWeight: 'bold' } },
    { id: 'REGION-China', type: 'default', data: { label: '中国の歴史', type: 'macro_event', iconUrl: '/icons/china_ancient.png', details: '[[秦・漢帝国]]から[[隋・唐]]、[[宋・元]]を経て[[明・清]]に至る中華帝国2000年の通史。', subGraphId: 'china', manualPosition: true }, position: { x: COL5, y: 310 }, style: { background: '#be123c', color: '#fff', border: '2px solid #f43f5e', borderRadius: '8px', width: 200, padding: '12px', fontWeight: 'bold' } },

    // ==========================================
    // 原因ノード（大航海時代の原因）
    // ==========================================
    { id: 'CAUSE-Navigation', type: 'default', data: { label: '航海技術の発達', type: 'context', details: '[[羅針盤]]（中国から伝来）、[[キャラベル船]]の改良、天文航法の発展。[[ポルトガル]]の[[エンリケ航海王子]]がアフリカ西岸を探検し、航海技術を蓄積した。', manualPosition: true }, position: { x: COL1 - 100, y: 310 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'CAUSE-OttomanBlock', type: 'default', data: { label: 'オスマン帝国による\n東方貿易路の遮断', type: 'context', details: '[[オスマン帝国]]が[[コンスタンティノープル]]を征服(1453年)し東地中海を支配。ヨーロッパは[[香辛料]]や[[絹]]を手に入れる陸路を失い、海路による新航路の開拓を余儀なくされた。', manualPosition: true }, position: { x: COL3 - 150, y: 430 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 240, padding: '10px' } },
    { id: 'GLOBAL-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: COL2 + 50, y: 500 } },
    { id: 'GLOBAL-Discovery', type: 'default', data: { label: '大航海時代と\n西洋の世界進出', type: 'macro_event', iconUrl: '/icons/discovery.png', details: '[[ポルトガル]]と[[スペイン]]が先陣を切り、海路でアジア・アフリカ・新大陸に到達。「世界の一体化」と言われるが、実態は西洋による植民地支配と資源の収奪が始まった時代。', subGraphId: 'discovery', manualPosition: true }, position: { x: COL2 - 40, y: 560 }, style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 280, padding: '18px', fontWeight: 'bold' } },

    // ==========================================
    // 原因ノード（帝国主義の原因）
    // ==========================================
    { id: 'CAUSE-ScienceRev', type: 'default', data: { label: '科学革命と\n西洋の技術的優位', type: 'context', details: '[[コペルニクス]]、[[ガリレオ]]、[[ニュートン]]による科学革命。実験と数学に基づく自然の理解が、[[火器]]・[[蒸気機関]]・[[鉄鋼]]など圧倒的な軍事・産業技術の差を生んだ。', manualPosition: true }, position: { x: COL1 - 50, y: 680 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'CAUSE-DevGap', type: 'default', data: { label: '各地域の発展格差', type: 'context', details: '科学革命と産業革命を経た西洋は軍事・経済で圧倒的優位に立った。一方、[[オスマン帝国]]・[[清]]・[[ムガル帝国]]は内部矛盾で衰退。', manualPosition: true }, position: { x: COL4 + 100, y: 680 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'GLOBAL-AND-2', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: CX - 25, y: 810 } },
    { id: 'MODERN-Imperialism', type: 'default', data: { label: '帝国主義と\n世界大戦の時代', type: 'macro_event', details: '科学技術の優位を武器に、西洋列強が非西洋世界を分割。二つの[[世界大戦]]と[[冷戦]]へ。人類史上最大の破壊と変革の時代。', subGraphId: 'imperialism', manualPosition: true }, position: { x: CX - 100, y: 880 }, style: { background: '#111827', color: '#fff', border: '2px solid #6b7280', borderRadius: '4px', width: 220, padding: '10px' } },

    // ==========================================
    // 帝国主義の結果: 4分岐（各地域の近代）
    // ==========================================
    { id: 'MODERN-Europe', type: 'default', data: { label: '近代のヨーロッパ', type: 'macro_event', details: '[[啓蒙思想]]と[[産業革命]]を背景に、[[アメリカ独立革命]]・[[フランス革命]]が勃発。[[ナポレオン戦争]]を経て国民国家の時代へ。', subGraphId: 'revolution', manualPosition: true }, position: { x: COL2, y: 1010 }, style: { background: '#2563eb', color: '#fff', border: '2px solid #60a5fa', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'MODERN-MiddleEast', type: 'default', data: { label: '近代の中東', type: 'macro_event', details: '[[オスマン帝国]]の崩壊、[[サイクス・ピコ協定]]による中東分割、[[イスラエル]]建国。石油をめぐる大国の介入と宗派対立。', subGraphId: 'modern_mideast', manualPosition: true }, position: { x: COL3, y: 1010 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'MODERN-India', type: 'default', data: { label: '近代のインド', type: 'macro_event', details: '[[イギリス]]による植民地支配、[[マハトマ・ガンディー]]の非暴力運動、1947年の独立と[[パキスタン]]分離。', manualPosition: true }, position: { x: COL4, y: 1010 }, style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'MODERN-China', type: 'default', data: { label: '近代の中国', type: 'macro_event', details: '[[アヘン戦争]]から[[辛亥革命]]、[[日中戦争]]を経て[[中華人民共和国]]の成立へ。100年の屈辱から大国への道。', subGraphId: 'modern_china', manualPosition: true }, position: { x: COL5, y: 1010 }, style: { background: '#be123c', color: '#fff', border: '2px solid #f43f5e', borderRadius: '4px', width: 200, padding: '10px' } },

    // ==========================================
    // 現代の世界
    // ==========================================
    { id: 'GLOBAL-AND-3', type: 'logic', data: { operator: 'AND', symbol: '＊', manualPosition: true }, position: { x: CX - 25, y: 1130 } },
    { id: 'GLOBAL-Contemporary', type: 'default', data: { label: '現代の世界', type: 'result', details: '[[冷戦]]終結後のグローバリゼーション、テロとの戦い、[[中国]]の台頭、そして複合危機の時代へ。', subGraphId: 'contemporary', manualPosition: true }, position: { x: CX - 140, y: 1200 }, style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 280, padding: '18px', fontWeight: 'bold' } },
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

    // 大航海時代 + 科学革命 + 発展格差 → (*) → 帝国主義
    { id: 'disc-to-and2', source: 'GLOBAL-Discovery', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#4b5563', strokeWidth: 3 } },
    { id: 'cause-science', source: 'CAUSE-ScienceRev', target: 'GLOBAL-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
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
