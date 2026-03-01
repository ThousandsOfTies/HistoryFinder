import { addArrowMarkers } from './edgeUtils';

// ===== 壮大な世界史の全体像（地域縦割りから世界の一体化へ） =====

export const grandNodes = [
    // ==========================================
    // 0. 人類の出発点（グローバル始点）
    // ==========================================
    { id: 'GLOBAL-Origin', type: 'default', data: { label: '人類の出現・文明の誕生', type: 'root_cause', iconUrl: '/icons/human_origin.png', details: '狩猟採集から農耕牧畜への転換（農業革命）により、都市と文明が誕生した。' }, position: { x: 0, y: 0 }, style: { background: '#57534e', color: '#fff', border: '3px solid #292524', borderRadius: '8px', width: 250, padding: '15px', fontWeight: 'bold' } },
    { id: 'GLOBAL-Mesopotamia', type: 'default', data: { label: 'ティグリス・ユーフラテス等の大河文明', type: 'macro_event', iconUrl: '/icons/sumerian.png', details: 'メソポタミア・エジプトなどで最古の文明が誕生し、各地に波及して独自の文明が発達していった。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 250, padding: '10px' } },

    // ==========================================
    // 1. ヨーロッパの歴史（一番上のレーン）
    // ==========================================
    { id: 'EU-Hellenism', type: 'default', data: { label: 'ギリシア・ローマ文明', type: 'macro_event', iconUrl: '/icons/greco_roman.png', details: 'エーゲ海を中心に、ポリス社会や共和政・帝政ローマが発展。' }, position: { x: 0, y: 0 }, style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'EU-German', type: 'default', data: { label: 'フランク王国と封建社会', type: 'event', iconUrl: '/icons/feudal_knight.png', details: 'ゲルマン人の大移動を経て、西ヨーロッパ独自の封建社会（荘園制と騎士階級）が形成。' }, position: { x: 0, y: 0 }, style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'EU-Crusades', type: 'default', data: { label: '十字軍の遠征', type: 'action', iconUrl: '/icons/crusades.png', details: '聖地エルサレム奪還を掲げた中東への軍事遠征。結果として失敗するが西欧と中東の文化・商業の交流を生んだ。' }, position: { x: 0, y: 0 }, style: { background: '#1d4ed8', color: '#fff', border: '2px solid #60a5fa', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'EU-Renaissance', type: 'default', data: { label: 'ルネサンスと宗教改革', type: 'macro_event', iconUrl: '/icons/renaissance.png', details: '中世カトリック的な価値観が崩れ、人間中心主義と新しい信仰の形が生まれた。', subGraphId: 'medieval_modern' }, position: { x: 0, y: 0 }, style: { background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },

    // ==========================================
    // 2. 中東の歴史（中央のハブレーン）
    // ==========================================
    { id: 'ME-Orient', type: 'default', data: { label: 'オリエント・ペルシア帝国', type: 'macro_event', iconUrl: '/icons/orient_persia.png', details: '四大文明（メソポタミア・エジプト）からアケメネス朝、ササン朝へと続く巨大専制国家。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'ME-Islam', type: 'default', data: { label: 'イスラーム帝国の成立', type: 'event', iconUrl: '/icons/islamic_empire.png', details: 'ムハンマドの教えのもと、アラブ人がウマイヤ朝・アッバース朝などの大帝国を築き、中東を統合。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'ME-Turkic', type: 'default', data: { label: 'トルコ人王朝 (セルジューク等)', type: 'event', iconUrl: '/icons/turkic.png', details: '中央アジアから移動したトルコ系民族が中東の支配層となり、イスラム圏の覇権を握った。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'ME-Ottoman', type: 'default', data: { label: 'オスマン帝国の覇権', type: 'macro_event', iconUrl: '/icons/ottoman.png', details: '東地中海地域を完全に制圧し、アジアとヨーロッパを隔てる巨大な壁となった。' }, position: { x: 0, y: 0 }, style: { background: '#059669', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },

    // ==========================================
    // 3. インドの歴史
    // ==========================================
    { id: 'IN-Ancient', type: 'default', data: { label: 'マウリヤ・グプタ朝', type: 'macro_event', iconUrl: '/icons/india_ancient.png', details: 'インダス文明から始まり、ヒンドゥー教や仏教の成立、古典文化が花開いた。' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'IN-Islamic', type: 'default', data: { label: 'イスラーム王朝の侵入', type: 'event', details: '中東からのイスラム教徒の侵入により、デリー＝スルタン朝などが成立。' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'IN-Mughal', type: 'default', data: { label: 'ムガル帝国', type: 'macro_event', iconUrl: '/icons/mughal.png', details: 'インド亜大陸の大半を統一した強大なイスラム帝国。' }, position: { x: 0, y: 0 }, style: { background: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },

    // ==========================================
    // 4. 中国の歴史（一番下のレーン）
    // ==========================================
    { id: 'CN-Ancient', type: 'default', data: { label: '秦・漢帝国', type: 'macro_event', iconUrl: '/icons/china_ancient.png', details: '黄河文明から発展し、初めて中国大陸を統一して強力な官僚機構と儒教体制を敷いた。' }, position: { x: 0, y: 0 }, style: { background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'CN-SuiTang', type: 'default', data: { label: '隋・唐の繁栄', type: 'event', iconUrl: '/icons/china_tang.png', details: '律令国家としての完成形。シルクロードを通じた国際的な文化が栄えた。' }, position: { x: 0, y: 0 }, style: { background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'CN-Mongol', type: 'default', data: { label: 'モンゴル帝国 (大元ウルス)', type: 'action', iconUrl: '/icons/mongol.png', details: '遊牧民の圧倒的な軍事力でユーラシア大陸の大部分を征服し、東西の直接交流をもたらした。' }, position: { x: 0, y: 0 }, style: { background: '#991b1b', color: '#fff', border: '2px solid #f87171', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'CN-MingQing', type: 'default', data: { label: '明・清の超大国', type: 'macro_event', details: '伝統的な中華帝国の完成形。莫大な人口と経済力を誇った。' }, position: { x: 0, y: 0 }, style: { background: '#b91c1c', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },

    // ==========================================
    // 5. グローバル結節点 (世界の一体化)
    // ==========================================
    { id: 'GLOBAL-AND', type: 'logic', data: { operator: 'AND', symbol: '＊' } },
    {
        id: 'GLOBAL-AgeOfDiscovery',
        type: 'default',
        data: {
            label: '世界の一体化 (大航海時代)',
            type: 'macro_event',
            iconUrl: '/icons/discovery.png',
            details: 'バラバラだった4つの歴史の線が、ヨーロッパの大航海時代によって海路で繋がり、地球規模のグローバル資本ネットワークに飲み込まれた。'
        },
        position: { x: 0, y: 0 },
        style: { background: '#000000', color: '#c084fc', border: '3px solid #a855f7', borderRadius: '8px', width: 300, padding: '20px', fontWeight: 'bold' }
    },

    // 一体化後の新たな分岐（近現代）
    { id: 'MODERN-IndRev', type: 'default', data: { label: '産業革命と資本主義', type: 'event', details: '機械化による生産力の爆発的向上。' }, position: { x: 0, y: 0 }, style: { background: '#4b5563', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'MODERN-Imperialism', type: 'default', data: { label: '帝国主義と植民地化', type: 'macro_event', details: '欧米列強がアジア・アフリカを分割支配。インドの植民地化、清の弱体化。' }, position: { x: 0, y: 0 }, style: { background: '#4b5563', color: '#fff', border: 'none', borderRadius: '4px', width: 200, padding: '10px' } },
    { id: 'MODERN-WorldWar', type: 'default', data: { label: '二つの世界大戦と現代へ', type: 'result', details: '世界を巻き込んだ総力戦を経て、現代の枠組み（冷戦など）へ。' }, position: { x: 0, y: 0 }, style: { background: '#111827', color: '#fff', border: '1px solid #9ca3af', borderRadius: '4px', width: 200, padding: '10px' } },
];


const rawEdges = [
    // ==========================================
    // 0. 起点から各地域への分岐
    // ==========================================
    { id: 'start-1', source: 'GLOBAL-Origin', target: 'GLOBAL-Mesopotamia', type: 'step', style: { stroke: '#57534e', strokeWidth: 4 } },
    { id: 'start-eu', source: 'GLOBAL-Mesopotamia', target: 'EU-Hellenism', type: 'step', style: { stroke: '#9ca3af', strokeWidth: 2, strokeDasharray: '4,4' }, label: '波及・派生' },
    { id: 'start-me', source: 'GLOBAL-Mesopotamia', target: 'ME-Orient', type: 'step', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'start-in', source: 'GLOBAL-Mesopotamia', target: 'IN-Ancient', type: 'step', style: { stroke: '#9ca3af', strokeWidth: 2, strokeDasharray: '4,4' } },
    { id: 'start-cn', source: 'GLOBAL-Mesopotamia', target: 'CN-Ancient', type: 'step', style: { stroke: '#9ca3af', strokeWidth: 2, strokeDasharray: '4,4' } },

    // 1. ヨーロッパの縦糸
    { id: 'eu-1', source: 'EU-Hellenism', target: 'EU-German', type: 'step', style: { stroke: '#2563eb', strokeWidth: 3 } },
    { id: 'eu-2', source: 'EU-German', target: 'EU-Crusades', type: 'step', style: { stroke: '#2563eb', strokeWidth: 3 } },
    { id: 'eu-3', source: 'EU-Crusades', target: 'EU-Renaissance', type: 'step', style: { stroke: '#2563eb', strokeWidth: 3 } },

    // 2. 中東の縦糸
    { id: 'me-1', source: 'ME-Orient', target: 'ME-Islam', type: 'step', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'me-2', source: 'ME-Islam', target: 'ME-Turkic', type: 'step', style: { stroke: '#059669', strokeWidth: 3 } },
    { id: 'me-3', source: 'ME-Turkic', target: 'ME-Ottoman', type: 'step', style: { stroke: '#059669', strokeWidth: 3 } },

    // 3. インドの縦糸
    { id: 'in-1', source: 'IN-Ancient', target: 'IN-Islamic', type: 'step', style: { stroke: '#d97706', strokeWidth: 3 } },
    { id: 'in-2', source: 'IN-Islamic', target: 'IN-Mughal', type: 'step', style: { stroke: '#d97706', strokeWidth: 3 } },

    // 4. 中国の縦糸
    { id: 'cn-1', source: 'CN-Ancient', target: 'CN-SuiTang', type: 'step', style: { stroke: '#b91c1c', strokeWidth: 3 } },
    { id: 'cn-2', source: 'CN-SuiTang', target: 'CN-Mongol', type: 'step', style: { stroke: '#b91c1c', strokeWidth: 3 } },
    { id: 'cn-3', source: 'CN-Mongol', target: 'CN-MingQing', type: 'step', style: { stroke: '#b91c1c', strokeWidth: 3 } },

    // ==========================================
    // ★ 激アツポイント：歴史の交差点（クロスエッジ）
    // ==========================================
    // ヨーロッパと中東の激突（十字軍）
    { id: 'cross-1', source: 'EU-Crusades', target: 'ME-Turkic', type: 'step', animated: true, style: { stroke: '#ef4444', strokeWidth: 3, strokeDasharray: '5,5' }, label: '衝突・交流' },

    // 中東とインドの干渉（イスラームの東進）
    { id: 'cross-2', source: 'ME-Islam', target: 'IN-Islamic', type: 'step', animated: true, style: { stroke: '#ef4444', strokeWidth: 3, strokeDasharray: '5,5' }, label: '侵入' },

    // 中国(モンゴル)の中東・ヨーロッパへの影響
    { id: 'cross-3', source: 'CN-Mongol', target: 'ME-Turkic', type: 'step', animated: true, style: { stroke: '#ef4444', strokeWidth: 3, strokeDasharray: '5,5' }, label: '征服と東西交流' },


    // ==========================================
    // 5. グローバル結節点への収束（大航海時代）
    // ==========================================
    { id: 'to-global-1', source: 'EU-Renaissance', target: 'GLOBAL-AND', type: 'step', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-global-2', source: 'ME-Ottoman', target: 'GLOBAL-AND', type: 'step', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-global-3', source: 'IN-Mughal', target: 'GLOBAL-AND', type: 'step', style: { stroke: '#a855f7', strokeWidth: 2 } },
    { id: 'to-global-4', source: 'CN-MingQing', target: 'GLOBAL-AND', type: 'step', style: { stroke: '#a855f7', strokeWidth: 2 } },

    { id: 'to-global-final', source: 'GLOBAL-AND', target: 'GLOBAL-AgeOfDiscovery', type: 'step', style: { stroke: '#000000', strokeWidth: 5 } },

    // 世界の一体化から近現代へ
    { id: 'modern-1', source: 'GLOBAL-AgeOfDiscovery', target: 'MODERN-IndRev', type: 'step', style: { stroke: '#4b5563', strokeWidth: 3 } },
    { id: 'modern-2', source: 'MODERN-IndRev', target: 'MODERN-Imperialism', type: 'step', style: { stroke: '#4b5563', strokeWidth: 3 } },
    { id: 'modern-3', source: 'MODERN-Imperialism', target: 'MODERN-WorldWar', type: 'step', style: { stroke: '#4b5563', strokeWidth: 3 } }
];

export const grandEdges = addArrowMarkers(rawEdges);
