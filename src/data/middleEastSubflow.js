import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 中東の歴史サブフロー =====

export const middleEastNodes = [
    { id: 'ME-Orient', type: 'default', data: { label: 'オリエント・ペルシア帝国', type: 'macro_event', iconUrl: '/icons/orient_persia.png', details: '[[メソポタミア文明]]・[[エジプト文明]]を統合した[[アケメネス朝ペルシア]]が広大な帝国を築く。最初の「世界帝国」と呼ばれた。', subGraphId: 'orient' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'ME-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'ME-ArabUnification', type: 'default', data: { label: 'アラビア半島の統一', type: 'context', details: '[[ムハンマド]]がイスラーム教を創始し、部族社会だった[[アラビア半島]]を宗教的に統一。ペルシアとビザンツの消耗戦の間隙を突いて急速に拡大した。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'ME-Islam', type: 'default', data: { label: 'イスラーム帝国の成立', type: 'event', iconUrl: '/icons/islamic_empire.png', details: '[[ウマイヤ朝]]・[[アッバース朝]]などの大帝国を築き、中東からスペインまでを統合。学問・交易が飛躍的に発展した。', subGraphId: 'islamic_empire' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'ME-Turkic', type: 'default', data: { label: 'トルコ人王朝\n(セルジューク等)', type: 'event', iconUrl: '/icons/turkic.png', details: '中央アジアから移動した[[トルコ]]系民族が[[セルジューク朝]]を建て、中東の支配層に。[[ビザンツ帝国]]を圧迫し、十字軍を呼び込む原因となった。', subGraphId: 'turkic' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'ME-Ottoman', type: 'default', data: { label: 'オスマン帝国の覇権', type: 'macro_event', iconUrl: '/icons/ottoman.png', details: '東地中海を完全に制圧。[[コンスタンティノープル]]を征服してビザンツ帝国を滅ぼし、ヨーロッパとアジアを隔てる巨大な壁となった。', subGraphId: 'ottoman' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'me-sub-1', source: 'ME-Orient', target: 'ME-AND-1', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'me-sub-2', source: 'ME-ArabUnification', target: 'ME-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'me-sub-3', source: 'ME-AND-1', target: 'ME-Islam', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'me-sub-4', source: 'ME-Islam', target: 'ME-Turkic', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'me-sub-5', source: 'ME-Turkic', target: 'ME-Ottoman', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
];

export const middleEastEdges = addArrowMarkers(rawEdges);
