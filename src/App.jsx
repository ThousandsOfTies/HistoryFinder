import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';

// データ
import { initialNodes, initialEdges } from './data/ancientScenario';
import { macroNodes, macroEdges } from './data/medievalScenario';

// ユーティリティ
import { getLayoutedElements } from './utils/layoutEngine';
import { handleWheelZoom } from './utils/zoomControl';

// 定数
import { nodeTypes, minZoomLevel, maxZoomLevel } from './constants/graphConfig';

// カスタムフック
import { usePanelManager } from './hooks/usePanelManager';

// コンポーネント
import Header from './components/Header';
import SubGraphPanel from './components/panels/SubGraphPanel';
import NodeDetailPanel from './components/panels/NodeDetailPanel';
import DictPanel from './components/panels/DictPanel';

function App() {
  const [scenario, setScenario] = useState('medieval_modern');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [mainRfInstance, setMainRfInstance] = useState(null);

  // パネル管理ロジックをカスタムフックに委譲
  const {
    panels,
    panelsContainerRef,
    closeAllPanels,
    handleClosePanel,
    handleBreadcrumbClick,
    handleGraphNodeClick,
    handleGraphPaneClick,
    handleKeywordClick,
  } = usePanelManager();

  // シナリオが変更されたらデータを読み込み直して自動レイアウト
  useEffect(() => {
    let sourceNodes = [];
    let sourceEdges = [];
    if (scenario === 'ancient') {
      sourceNodes = initialNodes;
      sourceEdges = initialEdges;
    } else if (scenario === 'medieval_modern') {
      sourceNodes = macroNodes;
      sourceEdges = macroEdges;
    }

    const { layoutedNodes, layoutedEdges } = getLayoutedElements(sourceNodes, sourceEdges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
    closeAllPanels(); // マップが切り替わったらパネルを閉じる
  }, [scenario, closeAllPanels]);

  // パネルの描画
  const renderPanel = (panel, index) => {
    if (panel.type === 'node') {
      return (
        <NodeDetailPanel
          key={`node-${panel.data.id}-${index}`}
          panel={panel}
          index={index}
          onClose={handleClosePanel}
          onKeywordClick={handleKeywordClick}
        />
      );
    } else if (panel.type === 'graph') {
      return (
        <SubGraphPanel
          key={`graph-${panel.subGraphId}-${index}`}
          panel={panel}
          index={index}
          handleClosePanel={handleClosePanel}
          handleGraphNodeClick={handleGraphNodeClick}
          handleGraphPaneClick={handleGraphPaneClick}
        />
      );
    } else if (panel.type === 'dict') {
      return (
        <DictPanel
          key={`dict-${panel.keyword}-${index}`}
          panel={panel}
          index={index}
          onClose={handleClosePanel}
          onKeywordClick={handleKeywordClick}
        />
      );
    }
    return null;
  };

  return (
    <div className="app-container">
      <Header
        scenario={scenario}
        onScenarioChange={setScenario}
        panels={panels}
        onBreadcrumbClick={handleBreadcrumbClick}
      />

      <div className="main-content" ref={panelsContainerRef}>
        <div
          className={`chart-panel ${panels.length > 0 ? 'has-panels' : ''}`}
          onWheelCapture={(e) => handleWheelZoom(e, mainRfInstance)}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onInit={setMainRfInstance}
            onNodesChange={(changes) => setNodes((nds) => applyNodeChanges(changes, nds))}
            onEdgesChange={(changes) => setEdges((eds) => applyEdgeChanges(changes, eds))}
            onNodeClick={(e, node) => handleGraphNodeClick(e, node, -1)}
            onPaneClick={() => handleGraphPaneClick(-1)}
            fitView
            minZoom={minZoomLevel}
            maxZoom={maxZoomLevel}
            attributionPosition="bottom-left"
          >
            <Background color="#ccc" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
        {panels.map((panel, index) => renderPanel(panel, index))}
      </div>
    </div>
  );
}

export default App;
