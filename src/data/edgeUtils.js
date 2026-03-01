/**
 * 全てのエッジの終端に矢印（markerEnd）を自動で追加するユーティリティ。
 * 各シナリオデータファイルで共通して使用する。
 */
export const addArrowMarkers = (edges) => {
    return edges.map((edge) => ({
        ...edge,
        markerEnd: {
            type: 'arrowclosed',
            width: 20,
            height: 20,
            color: edge.style?.stroke || '#9ca3af',
        },
    }));
};
