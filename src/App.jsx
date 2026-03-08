import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';

// データ
import { grandNodes, grandEdges } from './data/grandMap';

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
import NewsFeedPanel from './components/panels/NewsFeedPanel';
import CausalChainPanel from './components/panels/CausalChainPanel';

function App() {
  // アプリモード: 'classic'（従来の歴史マップ） or 'news'（ニュース駆動）
  const [mode, setMode] = useState('classic');

  // クラシックモード用
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
    handleNewsClick,
  } = usePanelManager();

  // モードが変更されたらパネルをリセット
  useEffect(() => {
    closeAllPanels();
  }, [mode, closeAllPanels]);

  // グランドマップ読み込み（クラシックモード用）
  useEffect(() => {
    if (mode !== 'classic') return;
    const { layoutedNodes, layoutedEdges } = getLayoutedElements(grandNodes, grandEdges);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
    closeAllPanels();
  }, [mode, closeAllPanels]);

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
    } else if (panel.type === 'causal') {
      return (
        <CausalChainPanel
          key={`causal-${panel.title}-${index}`}
          panel={panel}
          index={index}
          handleClosePanel={handleClosePanel}
          handleGraphNodeClick={handleGraphNodeClick}
          handleGraphPaneClick={handleGraphPaneClick}
        />
      );
    }
    return null;
  };

  return (
    <div className="app-container">
      <Header
        mode={mode}
        onModeChange={setMode}
        panels={panels}
        onBreadcrumbClick={handleBreadcrumbClick}
      />

      <div className="main-content" ref={panelsContainerRef}>
        {mode === 'classic' ? (
          /* クラシックモード: 従来のグランドマップ */
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
        ) : (
          /* ニュースモード: ニュース一覧パネル */
          <div className={`news-panel-wrapper ${panels.length > 0 ? 'has-panels' : ''}`}>
            <NewsFeedPanel onNewsClick={handleNewsClick} />
          </div>
        )}
        {panels.map((panel, index) => renderPanel(panel, index))}
      </div>
    </div>
  );
}

export default App;
