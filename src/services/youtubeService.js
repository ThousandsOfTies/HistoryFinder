// YouTube Data API v3 を使って動画を検索する
// VITE_YOUTUBE_API_KEY が未設定の場合は VITE_GEMINI_API_KEY を流用する
const YOUTUBE_API_KEY =
    import.meta.env.VITE_YOUTUBE_API_KEY || import.meta.env.VITE_GEMINI_API_KEY || '';

/**
 * キーワードに関連する YouTube 動画を検索して返す。
 * @param {string} keyword - 検索する歴史用語
 * @param {number} maxResults - 取得件数（デフォルト3）
 * @returns {Promise<Array<{id: string, title: string, thumbnail: string}>>}
 */
export const searchYouTubeVideos = async (keyword, maxResults = 3) => {
    if (!YOUTUBE_API_KEY) return [];

    try {
        const query = encodeURIComponent(`${keyword} 解説 歴史`);
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=${maxResults}&relevanceLanguage=ja&key=${YOUTUBE_API_KEY}`
        );
        const data = await res.json();

        if (!data.items) return [];

        return data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
            channel: item.snippet.channelTitle,
        }));
    } catch (e) {
        console.warn('YouTube search error:', e);
        return [];
    }
};
