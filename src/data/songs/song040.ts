/* 僕らの世界・物語 */
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

export const song040: SongLyrics = {
    id: "song040",
    note: "",

    lyrics_blocks: [
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "振り向いて気づく足跡" }] },
                        { text: [{ lyrics: "立ち止まり僕は目を閉じていた" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "浮かんだ僕らと貴方の" }] },
                        { text: [{ lyrics: "響き渡る 笑い声を思いだして" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "悔しくて苦しくて" }] },
                        { text: [{ lyrics: "それでも止まらず歩んだ道の" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "最後の日に流す涙が" }] },
                        { text: [{ lyrics: "温かい物になりますように" }] },
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
                            text: [{ lyrics: "This story is now" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "僕らと貴方がいて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Together now" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "動き出した世界だ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "This story is now" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "僕らの歌が響く" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Together now" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "回り出した世界だ" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "This story is now" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "今では日常に溶け込む" }] },
                        { text: [{ lyrics: "輝く未来と少しの苦さ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "張り詰めた空間が心地良い" }] },
                        { text: [{ lyrics: "僕らもまたそれに心躍らせる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "目の前には貴方がいてその前に僕がいて" }] },
                        { text: [{ lyrics: "描いてく1秒間その先も続く物語を" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "あと何年後の僕もきっと" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "諦めずずっと僕はきっと" }]
                        },
                        {
                            members: ["Y", "W", "P"],
                            text: [{ lyrics: "あの日見た夢の欠片を探す" }]
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
                            text: [{ lyrics: "This story is now" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "僕らと貴方がいて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Together now" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "作り出した世界だ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "This story is now" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "僕らの心通い" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Together now" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "この先へと続いていく" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "This story is now" }] },
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
                            text: [{ lyrics: "何度立ち止まろうとも" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "時が雨の香り運ぶ様に" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "必ずまた1歩ずつでも" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "前を向いて行けるから" }]
                        },
                    ],
                },
            ],
        },
    ],
}
