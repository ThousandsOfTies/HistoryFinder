import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { mathHistoryNodes as rawNodes, mathHistoryEdges as rawEdges } from '../data/mathHistoryScenario';
import { getLayoutedElements } from '../utils/layoutEngine';
import { nodeTypes, minZoomLevel, maxZoomLevel } from '../constants/graphConfig';
import { handleWheelZoom } from '../utils/zoomControl';

const { layoutedNodes, layoutedEdges } = getLayoutedElements(rawNodes, rawEdges);

/**
 * 文明ビルドパイプライン ビュー (数学史)
 * TOC標準のノード描画を利用しつつ、独立したモードとして表示する
 */
const CivBuildPipelineView = ({ onNodeClick, onPaneClick }) => {
  const [rfInstance, setRfInstance] = useState(null);

  // ヘッダースタイル
  const headerStyle = {
    padding: '16px 24px',
    background: '#111827',
    borderBottom: '1px solid #1f2937'
  };

  return (
    <div className="civbuild-container" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* ヘッダー */}
      <div className="civbuild-header" style={headerStyle}>
        <h2 className="civbuild-title" style={{ margin: 0, color: '#f9fafb', fontSize: '1.5rem', fontWeight: 'bold' }}>
          数学史
        </h2>
      </div>

      {/* グラフ領域 */}
      <div
        className="civbuild-main"
        style={{ flex: 1, position: 'relative', background: '#0f172a' }}
        onWheelCapture={(e) => handleWheelZoom(e, rfInstance)}
      >
        <ReactFlow
          nodes={layoutedNodes}
          edges={layoutedEdges}
          nodeTypes={nodeTypes}
          onInit={setRfInstance}
          onNodeClick={(e, node) => onNodeClick(e, node)}
          onPaneClick={onPaneClick}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={minZoomLevel}
          maxZoom={maxZoomLevel}
          attributionPosition="bottom-left"
        >
          <Background color="#1e293b" gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default CivBuildPipelineView;
