import React from 'react';

/**
 * テキスト内の [[キーワード]] をパースしてクリック可能なリンクに変換する。
 * @param {string} text - パース対象のテキスト
 * @param {number} currentPanelIndex - 現在のパネルインデックス
 * @param {function} onKeywordClick - キーワードクリック時のコールバック
 */
export const renderTextWithLinks = (text, currentPanelIndex, onKeywordClick) => {
    if (!text) return null;

    // [[ ]] で挟まれた部分を取り出す正規表現
    const parts = text.split(/\[\[(.*?)\]\]/g);

    return parts.map((part, index) => {
        // splitの仕様で、奇数番目の要素がカッコ内のテキストになる
        if (index % 2 === 1) {
            return (
                <span
                    key={index}
                    className="keyword-link"
                    onClick={() => onKeywordClick(part, currentPanelIndex)}
                >
                    {part}
                </span>
            );
        }
        return <span key={index}>{part}</span>;
    });
};
