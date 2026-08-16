/* 魔法をかけて */
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

export const song035: SongLyrics = {
    id: "song035",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "目が覚めたの何時? 隣には君" }] },
                        { text: [{ lyrics: "大好きなベイビー とりあえずハッピー" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "夢の扉ビビット カギをほらギブミー" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "その手の中に" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "すべてが溢れ出して" }]
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
                            text: [{ lyrics: "歩き慣れたストリート" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "自由の女神も微笑んでいる" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "あの日見てたストーリー" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "自由の国から「オハヨゴザイマス」" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Ah ガラスの靴はいらないよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Da-Da-Dancing, Dancing, Dancing きっと" }] },
                        { text: [{ lyrics: "いつだって君と踊りたいな" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Yeah, Yeah, Yeah もっと" }] },
                        { text: [{ lyrics: "目を瞑ってもいいよ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "全部任せていて" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "そして Love me 聞かせて" }]
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
                        { text: [{ lyrics: "目を逸らすくらいに 眩しい光" }] },
                        { text: [{ lyrics: "誘う街並み ネオンの海で" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "歌声は響いて 闇を蹴飛ばして" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "地下鉄は風" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "すべてが集まる場所" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Lo-Lo-Loving, Loving, Loving きっと" }] },
                        { text: [{ lyrics: "幕を上げるよ 嘘じゃないよ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "Yeah, Yeah, Yeah, Tonight" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "どのチケットがいいの?" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "そして見つめ合って" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Da-Da-Dancing, Dancing, Dancing ずっと" }] },
                        { text: [{ lyrics: "まわれMerry-go-round 魔法をかけて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Da-Da-Dancing, Dancing, Dancing きっと" }] },
                        { text: [{ lyrics: "いつだって君と踊りたいな" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Yeah, Yeah, Yeah もっと" }] },
                        { text: [{ lyrics: "目を瞑ってもいいよ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "全部任せていて" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "そして Love me 聞かせて" }]
                        },
                    ],
                },
            ],
        },
    ],
}
