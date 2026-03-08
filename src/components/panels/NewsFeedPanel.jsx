import React, { useState, useEffect } from 'react';
import { fetchWorldNews } from '../../services/newsService';

/**
 * ニュース一覧パネル。BBCワールドニュースを表示し、
 * 各ニュースの「歴史的背景を解説」ボタンで因果チェーン生成を起動する。
 */
const NewsFeedPanel = ({ onNewsClick }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [generatingId, setGeneratingId] = useState(null);

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

    return (
        <div className="news-feed-panel">
            <div className="news-feed-header">
                <h2>📰 今日の国際ニュース</h2>
                <p className="news-feed-source">BBC World News</p>
            </div>
            <div className="news-feed-divider"></div>

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
                                <button
                                    className="news-analyze-btn"
                                    onClick={() => handleClick(item, index)}
                                    disabled={generatingId !== null}
                                >
                                    {generatingId === index
                                        ? '🔄 因果チェーン生成中...'
                                        : '🔍 歴史的背景を解説'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsFeedPanel;
