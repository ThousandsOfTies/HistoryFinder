import React, { useRef, useEffect } from 'react';

// アプリケーションヘッダー（モード切替 + パンくずリスト）
const Header = ({ mode, onModeChange, panels, onBreadcrumbClick }) => {
    const headerRef = useRef(null);

    // パンくずが増えた時（パネルリストが変わった時）に右端まで自動スクロールする
    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.scrollTo({
                left: headerRef.current.scrollWidth,
                behavior: 'smooth'
            });
        }
    }, [panels, mode]);

    return (
        <header className="app-header" ref={headerRef}>
            {/* モード切替タブ */}
            <div className="mode-tabs">
                <button
                    className={`mode-tab ${mode === 'classic' ? 'active' : ''}`}
                    onClick={() => onModeChange('classic')}
                >
                    📖 クラシック
                </button>
                <button
                    className={`mode-tab ${mode === 'news' ? 'active' : ''}`}
                    onClick={() => onModeChange('news')}
                >
                    📰 ニュース
                </button>
            </div>

            <span className="header-divider">|</span>

            {/* パンくずリスト */}
            <div className="breadcrumbs">
                <div className="breadcrumb-item home" onClick={() => onBreadcrumbClick(-1)}>
                    {mode === 'classic' ? '🌎 歴史因果関係（概要）' : '📰 今日のニュース'}
                </div>

                {panels.map((panel, index) => {
                    let label = '';
                    if (panel.type === 'node') {
                        label = panel.data.data.label.replace('\n', ' ');
                    } else if (panel.type === 'dict') {
                        label = panel.keyword;
                    } else if (panel.type === 'graph') {
                        label = panel.label + ' (詳細)';
                    } else if (panel.type === 'causal') {
                        label = panel.loading ? '分析中...' : (panel.title || '因果関係');
                    }

                    return (
                        <React.Fragment key={index}>
                            <span className="breadcrumb-separator">›</span>
                            <div className="breadcrumb-item" onClick={() => onBreadcrumbClick(index)}>
                                {label}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </header>
    );
};

export default Header;
