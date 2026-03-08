import { addArrowMarkers } from './edgeUtils';

// ===== オスマン帝国の覇権シナリオ =====

export const ottomanNodes = [
    // --- 前提条件 (Context & Root Cause) ---
    {
        id: 'CTX-Frontier',
        type: 'default',
        data: {
            label: 'モンゴル侵入の混乱と\n辺境アナトリアの状況',
            type: 'context',
            details: '13世紀、巨大なモンゴル帝国の侵攻によって中東一帯は壊滅的な打撃を受け、多くのトルコ系部族が西方へと難を逃れました。\n\n彼らの行き着いた先は、イスラーム世界とキリスト教世界（衰退しつつあるビザンツ帝国）の最前線、「[[アナトリア]]（小アジア）」の辺境地帯でした。[[ルーム・セルジューク朝 (モンゴル侵攻による弱体化)|セルジューク朝]]の権力が及ばなくなったこの地で、独自の聖戦（ガザワー）を求める戦士（ガーズィー）たちの集団が多数乱立していました。'
        },
        style: { background: '#713f12', color: '#fff', border: '1px dashed #ca8a04', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RC-GhaziAndArmy',
        type: 'default',
        data: {
            label: 'ガーズィーの情熱と\n強力な常備軍',
            type: 'root_cause',
            iconUrl: '/icons/ottoman.png',
            details: '異教徒と戦う聖戦士（[[ガーズィー]]）のモチベーションと、[[イェニチェリ]]と呼ばれるスルタン直属の強力な常備軍の存在。この軍事力と宗教的熱意が、オスマン帝国の急速な拡大を可能にしました。'
        },
        style: { background: '#1e3a8a', color: '#fff', border: '2px solid #3b82f6', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'LOGIC-AND-EXPANSION',
        type: 'logic',
        data: { operator: 'AND', symbol: '＊', details: '地政学的条件と軍事・宗教的動機が組み合わさり、オスマン帝国の征服活動を推進しました。' },
    },

    // --- アクションと大事件 (Action & Event) ---
    {
        id: 'ACTION-Conquest',
        type: 'default',
        data: {
            label: 'ミッレト制による\n実利的な寛容統治',
            type: 'action',
            details: 'オスマン帝国は多様な宗教や民族を統治するため、ギリシャ正教会、アルメニア教会、ユダヤ教といった宗教共同体（ミッレト）ごとに自治を認める「[[ミッレト制]]」を採用しました。\n\n国家への納税と忠誠さえ誓えば、信仰や独自の法律・裁判を行う自由を保障しました。この極めて実用的で寛容なシステムにより、迫害されたスペインのユダヤ人が流入するなど、帝国は各地の優秀な頭脳や経済力を取り込み、長期間の繁栄を維持しました。'
        },
        style: { background: '#b91c1c', color: '#fff', border: '2px solid #ef4444', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'EVENT-FallOfConstantinople',
        type: 'default',
        data: {
            label: 'コンスタンティノープル陥落\n(1453年)',
            type: 'event',
            details: '[[メフメト2世]]による歴史的大事件。[[コンスタンティノープルの陥落|難攻不落の巨大な城壁を大砲で打ち破り]]、千年以上続いた東ローマ(ビザンツ)帝国を滅亡させた。この陥落は、オスマン帝国が真の帝国へと変貌する象徴的な出来事でした。'
        },
        style: { background: '#d97706', color: '#fff', border: '2px solid #f59e0b', borderRadius: '4px', width: 250, padding: '10px' }
    },

    // --- 覇権の確立と影響 (Results) ---
    {
        id: 'RES-Empire',
        type: 'default',
        data: {
            label: 'ビザンツ帝国の滅亡と\n三大陸支配(全盛期)',
            type: 'event',
            iconUrl: '/icons/hominid.png',
            details: '1453年、メフメト2世の巨大な大砲による包囲戦により、千年続いたビザンツ帝国の首都[[コンスタンティノープルの陥落|コンスタンティノープルが陥落]]。都市は「イスタンブール」へと生まれ変わり、帝国の新首都となりました。\n\n続く[[スレイマン1世]]（壮麗帝）の時代には、西はウィーンを包囲し（ヨーロッパへの衝撃）、地中海の制海権を掌握（プレヴェザの海戦）。ヨーロッパ・アジア・アフリカの三大陸にまたがる空前の巨大帝国のもと、パクス・オトマニカ（オスマンの平和）と呼ばれる全盛期を築き上げました。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #10b981', borderRadius: '4px', width: 250, padding: '10px' }
    },
    {
        id: 'RES-TradeMonopoly',
        type: 'default',
        data: {
            label: '伝統主義の弊害と\n巨大帝国の衰退',
            type: 'result',
            iconUrl: '/icons/result.png',
            details: '地中海交易を独占し、[[カピチュレーション]]（恩恵的特権）をフランスなどに与える余裕を見せていたオスマン帝国ですが、大航海時代による「経済の中心の太平洋・大西洋へのシフト」を察知できずにいました。\n\nまた、かつて最強を誇った軍隊（イェニチェリ）は既得権益化・腐敗して近代化の最大の障壁となり、産業革命を果たし軍事力を飛躍させた近代ヨーロッパ列強に対し、18世紀以降は連戦連敗の「瀕死の病人」へと転落していくことになります。'
        },
        style: { background: '#000000', color: '#fff', border: '2px solid #a855f7', borderRadius: '4px', width: 250, padding: '10px' }
    }
];

const edges = [
    // 征服活動への前提条件
    { id: 'eotto-1', source: 'CTX-Frontier', target: 'LOGIC-AND-EXPANSION', type: 'straight', style: { stroke: '#ca8a04', strokeWidth: 2 } },
    { id: 'eotto-2', source: 'RC-GhaziAndArmy', target: 'LOGIC-AND-EXPANSION', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2 } },
    { id: 'eotto-3', source: 'LOGIC-AND-EXPANSION', target: 'ACTION-Conquest', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 4 } },

    // 征服から大事件へ
    { id: 'eotto-4', source: 'ACTION-Conquest', target: 'EVENT-FallOfConstantinople', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 3 } },

    // 大事件から帝国の完成へ
    { id: 'eotto-5', source: 'EVENT-FallOfConstantinople', target: 'RES-Empire', type: 'straight', style: { stroke: '#10b981', strokeWidth: 3 } },

    // 影響（交易ルートの独占）
    { id: 'eotto-6', source: 'RES-Empire', target: 'RES-TradeMonopoly', type: 'straight', style: { stroke: '#a855f7', strokeWidth: 4 } }
];

export const ottomanEdges = addArrowMarkers(edges);
