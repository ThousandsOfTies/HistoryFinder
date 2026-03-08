import React from 'react';
import { renderTextWithLinks } from '../../utils/textParser';

// ノード詳細パネル（ノードクリック時に開く事象の解説）
const NodeDetailPanel = ({ panel, index, onClose, onKeywordClick }) => {
    const { data } = panel.data;

    return (
        <div className="panel">
            <div className="panel-content">
                <div className="panel-header">
                    <h2>{data.label.replace('\n', ' ')}</h2>
                    <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                </div>
                <div className="divider"></div>
                <p className="details">{renderTextWithLinks(data.details, index, onKeywordClick)}</p>


                <div className="node-stats" style={{ marginTop: '16px' }}>
                    <span className="badge">ID: {panel.data.id}</span>
                    <span className="badge" style={{ marginLeft: '8px', background: '#374151' }}>
                        Type: {data.type || panel.data.type}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NodeDetailPanel;
