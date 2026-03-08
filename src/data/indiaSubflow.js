import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: インドの歴史サブフロー =====

export const indiaNodes = [
    { id: 'IN-Ancient', type: 'default', data: { label: 'マウリヤ・グプタ朝', type: 'macro_event', iconUrl: '/icons/india_ancient.png', details: '[[インダス文明]]から始まり、[[マウリヤ朝]]の[[アショーカ王]]が[[仏教]]を保護。[[グプタ朝]]でヒンドゥー文化の黄金期を迎えた。', subGraphId: 'ancient_india' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IN-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'IN-IslamExpansion', type: 'default', data: { label: 'イスラーム勢力の東進', type: 'context', details: '中東の[[イスラーム帝国]]が東へ拡大。[[ガズナ朝]]がインド北西部に侵攻し、ヒンドゥー寺院を破壊して大きな富を略奪した。宗教と政治による征服の時代が始まった。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IN-Islamic', type: 'default', data: { label: 'イスラーム王朝の侵入', type: 'event', details: '中東からのイスラム教徒の侵入により、[[デリー・スルタン朝]]などが成立。ヒンドゥーとイスラームの文化が激しくぶつかり合った。', subGraphId: 'india_islamic' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'IN-Mughal', type: 'default', data: { label: 'ムガル帝国', type: 'macro_event', iconUrl: '/icons/mughal.png', details: '[[バーブル]]がインド大陸を統一し、インド・イスラム文化を花開かせた。[[タージ・マハル]]に象徴される絶大な富と芸術の時代。', subGraphId: 'mughal' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'in-sub-1', source: 'IN-Ancient', target: 'IN-AND-1', type: 'straight', style: { stroke: '#d97706', strokeWidth: 3 } },
    { id: 'in-sub-2', source: 'IN-IslamExpansion', target: 'IN-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'in-sub-3', source: 'IN-AND-1', target: 'IN-Islamic', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'in-sub-4', source: 'IN-Islamic', target: 'IN-Mughal', type: 'straight', style: { stroke: '#d97706', strokeWidth: 3 } },
];

export const indiaEdges = addArrowMarkers(rawEdges);
