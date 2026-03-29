import React, { useState, useEffect } from 'react';
import { fetchWorldNews } from '../../services/newsService';

/**
 * ニュース一覧パネル。BBCワールドニュースを表示し、
 * 各ニュースの「歴史的背景を解説」ボタンで因果チェーン生成を起動する。
 */
const NewsFeedPanel = ({ onNewsClick, onCivOsClick, civOsMode = false }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [generatingId, setGeneratingId] = useState(null);
    const [civOsGeneratingId, setCivOsGeneratingId] = useState(null);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(null);
            const items = await fetchWorldNews();
            if (items.length === 0) {
                setError('ニュースの取得に失敗しました。');
            }
            setNews(items);
            setLoading(false);
        };
        load();
    }, []);

    const handleClick = async (item, index) => {
        setGeneratingId(index);
        await onNewsClick(item.title, item.description);
        setGeneratingId(null);
    };

    const handleCivOsClick = async (item, index) => {
        setCivOsGeneratingId(index);
        await onCivOsClick(item.title, item.description);
        setCivOsGeneratingId(null);
    };

    return (
        <div className={`news-feed-panel ${civOsMode ? 'news-feed-panel--civos' : ''}`}>
            <div className="news-feed-header">
                {civOsMode ? (
                    <>
                        <h2>⚙️ CivOS Analyzer</h2>
                        <p className="news-feed-source">ニュースの背景にある数学的概念を解析します</p>
                    </>
                ) : (
                    <>
                        <h2>📰 今日の国際ニュース</h2>
                        <p className="news-feed-source">BBC World News</p>
                    </>
                )}
            </div>
            <div className={`news-feed-divider ${civOsMode ? 'news-feed-divider--civos' : ''}`}></div>

            {loading && (
                <div className="news-feed-loading">
                    <p>ニュースを取得中...</p>
                </div>
            )}

            {error && (
                <div className="news-feed-error">
                    <p>{error}</p>
                </div>
            )}

            <div className="news-feed-list">
                {news.map((item, index) => (
                    <div key={index} className="news-card">
                        {item.thumbnail && (
                            <div className="news-card-image">
                                <img src={item.thumbnail} alt="" />
                            </div>
                        )}
                        <div className="news-card-content">
                            <h3 className="news-card-title">{item.title}</h3>
                            <p className="news-card-desc">{item.description?.substring(0, 150)}</p>
                            <div className="news-card-footer">
                                <span className="news-card-date">
                                    {new Date(item.pubDate).toLocaleDateString('ja-JP')}
                                </span>
                                <div className="news-card-actions">
                                    {!civOsMode && (
                                        <button
                                            className="news-analyze-btn"
                                            onClick={() => handleClick(item, index)}
                                            disabled={generatingId !== null || civOsGeneratingId !== null}
                                        >
                                            {generatingId === index
                                                ? '🔄 生成中...'
                                                : '🔍 歴史的背景を解説'}
                                        </button>
                                    )}
                                    <button
                                        className="news-civos-btn"
                                        onClick={() => handleCivOsClick(item, index)}
                                        disabled={generatingId !== null || civOsGeneratingId !== null}
                                    >
                                        {civOsGeneratingId === index
                                            ? '⚙️ 解析中...'
                                            : '⚙️ CivOS解析'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsFeedPanel;
