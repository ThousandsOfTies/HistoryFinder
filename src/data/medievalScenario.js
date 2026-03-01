import { addArrowMarkers } from './edgeUtils';

// ===== 中世シナリオ：パラダイムシフトと科学革命 =====

export const macroNodes = [
    // --- 古代の終焉マクロ ---
    {
        id: 'MACRO-RomeFall',
        type: 'default',
        data: {
            label: '西ローマ帝国の滅亡',
            type: 'macro_event',
            subGraphId: 'ancient',
            details: 'クリックして、この時代転換の詳細な因果関係フローマップを開きます。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'MACRO-MiddleAges',
        type: 'default',
        data: {
            label: '中世の始まり (封建社会化)',
            type: 'event',
            details: 'ローマの広域インフラが崩壊し、地方分権的な封建社会（荘園制）へと移行した時代。',
        },
        position: { x: 0, y: 0 },
        style: { background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- ルネサンスの要因 ---
    {
        id: 'MACRO-Crusades',
        type: 'default',
        data: {
            label: '十字軍の遠征と文化交流',
            type: 'root_cause',
            iconUrl: '/icons/crusades.png',
            details: '[[十字軍]]の遠征により、進んだイスラム文化や、失われていた[[古代ギリシア哲学]]の文献が西欧にもたらされた。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'MACRO-BlackDeath',
        type: 'default',
        data: {
            label: 'ペスト（黒死病）の流行',
            type: 'root_cause',
            iconUrl: '/icons/plague.png',
            details: '14世紀の[[黒死病]]大流行により人口が激減。封建領主やカトリック教会の権威が大きく揺らぐ結果となった。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-RENAISSANCE',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },
    {
        id: 'MACRO-Renaissance',
        type: 'default',
        data: {
            label: 'ルネサンス（文芸復興）',
            type: 'event',
            details: '神中心の中世的価値観から離れ、古代の人間中心主義（ヒューマニズム）を理想とする文化運動。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 大航海時代の要因 ---
    {
        id: 'MACRO-Ottoman',
        type: 'default',
        data: {
            label: 'オスマン帝国の勃興',
            type: 'root_cause',
            details: '強力なイスラム帝国が東地中海を制圧し、アジアとの陸路貿易（香辛料ルート）が遮断・高騰した。'
        },
        style: { background: '#8b5cf6', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'MACRO-Navigation',
        type: 'default',
        data: {
            label: '航海・造船技術の発展',
            type: 'root_cause',
            details: '[[羅針盤]]の改良や、遠洋航海に耐えうるキャラベル船・ガレオン船の開発が進んだ。'
        },
        style: { background: '#374151', color: '#fff', border: '1px solid #4b5563', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-DISCOVERY',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },
    {
        id: 'MACRO-AgeOfDiscovery',
        type: 'default',
        data: {
            label: '大航海時代（新航路開拓）',
            type: 'event',
            iconUrl: '/icons/discovery.png',
            details: 'ヨーロッパ諸国が海を越えてインドやアメリカ大陸（新大陸）へ到達し、世界規模のネットワークが形成された時代。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 科学革命への収束 ---
    {
        id: 'LOGIC-AND-SCIENCE',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },
    {
        id: 'MACRO-ScientificRevolution',
        type: 'default',
        data: {
            label: '科学革命',
            type: 'event',
            details: 'ルネサンスの「観察に基づく合理精神」と、大航海時代がもたらした「未知の事実の発見」が結合し、[[地動説]]や万有引力などの近代科学が誕生した。'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

const edges = [
    // 古代から中世へ
    { id: 'em-0', source: 'MACRO-RomeFall', target: 'MACRO-MiddleAges', type: 'smoothstep', style: { stroke: '#9ca3af', strokeWidth: 2 } },

    // ルネサンスへの合流
    { id: 'em-1', source: 'MACRO-Crusades', target: 'LOGIC-AND-RENAISSANCE', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'em-2', source: 'MACRO-BlackDeath', target: 'LOGIC-AND-RENAISSANCE', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'em-3', source: 'LOGIC-AND-RENAISSANCE', target: 'MACRO-Renaissance', type: 'smoothstep', style: { stroke: '#059669', strokeWidth: 3 } },

    // 大航海時代への合流
    { id: 'em-4', source: 'MACRO-Ottoman', target: 'LOGIC-AND-DISCOVERY', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'em-5', source: 'MACRO-Navigation', target: 'LOGIC-AND-DISCOVERY', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'em-6', source: 'LOGIC-AND-DISCOVERY', target: 'MACRO-AgeOfDiscovery', type: 'smoothstep', style: { stroke: '#d97706', strokeWidth: 3 } },

    // 科学革命への合流
    { id: 'em-7', source: 'MACRO-Renaissance', target: 'LOGIC-AND-SCIENCE', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'em-8', source: 'MACRO-AgeOfDiscovery', target: 'LOGIC-AND-SCIENCE', type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'em-9', source: 'LOGIC-AND-SCIENCE', target: 'MACRO-ScientificRevolution', type: 'smoothstep', style: { stroke: '#b91c1c', strokeWidth: 4 } }
];

// 全エッジに矢印マーカーを付与してエクスポート
export const macroEdges = addArrowMarkers(edges);
