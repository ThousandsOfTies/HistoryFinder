// ==== 完全無料・無制限の自前スクレイピングサーバーを利用する方式 ====
// 以前のAPIキー類はもう不要です（GoogleのQuotaや制限に依存しません）

const PROXY_SERVER_URL = import.meta.env.VITE_YOUTUBE_PROXY_URL || 'http://localhost:8085/api/search';

/**
 * キーワードに関連する YouTube 動画を、自作のプロキシサーバーを経由して検索し、返す。
 * @param {string} keyword 検索キーワード
 * @param {number} maxResults 取得件数 (最大10)
 * @returns {Promise<Array<{id: string, title: string, thumbnail: string, channel: string}>>}
 */
export const searchYouTubeVideos = async (keyword, maxResults = 3) => {
    try {
        const query = encodeURIComponent(`${keyword} 歴史 OR 解説`);
        const response = await fetch(`${PROXY_SERVER_URL}?q=${query}&limit=${maxResults}`);

        if (!response.ok) {
            console.error('Proxy Server API request failed:', response.status);
            return [];
        }

        const videos = await response.json();
        
        // 自作サーバーはすでに正しい構造配列 {id, title, thumbnail, channel} を返すのでそのまま返却
        return videos;

    } catch (e) {
        console.warn('Proxy Server fetch error:', e);
        // ローカルサーバーが立っていない（npm startしていない）場合はこちらに進む
        console.warn('※ ローカルのスクレイピングサーバー (youtube-proxy) が起動していない可能性があります。');
        return [];
    }
};
