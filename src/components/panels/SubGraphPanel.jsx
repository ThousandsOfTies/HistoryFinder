import React, { useState, useMemo } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { getLayoutedElements } from '../../utils/layoutEngine';
import { handleWheelZoom } from '../../utils/zoomControl';
import { nodeTypes, minZoomLevel, maxZoomLevel } from '../../constants/graphConfig';

// Level 2: 地域サブフロー
import { europeNodes, europeEdges } from '../../data/europeSubflow';
import { middleEastNodes, middleEastEdges } from '../../data/middleEastSubflow';
import { indiaNodes, indiaEdges } from '../../data/indiaSubflow';
import { chinaNodes, chinaEdges } from '../../data/chinaSubflow';

// Level 2: 近現代サブフロー
import { revolutionNodes, revolutionEdges } from '../../data/revolutionScenario';
import { imperialismNodes, imperialismEdges } from '../../data/imperialismScenario';
import { modernMiddleEastNodes, modernMiddleEastEdges } from '../../data/modernMiddleEastScenario';
import { modernChinaNodes, modernChinaEdges } from '../../data/modernChinaScenario';
import { contemporaryNodes, contemporaryEdges } from '../../data/contemporaryScenario';

// Level 2/3: 既存シナリオ
import { macroNodes as medievalNodes, macroEdges as medievalEdges } from '../../data/medievalScenario';
import { modernNodes, modernEdges } from '../../data/modernScenario';
import { discoveryNodes, discoveryEdges } from '../../data/discoveryScenario';
import { ottomanNodes, ottomanEdges } from '../../data/ottomanScenario';
import { mughalNodes, mughalEdges } from '../../data/mughalScenario';
import { qingNodes, qingEdges } from '../../data/qingScenario';
import { turkicNodes, turkicEdges } from '../../data/turkicScenario';
import { indiaIslamicNodes, indiaIslamicEdges } from '../../data/indiaIslamicScenario';
import { originNodes, originEdges } from '../../data/originScenario';
import { frankishNodes, frankishEdges } from '../../data/frankishScenario';
import { orientNodes, orientEdges } from '../../data/orientScenario';
import { islamicEmpireNodes, islamicEmpireEdges } from '../../data/islamicEmpireScenario';
import { ancientIndiaNodes, ancientIndiaEdges } from '../../data/ancientIndiaScenario';
import { qinHanNodes, qinHanEdges } from '../../data/qinHanScenario';
import { suiTangNodes, suiTangEdges } from '../../data/suiTangScenario';
import { songYuanNodes, songYuanEdges } from '../../data/songYuanScenario';
import { grecoRomanNodes, grecoRomanEdges } from '../../data/grecoRomanScenario';
import { mesopotamiaNodes, mesopotamiaEdges } from '../../data/mesopotamiaScenario';
import { crusadesNodes, crusadesEdges } from '../../data/crusadesScenario';

// サブグラフIDとデータのマッピング
const subGraphMap = {
    // Level 2: 地域
    europe: { nodes: europeNodes, edges: europeEdges },
    middle_east: { nodes: middleEastNodes, edges: middleEastEdges },
    india: { nodes: indiaNodes, edges: indiaEdges },
    china: { nodes: chinaNodes, edges: chinaEdges },
    // Level 2: 近現代
    revolution: { nodes: revolutionNodes, edges: revolutionEdges },
    imperialism: { nodes: imperialismNodes, edges: imperialismEdges },
    modern_mideast: { nodes: modernMiddleEastNodes, edges: modernMiddleEastEdges },
    modern_china: { nodes: modernChinaNodes, edges: modernChinaEdges },
    contemporary: { nodes: contemporaryNodes, edges: contemporaryEdges },
    // Level 2/3: 既存シナリオ
    medieval_modern: { nodes: medievalNodes, edges: medievalEdges },
    modern: { nodes: modernNodes, edges: modernEdges },
    discovery: { nodes: discoveryNodes, edges: discoveryEdges },
    ottoman: { nodes: ottomanNodes, edges: ottomanEdges },
    mughal: { nodes: mughalNodes, edges: mughalEdges },
    qing: { nodes: qingNodes, edges: qingEdges },
    turkic: { nodes: turkicNodes, edges: turkicEdges },
    india_islamic: { nodes: indiaIslamicNodes, edges: indiaIslamicEdges },
    origin: { nodes: originNodes, edges: originEdges },
    frankish: { nodes: frankishNodes, edges: frankishEdges },
    orient: { nodes: orientNodes, edges: orientEdges },
    islamic_empire: { nodes: islamicEmpireNodes, edges: islamicEmpireEdges },
    ancient_india: { nodes: ancientIndiaNodes, edges: ancientIndiaEdges },
    qin_han: { nodes: qinHanNodes, edges: qinHanEdges },
    sui_tang: { nodes: suiTangNodes, edges: suiTangEdges },
    song_yuan: { nodes: songYuanNodes, edges: songYuanEdges },
    greco_roman: { nodes: grecoRomanNodes, edges: grecoRomanEdges },
    mesopotamia: { nodes: mesopotamiaNodes, edges: mesopotamiaEdges },
    crusades: { nodes: crusadesNodes, edges: crusadesEdges },
};

// サブグラフ（詳細フロー）コンポーネント
const SubGraphPanel = ({ panel, index, handleClosePanel, handleGraphNodeClick, handleGraphPaneClick }) => {
    const [rfInstance, setRfInstance] = useState(null);
    const { subGraphId, label } = panel;

    const data = subGraphMap[subGraphId] || { nodes: [], edges: [] };
    const subNodes = data.nodes;
    const subEdges = data.edges;

    // React.useMemo で計算結果をキャッシュ
    const { layoutedNodes, layoutedEdges } = useMemo(
        () => getLayoutedElements(subNodes, subEdges),
        [subNodes, subEdges]
    );

    return (
        <div className="panel" style={{ width: '50vw' }}>
            <div className="panel-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-header">
                    <h2>{label} (詳細フロー)</h2>
                    <button className="panel-close-btn" onClick={() => handleClosePanel(index)} title="閉じる">×</button>
                </div>
                <div className="divider"></div>
                <div
                    style={{ flex: 1, position: 'relative' }}
                    onWheelCapture={(e) => handleWheelZoom(e, rfInstance)}
                >
                    <ReactFlow
                        nodes={layoutedNodes}
                        edges={layoutedEdges}
                        nodeTypes={nodeTypes}
                        onInit={setRfInstance}
                        onNodeClick={(e, node) => handleGraphNodeClick(e, node, index)}
                        onPaneClick={() => handleGraphPaneClick(index)}
                        fitView
                        minZoom={minZoomLevel}
                        maxZoom={maxZoomLevel}
                        attributionPosition="bottom-left"
                    >
                        <Background color="#111827" gap={16} />
                        <Controls />
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
};

export default SubGraphPanel;
