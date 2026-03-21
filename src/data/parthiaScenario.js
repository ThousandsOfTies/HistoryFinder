import { addArrowMarkers } from './edgeUtils';

// ===== パルティア・ササン朝（ペルシアの再興）シナリオ =====

export const parthiaNodes = [
    {
        id: 'PAR-Hellenism',
        type: 'default',
        data: {
            label: 'ヘレニズム文化の流入',
            type: 'context',
            details: 'アレクサンドロス大王の遠征後、西アジアにギリシア文化が流入。[[セレウコス朝]]の支配下で東西文化が融合したが、やがてイラン系民族による自立の機運が高まった。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'PAR-Parthia',
        type: 'default',
        data: {
            label: 'パルティアの台頭と騎馬軍団',
            type: 'macro_event',
            details: '紀元前3世紀、カスピ海東方から興った。強力な[[パルティアン・ショット]]を駆使する騎馬弓兵と、全身を鎧った重装騎兵（カタフラクト）により、並み居るローマ軍を圧倒した。',
            iconUrl: '/icons/orient_persia.png'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'PAR-RomeConflict',
        type: 'default',
        data: {
            label: 'ローマとの死闘（カルラエの戦い）',
            type: 'event',
            details: '紀元前53年、ローマの三頭政治の一角クラッススが率いる軍団を壊滅させた。これ以降、ローマは東方への拡大を阻止され、ユーフラテス川が両帝国の境界線として長く固定された。'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'PAR-Sassanid',
        type: 'default',
        data: {
            label: 'ササン朝ペルシアの成立',
            type: 'macro_event',
            details: '3世紀、パルティアを倒して成立。さらに中央集権を強め、ゾロアスター教を国教化。シャープール1世はローマ皇帝ウァレリアヌスを捕虜にするという前代未聞の快挙を成し遂げた。'
        },
        style: { background: '#056d4d', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 220, padding: '10px' }
    },
    {
        id: 'PAR-SilkRoad',
        type: 'default',
        data: {
            label: '中継貿易による莫大な富',
            type: 'result',
            details: '中国（漢・唐）とローマ・ビザンツを繋ぐ[[シルクロード]]の中継地点として君臨。イスタンブール（当時コンスタンティノープル）へと続く隊商路を独占し、経済的黄金期を築いた。',
            iconUrl: '/icons/result.png'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 220, padding: '10px' }
    }
];

const edges = [
    { id: 'epar-1', source: 'PAR-Hellenism', target: 'PAR-Parthia', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'epar-2', source: 'PAR-Parthia', target: 'PAR-RomeConflict', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 3 } },
    { id: 'epar-3', source: 'PAR-Parthia', target: 'PAR-Sassanid', type: 'straight', style: { stroke: '#d1d5db', strokeWidth: 2 } },
    { id: 'epar-4', source: 'PAR-Sassanid', target: 'PAR-SilkRoad', type: 'straight', style: { stroke: '#10b981', strokeWidth: 4 } },
];

export const parthiaEdges = addArrowMarkers(edges);
