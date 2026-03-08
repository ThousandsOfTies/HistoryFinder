import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 革命の時代 =====

export const revolutionNodes = [
    { id: 'REV-Enlightenment', type: 'default', data: { label: '啓蒙思想の広がり', type: 'root_cause', details: '[[ジョン・ロック]]の社会契約論、[[モンテスキュー]]の三権分立、[[ルソー]]の一般意志論。「理性」に基づく社会秩序の再構築を主張し、旧来の王権神授説を否定した。' }, position: { x: 0, y: 0 }, style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'REV-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'REV-IndustrialRev', type: 'default', data: { label: '産業革命（イギリス）', type: 'context', iconUrl: '/icons/industrial_revolution.png', details: '18世紀後半、[[イギリス]]で蒸気機関・紡績機が発明され、工場制機械工業が成立。農村社会から都市型工業社会への大転換。資本家と労働者という新しい階級対立が生まれた。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'REV-AmericanRev', type: 'default', data: { label: 'アメリカ独立革命', type: 'event', details: '1776年、[[イギリス]]の13植民地が「代表なければ課税なし」を掲げて独立。世界初の近代的共和制国家[[アメリカ合衆国]]が誕生し、民主主義の実験が始まった。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'REV-FrenchRev', type: 'default', data: { label: 'フランス革命', type: 'event', details: '1789年、[[フランス]]で絶対王政が崩壊。人権宣言が発せられ、[[自由・平等・友愛]]の理念がヨーロッパ中に衝撃を与えた。しかし恐怖政治や混乱も招いた。', subGraphId: 'modern' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'REV-Napoleon', type: 'default', data: { label: 'ナポレオン戦争と\nウィーン体制', type: 'result', details: '[[ナポレオン]]がフランス革命の理念を武力で欧州に輸出。敗北後の[[ウィーン会議]](1815年)で保守的な国際秩序が再建されたが、自由・民族の理念はもう止められなかった。' }, position: { x: 0, y: 0 }, style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'rev-1', source: 'REV-Enlightenment', target: 'REV-AND-1', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'rev-2', source: 'REV-IndustrialRev', target: 'REV-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'rev-3', source: 'REV-AND-1', target: 'REV-AmericanRev', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'rev-4', source: 'REV-AmericanRev', target: 'REV-FrenchRev', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'rev-5', source: 'REV-FrenchRev', target: 'REV-Napoleon', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
];

export const revolutionEdges = addArrowMarkers(rawEdges);
