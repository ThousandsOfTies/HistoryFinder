import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 帝国主義と世界大戦の時代 =====

export const imperialismNodes = [
    { id: 'IMP-Nationalism', type: 'default', data: { label: '国民国家とナショナリズム', type: 'root_cause', details: 'フランス革命後、「国民」意識が覚醒。[[ドイツ]]統一(1871)と[[イタリア]]統一が達成され、ヨーロッパに列強体制が形成された。' }, position: { x: 0, y: 0 }, style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IMP-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'IMP-IndustrialGrowth', type: 'default', data: { label: '第二次産業革命', type: 'context', details: '鉄鋼・化学・電気の時代。大量生産と資本の巨大化が進み、列強は原料供給地と市場を求めて海外に進出する必要に迫られた。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IMP-Imperialism', type: 'default', data: { label: '帝国主義の時代', type: 'event', details: '[[イギリス]]・[[フランス]]・[[ドイツ]]がアフリカ・アジアを分割。「白人の責務」を掲げた植民地支配が地球規模で展開された。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IMP-WW1', type: 'default', data: { label: '第一次世界大戦', type: 'event', details: '1914年、列強間の同盟対立が爆発。[[サラエボ事件]]をきっかけに4年間の総力戦。[[オスマン帝国]]・[[オーストリア=ハンガリー帝国]]・[[ロシア帝国]]が崩壊し、世界地図が塗り替えられた。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IMP-AND-2', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'IMP-Fascism', type: 'default', data: { label: 'ファシズムの台頭', type: 'context', details: '[[世界恐慌]](1929)による経済崩壊を背景に、[[ドイツ]]の[[ヒトラー]]、[[イタリア]]の[[ムッソリーニ]]、[[日本]]の軍部が極端なナショナリズムで権力を掌握。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IMP-WW2', type: 'default', data: { label: '第二次世界大戦', type: 'event', details: '1939-1945年、人類史上最大の戦争。[[ホロコースト]]、[[広島]]・[[長崎]]への原爆投下。約6000万人が犠牲となり、[[国際連合]]が設立された。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IMP-ColdWar', type: 'default', data: { label: '冷戦の始まり', type: 'result', details: '[[アメリカ]]と[[ソ連]]が超大国として対峙。核兵器による相互確証破壊（MAD）体制のもと、直接戦火を交えない「冷たい戦争」が約40年続いた。' }, position: { x: 0, y: 0 }, style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'imp-1', source: 'IMP-Nationalism', target: 'IMP-AND-1', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'imp-2', source: 'IMP-IndustrialGrowth', target: 'IMP-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'imp-3', source: 'IMP-AND-1', target: 'IMP-Imperialism', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'imp-4', source: 'IMP-Imperialism', target: 'IMP-WW1', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'imp-5', source: 'IMP-WW1', target: 'IMP-AND-2', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'imp-6', source: 'IMP-Fascism', target: 'IMP-AND-2', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'imp-7', source: 'IMP-AND-2', target: 'IMP-WW2', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'imp-8', source: 'IMP-WW2', target: 'IMP-ColdWar', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
];

export const imperialismEdges = addArrowMarkers(rawEdges);
