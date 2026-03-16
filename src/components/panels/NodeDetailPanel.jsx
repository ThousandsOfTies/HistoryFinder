import { renderTextWithLinks } from '../../utils/textParser';
import YouTubeSection from './YouTubeSection';

// ノード詳細パネル（ノードクリック時に開く事象の解説）
const NodeDetailPanel = ({ panel, index, onClose, onKeywordClick }) => {
    const { data } = panel.data;
    const keyword = data.label.replace('\n', ' ').trim();

    return (
        <div className="panel panel--scrollable">
            <div className="panel-content">
                <div className="panel-header">
                    <h2>{keyword}</h2>
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

                <YouTubeSection keyword={keyword} />
            </div>
        </div>
    );
};

export default NodeDetailPanel;
