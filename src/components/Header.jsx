import React from 'react';

// アプリケーションヘッダー（パンくずリスト + シナリオセレクタ）
const Header = ({ scenario, onScenarioChange, panels, onBreadcrumbClick }) => {
    return (
        <header className="app-header">
            <div className="breadcrumbs">
                <div className="breadcrumb-item home" onClick={() => onBreadcrumbClick(-1)}>
                    🌎 歴史因果関係（概要）
                </div>


                {panels.map((panel, index) => {
                    let label = '';
                    if (panel.type === 'node') {
                        label = panel.data.data.label.replace('\n', ' ');
                    } else if (panel.type === 'dict') {
                        label = panel.keyword;
                    } else if (panel.type === 'graph') {
                        label = panel.label + ' (詳細)';
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
