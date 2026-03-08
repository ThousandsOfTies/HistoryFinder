import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: ヨーロッパの歴史サブフロー =====
// grandMapのEU-*ノードを移動。各ノードはLevel 3のサブサブフローに接続。

export const europeNodes = [
    { id: 'EU-Hellenism', type: 'default', data: { label: 'ギリシア・ローマ文明', type: 'macro_event', iconUrl: '/icons/greco_roman.png', details: 'エーゲ海を中心に、ポリス社会や共和政・帝政ローマが発展。[[アテネ]]の民主政、[[スパルタ]]の軍事国家、[[アレクサンドロス大王]]の東征、[[ローマ帝国]]の地中海統一。', subGraphId: 'greco_roman' }, position: { x: 0, y: 0 }, style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'EU-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'EU-GermanMigration', type: 'default', data: { label: 'ゲルマン民族の大移動', type: 'context', details: '[[フン族]]の西進に押されて[[ゲルマン民族]]が大挙してローマ帝国領に侵入。476年に[[西ローマ帝国]]が滅亡し、ヨーロッパは分裂の時代に入った。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'EU-German', type: 'default', data: { label: 'フランク王国と封建社会', type: 'event', iconUrl: '/icons/feudal_knight.png', details: 'ゲルマン人の大移動を経て、西ヨーロッパ独自の封建社会（荘園制と騎士階級）が形成。[[カール大帝]]がヨーロッパの大半を統一し、後の[[フランス]]・[[ドイツ]]・[[イタリア]]の原型が生まれた。', subGraphId: 'frankish' }, position: { x: 0, y: 0 }, style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'EU-AND-2', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'EU-PapalPower', type: 'default', data: { label: '教皇権の強大化', type: 'context', details: '中世ヨーロッパでは[[ローマ教皇]]の権威が世俗君主を超えるほどに強まった。[[叙任権闘争]]で教皇が皇帝を屈服させ、キリスト教世界の統合者として聖地奪還を号令する力を持った。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'EU-Crusades', type: 'default', data: { label: '十字軍の遠征', type: 'action', iconUrl: '/icons/crusades.png', details: '聖地[[エルサレム]]奪還を掲げた中東への軍事遠征。結果として失敗するが西欧と中東の文化・商業の交流を生み、[[ヴェネツィア]]等の都市が繁栄した。', subGraphId: 'crusades' }, position: { x: 0, y: 0 }, style: { background: '#1d4ed8', color: '#fff', border: '2px solid #60a5fa', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'EU-Renaissance', type: 'default', data: { label: 'ルネサンスと宗教改革', type: 'macro_event', iconUrl: '/icons/renaissance.png', details: '中世カトリック的な価値観が崩れ、人間中心主義と新しい信仰の形が生まれた。[[レオナルド・ダ・ヴィンチ]]や[[マルティン・ルター]]が象徴的。', subGraphId: 'medieval_modern' }, position: { x: 0, y: 0 }, style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'eu-sub-1', source: 'EU-Hellenism', target: 'EU-AND-1', type: 'straight', style: { stroke: '#2563eb', strokeWidth: 3 } },
    { id: 'eu-sub-2', source: 'EU-GermanMigration', target: 'EU-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eu-sub-3', source: 'EU-AND-1', target: 'EU-German', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'eu-sub-4', source: 'EU-German', target: 'EU-AND-2', type: 'straight', style: { stroke: '#2563eb', strokeWidth: 3 } },
    { id: 'eu-sub-5', source: 'EU-PapalPower', target: 'EU-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eu-sub-6', source: 'EU-AND-2', target: 'EU-Crusades', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'eu-sub-7', source: 'EU-Crusades', target: 'EU-Renaissance', type: 'straight', style: { stroke: '#2563eb', strokeWidth: 3 } },
];

export const europeEdges = addArrowMarkers(rawEdges);
