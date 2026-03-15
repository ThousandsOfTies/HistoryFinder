import { useState, useEffect } from 'react';
import { searchYouTubeVideos } from '../../services/youtubeService';

// ノード詳細パネル・辞書パネル共通の YouTube 関連動画セクション
const YouTubeSection = ({ keyword }) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeVideoId, setActiveVideoId] = useState(null);

    useEffect(() => {
        setVideos([]);
        setLoading(true);
        setActiveVideoId(null);

        searchYouTubeVideos(keyword).then(results => {
            setVideos(results);
            setLoading(false);
        });
    }, [keyword]);

    return (
        <div className="youtube-section">
            <div className="youtube-section-title">関連動画</div>

            {loading && (
                <p className="youtube-loading">動画を検索中...</p>
            )}

            {!loading && videos.length === 0 && (
                <p className="youtube-loading" style={{ color: '#6b7280' }}>動画が見つかりませんでした</p>
            )}

            {!loading && videos.length > 0 && (
                <div className="youtube-grid">
                    {videos.map(video => (
                        <div key={video.id} className="youtube-card">
                            {activeVideoId === video.id ? (
                                <iframe
                                    className="youtube-player"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="youtube-thumbnail-wrapper"
                                    onClick={() => setActiveVideoId(video.id)}
                                    title="クリックして再生"
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="youtube-thumbnail"
                                    />
                                    <div className="youtube-play-btn">▶</div>
                                </div>
                            )}
                            <p className="youtube-title">{video.title}</p>
                            <p className="youtube-channel">{video.channel}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default YouTubeSection;
