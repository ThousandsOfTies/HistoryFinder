import React, { useState, useMemo } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { getLayoutedElements } from '../../utils/layoutEngine';
import { handleWheelZoom } from '../../utils/zoomControl';
import { nodeTypes, minZoomLevel, maxZoomLevel } from '../../constants/graphConfig';

/**
 * AI生成された因果関係チェーンを ReactFlow で描画するパネル。
 * SubGraphPanel と同じ構造だが、データがAI生成JSONから動的に来る。
 */
const CausalChainPanel = ({ panel, index, handleClosePanel, handleGraphNodeClick, handleGraphPaneClick }) => {
    const [rfInstance, setRfInstance] = useState(null);
    const { causalNodes, causalEdges, title } = panel;

    // Dagre で自動レイアウト
    const { layoutedNodes, layoutedEdges } = useMemo(
        () => getLayoutedElements(causalNodes || [], causalEdges || []),
        [causalNodes, causalEdges]
    );

    // ローディング中
    if (panel.loading) {
        return (
            <div className="panel" style={{ width: '50vw' }}>
                <div className="panel-content">
                    <div className="panel-header">
                        <h2>📰 因果関係を分析中...</h2>
                        <button className="panel-close-btn" onClick={() => handleClosePanel(index)} title="閉じる">×</button>
                    </div>
                    <div className="divider" style={{ background: 'linear-gradient(90deg, #f59e0b, transparent)' }}></div>
                    <div className="causal-loading">
                        <div className="causal-loading-icon">🔄</div>
                        <p>AIが歴史的因果関係を分析しています...</p>
                        <p className="causal-loading-sub">ニュースの歴史的背景をTOC（制約条件の理論）に基づいて構造化中</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="panel" style={{ width: '50vw' }}>
            <div className="panel-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-header">
                    <h2>{title || '因果関係マップ'}</h2>
                    <button className="panel-close-btn" onClick={() => handleClosePanel(index)} title="閉じる">×</button>
                </div>
                <div className="divider" style={{ background: 'linear-gradient(90deg, #f59e0b, transparent)' }}></div>
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

export default CausalChainPanel;
