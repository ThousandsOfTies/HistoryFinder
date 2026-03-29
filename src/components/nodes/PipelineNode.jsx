import React from 'react';
import { Handle, Position } from 'reactflow';

/**
 * 文明ビルドパイプライン用カスタムノード
 * システムアーキテクチャ図スタイルのカード型ノード
 */
const PipelineNode = ({ data, selected }) => {
  return (
    <div
      className={`pipeline-node ${selected ? 'pipeline-node--selected' : ''} ${data.isTerminal ? 'pipeline-node--terminal' : ''}`}
      style={{
        '--node-color': data.color,
        '--node-border': data.borderColor,
        '--node-glow': data.glowColor,
      }}
    >
      <Handle type="target" position={Position.Left} className="pipeline-handle" />

      <div className="pipeline-node-step">STEP {data.step}</div>

      <div className="pipeline-node-icon">{data.icon}</div>

      <div className="pipeline-node-body">
        <div className="pipeline-node-label">{data.label}</div>
        <div className="pipeline-node-sublabel">{data.sublabel}</div>
      </div>

      <div className="pipeline-node-version">{data.version}</div>

      <Handle type="source" position={Position.Right} className="pipeline-handle" />
    </div>
  );
};

export default PipelineNode;
