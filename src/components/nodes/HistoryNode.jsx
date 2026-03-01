import React from 'react';
import { Handle, Position } from 'reactflow';

// 歴史事象を表すカスタムノード（専用画像アイコン付きでリッチに表示）
const HistoryNode = ({ data, selected }) => {
    return (
        <div className={`history-node ${selected ? 'selected' : ''}`} style={data.customStyle}>
            <Handle type="target" position={Position.Top} className="logic-handle" />
            <div className="history-icon-wrapper">
                <img src={data.iconUrl} alt="node-icon" className="history-icon-img" />
            </div>
            <div className="history-label">{data.label}</div>
            <Handle type="source" position={Position.Bottom} className="logic-handle" />
        </div>
    );
};

export default HistoryNode;
