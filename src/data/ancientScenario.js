import { addArrowMarkers } from './edgeUtils';

// ===== 古代シナリオ：気候変動とローマ帝国滅亡 =====

export const initialNodes = [
    // --- 気象変動の根本原因レイヤー (Deeper Root Causes) ---
    {
        id: 'RC-SolarMinimum',
        type: 'default',
        data: {
            label: '太陽活動の低下（極小期）',
            type: 'root_cause',
            details: '[[太陽黒点]]が減少し、地球に届く太陽エネルギーが減少。また[[銀河宇宙線]]が増加し雲が発生しやすくなったとされる。'
        },
        position: { x: 200, y: -150 },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'RC-Volcano',
        type: 'default',
        data: {
            label: '大規模な火山活動の頻発',
            type: 'root_cause',
            details: '複数の大規模な火山噴火によって大気中にエアロゾル（微粒子）が充満し、[[日傘効果]]で太陽光が遮られた。'
        },
        position: { x: 600, y: -150 },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'LOGIC-OR-CLIMATE',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
        position: { x: 400, y: -50 }
    },

    // --- 根本原因レイヤー (Root Causes) ---
    {
        id: 'RC-Climate',
        type: 'default',
        data: {
            label: '4世紀の地球寒冷化・乾燥化',
            type: 'root_cause',
            details: '地球規模の気候変動により、ユーラシア大陸ステップ地帯の牧草が枯渇。遊牧民の生存基盤が失われた。'
        },
        position: { x: 400, y: 50 },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'EV-SurvivalCrisis',
        type: 'default',
        data: {
            label: '遊牧民の生存危機と移動開始',
            type: 'event',
            details: '食料と牧草を求め、フン族をはじめとする遊牧民が新たな居住地を探し始める。'
        },
        position: { x: 400, y: 150 },
        style: { background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // === 中国・東方へのアプローチ（失敗ルート） ===
    {
        id: 'EV-AttemptEast',
        type: 'default',
        data: {
            label: '豊かな東方（中国）への試み',
            type: 'action',
            details: '本来であれば、より気候が暖かく富がある南や東（中国方面）を目指したかった。'
        },
        position: { x: 750, y: 150 },
        style: { background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'CTX-ChinaDefense',
        type: 'default',
        data: {
            label: '中国王朝の強固な防衛（万里の長城）',
            type: 'context',
            details: '当時の中国は防衛網が発達しており、北方民族をしばしば撃退・弱体化させていた。'
        },
        position: { x: 1050, y: 150 },
        style: { background: '#4c1d95', color: '#fff', border: '1px dashed #8b5cf6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'LOGIC-AND-EAST',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
        position: { x: 900, y: 250 }
    },

    {
        id: 'RES-BlockedEast',
        type: 'default',
        data: {
            label: '東方への侵入失敗・断念',
            type: 'result',
            details: '強大な防衛壁に跳ね返され、東側への移動ルートは事実上「通行不可」となった。'
        },
        position: { x: 800, y: 340 },
        style: { background: '#1f2937', color: '#9ca3af', border: '1px dashed #4b5563', borderRadius: '4px', width: 250, padding: '10px', boxShadow: 'none' }
    },

    // === 西への意思決定プロセス ===
    {
        id: 'LOGIC-AND-WEST',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
        position: { x: 400, y: 270 }
    },

    {
        id: 'EV-HunMove',
        type: 'default',
        data: {
            label: '「西に行くしかない」\nフン族の西進',
            type: 'event',
            details: '東は強国、南は険しい地形。必然的に消去法で、草原が続き防衛の脆い「西」へと押し出された。ドミノの始まり。'
        },
        position: { x: 400, y: 360 },
        style: { background: '#2563eb', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // === ゲルマン・ローマ関連 ===
    {
        id: 'UDE-GermanPressure',
        type: 'default',
        data: {
            label: 'ゲルマン人への軍事的脅威',
            type: 'ude',
            details: '黒海沿岸にいたゲルマン人が、押し出されてきたフン族の圧倒的な武力に襲われ、生存の危機に。'
        },
        position: { x: 400, y: 460 },
        style: { background: '#991b1b', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'EV-GermanMove',
        type: 'default',
        data: {
            label: 'ゲルマン人の大移動',
            type: 'action',
            details: 'フン族から逃れるため、玉突き事故のように西へ向かい、ローマ帝国の国境を突破。'
        },
        position: { x: 400, y: 560 },
        style: { background: '#065f46', color: '#fff', border: '1px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'CTX-RomeWeakness',
        type: 'default',
        data: {
            label: 'ローマ帝国の兵力不足',
            type: 'context',
            details: '防衛線が広大すぎる上、正規軍が慢性的に不足していたため、侵入者を押し返せなかった。'
        },
        position: { x: 100, y: 560 },
        style: { background: '#4c1d95', color: '#fff', border: '1px dashed #8b5cf6', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'LOGIC-AND1',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
        position: { x: 300, y: 660 }
    },

    {
        id: 'INJ-RomePolicy',
        type: 'default',
        data: {
            label: 'ゲルマン人の傭兵化',
            type: 'injection',
            details: '押し寄せるゲルマン人を武力で追い返すことを諦め、国境警備の傭兵として組み込んだ。'
        },
        position: { x: 300, y: 740 },
        style: { background: '#854d0e', color: '#fff', border: '2px solid #eab308', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'NBR-MilitaryTakeover',
        type: 'default',
        data: {
            label: '軍事力のゲルマン化（簒奪リスク）',
            type: 'nbr',
            details: '帝国の中枢軍事力をゲルマン人が世襲で担うようになり、ローマ人皇帝の統制が効かなくなる。'
        },
        position: { x: 300, y: 840 },
        style: { background: '#7f1d1d', color: '#fff', border: '1px solid #b91c1c', borderRadius: '4px', width: 250, padding: '10px' }
    },

    {
        id: 'RES-FallOfRome',
        type: 'default',
        data: {
            label: '西ローマ帝国の滅亡',
            type: 'result',
            details: '476年、ゲルマン人傭兵隊長オドアケルによって西ローマ皇帝が廃位され、帝国西半分は消滅。'
        },
        position: { x: 300, y: 940 },
        style: { background: '#000000', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

const edges = [
    // --- 根本原因（気候変動）のOR結合 ---
    { id: 'e-or-climate-1', source: 'RC-SolarMinimum', target: 'LOGIC-OR-CLIMATE', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'e-or-climate-2', source: 'RC-Volcano', target: 'LOGIC-OR-CLIMATE', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'e-or-climate-out', source: 'LOGIC-OR-CLIMATE', target: 'RC-Climate', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },

    // 寒冷化 -> 生存危機
    { id: 'e1', source: 'RC-Climate', target: 'EV-SurvivalCrisis', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },

    // 東方ルートへの試み
    { id: 'e2', source: 'EV-SurvivalCrisis', target: 'EV-AttemptEast', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },
    { id: 'e-and-east-1', source: 'EV-AttemptEast', target: 'LOGIC-AND-EAST', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },
    { id: 'e-and-east-2', source: 'CTX-ChinaDefense', target: 'LOGIC-AND-EAST', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
    { id: 'e-and-east-out', source: 'LOGIC-AND-EAST', target: 'RES-BlockedEast', type: 'smoothstep', style: { stroke: '#ef4444', strokeWidth: 2 } },

    // 西進への消去法プロセス (SurvivalCrisis AND BlockedEast -> HunMove)
    { id: 'e-and-west-1', source: 'EV-SurvivalCrisis', target: 'LOGIC-AND-WEST', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },
    { id: 'e-and-west-2', source: 'RES-BlockedEast', target: 'LOGIC-AND-WEST', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e-and-west-out', source: 'LOGIC-AND-WEST', target: 'EV-HunMove', type: 'smoothstep', style: { stroke: '#eab308', strokeWidth: 3 } },

    // その後のゲルマン大移動ルート
    { id: 'e3', source: 'EV-HunMove', target: 'UDE-GermanPressure', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },
    { id: 'e4', source: 'UDE-GermanPressure', target: 'EV-GermanMove', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },

    // ローマ政策のAND結合
    { id: 'e-and1-in1', source: 'EV-GermanMove', target: 'LOGIC-AND1', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'e-and1-in2', source: 'CTX-RomeWeakness', target: 'LOGIC-AND1', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
    { id: 'e-and1-out', source: 'LOGIC-AND1', target: 'INJ-RomePolicy', type: 'smoothstep', style: { stroke: '#eab308', strokeWidth: 3 } },

    // 滅亡へのプロセス
    { id: 'e6', source: 'INJ-RomePolicy', target: 'NBR-MilitaryTakeover', type: 'smoothstep', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'e7', source: 'NBR-MilitaryTakeover', target: 'RES-FallOfRome', type: 'smoothstep', style: { stroke: '#ef4444', strokeWidth: 2 } }
];

// 全エッジに矢印マーカーを付与してエクスポート
export const initialEdges = addArrowMarkers(edges);
