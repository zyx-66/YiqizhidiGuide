/* ============================================
   遗弃之地 — 游戏数据库
   ============================================ */

// ── 天书数据 ──
const tianshuData = [
    {
        id: "shigandang",
        name: "石敢当",
        tier: "T0",
        element: "土",
        icon: "🗿",
        skill: "全屏石化",
        cooldown: "20秒",
        desc: "释放全屏石化控制，眩晕敌人3秒。土系平民神器，控制稳定，前期DPS高。缺点是无法对空，需搭配风煞阵防空。",
        rating: 5,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["控制", "平民推荐", "全屏"]
    },
    {
        id: "shijuezhen",
        name: "十绝阵",
        tier: "T0",
        element: "火",
        icon: "🔯",
        skill: "全屏爆发",
        cooldown: "30秒",
        desc: "输出爆炸的全屏火系AOE，氪佬专属，世界BOSS神器。极高伤害倍率，后期核心输出天书。",
        rating: 5,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["输出", "氪佬推荐", "世界BOSS"]
    },
    {
        id: "yehuofan",
        name: "业火幡",
        tier: "T1",
        element: "火",
        icon: "🔥",
        skill: "全屏AOE+击退",
        cooldown: "18秒",
        desc: "全屏火系AOE，概率击飞敌人。6级前较弱，6级后质变——伤害大幅提升。平民输出流核心，推图效率极高。",
        rating: 4.5,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["输出", "平民推荐", "击退", "6级质变"]
    },
    {
        id: "qingnv",
        name: "青女",
        tier: "T1",
        element: "水",
        icon: "❄️",
        skill: "冰冻控制+对空",
        cooldown: "16秒",
        desc: "水系控制天书，6阶开始发力，8阶后无敌。兼具冰冻控制和防空能力，后期人权卡之一。",
        rating: 4.5,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["控制", "对空", "后期发力", "8阶质变"]
    },
    {
        id: "leigong",
        name: "雷公",
        tier: "T1",
        element: "风",
        icon: "⚡",
        skill: "雷击+易伤",
        cooldown: "14秒",
        desc: "风系副C天书，6阶解锁易伤BUFF（使敌人受伤增加）。可作副输出搭配任何流派，灵活万金油。",
        rating: 4,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["副C", "易伤", "灵活", "6阶质变"]
    },
    {
        id: "fengshazhen",
        name: "风煞阵",
        tier: "T1",
        element: "风",
        icon: "🌪️",
        skill: "风系全能",
        cooldown: "15秒",
        desc: "最强综合天书，集输出、控制、对空于一体。养成周期长但回报极高，后期毕业选择之一。",
        rating: 4.5,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["全能", "对空", "后期", "高投入高回报"]
    },
    {
        id: "duanfoshou",
        name: "断佛手",
        tier: "T2",
        element: "土",
        icon: "✋",
        skill: "范围眩晕",
        cooldown: "22秒",
        desc: "范围土系眩晕控制，配合石敢当可触发眩晕增伤。控制范围较小，无石敢当时的替代选择。",
        rating: 3.5,
        obtain: "钟馗召唤抽奖（120抽保底）",
        tags: ["控制", "过渡", "配合石敢当"]
    },
    {
        id: "jiuhuanxizhang",
        name: "九环锡杖",
        tier: "T2",
        element: "水",
        icon: "🪄",
        skill: "减速光环",
        cooldown: "被动",
        desc: "水系辅助天书，提供持续减速光环，降低敌人移动速度。无往生弓时可以考虑入手。",
        rating: 3,
        obtain: "商店购买 / 钟馗召唤",
        tags: ["辅助", "减速", "过渡"]
    }
];

// ── 鬼仆数据 ──
const guipuData = [
    {
        id: "shuangzijiangshi",
        name: "双子僵尸",
        quality: "紫色",
        color: "purple",
        element: "土/风",
        icon: "🧟",
        skill: "符能激活：眩晕 + 护盾 + 回血",
        desc: "土/风系符能激活后释放眩晕效果，同时提供护盾和回血。性价比极高，新手必练鬼仆。",
        recommend: "⭐⭐⭐⭐⭐",
        bazhi: "好战分子 + 天煞孤星",
        tags: ["眩晕", "护盾", "回血", "新手推荐"]
    },
    {
        id: "jingfuren",
        name: "镜夫人",
        quality: "金色",
        color: "gold",
        element: "土",
        icon: "🪞",
        skill: "土系符能护盾",
        desc: "金色品质鬼仆，土系符能激活后提供高额护盾。生存能力极强，高难关卡必备。",
        recommend: "⭐⭐⭐⭐⭐",
        bazhi: "好战分子 + 符咒通玄",
        tags: ["护盾", "金色", "生存"]
    },
    {
        id: "luyao",
        name: "鹿妖",
        quality: "紫色",
        color: "purple",
        element: "水",
        icon: "🦌",
        skill: "冰冻效果",
        desc: "水元素鬼仆，冰冻可有效克制火马等高速敌人。高端局推荐选择之一。",
        recommend: "⭐⭐⭐⭐",
        bazhi: "天煞孤星 + 符咒通玄",
        tags: ["冰冻", "控制", "克制火马"]
    },
    {
        id: "huyao",
        name: "狐妖",
        quality: "紫色",
        color: "purple",
        element: "水",
        icon: "🦊",
        skill: "冰冻+魅惑",
        desc: "水元素鬼仆，附带冰冻和魅惑双控制。可搭配鹿妖形成双冰控体系。",
        recommend: "⭐⭐⭐⭐",
        bazhi: "好战分子 + 符咒通玄",
        tags: ["冰冻", "魅惑", "双控"]
    },
    {
        id: "diaoweimao",
        name: "貂尾猫",
        quality: "紫色",
        color: "purple",
        element: "风",
        icon: "🐱",
        skill: "增伤光环",
        desc: "紫色品质过渡鬼仆，提供增伤光环能力。前期没有更好鬼仆时的最佳选择。",
        recommend: "⭐⭐⭐",
        bazhi: "天煞孤星",
        tags: ["增伤", "过渡", "前期"]
    },
    {
        id: "matao",
        name: "马陶",
        quality: "蓝色",
        color: "blue",
        element: "火",
        icon: "🐴",
        skill: "火系输出",
        desc: "蓝色品质火系鬼仆，前期可用但后期乏力。新手过渡期使用。",
        recommend: "⭐⭐",
        bazhi: "任意",
        tags: ["输出", "过渡", "蓝色"]
    }
];

// ── 装备/鬼店道具数据 ──
const equipmentData = [
    // 红色品质（五帝钱抽取）
    {
        id: "zhushaling",
        name: "朱砂令",
        quality: "红色",
        color: "red",
        icon: "📜",
        effect: "增加箭矢数量，大幅提高输出",
        priority: "T0 - 最优先",
        source: "五帝钱抽奖",
        desc: "红品质中优先级最高的道具，直接增加攻击次数，输出提升最显著。"
    },
    {
        id: "lantianyu",
        name: "蓝田玉",
        quality: "红色",
        color: "red",
        icon: "💎",
        effect: "每次合成增加伤害",
        priority: "T0.5 - 优先",
        source: "五帝钱抽奖",
        desc: "每次符咒合成后叠加伤害BUFF，越打越强。朱砂令之后的第二选择。"
    },
    // 金色品质
    {
        id: "zhenhunling",
        name: "镇魂铃",
        quality: "金色",
        color: "gold",
        icon: "🔔",
        effect: "合成有概率提升符咒品质",
        priority: "T1 - 首推金色",
        source: "五帝钱抽奖",
        desc: "金色品质首推道具，合成时概率提升品质，极大提高符咒价值。"
    },
    {
        id: "tianshiling",
        name: "天师令",
        quality: "金色",
        color: "gold",
        icon: "🎫",
        effect: "手牌上限+1",
        priority: "T0 - 必选",
        source: "五帝钱抽奖",
        desc: "增加手牌上限，直接提升操作空间和容错率。所有流派通用，优先级最高的金色道具。"
    },
    {
        id: "xuecichuang",
        name: "血刺床",
        quality: "金色",
        color: "gold",
        icon: "🛏️",
        effect: "反弹伤害",
        priority: "T1.5",
        source: "五帝钱抽奖",
        desc: "受击反弹伤害，坦克流派可用。优先级低于镇魂铃和天师令。"
    },
    {
        id: "daoxuancaishen",
        name: "倒悬财神",
        quality: "金色",
        color: "gold",
        icon: "🪙",
        effect: "提高铜钱收益",
        priority: "T1.5",
        source: "五帝钱抽奖",
        desc: "增加铜钱获取量，经济类道具。前期拿了加快发育，后期可换。"
    },
    {
        id: "taomujian",
        name: "桃木剑",
        quality: "金色",
        color: "gold",
        icon: "🗡️",
        effect: "基础攻击力提升",
        priority: "T2",
        source: "五帝钱抽奖",
        desc: "基础攻击力加成，简单直接但效果不如其他金色道具。"
    },
    {
        id: "wangchungong",
        name: "往生弓",
        quality: "红色",
        color: "red",
        icon: "🏹",
        effect: "远程攻击武器",
        priority: "前期必入",
        source: "首充36元获取",
        desc: "首充赠送武器，前期性价比极高。后期可存元宝抢王剑升级。"
    },
    {
        id: "xuanwuyuxi",
        name: "玄武玉玺",
        quality: "金色",
        color: "gold",
        icon: "🦯",
        effect: "额外抽牌机会",
        priority: "T1.5",
        source: "五帝钱抽奖",
        desc: "额外抽牌机会，增加符咒获取速率，手牌运营流核心。"
    }
];

// ── 符咒数据 ──
const talismanData = [
    {
        element: "火",
        icon: "🔥",
        color: "fire",
        role: "主力输出",
        desc: "火系符咒以高伤害著称，是队伍中的核心输出元素。基础伤害高于其他三系。",
        traits: ["高伤害", "爆发", "灼烧DOT"],
        synergy: ["搭配土系控制创造输出环境", "搭配风系击退保持安全距离"],
        weakTo: "水（减速会限制火系输出频率）",
        evolution: "10级后分支进化：炎爆（更高伤害）或 燎原（更大范围）",
        synthRule: "3张同阶火符 → 1张高阶火符"
    },
    {
        element: "水",
        icon: "💧",
        color: "water",
        role: "控制/减速",
        desc: "水系符咒以控制和减速见长，能有效延缓敌人推进速度，为输出争取时间。",
        traits: ["冰冻", "减速", "对空能力强"],
        synergy: ["搭配火系输出形成冰火两重天", "搭配风系击退+减速形成风筝流"],
        weakTo: "风（击退会打乱冰冻阵型）",
        evolution: "10级后分支进化：冰封（更长控制）或 洪流（更大减速范围）",
        synthRule: "3张同阶水符 → 1张高阶水符"
    },
    {
        element: "风",
        icon: "🌪️",
        color: "wind",
        role: "击退/灵活",
        desc: "风系符咒可击退敌人，打乱敌方阵型。机动性最强，适合灵活应对各种局面。",
        traits: ["击退", "对空", "攻速快"],
        synergy: ["搭配土系眩晕形成推晕链", "搭配火系输出最大化伤害窗口"],
        weakTo: "土（土系抗性高，击退效果减弱）",
        evolution: "10级后分支进化：飓风（更强击退）或 疾风（更快攻速）",
        synthRule: "3张同阶风符 → 1张高阶风符"
    },
    {
        element: "土",
        icon: "🪨",
        color: "earth",
        role: "眩晕/防御",
        desc: "土系符咒以控制和防御著称，眩晕是最强的硬控效果，能完全停止敌人行动。",
        traits: ["眩晕", "护盾", "抗性高"],
        synergy: ["搭配火系天书爆发输出", "搭配风系清理被眩晕的敌人"],
        weakTo: "火（高爆发可击破土系防御）",
        evolution: "10级后分支进化：山崩（群体眩晕）或 坚壁（更强护盾）",
        synthRule: "3张同阶土符 → 1张高阶土符"
    }
];

// ── 关卡数据 ──
const levelData = [
    { id: 1, name: "遗弃之路", difficulty: "简单", diffLevel: 1, enemies: "普通游魂、行尸", waves: "3波", recTianshu: "任意", recGuipu: "任意", recTalisman: "火+土", tips: "熟悉基础操作，练习符咒合成节奏" },
    { id: 2, name: "荒村入口", difficulty: "简单", diffLevel: 1, enemies: "游魂、尸鬼", waves: "3波", recTianshu: "任意", recGuipu: "貂尾猫", recTalisman: "火+风", tips: "开始出现尸鬼，血量较高，注意集火" },
    { id: 3, name: "枯井幽魂", difficulty: "简单", diffLevel: 1, enemies: "水鬼、游魂", waves: "4波", recTianshu: "断佛手", recGuipu: "貂尾猫", recTalisman: "土+火", tips: "水鬼移速较快，注意布控减速" },
    { id: 4, name: "乱葬岗", difficulty: "简单", diffLevel: 2, enemies: "行尸、骷髅兵", waves: "4波", recTianshu: "业火幡", recGuipu: "双子僵尸", recTalisman: "火+土+风", tips: "敌人数量增多，开始需要AOE输出" },
    { id: 5, name: "义庄惊魂", difficulty: "简单", diffLevel: 2, enemies: "僵尸、跳尸", waves: "4波", recTianshu: "石敢当", recGuipu: "双子僵尸", recTalisman: "土+火", tips: "跳尸移速极快，需要眩晕控制" },
    { id: 6, name: "古墓入口", difficulty: "普通", diffLevel: 2, enemies: "骷髅兵、鬼火", waves: "5波", recTianshu: "业火幡", recGuipu: "镜夫人", recTalisman: "风+火", tips: "鬼火免疫物理攻击，需要用符咒击杀" },
    { id: 7, name: "地宫暗道", difficulty: "普通", diffLevel: 2, enemies: "石像鬼、骷髅弓箭手", waves: "5波", recTianshu: "石敢当+风煞阵", recGuipu: "镜夫人", recTalisman: "土+风", tips: "出现远程敌人，优先击杀弓箭手" },
    { id: 8, name: "血池地狱", difficulty: "普通", diffLevel: 3, enemies: "血魔、行尸", waves: "5波", recTianshu: "业火幡6级", recGuipu: "双子僵尸+鹿妖", recTalisman: "火+水", tips: "血魔会回血，需要水系减速+火系爆发秒杀" },
    { id: 9, name: "奈何桥", difficulty: "普通", diffLevel: 3, enemies: "水鬼、孟婆侍者", waves: "6波", recTianshu: "青女", recGuipu: "鹿妖+狐妖", recTalisman: "水+火", tips: "桥面狭窄，利用冰冻控制关键位置" },
    { id: 10, name: "鬼门关", difficulty: "困难", diffLevel: 3, enemies: "牛头马面、恶鬼", waves: "6波", recTianshu: "石敢当+业火幡", recGuipu: "镜夫人", recTalisman: "土+火+水", tips: "BOSS关卡，需要控制+输出双重保障" },
    { id: 11, name: "阎罗殿前", difficulty: "普通", diffLevel: 3, enemies: "判官侍从、鬼卒", waves: "6波", recTianshu: "雷公", recGuipu: "双子僵尸+鹿妖", recTalisman: "风+土", tips: "雷公易伤BUFF对此关BOSS效果显著" },
    { id: 12, name: "十八层地狱·一", difficulty: "困难", diffLevel: 4, enemies: "孽鬼、火马", waves: "7波", recTianshu: "青女6阶", recGuipu: "鹿妖+狐妖", recTalisman: "水+风", tips: "火马极快，必须冰冻克制！冰系是此关MVP" },
    { id: 13, name: "十八层地狱·二", difficulty: "困难", diffLevel: 4, enemies: "铁树鬼、刀山鬼", waves: "7波", recTianshu: "石敢当+业火幡", recGuipu: "镜夫人+双子僵尸", recTalisman: "土+火+风", tips: "多种敌人混合，注意元素搭配均衡" },
    { id: 14, name: "十八层地狱·三", difficulty: "困难", diffLevel: 4, enemies: "油锅鬼、冰山鬼", waves: "7波", recTianshu: "十绝阵", recGuipu: "镜夫人", recTalisman: "火+水+土", tips: "油锅鬼火抗高用冰打，冰山鬼冰抗高用火打" },
    { id: 15, name: "轮回隧道", difficulty: "困难", diffLevel: 4, enemies: "轮回使者、游魂", waves: "8波", recTianshu: "风煞阵+业火幡", recGuipu: "双子僵尸+貂尾猫", recTalisman: "风+火+土", tips: "敌人数速快，风系击退创造输出空间" },
    { id: 16, name: "幽冥古道", difficulty: "困难", diffLevel: 4, enemies: "古魂、幽冥骑士", waves: "8波", recTianshu: "雷公6阶", recGuipu: "镜夫人+双子僵尸", recTalisman: "风+火+水", tips: "雷公6阶易伤对骑士效果拔群" },
    { id: 17, name: "黄泉路上", difficulty: "困难", diffLevel: 5, enemies: "黄泉摆渡人、亡灵", waves: "8波", recTianshu: "青女8阶", recGuipu: "鹿妖+狐妖+镜夫人", recTalisman: "水+火+土", tips: "最终段开始，推荐天书8级以上" },
    { id: 18, name: "彼岸花海", difficulty: "困难", diffLevel: 5, enemies: "花妖、食人花", waves: "8波", recTianshu: "业火幡+风煞阵", recGuipu: "镜夫人+双子僵尸", recTalisman: "火+风", tips: "花妖会召唤小怪，范围输出优先" },
    { id: 19, name: "地藏道场", difficulty: "极难", diffLevel: 5, enemies: "金刚鬼、念经僧鬼", waves: "9波", recTianshu: "十绝阵+石敢当", recGuipu: "镜夫人+鹿妖", recTalisman: "全元素", tips: "僧鬼会治疗，优先眩晕后集火秒杀" },
    { id: 20, name: "奈何尽头", difficulty: "极难", diffLevel: 5, enemies: "孟婆、忘川水鬼", waves: "9波", recTianshu: "风煞阵+青女", recGuipu: "狐妖+鹿妖+双子僵尸", recTalisman: "水+风+土", tips: "BOSS孟婆AOE极强，保持护盾覆盖" },
    { id: 21, name: "枉死城", difficulty: "极难", diffLevel: 5, enemies: "枉死鬼、冤魂", waves: "9波", recTianshu: "十绝阵+雷公", recGuipu: "镜夫人+双子僵尸", recTalisman: "火+风+土", tips: "冤魂数量极多，全屏AOE必备" },
    { id: 22, name: "阎罗正殿", difficulty: "极难", diffLevel: 5, enemies: "阎罗侍卫、判官", waves: "10波", recTianshu: "全T0天书", recGuipu: "全金色鬼仆", recTalisman: "全元素", tips: "最终BOSS关卡之一，需要满配天书和鬼仆" },
    { id: 23, name: "钟馗道场", difficulty: "极难", diffLevel: 5, enemies: "钟馗幻象、鬼王侍从", waves: "10波", recTianshu: "石敢当+十绝阵", recGuipu: "镜夫人+鹿妖+狐妖", recTalisman: "土+火+水", tips: "钟馗幻象会反伤，注意护盾覆盖" },
    { id: 24, name: "六道轮回", difficulty: "极难", diffLevel: 5, enemies: "六道守护者（6种）", waves: "10波", recTianshu: "全T0级满阶", recGuipu: "全金+满八字", recTalisman: "全元素满级", tips: "六种敌人有不同抗性，需随时切换策略" },
    { id: 25, name: "遗弃之终", difficulty: "极难", diffLevel: 5, enemies: "最终BOSS·遗弃之主", waves: "12波", recTianshu: "十绝阵+石敢当+青女", recGuipu: "全部最强", recTalisman: "全元素10级+分支", tips: "最终关！综合考验，所有系统需达到最高水平" }
];

// ── 特殊关卡 ──
const specialLevels = [
    {
        id: "heiwu",
        name: "黑雾之境",
        icon: "🌫️",
        desc: "获取金币和元宝的特殊副本。每日有挑战次数限制，是元宝的核心获取途径之一。",
        tips: "优先选择高输出天书，快速清怪效率最高。推荐业火幡或十绝阵。",
        rewards: "金币 + 元宝",
        limit: "每日3次"
    },
    {
        id: "worldboss",
        name: "世界BOSS",
        icon: "👹",
        desc: "竞争排名玩法，根据伤害排名获取奖励。十绝阵在此模式表现最优。",
        tips: "尽量使用十绝阵叠满输出BUFF，伤害越高排名奖励越好。",
        rewards: "排名奖励（五帝钱/元宝/卦纸）",
        limit: "每日1次"
    }
];

// ── 流派/Build 数据 ──
const buildData = [
    {
        name: "业火幡流（平民输出流）",
        type: "平民推荐",
        icon: "🔥",
        tianshu: ["业火幡（主力）", "雷公（副C）", "风煞阵（对空）"],
        guipu: ["双子僵尸", "貂尾猫", "鹿妖"],
        equipment: ["天师令", "镇魂铃", "朱砂令", "蓝田玉"],
        talisman: "火系为主（70%），风系辅助（20%），土系控制（10%）",
        desc: "全屏输出流，业火幡6级后质变。前期靠火系符咒清怪，业火幡好了就放。概率击飞提供额外控制。",
        tips: ["优先把业火幡升到6级（质变点）", "火符为主，风符补刀+对空", "手牌管理：保持1-2张土符用于应急控制"],
        suitable: "适合大部分关卡，尤其怪物密集的关卡"
    },
    {
        name: "石敢当流（平民控制流）",
        type: "平民推荐",
        icon: "🗿",
        tianshu: ["石敢当（主力）", "断佛手（配合）", "风煞阵（对空）"],
        guipu: ["镜夫人", "双子僵尸", "狐妖"],
        equipment: ["天师令", "镇魂铃", "朱砂令", "血刺床"],
        talisman: "土系为主（60%），火系输出（25%），风系对空（15%）",
        desc: "控制稳定流，石敢当3秒全屏眩晕创造完美输出窗口。缺点是石敢当不能对空，必须搭配风系。",
        tips: ["石敢当和断佛手错开释放，保持控场覆盖", "眩晕期间集中火力输出", "防空依赖风煞阵或风系符咒"],
        suitable: "适合高难关卡和BOSS关，对空弱的关卡需调整"
    },
    {
        name: "氪佬爆发流",
        type: "高配推荐",
        icon: "💎",
        tianshu: ["十绝阵（核心）", "青女8阶（控制）", "风煞阵（全能）"],
        guipu: ["镜夫人", "鹿妖", "狐妖"],
        equipment: ["朱砂令", "蓝田玉", "天师令", "镇魂铃", "往生弓/王剑"],
        talisman: "火系（40%）+ 风系（30%）+ 水系（30%）",
        desc: "氪佬专属流派，十绝阵提供爆炸输出，青女8阶提供绝对控制。世界BOSS和推图双修。",
        tips: ["十绝阵需要高等级和高阶才能发挥真正实力", "青女必须到8阶才是完全体", "适合有预算投入的玩家"],
        suitable: "全模式通用，世界BOSS首选"
    },
    {
        name: "冰控风筝流",
        type: "流派探索",
        icon: "❄️",
        tianshu: ["青女（核心）", "业火幡（副输出）"],
        guipu: ["鹿妖", "狐妖"],
        equipment: ["天师令", "蓝田玉", "玄武玉玺"],
        talisman: "水系（50%）+ 风系（30%）+ 火系（20%）",
        desc: "利用水系统+风系击退形成风筝流，敌人几乎无法靠近。缺点是输出略低，需要耐心。",
        tips: ["冰冻+击退连招：先冰冻后击退，拉开距离", "青女6阶起用，8阶起飞", "对火马等高速敌人效果极佳"],
        suitable: "高速敌人关卡，时间充裕的持久战"
    }
];

// ── 资源数据 ──
const resourceData = [
    {
        name: "铜钱",
        icon: "🪙",
        usage: "鬼店购买紫/蓝品质道具，修炼属性",
        obtain: "关卡掉落、日常任务、黑雾之境",
        tips: "优先买高级属性，不要浪费在低级道具上"
    },
    {
        name: "五帝钱",
        icon: "💰",
        usage: "鬼店高级抽奖，获取红/金品质道具",
        obtain: "每日任务、世界BOSS排名奖励、活动",
        tips: "每日必买！五帝钱是最重要的抽奖货币"
    },
    {
        name: "元宝",
        icon: "💎",
        usage: "多样用途（体力、抽奖、商城）",
        obtain: "充值、活动、黑雾之境",
        tips: "⚠️ 前期只买体力和五帝钱，不要乱花！"
    },
    {
        name: "卦纸",
        icon: "🧧",
        usage: "钟馗召唤，抽取天书",
        obtain: "每日任务、活动奖励",
        tips: "天书120抽保底，攒够再抽避免浪费"
    }
];

// ── 新手避坑指南 ──
const avoidTips = [
    { num: 1, text: "<strong>元宝不要乱花</strong> — 前期元宝极其珍贵，只用来买<strong>体力</strong>和<strong>五帝钱</strong>，衣服「怒罗汉」千万别买！" },
    { num: 2, text: "<strong>不要只重视输出</strong> — 减速和控制同样重要，纯输出流后期一定会<strong>漏怪</strong>导致失败！" },
    { num: 3, text: "<strong>齐射有2-3个后优先度降低</strong> — <strong>强运</strong>是最优五帝钱选择，可以舍弃其他红色道具来保强运。" },
    { num: 4, text: "<strong>36元首充拿往生弓</strong>性价比极高 — 前期武器一步到位，后期再存元宝抢<strong>王剑</strong>升级。" },
    { num: 5, text: "<strong>天书120抽保底，3级才是开始</strong> — 天书3级后技能质变，优先把主力天书升到3级再考虑更换。" },
    { num: 6, text: "<strong>每天记得买每周限购抽奖券×3</strong> — 性价比最高的投资，每日五帝钱和天书残页也务必清空。" }
];

// ── 商店购买指南 ──
const shopGuide = [
    { item: "每周限购抽奖券 ×3", category: "buy", icon: "✅" },
    { item: "每日五帝钱", category: "buy", icon: "✅" },
    { item: "每日天书残页", category: "buy", icon: "✅" },
    { item: "每周体力 ×3", category: "maybe", icon: "⚡", note: "（肝帝可买）" },
    { item: "每日抽奖券", category: "maybe", icon: "⚡" },
    { item: "九环锡杖", category: "maybe", icon: "⚡", note: "（无往生弓时）" },
    { item: "衣服「怒罗汉」", category: "skip", icon: "❌" }
];

// ── 养成路线 ──
const roadmapData = [
    { phase: "前期（1-5关）", title: "熟悉系统，积累资源", desc: "熟悉符咒合成和天书释放机制。元宝只买体力和五帝钱。鬼仆先用貂尾猫过渡，争取早日拿到双子僵尸。" },
    { phase: "中期（6-15关）", title: "确定流派，专注养成", desc: "根据抽到的天书确定主力流派（业火幡流或石敢当流）。主力天书优先升到3级+，鬼仆升到双子僵尸+镜夫人组合。" },
    { phase: "中后期（16-20关）", title: "天书升阶，备战最终", desc: "主力天书冲击6级/6阶。五帝钱优先拿天师令和镇魂铃。鬼仆八字至少刷出「好战分子」或「天煞孤星」。" },
    { phase: "后期（21-25关）", title: "满配冲刺，全通挑战", desc: "主力天书冲击8级+，鬼仆全部升金。根据关卡微调符咒配比，备战最终BOSS。开始参与世界BOSS排名。" }
];

// ── 五帝钱优先级 ──
const wudiqianPriority = [
    { tier: "T0", items: "手牌上限" },
    { tier: "T1", items: "借势、强运、贪财" },
    { tier: "T1.5", items: "齐射（有2-3个后优先级降低）" },
    { tier: "T2", items: "伤害加成、伤害减免" }
];

// ── 所有可搜索数据映射 ──
const allSearchables = [
    ...tianshuData.map(d => ({ ...d, _type: "tianshu", _typeLabel: "天书", _icon: d.icon })),
    ...guipuData.map(d => ({ ...d, _type: "guipu", _typeLabel: "鬼仆", _icon: d.icon })),
    ...equipmentData.map(d => ({ ...d, _type: "equipment", _typeLabel: "装备", _icon: d.icon })),
    ...levelData.map(d => ({ ...d, _type: "level", _typeLabel: "关卡", _icon: "🗺️" })),
    ...buildData.map(d => ({ ...d, _type: "build", _typeLabel: "流派", _icon: d.icon })),
    ...resourceData.map(d => ({ ...d, _type: "resource", _typeLabel: "资源", _icon: d.icon })),
    ...specialLevels.map(d => ({ ...d, _type: "special", _typeLabel: "特殊玩法", _icon: d.icon }))
];
