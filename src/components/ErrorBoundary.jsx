import React from 'react';

/**
 * パネルのレンダリングエラーを捕捉し、アプリ全体のクラッシュを防ぐ。
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Panel rendering error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="panel panel--scrollable">
                    <div className="panel-content">
                        <div className="panel-header">
                            <h2>表示エラー</h2>
                            <button
                                className="panel-close-btn"
                                onClick={() => {
                                    this.setState({ hasError: false });
                                    this.props.onClose?.();
                                }}
                                title="閉じる"
                            >×</button>
                        </div>
                        <div className="divider"></div>
                        <p className="details" style={{ color: '#ef4444' }}>
                            このパネルの表示中にエラーが発生しました。閉じてやり直してください。
                        </p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
