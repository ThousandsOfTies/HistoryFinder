import { addArrowMarkers } from './edgeUtils';

// ===== イスラーム帝国の成立シナリオ =====

// ノード定義
export const islamicEmpireNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-ByzSasan',
        type: 'default',
        data: {
            label: 'ビザンツ帝国とササン朝の\n長年の抗争',
            type: 'context',
            details: '6世紀から7世紀初頭にかけて、古代から続く二つの超大国、地中海側のビザンツ帝国（東ローマ）とペルシア側のササン朝が、シルクロードの利権などを巡って終わりの見えない泥沼の消耗戦（[[東ローマ帝国(ビザンツ)とサーサーン朝の戦争|東ローマ帝国とササン朝が]]）を繰り返していました。\n\n両大国は疲弊しきっており、これによって「シルクロードの迂回路」として南のアラビア半島が注目されるという地政学的な変化が起きていました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-MeccaWealth',
        type: 'default',
        data: {
            label: 'アラビア半島の商業繁栄と\n激しい貧富の差',
            type: 'root_cause',
            details: '超大国間の戦争により本来の交易路が危険になったため、安全な迂回路としてアラビア半島西部（ヒジャーズ地方）を通るルートが活況を呈しました。\n\nオアシス都市[[マッカ|メッカ]]が中継貿易で莫大な富を得て繁栄しましたが、同時に商人貴族が富を独占し、部族社会の連帯が崩れ、孤児や未亡人を生み出す激しい「貧富の差」と社会不安が引き起こされました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-ISLAM',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },

    // --- 大事件とアクション (Event & Action) ---
    {
        id: 'EVENT-Muhammad',
        type: 'default',
        data: {
            label: 'ムハンマドによる\nイスラーム教の創始',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: '社会の不平等に苦悩していた商人[[ムハンマド・イブン＝アブドゥッラーフ|ムハンマド]]は、瞑想中に唯一神（アッラー）からの啓示を受け、偶像崇拝を否定し「神の前の絶対的平等」と「弱者救済」を説く[[イスラム教|イスラーム教]]を7世紀初頭に創始しました。\n\n迫害を受けてメディナへ逃れ（ヒジュラ）、そこで宗教共同体（ウンマ）を形成。その後、無血開城でメッカを平定し、教えのもとにアラビア半島を急速にまとめ上げました。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'ACTION-Conquest',
        type: 'default',
        data: {
            label: 'ジハード(聖戦)による\nアラブ人の大征服',
            type: 'action',
            details: 'ムハンマドの死後、後継者（[[正統カリフ時代|正統カリフ]]）によって率いられたアラブ人ムスリムは、神の道のために戦う「[[ジハード]]」の旗印のもと半島外へ進军しました。\n\n疲弊していたササン朝を滅亡させ、ビザンツ帝国からシリア・エジプトを奪取。続くウマイヤ朝・アッバース朝時代には、西はイベリア半島（スペイン）から東はインダス川・タラス河畔に至る、人類史上類を見ない巨大帝国を超短期間で樹立しました。'
        },
        style: { background: '#059669', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 繁栄の結果と世界史への影響 (Results) ---
    {
        id: 'RES-ShariaNetwork',
        type: 'default',
        data: {
            label: 'シャリーア(イスラーム法)の\n巨大ネットワーク',
            type: 'result',
            iconUrl: '/icons/voyage.png',
            details: '彼らはコーランを絶対の拠り所とし、それを法学的に体系化した「[[シャリーア]]（イスラーム法）」によって帝国全体を支配しました。\n\nシャリーアが保障する「公正な取引」と「アラビア語の公用語化」により、イベリア半島から中国に至る巨大な領域が一つの経済圏（[[イスラム黄金時代|イスラーム商圏]]）として統合され、陸と海を通じたかつてない世界規模の貿易ネットワークが繁栄しました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #ec4899', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-TurkicTarget',
        type: 'default',
        data: {
            label: 'トルコ人王朝台頭への土壌\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'アッバース朝が衰退して分裂していく中で、各地の有力者（アミール）は軍事力の根幹として、中央アジアから優れた騎馬兵であるトルコ人奴隷（[[マムルーク]]）を大量に購入・採用しました。\n\n戦闘のプロフェッショナルとして軍の実権を握ったトルコ系移民たちはやがて自ら主人を倒して独立し、イスラーム世界の新たな支配者（セルジューク朝やオスマン帝国など）へと取って代わることになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

// エッジ定義
const edges = [
    // イスラーム成立の前提
    { id: 'eisl-1', source: 'CTX-ByzSasan', target: 'LOGIC-AND-ISLAM', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eisl-2', source: 'RC-MeccaWealth', target: 'LOGIC-AND-ISLAM', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eisl-3', source: 'LOGIC-AND-ISLAM', target: 'EVENT-Muhammad', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 信仰から大征服へ
    { id: 'eisl-4', source: 'EVENT-Muhammad', target: 'ACTION-Conquest', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 大征服の結果と次代への布石
    { id: 'eisl-5', source: 'ACTION-Conquest', target: 'RES-ShariaNetwork', type: 'straight', style: { stroke: '#ec4899', strokeWidth: 3 } },
    { id: 'eisl-6', source: 'ACTION-Conquest', target: 'RES-TurkicTarget', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const islamicEmpireEdges = addArrowMarkers(edges);
