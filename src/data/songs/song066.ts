/* LLL */
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

export const song066: SongLyrics = {
    id: "song066",

    lyrics_blocks: [
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "LLL Let's have a sweet time" }] },
                        { text: [{ lyrics: "we gotta 愛のscintillation" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "きらきらきらと揺れてる" }] },
                        { text: [{ lyrics: "星の海で手を繋ぐ　きみとぼく" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "多忙な日々　難解な日々をすり抜けて" }] },
                        { text: [{ lyrics: "待ち合わせたね" }] },
                        { text: [{ lyrics: "いつまでも見惚れ合っていたいんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "必ずはないし　永遠もないし" }] },
                        { text: [{ lyrics: "命　儚し　だから逃げもしない" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "今日までの愛も　未来での愛も" }] },
                        { text: [{ lyrics: "このいまの愛も　きみにあげるから" }] },
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
                            text: [{ lyrics: "LOVE LOVE LOVE" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(love you)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "LOVE LOVE LOVE きみを愛している" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "LOVE LOVE LOVE" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(love you)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "LOVE LOVE LOVE きみと愛している" }]
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
                        { text: [{ lyrics: "ハートの限り" }] },
                        { text: [{ lyrics: "最後の最後まで　I love you forever" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "画面で交わす文字言葉以上" }] },
                        { text: [{ lyrics: "瞳と瞳のキスを" }] },
                        { text: [{ lyrics: "いつまでも焦らし合っていたいんだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "今日までの愛も　未来での愛も" }] },
                        { text: [{ lyrics: "このいまの愛も　君のものだから" }] },
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
                            text: [{ lyrics: "LOVE LOVE LOVE" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(love you)" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "LOVE LOVE LOVE きみを愛している" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "LOVE LOVE LOVE" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(love you)" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "LOVE LOVE LOVE きみと愛している" }]
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
                            text: [{ lyrics: "まだ見ぬ世界と　高鳴る胸のまま" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "踊ろうよ　踊ろうよ　踊ろうよ" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "君を愛している　ずっと" }] },
                        { text: [{ lyrics: "君と愛している　ずっと" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "I wanna get to know you" }] },
                        { text: [{ lyrics: "I wanna get to know you" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ぼくらのいろのままでbeat" }] },
                        { text: [{ lyrics: "しなやかな心でdance" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "着飾らず愛し合ってfunk" }] },
                        { text: [{ lyrics: "与え合い生きていようlove" }] },
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
                            text: [{ lyrics: "LOVE LOVE LOVE" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(love you)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "LOVE LOVE LOVE きみを愛している" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "LOVE LOVE LOVE" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(love you)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "LOVE LOVE LOVE きみと愛している" }]
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
                        { text: [{ lyrics: "ハートの限り" }] },
                        { text: [{ lyrics: "最後の最後まで　I love you forever" }] },
                    ],
                },
            ],
        },
    ],
}
