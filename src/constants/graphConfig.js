import LogicNode from '../components/nodes/LogicNode';
import HistoryNode from '../components/nodes/HistoryNode';

// ノードのレイアウト計算に使用するデフォルトサイズ
export const nodeWidth = 380;
export const nodeHeight = 80;

// ズーム制限
export const minZoomLevel = 0.1;
export const maxZoomLevel = 5.0;

// ノードタイプに対応するアイコンのマッピング
export const iconMap = {
    'root_cause': '/icons/root_cause.png',
    'event': '/icons/event.png',
    'macro_event': '/icons/macro_event.png',
    'context': '/icons/event.png',
    'action': '/icons/event.png',
    'result': '/icons/result.png'
};

// React Flow に登録するカスタムノードの種類
export const nodeTypes = {
    logic: LogicNode,
    history: HistoryNode,
};
