import { addArrowMarkers } from './edgeUtils';

// ===== 大航海時代シナリオ：世界の一体化とコロンブス交換 =====

export const discoveryNodes = [
    // --- 動機 (Why) レイヤー ---
    {
        id: 'CTX-AsianWealth',
        type: 'default',
        data: {
            label: 'オスマン帝国の台頭と\n香辛料貿易の独占',
            type: 'context',
            details: '十字軍以降、肉食の保存や味付けに不可欠な「[[香辛料貿易|香辛料]]（胡椒など）」は金と同等の価値を持ち、ヨーロッパ中で熱狂的な需要がありました。\n\nしかし15世紀、強大な[[オスマン帝国]]がビザンツ帝国を滅ぼしコンスタンティノープルを制圧すると、伝統的な地中海ルートを通じた「東方貿易（レヴァント貿易）」をオスマン帝国やヴェネツィアの商人が独占。法外な中間マージンに苦しむ西ヨーロッパ諸国は、イスラーム圏を通らない「海路での新しいアジア直行ルート」を渇望するようになりました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-NewWorldOrder',
        type: 'default',
        data: {
            label: '中南米文明の破壊と\n過酷な植民地経営',
            type: 'action',
            details: 'スペインの[[コンキスタドール|征服者（コンキスタドール）]]であるコルテスやピサロは、鉄器や馬、そして持ち込んだヨーロッパの疫病（天然痘など）の力で、高度だが孤立していたアステカ王国とインカ帝国を瞬く間に滅亡させました。\n\n原住民を酷使するプランテーション（[[エンコミエンダ制]]）や、ポトシ銀山などの鉱山採掘による過酷な強制労働により、中南米の先住民の人口は激減しました。この労働力不足を補うため、やがてアフリカからの悲惨な黒人奴隷貿易（三角貿易）が引き起こされることになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-PriceRevolution',
        type: 'default',
        data: {
            label: '商業革命と価格革命\n(巨大な富とインフレ)',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '新大陸から安価な銀が大量にヨーロッパにヨーロッパに流入したことで、凄まじいインフレーション「[[価格革命]]」が引き起こされ、それまで固定の地代で生活していた旧来の封建領主（貴族）層は没落しました。\n\n同時に、貿易の中心が地中海から大西洋沿岸（リスボンやアントワープなど）へと劇的に移動する「[[商業革命]]」が発生。世界規模の貿易による莫大な利益により、初期の資本主義経済の基礎（商業資本主義）が一気に形成されました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-ModernEra',
        type: 'default',
        data: {
            label: '近代システムへの移行\n(次代への布石)',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: 'このパラダイムシフトにより「中世」という時代は完全に終焉を迎えました。\n\nヨーロッパ諸国は世界中から富を収奪・蓄積する構造（覇権国家の交代劇：ポルトガル/スペイン → オランダ → イギリス）を作り上げ、この資本の蓄積がやがて18世紀の「[[大分岐 (歴史学におけるヨーロッパの優位)|産業革命]]」を爆発させる原動力となりました。人類社会は、ヨーロッパを主役とする「近代化・帝国主義化」という新しい地平へ暴力的に踏み出していくことになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-OttomanBlockade',
        type: 'default',
        data: {
            label: 'オスマン帝国による地中海・陸路独占',
            type: 'root_cause',
            iconUrl: '/icons/ottoman.png',
            details: '強力なオスマン帝国が中東の交易路を制圧。高額な関税により、ヨーロッパはアジアの品物を安く手に入れる道を絶たれた。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-MOTIVE',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },
    {
        id: 'ACTION-SeekSeaRoute',
        type: 'default',
        data: {
            label: '「海から直接アジアへ行く」圧力',
            type: 'action',
            details: 'アジアの富が欲しいが、安全な陸路がない。必然的に「未知の海路」を開拓する強い社会的・経済的圧力が生まれた。'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' }
    },


    // --- 手段 (How) レイヤー ---
    {
        id: 'TECH-Navigation',
        type: 'default',
        data: {
            label: '航海・造船技術の発達',
            type: 'context',
            details: '【技術】羅針盤や天体観測儀（アストロラベ）の普及。外洋の荒波や逆風に耐えられる帆船（キャラベル船・ガレオン船）の開発。'
        },
        style: { background: '#0f766e', color: '#fff', border: '1px dashed #14b8a6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'FUND-StateSponsorship',
        type: 'default',
        data: {
            label: '国家権力によるパトロン・資金援助',
            type: 'context',
            details: '【資金・組織】ルネサンス期に蓄積された商業資本と、中央集権化を進める国家（ポルトガル・スペイン）の強力なスポンサード。'
        },
        style: { background: '#0f766e', color: '#fff', border: '1px dashed #14b8a6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-MEANS',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },
    {
        id: 'ACTION-EnableDeepSea',
        type: 'default',
        data: {
            label: '羅針盤の改良や造船技術\n(遠洋航海の前提条件)',
            type: 'root_cause',
            details: 'かつて宋代の中国で発明され、イスラーム世界を経て伝わった「[[羅針盤]]（方位磁針）」が、ヨーロッパで実用に堪えるレベルへ改良されました。\n\n同時に、外洋の荒波や長距離航海に耐えられる頑丈で帆の大きい新造船設計（[[キャラベル船|カラベル船]]やガレオン船）、および緯度を測る天体観測術（アストロラーベ）が普及。また、ルネサンスによる「地球球体説」の再発見など、未知の大海原の彼方へ踏み出すための科学的・技術的基盤が劇的に整いました。'
        },
        style: { background: '#047857', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },


    // --- 実行と結果レイヤー ---
    {
        id: 'LOGIC-AND-FINAL',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊' },
    },
    {
        id: 'EVENT-AgeOfDiscovery',
        type: 'default',
        data: {
            label: '世界の一体化 (大航海時代)',
            type: 'macro_event',
            iconUrl: '/icons/discovery.png',
            details: '海への強い動機と技術・資金が結びついた結果。バスコ・ダ・ガマのインド到達や、コロンブスの新大陸発見などによる新航路開拓。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-GlobalIntegration',
        type: 'default',
        data: {
            label: 'イベリア両国(葡・西)による\n新航路の発見',
            type: 'event',
            iconUrl: '/icons/voyage.png',
            details: '国土回復運動（レコンキスタ）を完了し、強烈なカトリック布教の使命感と王室の強力な支援を持つイベリア半島の二国が先陣を切りました。\n\nポルトガルはアフリカ南端（喜望峰）を回って直接インドに至る東廻り航路（[[ヴァスコ・ダ・ガマ|バスコ・ダ・ガマ]]）を開拓。一方スペインは、西へ進めばアジアへ着くとする[[クリストファー・コロンブス|コロンブス]]の提案を後援し、1492年に偶然アメリカ大陸（新大陸）に到達しました。後にマゼラン艦隊による史上初の世界一周も成し遂げられます。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

const edges = [
    // 海への動機の形成
    { id: 'edisc-1', source: 'CTX-AsianWealth', target: 'LOGIC-AND-MOTIVE', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'edisc-2', source: 'RC-OttomanBlockade', target: 'LOGIC-AND-MOTIVE', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'edisc-3', source: 'LOGIC-AND-MOTIVE', target: 'ACTION-SeekSeaRoute', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 4 } },

    // 海を渡る手段の獲得
    { id: 'edisc-4', source: 'TECH-Navigation', target: 'LOGIC-AND-MEANS', type: 'straight', style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'edisc-5', source: 'FUND-StateSponsorship', target: 'LOGIC-AND-MEANS', type: 'straight', style: { stroke: '#14b8a6', strokeWidth: 2 } },
    { id: 'edisc-6', source: 'LOGIC-AND-MEANS', target: 'ACTION-EnableDeepSea', type: 'straight', style: { stroke: '#10b981', strokeWidth: 4 } },

    // 大航海時代への結合（動機＋手段）
    { id: 'edisc-7', source: 'ACTION-SeekSeaRoute', target: 'LOGIC-AND-FINAL', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 2 } },
    { id: 'edisc-8', source: 'ACTION-EnableDeepSea', target: 'LOGIC-AND-FINAL', type: 'straight', style: { stroke: '#10b981', strokeWidth: 2 } },
    { id: 'edisc-9', source: 'LOGIC-AND-FINAL', target: 'EVENT-AgeOfDiscovery', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 4 } },

    // 究極の結果
    { id: 'edisc-10', source: 'EVENT-AgeOfDiscovery', target: 'RES-GlobalIntegration', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 3 } },
];

export const discoveryEdges = addArrowMarkers(edges);
