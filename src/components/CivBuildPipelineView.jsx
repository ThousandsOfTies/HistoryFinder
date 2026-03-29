import React, { useState, useMemo } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import { buildPipelineGraph } from '../data/civBuildPipeline';
import { getPipelineLayout } from '../utils/layoutEngine';
import { pipelineNodeTypes } from '../constants/graphConfig';
import { handleWheelZoom } from '../utils/zoomControl';

const { pipelineNodes: rawNodes, pipelineEdges: rawEdges } = buildPipelineGraph();
const { layoutedNodes: initialNodes, layoutedEdges: initialEdges } = getPipelineLayout(rawNodes, rawEdges);

// フェーズカラーマップ
const PHASE_COLORS = {
  1: { color: '#0ea5e9', label: 'Phase 1: データのデジタル化' },
  2: { color: '#10b981', label: 'Phase 2: 並列化と最適化' },
  3: { color: '#f59e0b', label: 'Phase 3: 未来のハックと次元拡張' },
  4: { color: '#f97316', label: 'Phase 4: 不確実性のデータ化' },
  5: { color: '#14b8a6', label: 'Phase 5: 資本の集積と次世代R&D' },
};

/**
 * 文明ビルドパイプライン ビュー
 * 11ノードの縦方向DAGを描画し、ノードクリックで詳細パネルを表示する。
 */
const CivBuildPipelineView = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [rfInstance, setRfInstance] = useState(null);

  const phaseInfo = useMemo(() => selectedNode ? PHASE_COLORS[selectedNode.phase] : null, [selectedNode]);

  return (
    <div className="civbuild-container">
      {/* ヘッダー */}
      <div className="civbuild-header">
        <div className="civbuild-header-title">
          <span className="civbuild-title-badge">$ civilization build --dag --direction=TB</span>
          <h2 className="civbuild-title">Civilization Build Pipeline</h2>
          <p className="civbuild-subtitle">数学が文明をコンパイルした依存関係グラフ（DAG）— ノードをクリックで詳細表示</p>
        </div>
        <div className="civbuild-header-meta">
          <span className="civbuild-meta-item"><span className="civbuild-meta-label">nodes</span> 11</span>
          <span className="civbuild-meta-item"><span className="civbuild-meta-label">phases</span> 5</span>
          <span className="civbuild-meta-item"><span className="civbuild-meta-label">status</span> <span className="civbuild-status-ok">DEPLOYED</span></span>
        </div>
      </div>

      {/* フェーズ凡例 */}
      <div className="civbuild-legend">
        {Object.entries(PHASE_COLORS).map(([phase, info]) => (
          <div key={phase} className="civbuild-legend-item">
            <span className="civbuild-legend-dot" style={{ background: info.color }}></span>
            <span className="civbuild-legend-label">{info.label}</span>
          </div>
        ))}
      </div>

      {/* グラフ + 詳細パネル */}
      <div className="civbuild-main">
        {/* ReactFlow グラフ */}
        <div
          className="civbuild-graph"
          onWheelCapture={(e) => handleWheelZoom(e, rfInstance)}
        >
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={pipelineNodeTypes}
            onNodeClick={(_e, node) => setSelectedNode(node.data)}
            onPaneClick={() => setSelectedNode(null)}
            onInit={setRfInstance}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            minZoom={0.2}
            maxZoom={2.0}
            attributionPosition="bottom-left"
            nodesDraggable={false}
            nodesConnectable={false}
          >
            <Background color="#111827" gap={24} size={1} />
            <Controls />
          </ReactFlow>
        </div>

        {/* 詳細パネル */}
        {selectedNode && (
          <div
            className="civbuild-detail"
            style={{
              '--node-color': selectedNode.color,
              '--node-border': selectedNode.borderColor,
              '--node-glow': selectedNode.glowColor,
            }}
          >
            <button className="civbuild-detail-close" onClick={() => setSelectedNode(null)}>×</button>

            {/* フェーズバッジ */}
            {phaseInfo && (
              <div className="civbuild-detail-phase" style={{ color: phaseInfo.color, borderColor: phaseInfo.color }}>
                {phaseInfo.label}
              </div>
            )}

            {/* タイトル */}
            <div className="civbuild-detail-icon">{selectedNode.icon}</div>
            <h3 className="civbuild-detail-title">{selectedNode.label}</h3>
            <div className="civbuild-detail-sublabel">{selectedNode.sublabel}</div>
            <div className="civbuild-detail-era">🕐 {selectedNode.era}</div>

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
            {selectedNode.dependencies && selectedNode.dependencies.length > 0 && (
              <div className="civbuild-detail-section">
                <div className="civbuild-section-label">DEPENDS ON</div>
                <div className="civbuild-dep-list">
                  {selectedNode.dependencies.map(dep => (
                    <span key={dep} className="civbuild-dep-badge">{dep}</span>
                  ))}
                </div>
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
