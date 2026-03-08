import { useState, useCallback, useRef, useEffect } from 'react';
import { getAiExplanation, generateCausalChain } from '../services/aiService';

/**
 * パネル管理ロジックを集約したカスタムフック。
 *
 * 管理する責務:
 *  - パネル state（開閉・追加・更新）
 *  - パネルコンテナの自動スクロール
 *  - パンくずリストのスクロール移動
 *  - グラフノード / ペイン / キーワードリンクのクリックハンドリング
 *
 * @returns {object} パネル管理に必要な state・ref・ハンドラ群
 */
export const usePanelManager = () => {
    const [panels, setPanels] = useState([]);
    const panelsContainerRef = useRef(null);

    // パネルが追加されたら右端までなめらかに自動スクロール
    useEffect(() => {
        if (panelsContainerRef.current) {
            // 2つ目以降のパネル（詳細の詳細）が開いた時のみ右スクロールする。
            // 1つ目のパネル開封時はCSS幅変更（100vw→50vw）と競合して震えるためスクロールを抑制。
            if (panels.length > 1) {
                panelsContainerRef.current.scrollTo({
                    left: panelsContainerRef.current.scrollWidth,
                    behavior: 'smooth'
                });
            }
        }
    }, [panels]);

    // 特定のパネル（とそれより右のパネル）を閉じる
    const handleClosePanel = useCallback((index) => {
        setPanels(prevPanels => prevPanels.slice(0, index));
    }, []);

    // 全パネルを閉じる（シナリオ切り替え時に使用）
    const closeAllPanels = useCallback(() => {
        setPanels([]);
    }, []);

    // パンくずリストがクリックされた時の処理（パネルを維持したままスクロール移動する）
    const handleBreadcrumbClick = useCallback((index) => {
        if (!panelsContainerRef.current) return;

        if (index === -1) {
            // トップレベルの「マップ」がクリックされた場合、一番左端にスクロール
            panelsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // 該当のパネルの位置までスクロール
            // children[0]はチャートパネルなので、情報パネルは[index + 1]になる
            const targetPanel = panelsContainerRef.current.children[index + 1];
            if (targetPanel) {
                targetPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    }, []);

    // グラフ上のノードがクリックされた時の処理
    const handleGraphNodeClick = useCallback((event, node, sourceIndex) => {
        if (node.type !== 'logic' && node.type !== 'group') {
            setPanels(prevPanels => {
                // sourceIndex より右側にあるパネルをすべて閉じる
                const newPanels = prevPanels.slice(0, sourceIndex + 1);
                // ノードが subGraphId を持っているか（マクロノードか）で分岐
                if (node.data.subGraphId) {
                    newPanels.push({ type: 'graph', subGraphId: node.data.subGraphId, label: node.data.label, nodeData: node });
                } else {
                    newPanels.push({ type: 'node', data: node });
                }
                return newPanels;
            });
        } else {
            // ロジックノードなどをクリックした場合は、自分より右側の詳細を閉じる
            handleClosePanel(sourceIndex + 1);
        }
    }, [handleClosePanel]);

    // グラフの背景（ペイン）がクリックされた時の処理
    const handleGraphPaneClick = useCallback((sourceIndex) => {
        handleClosePanel(sourceIndex + 1);
    }, [handleClosePanel]);

    // キーワードリンク [[用語]] がクリックされた時の処理（AI解説取得）
    const handleKeywordClick = useCallback(async (keyword, sourcePanelIndex) => {
        // まずローディング状態のパネルを積む
        setPanels(prevPanels => {
            const newPanels = prevPanels.slice(0, sourcePanelIndex + 1);
            newPanels.push({ type: 'dict', keyword, loading: true });
            return newPanels;
        });

        // AIテキストと画像を同時に取得
        const aiData = await getAiExplanation(keyword);

        // 取得完了後、該当のパネルを更新
        setPanels(prevPanels => {
            return prevPanels.map((panel, idx) => {
                if (idx === sourcePanelIndex + 1 && panel.keyword === keyword) {
                    return { ...panel, loading: false, text: aiData.text, imageUrl: aiData.imageUrl };
                }
                return panel;
            });
        });
    }, []);

    // ニュース見出しから因果チェーンを生成する処理
    const handleNewsClick = useCallback(async (headline, description) => {
        // 既存パネルを全てクリアしてからロード中パネルを追加
        setPanels([{ type: 'causal', loading: true, title: headline }]);

        // AI因果チェーン生成
        const result = await generateCausalChain(headline, description);

        // パネルを更新
        setPanels(prevPanels => {
            return prevPanels.map((panel) => {
                if (panel.type === 'causal' && panel.loading && panel.title === headline) {
                    return {
                        ...panel,
                        loading: false,
                        causalNodes: result.nodes,
                        causalEdges: result.edges,
                        title: result.title,
                    };
                }
                return panel;
            });
        });
    }, []);

    return {
        panels,
        panelsContainerRef,
        closeAllPanels,
        handleClosePanel,
        handleBreadcrumbClick,
        handleGraphNodeClick,
        handleGraphPaneClick,
        handleKeywordClick,
        handleNewsClick,
    };
};
