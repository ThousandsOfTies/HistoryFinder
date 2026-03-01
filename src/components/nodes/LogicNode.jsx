import React from 'react';
import { Handle, Position } from 'reactflow';

// TOC思考プロセスの論理結合点（AND / OR）を表すカスタムノード
const LogicNode = ({ data }) => {
    return (
        <div className={`logic-node ${data.operator ? data.operator.toLowerCase() : ''}`}>
            <Handle type="target" position={Position.Top} className="logic-handle" />
            <div className="logic-symbol">{data.symbol}</div>
            <Handle type="source" position={Position.Bottom} className="logic-handle" />
        </div>
    );
};

export default LogicNode;
