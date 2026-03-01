import React from 'react';
import { renderTextWithLinks } from '../../utils/textParser';

// AI辞書解説パネル（キーワードリンククリック時に開く）
const DictPanel = ({ panel, index, onClose, onKeywordClick }) => {
    if (panel.loading) {
        return (
            <div className="panel">
                <div className="panel-content">
                    <div className="panel-header">
                        <h2>{panel.keyword}</h2>
                        <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                    </div>
                    <div className="divider" style={{ background: 'linear-gradient(90deg, #60a5fa, transparent)' }}></div>
                    <p className="details" style={{ color: '#9ca3af' }}>AIに歴史の文脈を問い合わせ中...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="panel">
            <div className="panel-content">
                <div className="panel-header">
                    <h2>{panel.keyword}</h2>
                    <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                </div>
                <div className="divider" style={{ background: 'linear-gradient(90deg, #60a5fa, transparent)' }}></div>

                {/* 画像が存在する場合は表示 */}
                {panel.imageUrl && (
                    <div className="panel-image-container">
                        <img src={panel.imageUrl} alt={panel.keyword} className="panel-image" />
                    </div>
                )}

                <p className="details">{renderTextWithLinks(panel.text, index, onKeywordClick)}</p>

                <div className="node-stats">
                    <span className="badge" style={{ color: '#60a5fa', backgroundColor: '#1e3a8a' }}>AI 解説</span>
                </div>
            </div>
        </div>
    );
};

export default DictPanel;
