import dagre from 'dagre';
import { nodeWidth, nodeHeight, iconMap } from '../constants/graphConfig';

/**
 * ノードとエッジに対して Dagre による自動レイアウト（座標計算）を適用する。
 * また、非ロジックノードには 'history' タイプとアイコン情報を付与する。
 */
export const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    // 毎回新しいグラフインスタンスを作成して状態の蓄積を防ぐ
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    // 縦のノード実体サイズが大きいため ranksep を広げ、横の重なりも抑止
    dagreGraph.setGraph({ rankdir: direction, ranksep: 120, nodesep: 300 });

    nodes.forEach((node) => {
        // logicノードも計算上は通常ノードと同じ幅(width)として扱うことで、Dagreのアルゴリズムによって極端に右へずれるのを防ぎ、中央に配置させる。
        const isLogic = node.type === 'logic';
        const width = node.style?.width || nodeWidth;
        const height = isLogic ? 50 : 120;
        dagreGraph.setNode(node.id, { width, height });
    });

    edges.forEach((edge) => {
        // 横方向への干渉エッジ（animated: true）は、Dagreの横並び計算でレーンを歪ませないように weight: 0 を設定
        if (edge.animated) {
            dagreGraph.setEdge(edge.source, edge.target, { weight: 0, minlen: 1 });
        } else {
            dagreGraph.setEdge(edge.source, edge.target, { weight: 1, minlen: 1 });
        }
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        const isLogic = node.type === 'logic';

        const actualWidth = isLogic ? 50 : (node.style?.width || nodeWidth);
        const actualHeight = isLogic ? 50 : nodeHeight;

        // manualPosition フラグが設定されている場合は元の座標を使用
        const position = node.data?.manualPosition
            ? { x: node.position.x, y: node.position.y }
            : {
                x: nodeWithPosition.x - actualWidth / 2,
                y: nodeWithPosition.y - actualHeight / 2,
            };

        const processedNode = {
            ...node,
            position,
        };

        if (!isLogic) {
            // アイコンURLの正規化（GitHub Pages などのベースパスに対応）
            const normalizeIconUrl = (path) => {
                if (!path) return '';
                // すでに http などで始まる場合はそのまま
                if (path.startsWith('http') || path.startsWith('data:')) return path;

                const base = import.meta.env.BASE_URL || '/';
                const cleanPath = path.startsWith('/') ? path.slice(1) : path;
                return `${base}${cleanPath}`.replace(/\/+/g, '/');
            };

            processedNode.type = 'history';
            processedNode.data = {
                ...node.data,
                // node.data に直接 `iconUrl` が指定されている場合はそれを優先しつつ正規化
                iconUrl: normalizeIconUrl(node.data.iconUrl || iconMap[node.data.type || 'event'] || 'icons/event.png'),
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
