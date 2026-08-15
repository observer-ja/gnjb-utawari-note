/* 疾走 */
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

export const song081: SongLyrics = {
    id: "song081",
    note: "コールの詳細は公式YouTubeのコール動画を参照。",

    lyrics_blocks: [
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "疾レ！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "相対する圧、頭下げてもさ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "風化しては雑、のめり込むだけ" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "アツさがメラメラ向く、ジェラ" }] },
                        { text: [{ lyrics: "溶かす DESSERT…" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "I + II + III (ワンツースリー)" , call: true }] },
                        { text: [{ lyrics: "Σₖ₌₁⁸ RUN" , call: true }] },
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
                            text: [
                                { lyrics: "マジ幸先悪めで　" },
                                { lyrics: "ダイビング" , call: true },
                            ]
                        },
                        {
                            members: ["G"],
                            text: [
                                { lyrics: "そりゃ外野もうるさく　" },
                                { lyrics: "バーキング" , call: true },
                            ]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [
                                { lyrics: "眩い逆光逆手に　" },
                                { lyrics: "ライティング" , call: true },
                            ]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "迷い晴らしゃいいの？" }]
                        },
                        {
                            members: ["G"],
                            text: [
                                { lyrics: "疾レ " },
                                { lyrics: "Dash Dash Dash" , call: true },
                            ]
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
                            members: ["S"],
                            text: [{ lyrics: "どしよもこしよもない　罠トライ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "胎に抱えた蟲が　消化不良" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "外に掃き出せ　気合いだ気合い" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "想定を超えていざ…" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "「Ready Set…」" , call: true }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "走レ！" }] },
                        { text: [{ lyrics: "燃え尽きるまで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [
                                { lyrics: "此処も通過" },
                                { lyrics: "点・転・辿" , call: true },
                            ]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "…とか言わせない" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(言わさない)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "暑さに負けず、坂道もガンダ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(Light Up, Light Up)" , call: true }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "この瞬間" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "走リ Δx (エラー) 生ジ、て" }] },
                        { text: [{ lyrics: "ラグの足枷・宣・戦布告負けを拒んだ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "「疾レ！疾レ！疾レ！」" , call: true }] },
                        { text: [{ lyrics: "掴みたい明日に鼓舞=勝負した炎天下" }] },
                        { text: [{ lyrics: "止まれやしない…" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "(Fu〜!!)" , call: true }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [
                                { lyrics: "良い子でいなさい、繋がれた首ィ" },
                                { lyrics: "what！？" , call: true },
                            ]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ふーふーする熱、冷ましたくない" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ハートはメラメラする自我" }] },
                        { text: [{ lyrics: "壊す LEGATO…" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [
                            { lyrics: "定メ " },
                            { lyrics: "Chop Chop Chop" , call: true },
                        ] },
                        { text: [{ lyrics: "破！", call: true }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Σₖ₌₁⁶ JUMP" , call: true }] },
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
                            text: [{ lyrics: "どしよもこしよもない　今トライ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "揺るがぬ羅針　焼き付けてく解" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "最高速度常に Re:Write" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "まだ見ぬ景色を浴びていたい" }]
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
                        { text: [{ lyrics: "(疾レ…)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "走り抜けていくだけ" }] },
                        { text: [{ lyrics: "迎える夜明け" }] },
                        { text: [{ lyrics: "夢と現実の中" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "答えはパッと見どこにもないが" }] },
                        { text: [{ lyrics: "この勝負に懸けたい！" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "(GO!! GO!! GO!!)" , call: true }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "誓いの先へ" }] },
                        { text: [{ lyrics: "燃え尽きるまで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [
                                { lyrics: "過去も通過" },
                                { lyrics: "点・転・辿" , call: true },
                            ]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "…とか言わせない" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(言わさない)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "暑さに負けず、坂道もガンダ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(Lights up, Lights up)" , call: true }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "この瞬間" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "走リ Δx (エラー) 生ジ、て" }] },
                        { text: [{ lyrics: "ラグの足枷・宣・戦布告負けを拒んだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "「疾ル！疾ル！疾ル！」" , call: true }] },
                        { text: [{ lyrics: "掴みたい今を描き奏でる炎天歌" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "止まりやしない…" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "(Fu〜!!)" , call: true }] },
                    ],
                },
            ],
        },
    ],
}
