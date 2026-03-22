import React, { useState, useMemo, useEffect } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import { getLayoutedElements } from '../../utils/layoutEngine';
import { handleWheelZoom } from '../../utils/zoomControl';
import { nodeTypes, minZoomLevel, maxZoomLevel } from '../../constants/graphConfig';
import TextArticleView from '../TextArticleView';
import { subGraphLoader } from '../../data/subGraphLoader';

// サブグラフ（詳細フロー）コンポーネント
// データはノードクリック時に動的インポートで遅延ロードする
const SubGraphPanel = ({ panel, index, onClose, onNodeClick, onPaneClick }) => {
    const { subGraphId, label } = panel;

    const [rfInstance, setRfInstance] = useState(null);
    const [subNodes, setSubNodes] = useState([]);
    const [subEdges, setSubEdges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('flow');

    // subGraphId が変わるたびに対応するデータを動的ロード
    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        const loader = subGraphLoader[subGraphId];
        if (!loader) {
            setSubNodes([]);
            setSubEdges([]);
            setViewMode('text');
            setLoading(false);
            return;
        }

        loader()
            .then(data => {
                if (cancelled) return;
                setSubNodes(data.nodes);
                setSubEdges(data.edges);
                // エッジがなければテキストモードをデフォルトにする
                setViewMode(data.edges.length > 0 ? 'flow' : 'text');
                setLoading(false);
            })
            .catch(err => {
                if (cancelled) return;
                console.error('Failed to load subgraph:', subGraphId, err);
                setSubNodes([]);
                setSubEdges([]);
                setViewMode('text');
                setLoading(false);
            });

        // アンマウント時にキャンセルして、遅延した setState を無視する
        return () => { cancelled = true; };
    }, [subGraphId]);

    const canShowFlow = !loading && subEdges.length > 0;

    const { layoutedNodes, layoutedEdges } = useMemo(
        () => getLayoutedElements(subNodes, subEdges),
        [subNodes, subEdges]
    );

    // ローディング中
    if (loading) {
        return (
            <div className="panel" style={{ width: '50vw' }}>
                <div className="panel-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="panel-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h2 style={{ margin: 0 }}>{label} (詳細フロー)</h2>
                        <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                    </div>
                    <div className="divider" style={{ margin: '10px 0' }}></div>
                    <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '3rem' }}>読み込み中...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="panel" style={{ width: '50vw' }}>
            <div className="panel-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <h2 style={{ margin: 0 }}>{label} (詳細フロー)</h2>
                        <div className="view-toggle" style={{ display: 'flex', alignItems: 'center', background: '#374151', borderRadius: '20px', padding: '4px' }}>
                            <button
                                onClick={() => canShowFlow && setViewMode('flow')}
                                disabled={!canShowFlow}
                                style={{
                                    padding: '4px 12px',
                                    borderRadius: '16px',
                                    border: 'none',
                                    background: viewMode === 'flow' ? '#3b82f6' : 'transparent',
                                    color: viewMode === 'flow' ? '#fff' : (canShowFlow ? '#9ca3af' : '#4b5563'),
                                    cursor: canShowFlow ? 'pointer' : 'not-allowed',
                                    fontWeight: viewMode === 'flow' ? 'bold' : 'normal',
                                    transition: 'all 0.2s'
                                }}
                            >
                                フロー
                            </button>
                            <button
                                onClick={() => setViewMode('text')}
                                style={{
                                    padding: '4px 12px',
                                    borderRadius: '16px',
                                    border: 'none',
                                    background: viewMode === 'text' ? '#3b82f6' : 'transparent',
                                    color: viewMode === 'text' ? '#fff' : '#9ca3af',
                                    cursor: 'pointer',
                                    fontWeight: viewMode === 'text' ? 'bold' : 'normal',
                                    transition: 'all 0.2s'
                                }}
                            >
                                記事
                            </button>
                        </div>
                    </div>
                    <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                </div>
                <div className="divider" style={{ margin: '10px 0' }}></div>

                {viewMode === 'flow' ? (
                    <div
                        style={{ flex: 1, position: 'relative' }}
                        onWheelCapture={(e) => handleWheelZoom(e, rfInstance)}
                    >
                        <ReactFlow
                            nodes={layoutedNodes}
                            edges={layoutedEdges}
                            nodeTypes={nodeTypes}
                            onInit={setRfInstance}
                            onNodeClick={(e, node) => onNodeClick(e, node, index)}
                            onPaneClick={() => onPaneClick(index)}
                            fitView
                            minZoom={minZoomLevel}
                            maxZoom={maxZoomLevel}
                            attributionPosition="bottom-left"
                        >
                            <Background color="#111827" gap={16} />
                            <Controls />
                        </ReactFlow>
                    </div>
                ) : (
                    <div style={{ flex: 1, position: 'relative' }}>
                        <TextArticleView nodes={subNodes} edges={subEdges} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubGraphPanel;
