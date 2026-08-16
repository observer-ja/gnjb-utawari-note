/* GOD 釈迦にHip-Hop */
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

export const song046: SongLyrics = {
    id: "song046",
    note: "コールの詳細は公式YouTubeのコール動画を参照。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "ヤバい！？ FIGHTING FIGHTING yeah" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "すきすき　きすきすみー" }]
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
                            members: ["R"],
                            text: [{ lyrics: "寝ても覚めてもチェックする" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "（監視中毒）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [
                                { lyrics: "まさに" },
                                { lyrics: "GOD", call: true },
                                { lyrics: "釈迦に" },
                                { lyrics: "Hip-Hop", call: true },
                            ]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "（かませ～）" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "あと20秒くらいで奴の出番" }]
                        },
                        {
                            members: ["W"],
                            text: [
                                { lyrics: "サビ前で一言" },
                                { lyrics: "頂戴", call: true },
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
                            members: ["B"],
                            text: [{ lyrics: "人見知り強化 ノンレム過ぎて違反" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "危険信号かき混ぜて" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "異論暴論全部吸って" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "愛しの彼は現在甘味系で進行中" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "飛ばせKYUUUUN!!! KYUUUUN!!! KYUUUUN!!!" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "「お待たせ」" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ヤバい！？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "FIGHTING" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(FIGHT!)" , call: true }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "FIGHTING" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(FIGHT!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ドキドキロキロキノン" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "その闇" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(HIGH!)" , call: true }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "暴いて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(HIGH!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Bye売買して" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "爽！" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "ラブリー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LOVE!)" , call: true }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ラブリー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LOVE!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "好き好きゆうてんじゃん" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [
                            { lyrics: "気づいてる？気づいて" },
                            { lyrics: "無く無くない？" , call: true },
                        ] },
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
                                { lyrics: "クールで溶けちゃう" },
                                { lyrics: "バランサー" , call: true },
                            ]
                        },
                        {
                            members: ["W"],
                            text: [
                                { lyrics: "キレイ好きで頼れる" },
                                { lyrics: "スポンサー" , call: true },
                            ]
                        },
                        {
                            members: ["S"],
                            text: [
                                { lyrics: "ママ麻婆" },
                                { lyrics: "無敵" , call: true },
                            ]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [
                                { lyrics: "いつでも " },
                                { lyrics: "Movin' Movin'" , call: true },
                            ]
                        },
                        {
                            members: ["S"],
                            text: [
                                { lyrics: "人生、そんで " },
                                { lyrics: "Music Music" , call: true },
                            ]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "「そこ！歌…」" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "アレ？短くない？" }]
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
                            text: [{ lyrics: "キメ顔レベチでごめん" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "ON OFFのswitchは大事な Choice" }]
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
                        { text: [{ lyrics: "ここで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "GREETING" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(FIGHT!)" , call: true }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "GREETING" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(FIGHT!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ドキドキ to meet you!" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "出会いは" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(HIGH!)" , call: true }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "願いが" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(HIGH!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "結んじゃう糸" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "そう、" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "ラブリー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LOVE!)" , call: true }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "ラブリー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LOVE!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "涙の7連射" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [
                            { lyrics: "キラキラに ラキラキ" },
                            { lyrics: "ララララライ" , call: true },
                        ] },
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
                            text: [{ lyrics: "勝手に食べんなよ、" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "グミ契約して Anyways" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "ぐんぐん伸びてく一人っ子の野望" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "行くぜ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "BOOOOOM!!! BOOOOOM!!! BOOOOOM!!!" }]
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
                            members: ["W"],
                            text: [{ lyrics: "何回でも TRY IT" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ABAB↑↑→←" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "難しいけど" }]
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
                        { text: [{ lyrics: "ヤバい！？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "FIGHTING" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(FIGHT!)" , call: true }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "FIGHTING" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(FIGHT!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ドキドキロキロキノン" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "その闇" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(HIGH!)" , call: true }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "暴いて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(HIGH!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Bye売買して" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "爽！" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "ラブリー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LOVE!)" , call: true }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ラブリー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LOVE!)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "好き好きゆうてんじゃん" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [
                            { lyrics: "気づかない振りして" },
                            { lyrics: "ルルルルル" , call: true },
                        ] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ヤバい！？ FIGHTING FIGHTING" }] },
                        { text: [{ lyrics: "好き好きゆうてんじゃん" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [
                            { lyrics: "すきすきす きすきす" },
                            { lyrics: "き・き・きすみー" , call: true },
                        ] },
                    ],
                },
            ],
        },
    ],
}
