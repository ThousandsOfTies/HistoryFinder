/**
 * サブグラフIDから動的インポート関数へのマッピング。
 * SubGraphPanel がノードクリック時に初めてデータをロードするための遅延ローダー。
 *
 * 各エントリは () => Promise<{ nodes: Array, edges: Array }> の形式。
 * データファイル側は一切変更せず、named export の差異をここで吸収している。
 *
 * @type {Record<string, () => Promise<{ nodes: Array, edges: Array }>>}
 */
export const subGraphLoader = {
    // Level 2: 地域サブフロー
    europe:        () => import('./europeSubflow').then(m => ({ nodes: m.europeNodes, edges: m.europeEdges })),
    middle_east:   () => import('./middleEastSubflow').then(m => ({ nodes: m.middleEastNodes, edges: m.middleEastEdges })),
    india:         () => import('./indiaSubflow').then(m => ({ nodes: m.indiaNodes, edges: m.indiaEdges })),
    china:         () => import('./chinaSubflow').then(m => ({ nodes: m.chinaNodes, edges: m.chinaEdges })),

    // Level 2: 近現代サブフロー
    revolution:    () => import('./revolutionScenario').then(m => ({ nodes: m.revolutionNodes, edges: m.revolutionEdges })),
    imperialism:   () => import('./imperialismScenario').then(m => ({ nodes: m.imperialismNodes, edges: m.imperialismEdges })),
    modern_mideast:() => import('./modernMiddleEastScenario').then(m => ({ nodes: m.modernMiddleEastNodes, edges: m.modernMiddleEastEdges })),
    modern_china:  () => import('./modernChinaScenario').then(m => ({ nodes: m.modernChinaNodes, edges: m.modernChinaEdges })),
    contemporary:  () => import('./contemporaryScenario').then(m => ({ nodes: m.contemporaryNodes, edges: m.contemporaryEdges })),

    // Level 2/3: 既存シナリオ
    // medievalScenario は macroNodes/macroEdges という名前で export されているため注意
    medieval_modern: () => import('./medievalScenario').then(m => ({ nodes: m.macroNodes, edges: m.macroEdges })),
    modern:          () => import('./modernScenario').then(m => ({ nodes: m.modernNodes, edges: m.modernEdges })),
    discovery:       () => import('./discoveryScenario').then(m => ({ nodes: m.discoveryNodes, edges: m.discoveryEdges })),
    ottoman:         () => import('./ottomanScenario').then(m => ({ nodes: m.ottomanNodes, edges: m.ottomanEdges })),
    mughal:          () => import('./mughalScenario').then(m => ({ nodes: m.mughalNodes, edges: m.mughalEdges })),
    qing:            () => import('./qingScenario').then(m => ({ nodes: m.qingNodes, edges: m.qingEdges })),
    turkic:          () => import('./turkicScenario').then(m => ({ nodes: m.turkicNodes, edges: m.turkicEdges })),
    india_islamic:   () => import('./indiaIslamicScenario').then(m => ({ nodes: m.indiaIslamicNodes, edges: m.indiaIslamicEdges })),
    origin:          () => import('./originScenario').then(m => ({ nodes: m.originNodes, edges: m.originEdges })),
    frankish:        () => import('./frankishScenario').then(m => ({ nodes: m.frankishNodes, edges: m.frankishEdges })),
    orient:          () => import('./orientScenario').then(m => ({ nodes: m.orientNodes, edges: m.orientEdges })),
    islamic_empire:  () => import('./islamicEmpireScenario').then(m => ({ nodes: m.islamicEmpireNodes, edges: m.islamicEmpireEdges })),
    ancient_india:   () => import('./ancientIndiaScenario').then(m => ({ nodes: m.ancientIndiaNodes, edges: m.ancientIndiaEdges })),
    qin_han:         () => import('./qinHanScenario').then(m => ({ nodes: m.qinHanNodes, edges: m.qinHanEdges })),
    sui_tang:        () => import('./suiTangScenario').then(m => ({ nodes: m.suiTangNodes, edges: m.suiTangEdges })),
    song_yuan:       () => import('./songYuanScenario').then(m => ({ nodes: m.songYuanNodes, edges: m.songYuanEdges })),
    greco_roman:     () => import('./grecoRomanScenario').then(m => ({ nodes: m.grecoRomanNodes, edges: m.grecoRomanEdges })),
    mesopotamia:     () => import('./mesopotamiaScenario').then(m => ({ nodes: m.mesopotamiaNodes, edges: m.mesopotamiaEdges })),
    crusades:        () => import('./crusadesScenario').then(m => ({ nodes: m.crusadesNodes, edges: m.crusadesEdges })),
    navigation:      () => import('./navigationScenario').then(m => ({ nodes: m.navigationNodes, edges: m.navigationEdges })),
    industrial_rev:  () => import('./industrialRevScenario').then(m => ({ nodes: m.industrialRevNodes, edges: m.industrialRevEdges })),
    nation_state:    () => import('./nationStateScenario').then(m => ({ nodes: m.nationStateNodes, edges: m.nationStateEdges })),
    development_gap: () => import('./developmentGapScenario').then(m => ({ nodes: m.developmentGapNodes, edges: m.developmentGapEdges })),
    modern_india:    () => import('./modernIndiaScenario').then(m => ({ nodes: m.modernIndiaNodes, edges: m.modernIndiaEdges })),
    parthia:         () => import('./parthiaScenario').then(m => ({ nodes: m.parthiaNodes, edges: m.parthiaEdges })),
    liberalism:      () => import('./liberalismScenario').then(m => ({ nodes: m.liberalismNodes, edges: m.liberalismEdges })),
    communism:       () => import('./communismScenario').then(m => ({ nodes: m.communismNodes, edges: m.communismEdges })),
    ussr:            () => import('./ussrScenario').then(m => ({ nodes: m.ussrNodes, edges: m.ussrEdges })),
};
