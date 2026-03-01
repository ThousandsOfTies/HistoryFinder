import React, { useState, useMemo } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { getLayoutedElements } from '../../utils/layoutEngine';
import { handleWheelZoom } from '../../utils/zoomControl';
import { nodeTypes, minZoomLevel, maxZoomLevel } from '../../constants/graphConfig';
import { initialNodes, initialEdges } from '../../data/ancientScenario';

// サブグラフ（詳細フロー）コンポーネント
const SubGraphPanel = ({ panel, index, handleClosePanel, handleGraphNodeClick, handleGraphPaneClick }) => {
    const [rfInstance, setRfInstance] = useState(null);
    const { subGraphId, label } = panel;

    let subNodes = [];
    let subEdges = [];
    if (subGraphId === 'ancient') {
        subNodes = initialNodes;
        subEdges = initialEdges;
    }

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
