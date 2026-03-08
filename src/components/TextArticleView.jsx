import React, { useMemo } from 'react';

// グラフデータから記事形式のテキストを生成・表示するコンポーネント
const TextArticleView = ({ nodes, edges }) => {
    // トポロジカルソートでノードの順序を決定する（簡易版：エッジの依存関係から順序付け）
    const sortedNodes = useMemo(() => {
        const inDegree = {};
        const adjList = {};

        // 初期化（ロジックノードを除外）
        const dataNodes = nodes.filter(n => n.type !== 'logic');
        dataNodes.forEach(n => {
            inDegree[n.id] = 0;
            adjList[n.id] = [];
        });

        // グラフ構築（ロジックノードをバイパスして、実データノード同士を直接繋ぐ）
        edges.forEach(edge => {
            let source = edge.source;
            let target = edge.target;

            // sourceがロジックノードなら、そのロジックノードに入るエッジのsourceを探す（1つ前）
            const sourceNode = nodes.find(n => n.id === source);
            if (sourceNode && sourceNode.type === 'logic') {
                const prevEdge = edges.find(e => e.target === source);
                if (prevEdge) source = prevEdge.source;
            }

            // targetがロジックノードなら、そのロジックノードから出るエッジのtargetを探す（1つ先）
            const targetNode = nodes.find(n => n.id === target);
            if (targetNode && targetNode.type === 'logic') {
                const nextEdge = edges.find(e => e.source === target);
                if (nextEdge) target = nextEdge.target;
            }

            if (adjList[source] && inDegree[target] !== undefined) {
                adjList[source].push(target);
                inDegree[target]++;
            }
        });

        // トポロジカルソート (Kahn's Algorithm)
        const queue = [];
        Object.keys(inDegree).forEach(id => {
            if (inDegree[id] === 0) queue.push(id);
        });

        const sorted = [];
        while (queue.length > 0) {
            const current = queue.shift();
            const node = dataNodes.find(n => n.id === current);
            if (node) sorted.push(node);

            (adjList[current] || []).forEach(neighbor => {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            });
        }

        // ソートされなかったノード（孤立ノードや循環）も後ろに追加
        dataNodes.forEach(node => {
            if (!sorted.find(n => n.id === node.id)) {
                sorted.push(node);
            }
        });

        return sorted;
    }, [nodes, edges]);

    if (sortedNodes.length === 0) {
        return <div style={{ padding: '20px', color: '#9ca3af' }}>テキストデータがありません。</div>;
    }

    return (
        <div style={{ padding: '30px', overflowY: 'auto', height: '100%', boxSizing: 'border-box', backgroundColor: '#111827', color: '#f3f4f6', lineHeight: '1.8' }}>
            <h3 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '10px', marginBottom: '20px', color: '#60a5fa' }}>歴史の流れ (記事ビュー)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {sortedNodes.map((node, index) => (
                    <div key={node.id} style={{ display: 'flex', gap: '16px', background: '#1f2937', padding: '20px', borderRadius: '8px', borderLeft: `4px solid ${node.style?.borderColor || node.style?.background || '#3b82f6'}` }}>
                        {node.data.iconUrl && (
                            <div style={{ flexShrink: 0 }}>
                                <img src={node.data.iconUrl} alt="icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                        )}
                        <div>
                            <h4 style={{ margin: '0 0 8px 0', color: node.style?.color || '#fff', fontSize: '1.2em' }}>{node.data.label.replace(/\\n/g, ' ')}</h4>
                            <p style={{ margin: 0, color: '#d1d5db', whiteSpace: 'pre-wrap' }}>
                                {/* 簡易的なWikiリンクのパース表現 */}
                                {node.data.details ? node.data.details.replace(/\[\[(.*?)\]\]/g, '$1') : '詳細情報がありません。'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ height: '40px' }}></div>
        </div>
    );
};

export default TextArticleView;
