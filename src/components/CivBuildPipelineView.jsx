import React, { useState, useCallback } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { buildPipelineGraph } from '../data/civBuildPipeline';
import { pipelineNodeTypes } from '../constants/graphConfig';
import { handleWheelZoom } from '../utils/zoomControl';

const { nodes: initialNodes, edges: initialEdges } = buildPipelineGraph();

/**
 * 文明ビルドパイプライン ビュー
 * 6ノードのDAGを横方向に描画し、ノードクリックで詳細パネルを表示する。
 */
const CivBuildPipelineView = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [rfInstance, setRfInstance] = useState(null);

  const handleNodeClick = useCallback((_e, node) => {
    setSelectedNode(node.data);
  }, []);

  const handlePaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="civbuild-container">
      {/* ヘッダー */}
      <div className="civbuild-header">
        <div className="civbuild-header-title">
          <span className="civbuild-title-badge">$ civilization build --pipeline</span>
          <h2 className="civbuild-title">Civilization Build Pipeline</h2>
          <p className="civbuild-subtitle">数学が文明をコンパイルした依存関係グラフ（DAG）</p>
        </div>
        <div className="civbuild-header-meta">
          <span className="civbuild-meta-item"><span className="civbuild-meta-label">nodes</span> 6</span>
          <span className="civbuild-meta-item"><span className="civbuild-meta-label">edges</span> 5</span>
          <span className="civbuild-meta-item"><span className="civbuild-meta-label">status</span> <span className="civbuild-status-ok">DEPLOYED</span></span>
        </div>
      </div>

      {/* グラフ + 詳細パネル */}
      <div className="civbuild-main">
        {/* ReactFlow グラフ */}
        <div
          className={`civbuild-graph ${selectedNode ? 'has-detail' : ''}`}
          onWheelCapture={(e) => handleWheelZoom(e, rfInstance)}
        >
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={pipelineNodeTypes}
            onNodeClick={handleNodeClick}
            onPaneClick={handlePaneClick}
            onInit={setRfInstance}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            minZoom={0.3}
            maxZoom={2.0}
            attributionPosition="bottom-left"
            nodesDraggable={false}
            nodesConnectable={false}
          >
            <Background color="#1f2937" gap={24} size={1} />
            <Controls />
          </ReactFlow>

          {!selectedNode && (
            <div className="civbuild-hint">
              ノードをクリックすると詳細が表示されます
            </div>
          )}
        </div>

        {/* 詳細パネル */}
        {selectedNode && (
          <div className="civbuild-detail" style={{ '--node-color': selectedNode.color, '--node-border': selectedNode.borderColor, '--node-glow': selectedNode.glowColor }}>
            <button className="civbuild-detail-close" onClick={() => setSelectedNode(null)}>×</button>

            {/* ステップバッジ */}
            <div className="civbuild-detail-step">STEP {selectedNode.step} / 6</div>

            {/* タイトル */}
            <div className="civbuild-detail-icon">{selectedNode.icon}</div>
            <h3 className="civbuild-detail-title">{selectedNode.label}</h3>
            <div className="civbuild-detail-sublabel">{selectedNode.sublabel}</div>

            <div className="civbuild-detail-divider"></div>

            {/* コミットメッセージ */}
            <div className="civbuild-detail-commit">
              <span className="civbuild-prompt">$ git log --oneline</span>
              <div className="civbuild-commit-line">
                <span className="civbuild-commit-hash">{selectedNode.id.slice(0, 7)}</span>
                <span className="civbuild-commit-msg">{selectedNode.commitMessage}</span>
              </div>
              <div className="civbuild-commit-version">{selectedNode.version}</div>
            </div>

            {/* Role */}
            <div className="civbuild-detail-section">
              <div className="civbuild-section-label">ROLE</div>
              <p className="civbuild-section-body">{selectedNode.role}</p>
            </div>

            {/* Tech Metaphor */}
            <div className="civbuild-detail-section">
              <div className="civbuild-section-label">TECH METAPHOR</div>
              <div className="civbuild-tech-metaphor">
                <span className="civbuild-prompt">// </span>
                {selectedNode.techMetaphor}
              </div>
            </div>

            {/* Impact */}
            <div className="civbuild-detail-section">
              <div className="civbuild-section-label">IMPACT</div>
              <p className={`civbuild-section-body ${selectedNode.isTerminal ? 'civbuild-terminal-impact' : ''}`}>
                {selectedNode.impact}
              </p>
            </div>

            {/* 依存関係 */}
            {selectedNode.dependency && (
              <div className="civbuild-detail-section">
                <div className="civbuild-section-label">DEPENDS ON</div>
                <div className="civbuild-dep-badge">{selectedNode.dependency}</div>
              </div>
            )}

            {/* ターミナルノード: 締めメッセージ */}
            {selectedNode.isTerminal && (
              <div className="civbuild-terminal-note">
                <span className="civbuild-prompt">// </span>
                これが文明をブーストさせる、最強のツール（数学）の力だ。
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CivBuildPipelineView;
