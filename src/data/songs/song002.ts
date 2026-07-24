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

export const song002: SongLyrics = {
    id: "song002",
    note: "コールやクラップが多い。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "世紀末の大噴火の嵐の前の静寂か" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "SHAKE IT×2" }]
                        },
                        {
                            members: ["S", "G"],
                            text: [{ lyrics: "炭酸水", call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "ゆっくりゆっくり開けるように" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "突き抜ける光　心躍る" }] },
                        { text: [{ lyrics: "壊れそうになるペットボトル" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "脳裏よぎる" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "爆音の防衛本能この鼓動" }]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Wo o o …" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "溢れ出るこの気持ち" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "その手で受け止めて" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Every single day　君に　君に" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Every single day" }] },
                        { text: [{ lyrics: "出会えたこの奇跡" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "全部全部きっと…" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "o o o …" }] },
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
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
                        { text: [{ lyrics: "大体考えてんのは君の目" }] },
                        { text: [{ lyrics: "そして右の手に" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "理性？　ああせい" }] },
                        { text: [{ lyrics: "こうせい　ってうっせえ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "もう一回欲しいでしょ？" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "のどが渇いたら選手冥利" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "望み通り　叶うように" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ランプをこするのは興味本位" }]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Wo o o …" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "止まらないこの気持ち" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "心で繋がって" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Every single day　君を　君を" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Every single day" }] },
                        { text: [{ lyrics: "感じていたいから" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "全部全部もっと…" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Life is beautiful" }] },
                        { text: [{ lyrics: "そして素直に" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Diving　素晴らしい" }] },
                        { text: [{ lyrics: "笑顔で" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "溢れ出るこの気持ち" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "その手で受け止めて" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Every single day　君に　君に" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Every single day" }] },
                        { text: [{ lyrics: "出会えたこの奇跡" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギミギミラブ　ギミラブ" }] },
                        { text: [{ lyrics: "全部全部きっと…" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "o o o …" }] },
                        {
                            text: [
                                { lyrics: "You…" },
                                { lyrics: "(Hey Hey)", call: true },
                            ]
                        },
                        { text: [{ lyrics: "o o o …" }] },
                    ],
                },
            ],
        },
    ],
}
