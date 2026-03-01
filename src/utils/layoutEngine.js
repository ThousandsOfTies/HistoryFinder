import dagre from 'dagre';
import { nodeWidth, nodeHeight, iconMap } from '../constants/graphConfig';

// Dagre グラフインスタンス（自動レイアウト計算用）
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

/**
 * ノードとエッジに対して Dagre による自動レイアウト（座標計算）を適用する。
 * また、非ロジックノードには 'history' タイプとアイコン情報を付与する。
 */
export const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    // ranksep(縦の間隔)は短く保ちつつ、nodesep(横の隙間)を大きく設定して重なりを抑止
    dagreGraph.setGraph({ rankdir: direction, ranksep: 40, nodesep: 120 });

    nodes.forEach((node) => {
        // logicノードは小さめとして扱う
        const isLogic = node.type === 'logic';
        const width = isLogic ? 50 : (node.style?.width || nodeWidth);
        const height = isLogic ? 50 : nodeHeight;
        dagreGraph.setNode(node.id, { width, height });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const isLogic = node.type === 'logic';
        const width = isLogic ? 50 : (node.style?.width || nodeWidth);
        const height = isLogic ? 50 : nodeHeight;

        // React Flow用に左上基準の座標に変換
        const processedNode = {
            ...node,
            position: {
                x: nodeWithPosition.x - width / 2,
                y: nodeWithPosition.y - height / 2,
            },
        };

        if (!isLogic) {
            processedNode.type = 'history';
            processedNode.data = {
                ...node.data,
                // node.data に直接 `iconUrl` が指定されている場合はそれを最優先する
                iconUrl: node.data.iconUrl || iconMap[node.data.type || 'event'] || '/icons/event.png',
                customStyle: {
                    background: node.style?.background || '#1f2937',
                    color: node.style?.color || '#fff',
                    border: node.style?.border || '2px solid #4b5563',
                }
            };

            // React Flowが外側のDOMラッパーにスタイルを適用してしまう二重描画を防止
            delete processedNode.style;
        }

        return processedNode;
    });

    return { layoutedNodes, layoutedEdges: edges };
};
