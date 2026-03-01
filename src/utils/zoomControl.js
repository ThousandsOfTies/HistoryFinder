import { getNodesBounds, getTransformForBounds } from 'reactflow';
import { minZoomLevel, maxZoomLevel } from '../constants/graphConfig';

// Fit Viewの連続発火を防ぐためのタイムスタンプ
let lastFitViewTime = 0;

/**
 * ホイール操作でズームアウトしていき、全体が収まるサイズ（Fit View相当）に
 * なったら自動センタリングする処理。
 */
export const handleWheelZoom = (e, rfInstance) => {
    if (!rfInstance) return;

    // ホイールを下（奥から手前）に回した場合 = ズームアウト
    if (e.deltaY > 0) {
        const currentZoom = rfInstance.getZoom();
        const nodes = rfInstance.getNodes();
        if (nodes.length === 0) return;

        // React Flowの機能を使って、全ノードが含まれる領域(Bounding Box)を取得
        const bounds = getNodesBounds(nodes);

        // 現在の表示領域のサイズを、イベントが発生したDOM要素(コンテナ)から直接取得
        const containerWidth = e.currentTarget.clientWidth;
        const containerHeight = e.currentTarget.clientHeight;

        // React Flow が内蔵している「Fit View時のZoom率を計算する関数」を直接呼び出す
        const transform = getTransformForBounds(
            bounds,
            containerWidth,
            containerHeight,
            minZoomLevel,
            maxZoomLevel,
            0.1 // padding
        );

        // transform[2] に正確な目標Zoom倍率が入っている
        const exactFitZoom = transform[2];

        // マウスホイールでの急激なスクロールでズームアウトが行き過ぎるのを防ぐため、
        // 目標倍率の15%手前に達した時点でイベントをフックして制御を奪う
        const threshold = exactFitZoom * 1.15;

        if (currentZoom <= threshold) {
            // React Flow（内部のd3-zoom）にズームアウトのホイールイベントを渡さない
            e.stopPropagation();

            const now = Date.now();
            // 連続でホイールを回した際に、fitView が何十回も発火してアニメーションが
            // スタックしてしまうバグを防ぐため、300ms間隔でのみ発火を許可する
            if (now - lastFitViewTime > 300) {
                // すでにFitされた倍率付近なら再アニメーションさせない
                if (Math.abs(currentZoom - exactFitZoom) > 0.01) {
                    lastFitViewTime = now;
                    rfInstance.fitView({ padding: 0.1, duration: 300 });
                }
            }
        }
    }
};
