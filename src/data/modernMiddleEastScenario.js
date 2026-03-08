import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 近代の中東・インド =====

export const modernMiddleEastNodes = [
    { id: 'MME-OttomanDecline', type: 'default', data: { label: 'オスマン帝国の衰退', type: 'root_cause', details: '18世紀以降、[[オスマン帝国]]は近代化に遅れ「瀕死の病人」と呼ばれた。[[ロシア]]・[[イギリス]]・[[フランス]]が領土を蚕食した。' }, position: { x: 0, y: 0 }, style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MME-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'MME-WW1Partition', type: 'default', data: { label: '第一次大戦と中東分割', type: 'context', details: 'オスマン帝国の敗戦後、[[イギリス]]と[[フランス]]が[[サイクス・ピコ協定]]で中東を秘密裏に分割。アラブ人の独立の約束は裏切られた。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MME-Mandates', type: 'default', data: { label: '委任統治と人工国境', type: 'event', details: '[[イラク]]・[[シリア]]・[[ヨルダン]]・[[パレスチナ]]等が列強の委任統治下に。民族・宗派を無視した人工的な国境線が、現在まで続く紛争の種を蒔いた。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MME-Israel', type: 'default', data: { label: 'イスラエル建国と\nパレスチナ問題', type: 'event', details: '1948年、[[イスラエル]]建国。[[パレスチナ]]のアラブ人が追放（[[ナクバ]]）され、以後70年以上にわたる紛争の原点となった。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MME-IndiaIndep', type: 'default', data: { label: 'インドの独立と分離', type: 'event', details: '[[マハトマ・ガンディー]]の非暴力運動を経て1947年に[[インド]]が独立。同時に[[パキスタン]]が分離し、カシミール問題など南アジアの対立構造が固定化した。' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'MME-OilPolitics', type: 'default', data: { label: '石油と中東紛争の連鎖', type: 'result', details: '[[中東戦争]]（4回）、[[イラン革命]]、[[湾岸戦争]]、[[イラク戦争]]。石油資源を巡る大国の介入と、宗派・民族・領土の複合的対立が繰り返される。' }, position: { x: 0, y: 0 }, style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'mme-1', source: 'MME-OttomanDecline', target: 'MME-AND-1', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'mme-2', source: 'MME-WW1Partition', target: 'MME-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'mme-3', source: 'MME-AND-1', target: 'MME-Mandates', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'mme-4', source: 'MME-Mandates', target: 'MME-Israel', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'mme-5', source: 'MME-Mandates', target: 'MME-IndiaIndep', type: 'straight', style: { stroke: '#d97706', strokeWidth: 2 } },
    { id: 'mme-6', source: 'MME-Israel', target: 'MME-OilPolitics', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
];

export const modernMiddleEastEdges = addArrowMarkers(rawEdges);
