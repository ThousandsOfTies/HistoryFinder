import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 近代の中国 =====

export const modernChinaNodes = [
    { id: 'MCN-OpiumWar', type: 'default', data: { label: 'アヘン戦争と不平等条約', type: 'root_cause', details: '1840年、[[イギリス]]が清にアヘン貿易を強要。[[南京条約]]で[[香港]]を割譲され、以後100年の「屈辱の世紀」が始まった。' }, position: { x: 0, y: 0 }, style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MCN-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'MCN-TaipingRev', type: 'default', data: { label: '太平天国の乱と清朝動揺', type: 'context', details: '1850年代、[[太平天国]]の大反乱で清朝の統治力が激しく揺らいだ。以後、[[洋務運動]]など近代化の試みも間に合わず、列強に侵食された。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MCN-Revolution', type: 'default', data: { label: '辛亥革命と中華民国', type: 'event', details: '1911年、[[孫文]]を指導者とする革命で清朝が倒れ、アジア初の共和国[[中華民国]]が成立。しかし軍閥割拠の時代が続いた。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MCN-JapanWar', type: 'default', data: { label: '日中戦争', type: 'event', details: '1937年、[[日本]]が中国に全面侵攻。8年間の戦争で中国は甚大な被害を受けたが、[[国民党]]と[[共産党]]が一時的に協力して抗戦した。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MCN-PRC', type: 'default', data: { label: '中華人民共和国の成立', type: 'result', details: '1949年、[[毛沢東]]率いる共産党が[[国民党]]を破り[[中華人民共和国]]を建国。社会主義体制のもと[[大躍進]]や[[文化大革命]]を経て、後に[[改革開放]]で経済大国へ。' }, position: { x: 0, y: 0 }, style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'mcn-1', source: 'MCN-OpiumWar', target: 'MCN-AND-1', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'mcn-2', source: 'MCN-TaipingRev', target: 'MCN-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'mcn-3', source: 'MCN-AND-1', target: 'MCN-Revolution', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'mcn-4', source: 'MCN-Revolution', target: 'MCN-JapanWar', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'mcn-5', source: 'MCN-JapanWar', target: 'MCN-PRC', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
];

export const modernChinaEdges = addArrowMarkers(rawEdges);
