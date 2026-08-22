/* アビスと清らな銀世界 */
export interface LyricText {
    lyrics: string;
    call?: boolean;
}

export interface LyricChunk {
    members?: string[];
    text: LyricText[];
}

export interface LyricRow {
    members?: string[];
    chunks: LyricChunk[];
}

export interface LyricBlock {
    members?: string[];
    rows: LyricRow[];
}

export interface SongLyrics {
    id: string;
    note?: string;
    lyrics_blocks: LyricBlock[];
}

export const song065: SongLyrics = {
    id: "song065",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["W"],
                            text: [{ lyrics: "妖しげなDark 声は冷たく" }]
                        },
                        { 
                            members: ["W"],
                            text: [{ lyrics: "そのMerkmal 見つける" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "聖夜" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "迷える子羊" }] },
                        { text: [{ lyrics: "拐かすMidnight" }] },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["S"],
                            text: [{ lyrics: "Lo Lo Lo Love" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "Romantica" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["G"],
                            text: [{ lyrics: "内なる怪物が" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["B"],
                            text: [{ lyrics: "あなたを見てる" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "50Hzの唸り声" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "Growling, Growling" }] },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["G"],
                            text: [{ lyrics: "覗いた深淵" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["B"],
                            text: [{ lyrics: "嗚呼ツァラトゥストラ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "宴の始まりさ" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["Y"],
                            text: [{ lyrics: "Sing a Song" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（Ha a）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["Y"],
                            text: [{ lyrics: "So Eye-to-愛" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（Ha a）" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "全てを超えたなら聴こえる" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Uh RingRingRing" }] },
                        { text: [{ lyrics: "Uh RingRingRing" }] },
                        { text: [{ lyrics: "僕の鼓動は" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "止められないFlash" }] },
                        { text: [{ lyrics: "暗闇を突き抜けた" }] },
                        { text: [{ lyrics: "その先にはKira Kira" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "めくるめくFantasy" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "もう決して戻れない" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "煌めきを讃えようCrash" }]
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "夜の果てに響いた" }] },
                        { text: [{ lyrics: "鐘の音はKiller Killer" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "こんな夜だから" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Free FallなAh" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "スリルも有りなんじゃない？" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["B"],
                            text: [{ lyrics: "Night…" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "響かせろ" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "RingRingRing" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["B"],
                            text: [{ lyrics: "Night…" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "響かせろ" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "RingRingRing" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "“Happy Holidays”" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "Kira Kiraしてる分" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUNBUN）" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "纏わりつく養分" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["B"],
                            text: [{ lyrics: "Ira Iraしてる文" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUNBUN）" }]
                        },
                        { 
                            members: ["B"],
                            text: [{ lyrics: "押し殺したMove" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）（BUNBUN）" }]
                        },
                        { 
                            members: ["P"],
                            text: [{ lyrics: "ソレは誰の分？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                        { 
                            members: ["G"],
                            text: [{ lyrics: "皆々さあ、己と勝負" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（BUN）" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "LaLaLa…" }] },
                        { text: [{ lyrics: "凍えそうな虚無(ニヒル)に" }] },
                        { text: [{ lyrics: "灼熱を注いで" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ほら聖者の歌を" }] },
                        { text: [{ lyrics: "アビスの底で会おう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Ah" }] },
                        { text: [{ lyrics: "朧気なI Love You" }] },
                        { text: [{ lyrics: "狂乱の大脱出" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "何もかも届かない" }] },
                        { text: [{ lyrics: "清らなMoon Light" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "止められないFlash" }] },
                        { text: [{ lyrics: "暗闇を突き抜けた" }] },
                        { text: [{ lyrics: "その先にはKira Kira" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "めくるめくFantasy" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（もう決して戻れないCrash）" }]
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Crash" }] },
                        { text: [{ lyrics: "夜の果てに響いた" }] },
                        { text: [{ lyrics: "鐘の音はKiller Killer" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "こんな夜だから" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "誰も彼もAh" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "共鳴して、だから" }]
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "かけがえない" }] },
                        { text: [{ lyrics: "幸せを叫ぼうOh…" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["B"],
                            text: [{ lyrics: "Night…" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "響かせろ" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "RingRingRing" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["B"],
                            text: [{ lyrics: "Night…" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "響かせろ" }]
                        },
                        { 
                            members: ["all"],
                            text: [{ lyrics: "RingRingRing" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（BUN）" }] },
                    ],
                },
            ],
        },
    ],
}
