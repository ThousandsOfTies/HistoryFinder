import React, { useRef, useEffect, useState } from 'react';

// アプリケーションヘッダー（モード切替 + パンくずリスト）
const Header = ({ mode, onModeChange, panels, onBreadcrumbClick }) => {
    const headerRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // 外部クリックでドロップダウンを閉じる
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.split-button-container')) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // パンくずが増えた時に右端まで自動スクロールする
    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.scrollTo({
                left: headerRef.current.scrollWidth,
                behavior: 'smooth'
            });
        }
    }, [panels, mode]);

    return (
        <header className="app-header">
            {/* ロゴとタイトル */}
            <div className="app-branding">
                <img src="./historyfinder_logo.png" alt="HistoryFinder Logo" className="header-logo" />
            </div>

            {/* モード切替タブ */}
            <div className="mode-tabs">
                {/* スプリットボタン (歴史マップ) */}
                <div className={`split-button-container ${mode === 'classic' || mode === 'civbuild' ? 'active' : ''}`}>
                    <button
                        className={`split-btn split-btn-main ${mode === 'classic' || mode === 'civbuild' ? 'active' : ''}`}
                        onClick={() => { onModeChange('classic'); setDropdownOpen(false); }}
                    >
                        🌎 歴史マップ
                    </button>
                    <button
                        className={`split-btn split-btn-toggle ${dropdownOpen ? 'active-dropdown' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}
                    >
                        ▼
                    </button>
                    
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <div className={`dropdown-item ${mode === 'classic' ? 'active' : ''}`} onClick={() => { onModeChange('classic'); setDropdownOpen(false); }}>
                                🌎 世界史 (全体図)
                            </div>
                            <div className={`dropdown-item ${mode === 'civbuild' ? 'active' : ''}`} onClick={() => { onModeChange('civbuild'); setDropdownOpen(false); }}>
                                🏗️ 文明ビルド (数学史)
                            </div>
                        </div>
                    )}
                </div>

                <button
                    className={`mode-tab ${mode === 'news' ? 'active' : ''}`}
                    onClick={() => onModeChange('news')}
                >
                    📰 ニュース
                </button>
            </div>

            <span className="header-divider">|</span>

            {/* パンくずリスト */}
            <div className="breadcrumbs" ref={headerRef}>
                <div className="breadcrumb-item home" onClick={() => onBreadcrumbClick(-1)}>
                    {mode === 'classic' ? '🌎 全体図' : mode === 'civbuild' ? '🏗️ Build Pipeline' : '📰 今日のニュース'}
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
                    } else if (panel.type === 'techNote') {
                        label = panel.loading ? '⚙️ 解析中...' : '⚙️ CivOS Update Log';
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
