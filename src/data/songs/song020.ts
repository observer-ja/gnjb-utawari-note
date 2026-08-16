/* 豪雨 */
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

export const song020: SongLyrics = {
    id: "song020",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "これ以上など望んでなかった" }] },
                        { text: [{ lyrics: "ずぶ濡れの幻に触れたら" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "笑ったあなたの顔を見てた" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "本当のことが判らないから" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "毎日の幸せ" }] },
                        { text: [{ lyrics: "隠した分だけ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "土砂降りだな雨" }] },
                        { text: [{ lyrics: "夢だけならよかった" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "時計仕掛けの汗" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "でもいいや 現行犯で" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "捕まえてくれよ 僕を今" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "戻れないよ もうどこにも" }] },
                        { text: [{ lyrics: "キレイじゃないから" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "尾を引くようについてくる" }] },
                        { text: [{ lyrics: "痛いほどに" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "帰れないよ もうどこにも" }] },
                        { text: [{ lyrics: "ああ どこにも" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "そばにいたのに" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "温もりと共に" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ああ あなたの涙が痛いのに" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["G", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "あなたの素肌に 頬を預けて" }] },
                        { text: [{ lyrics: "言い足んない言葉" }] },
                        { text: [{ lyrics: "そこに投げ捨て Stay out" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "胸に空いた隙間のせい？" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "故に愛か 「好き」はどうせ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "あってないさ　確かな感情　裏表" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "余計に雨となって" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "真っ直ぐな瞳で" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "裁いてくれよ 僕を今" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "P"],
                    chunks: [
                        { text: [{ lyrics: "届かないで 届けないで" }] },
                        { text: [{ lyrics: "キライじゃないなら" }] },
                    ],
                },
                {
                    members: ["Y", "P"],
                    chunks: [
                        { text: [{ lyrics: "この不協和に決して気づけない" }] },
                        { text: [{ lyrics: "ふたりでいて" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "帰らないで もうどこにも" }] },
                        { text: [{ lyrics: "ああ どこにも" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "遠くの夜空に" }] },
                        { text: [{ lyrics: "響いた星屑" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "もうからかったりしないで" }] },
                        { text: [{ lyrics: "窓にはキラキラ竜宮城みたいだね" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "Uターン禁止のHighway" }] },
                        { text: [{ lyrics: "マイウェイ そうじゃない方の道へ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "忘れたいよ 忘れないよ" }] },
                        { text: [{ lyrics: "銀のため息" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "栓を抜いた水面を這う" }] },
                        { text: [{ lyrics: "泡みたいだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "代われないよ もう誰にも" }] },
                        { text: [{ lyrics: "ああ 誰にも" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "そばにいるのか" }] },
                        { text: [{ lyrics: "それともいないのかい？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "戻れないよ もうどこにも" }] },
                        { text: [{ lyrics: "キレイじゃないから" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "尾を引くようについてくる" }] },
                        { text: [{ lyrics: "痛いほどに" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "帰れないよ もうどこにも" }] },
                        { text: [{ lyrics: "ああ どこにも" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "そばにいたのに" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "温もりと共に" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ああ あなたの涙が痛いのに" }]
                        },
                    ],
                },
            ],
        },
    ],
}
