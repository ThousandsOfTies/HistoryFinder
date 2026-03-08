import { addArrowMarkers } from './edgeUtils';

// ===== Level 2: 現代の世界 =====

export const contemporaryNodes = [
    { id: 'CON-ColdWarEnd', type: 'default', data: { label: '冷戦の終結', type: 'root_cause', details: '1989年[[ベルリンの壁]]崩壊、1991年[[ソ連]]解体。[[アメリカ]]一極体制が出現し、自由主義と市場経済が「勝利」したとされた。' }, position: { x: 0, y: 0 }, style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CON-Globalization', type: 'default', data: { label: 'グローバリゼーション', type: 'event', details: 'インターネットの普及、WTO体制の確立、[[中国]]の世界市場参入。世界のサプライチェーンが一体化し、経済の相互依存が深まった。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CON-AND-1', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    { id: 'CON-Terror', type: 'default', data: { label: '9.11とテロとの戦い', type: 'context', details: '2001年[[アメリカ]]同時多発テロ。[[アフガニスタン]]戦争・[[イラク戦争]]に突入し、中東の不安定化が加速。[[ISIS]]の台頭にもつながった。' }, position: { x: 0, y: 0 }, style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CON-ChinaRise', type: 'default', data: { label: '中国の台頭と米中対立', type: 'event', details: '[[中国]]がGDP世界第2位に。[[一帯一路]]構想で影響力を拡大し、[[アメリカ]]との貿易戦争・技術覇権争いが激化。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' } },

    { id: 'CON-MultiCrisis', type: 'default', data: { label: '複合危機の時代', type: 'result', details: '[[ウクライナ]]戦争、[[イスラエル]]・[[パレスチナ]]紛争再燃、気候変動、パンデミック。「世界の一体化」が逆に脆弱性を露呈する時代に。' }, position: { x: 0, y: 0 }, style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' } },
];

const rawEdges = [
    { id: 'con-1', source: 'CON-ColdWarEnd', target: 'CON-Globalization', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'con-2', source: 'CON-Globalization', target: 'CON-AND-1', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'con-3', source: 'CON-Terror', target: 'CON-AND-1', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'con-4', source: 'CON-AND-1', target: 'CON-ChinaRise', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 3 } },
    { id: 'con-5', source: 'CON-ChinaRise', target: 'CON-MultiCrisis', type: 'straight', style: { stroke: '#059669', strokeWidth: 3 } },
];

export const contemporaryEdges = addArrowMarkers(rawEdges);
