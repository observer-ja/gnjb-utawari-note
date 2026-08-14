/* 桜Ground */
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

export const song039: SongLyrics = {
    id: "song039",
    note: "音源ではラスサビの歌割りは一番サビと同様である。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "届けたい想いだけ" }] },
                        { text: [{ lyrics: "小さなバッグに詰め込んで" }] },
                        { text: [{ lyrics: "心の奥　今日も君に会いにいく" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "流されていく景色が　2人の距離と重なった" }] },
                        { text: [{ lyrics: "こんなそばで寄り添ってても" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "離れたり傷つけたり　バランス悪い2人でも" }] },
                        { text: [{ lyrics: "僕はただその笑顔　守りたくて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "そうさ　僕らはいつもすれ違って" }] },
                        { text: [{ lyrics: "疑いの海を泳ぎきって" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "近くて遠くの　君に会いにいく" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "何も持たない姿で向きあって" }] },
                        { text: [{ lyrics: "お互いの全部さらけ出して" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "言葉を越えたら　もう一度抱き合おう" }] },
                        { text: [{ lyrics: "届け" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "出口も見えないような" }] },
                        { text: [{ lyrics: "迷路の中迷い込んだ" }] },
                        { text: [{ lyrics: "もっと深く　その声のする方へ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "突き当たった扉で　君の名前を囁いた" }] },
                        { text: [{ lyrics: "「怖がらないで」　ここまで来たよ" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "繰り返す日々の中　お互いの意味忘れてく" }] },
                        { text: [{ lyrics: "僕はまたその全て　感じたくて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "君を知れば知るほど空回って" }] },
                        { text: [{ lyrics: "愛情も全部裏返って" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "愛した嫌いな　君と向きあって" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "いいさ　酸いも甘いも噛み分けたら" }] },
                        { text: [{ lyrics: "幻想は全部取っ払って" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "恋のその先へ　駒を進めよう" }] },
                        { text: [{ lyrics: "君と" }] },
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
                            text: [{ lyrics: "ないものねだり繰り返していた" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "足元の声見逃していたんだ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "何より大事な宝物は　そこにあった" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "そうさ　僕らはいつもすれ違って" }] },
                        { text: [{ lyrics: "疑いの海を泳ぎきって" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "近くて遠くの　君に会いにいく" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "何も持たない姿で向きあって" }] },
                        { text: [{ lyrics: "お互いの全部さらけ出して" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "言葉を越えたら　もう一度抱き合おう" }] },
                        { text: [{ lyrics: "届け" }] },
                    ],
                },
            ],
        },
    ],
}
