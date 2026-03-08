import { addArrowMarkers } from './edgeUtils';

// ===== ムガル帝国シナリオ =====

// ノード定義
export const mughalNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-IslamicRule',
        type: 'default',
        data: {
            label: 'ティムール朝の滅亡と\nバーブルのインド侵入',
            type: 'context',
            details: '15世紀末、中央アジアで最盛期を誇った[[ティムール朝]]がウズベク人などの遊牧民の圧迫を受けて滅亡しました。\n\nティムールの血を引く若き王子[[バーブル]]は、故郷サマルカンドを追われ放浪の末にアフガニスタンのカブールを拠点とし、新たな領土と富を求めて、当時ロディー朝（デリー・スルタン朝最後）の支配下で混乱していた北インドへの軍事侵入を決意しました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-Gunpowder',
        type: 'default',
        data: {
            label: '火器(大砲・鉄砲)の\n導入と戦術革命',
            type: 'root_cause',
            details: 'バーブルの軍隊は数は少なかったものの、当時最新鋭の小銃と大砲（[[火薬帝国|火器]]）を装備しており、さらにオスマン帝国から学んだ戦車（荷車）を並べて防壁とする革新的な戦術（火器と騎兵の連携）を用いていました。\n\n1526年の[[パーニーパットの戦い]]において、バーブルはこの戦術で10万とも言われるロディー朝の象部隊と圧倒的大軍を打ち破り、ムガル帝国建国の決定的な勝因となりました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-FOUNDATION',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Panipat',
        type: 'default',
        data: {
            label: 'ムガル帝国建国と\nアクバル帝の融和政策',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: 'バーブルの孫である第3代皇帝[[アクバル]]は、実質的な帝国の基礎を固めた傑物です。\n\n彼は広大なインドを統治するため、異教徒への人頭税（[[ジズヤ]]）を廃止し、ヒンドゥー教徒の有力者（ラージプート）を軍の司令官や高官として積極的に登用・通婚する「宗教的融和政策」を断行しました。これにより多数派のヒンドゥー教徒の支持を取り付け、強固な中央集権体制（マンサブダール制）を築き上げました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Tolerance',
        type: 'default',
        data: {
            label: 'インド・イスラーム文化の\n黄金期(タージ・マハル)',
            type: 'action',
            details: '政治的な安定と莫大な富を背景に、第5代シャー・ジャハーンの時代に文化的な黄金期を迎えます。\n\nペルシア文化の優美さとインドの伝統的なスケール感が完全に融合した「インド・イスラーム文化」の最高傑作として、亡き愛妃のために巨大な白総大理石の霊廟「[[タージ・マハル]]」が建設されました。また、細密画（[[ムガル絵画]]）なども独自の発展を遂げました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-Culture',
        type: 'default',
        data: {
            label: '帝国の崩壊と\nイギリス支配への布石',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'アウラングゼーブの死後、各地の総督が自立を始め、帝国は急速に空中分解していきました。さらにイランのナディール・シャーの侵攻によってデリーは徹底的に略奪され、皇帝は名ばかりの存在に転落しました。\n\nこの「権力の空白期（細分化されたインド）」を絶好の機会と捉えたのが、沿岸部で勢力を伸ばしていた[[イギリス東インド会社]]です。彼らはインドの諸侯同士を巧みに争わせながら、徐々にインド全域を植民地支配下に収めていくことになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-Wealth',
        type: 'default',
        data: {
            label: '世界最大級の経済力と\n絶大な富の蓄積',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'キャラコと呼ばれる高品質な綿織物産業を中心に、世界中の銀を吸い上げるほどの経済力を誇った。この富が後にヨーロッパ列強（イギリス）の標的となる。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // 帝国建国の前提
    { id: 'emug-1', source: 'CTX-IslamicRule', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'emug-2', source: 'RC-Gunpowder', target: 'LOGIC-AND-FOUNDATION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'emug-3', source: 'LOGIC-AND-FOUNDATION', target: 'EVENT-Panipat', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 建国から安定期・最盛期へ
    { id: 'emug-4', source: 'EVENT-Panipat', target: 'ACTION-Tolerance', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 融和政策の結果（文化と経済の並列な成果）
    { id: 'emug-5', source: 'ACTION-Tolerance', target: 'RES-Culture', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'emug-6', source: 'ACTION-Tolerance', target: 'RES-Wealth', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const mughalEdges = addArrowMarkers(edges);
