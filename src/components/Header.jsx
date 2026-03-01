import React from 'react';

// アプリケーションヘッダー（パンくずリスト + シナリオセレクタ）
const Header = ({ scenario, onScenarioChange, panels, onBreadcrumbClick }) => {
    return (
        <header className="app-header">
            <div className="breadcrumbs">
                <div className="breadcrumb-item home" onClick={() => onBreadcrumbClick(-1)}>
                    🌎 歴史因果関係マップ (TOC)
                </div>

                <div className="scenario-selector" style={{ marginLeft: '12px' }}>
                    <select
                        value={scenario}
                        onChange={(e) => onScenarioChange(e.target.value)}
                        style={{
                            backgroundColor: '#1f2937', color: '#fff', border: '1px solid #4b5563',
                            padding: '4px 8px', borderRadius: '4px', fontSize: '0.9rem', cursor: 'pointer'
                        }}
                    >
                        <option value="ancient">古代の転換：気候変動とローマ帝国滅亡</option>
                        <option value="medieval_modern">中世の転換：パラダイムシフトと科学革命</option>
                    </select>
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
