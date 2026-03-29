import React from 'react';
import { CIV_OS_FEATURES, getFeatureById } from '../../data/civOsFeatures';

/**
 * CivOS Tech Note パネル
 * ニュースの背景にある数学的Featureを「文明OSのリリースノート」として表示する。
 * エンジニア向けのウィットに富んだシステムSE風の語り口で解説。
 */
const TechNotePanel = ({ panel, index, onClose }) => {
    if (panel.loading) {
        return (
            <div className="panel panel--scrollable" style={{ width: '50vw' }}>
                <div className="panel-content">
                    <div className="panel-header">
                        <h2 className="tech-note-title-loading">⚙️ CivOS Analyzer 起動中...</h2>
                        <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                    </div>
                    <div className="divider tech-note-divider"></div>
                    <div className="tech-note-loading">
                        <div className="tech-note-loading-console">
                            <span className="tech-note-prompt">$ </span>
                            <span className="tech-note-cmd">civos-analyzer --input &quot;news&quot; --mode full-scan</span>
                        </div>
                        <div className="tech-note-loading-lines">
                            <p><span className="tech-note-ok">[OK]</span> ニュース本文をパース中...</p>
                            <p><span className="tech-note-ok">[OK]</span> キーワード抽出モジュールを起動...</p>
                            <p><span className="tech-note-running">[..]</span> Feature DBとのマッチング処理中...</p>
                            <p className="tech-note-blink"><span className="tech-note-running">[..]</span> Geminiに解析をリクエスト中...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const { news_summary, related_features, tech_meta_commentary } = panel;
    const features = (related_features || []).map(id => getFeatureById(id)).filter(Boolean);

    return (
        <div className="panel panel--scrollable" style={{ width: '50vw' }}>
            <div className="panel-content">
                <div className="panel-header">
                    <h2 className="tech-note-title">⚙️ CivOS Update Log</h2>
                    <button className="panel-close-btn" onClick={() => onClose(index)} title="閉じる">×</button>
                </div>
                <div className="divider tech-note-divider"></div>

                {/* ニュースサマリー */}
                <div className="tech-note-news-summary">
                    <span className="tech-note-label">INPUT</span>
                    <p className="tech-note-summary-text">{news_summary}</p>
                </div>

                {/* Featureが見つからない場合 */}
                {features.length === 0 && (
                    <div className="tech-note-no-match">
                        <p><span className="tech-note-warn">[WARN]</span> 既知のCivOS Featureとの直接的なマッチングが見つかりませんでした。</p>
                        <p className="tech-note-muted">このニュースは未知のFeatureに関連している可能性があります。</p>
                    </div>
                )}

                {/* マッチしたFeature一覧 */}
                {features.length > 0 && (
                    <>
                        <div className="tech-note-section-label">
                            <span className="tech-note-label">MATCHED FEATURES</span>
                            <span className="tech-note-badge">{features.length} hit{features.length > 1 ? 's' : ''}</span>
                        </div>

                        {features.map(feature => (
                            <FeatureCard key={feature.id} feature={feature} />
                        ))}
                    </>
                )}

                {/* AI生成テクニカルコメンタリー */}
                {tech_meta_commentary && (
                    <div className="tech-note-commentary">
                        <div className="tech-note-section-label">
                            <span className="tech-note-label">SYSTEM COMMENTARY</span>
                        </div>
                        <div className="tech-note-commentary-body">
                            <span className="tech-note-prompt">// </span>
                            {tech_meta_commentary}
                        </div>
                    </div>
                )}

                {/* 全Feature タイムライン */}
                <div className="tech-note-timeline-section">
                    <div className="tech-note-section-label">
                        <span className="tech-note-label">CivOS FEATURE TIMELINE</span>
                    </div>
                    <div className="tech-note-timeline">
                        {CIV_OS_FEATURES.map(f => {
                            const isActive = features.some(af => af.id === f.id);
                            return (
                                <div key={f.id} className={`tech-note-timeline-item ${isActive ? 'active' : ''}`}>
                                    <div className="tech-note-timeline-dot"></div>
                                    <div className="tech-note-timeline-content">
                                        <span className="tech-note-version">{f.version}</span>
                                        <span className="tech-note-feature-icon">{f.icon}</span>
                                        <span className="tech-note-feature-name">{f.name}</span>
                                        <span className="tech-note-era">{f.releaseEra}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ feature }) => (
    <div className="tech-note-feature-card">
        <div className="tech-note-feature-header">
            <span className="tech-note-feature-icon-lg">{feature.icon}</span>
            <div>
                <div className="tech-note-feature-title">
                    <span className="tech-note-version">{feature.version}</span>
                    <span className="tech-note-feature-name-lg">{feature.name}</span>
                </div>
                <div className="tech-note-feature-tagline">{feature.tagline}</div>
            </div>
            <span className="tech-note-era-badge">{feature.releaseEra}</span>
        </div>

        <div className="tech-note-commit">
            <span className="tech-note-prompt">$ git log --oneline</span>
            <div className="tech-note-commit-msg">
                <span className="tech-note-commit-hash">{feature.id.slice(0, 7)}</span>
                <span>{feature.commitMessage}</span>
            </div>
        </div>

        <div className="tech-note-bugs">
            <div className="tech-note-bugs-label">Solved Bugs:</div>
            {feature.solvingBugs.map((bug, i) => (
                <div key={i} className="tech-note-bug-item">
                    <span className="tech-note-bug-icon">✗</span>
                    <span>{bug}</span>
                </div>
            ))}
        </div>

        <div className="tech-note-optimization">
            <span className="tech-note-ok">[OPTIMIZATION]</span>
            <span className="tech-note-optimization-text"> {feature.optimization}</span>
        </div>

        <div className="tech-note-tech-note-block">
            <span className="tech-note-prompt">// Tech Note</span>
            <p className="tech-note-tech-note-text">{feature.techNote}</p>
        </div>

        <div className="tech-note-tags">
            {feature.modernNewsMapping.slice(0, 6).map((tag, i) => (
                <span key={i} className="tech-note-tag">{tag}</span>
            ))}
        </div>
    </div>
);

export default TechNotePanel;
