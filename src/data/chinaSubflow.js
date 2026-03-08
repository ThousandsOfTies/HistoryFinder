import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 中国の歴史サブフロー =====

export const chinaNodes = [
    { id: 'CN-Ancient', type: 'default', data: { label: '秦・漢帝国\n(中華帝国の原型)', type: 'macro_event', iconUrl: '/icons/china_ancient.png', details: '[[始皇帝]]による初の中国統一。[[漢]]代に[[儒教]]が国教化され、[[シルクロード]]が開拓された。中華帝国2000年の原型がここで確立。', subGraphId: 'qin_han' }, position: { x: 0, y: 0 }, style: { background: '#be123c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CN-SuiTang', type: 'default', data: { label: '隋・唐帝国', type: 'macro_event', iconUrl: '/icons/china_tang.png', details: '[[律令国家]]の完成と[[長安]]の国際的繁栄。[[科挙]]制度が整備され、東アジア文化圏の中心となった。', subGraphId: 'sui_tang' }, position: { x: 0, y: 0 }, style: { background: '#be123c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CN-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'CN-MongolRise', type: 'default', data: { label: 'モンゴル帝国の台頭', type: 'context', details: '[[チンギス・カン]]が遊牧民を統一し、ユーラシア大陸を横断する史上最大の帝国を築いた。中国の[[金]]朝・[[南宋]]を征服し、[[フビライ・カン]]が[[元]]朝を建国。', subGraphId: 'song_yuan' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CN-SongYuan', type: 'default', data: { label: '宋・元時代', type: 'macro_event', iconUrl: '/icons/mongol.png', details: '[[宋]]代の士大夫文化と経済発展（火薬・羅針盤・印刷）。モンゴル帝国（[[元]]）によるユーラシア大統合と東西交流の激化。', subGraphId: 'song_yuan' }, position: { x: 0, y: 0 }, style: { background: '#be123c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CN-MingQing', type: 'default', data: { label: '明・清の超大国', type: 'macro_event', iconUrl: '/icons/ming_qing.png', details: '[[明]]の[[鄭和]]の大航海、そして[[清]]朝の[[康熙帝]]・[[乾隆帝]]による最大版図。銀の流入で圧倒的な経済力と人口爆発。東アジアの[[朝貢体制]]の頂点。', subGraphId: 'qing' }, position: { x: 0, y: 0 }, style: { background: '#be123c', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'cn-sub-1', source: 'CN-Ancient', target: 'CN-SuiTang', type: 'straight', style: { stroke: '#b91c1c', strokeWidth: 3 } },
    { id: 'cn-sub-2', source: 'CN-SuiTang', target: 'CN-AND-1', type: 'straight', style: { stroke: '#b91c1c', strokeWidth: 3 } },
    { id: 'cn-sub-3', source: 'CN-MongolRise', target: 'CN-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'cn-sub-4', source: 'CN-AND-1', target: 'CN-SongYuan', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'cn-sub-5', source: 'CN-SongYuan', target: 'CN-MingQing', type: 'straight', style: { stroke: '#b91c1c', strokeWidth: 3 } },
];

export const chinaEdges = addArrowMarkers(rawEdges);
