/* 愛無常 */
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

export const song082: SongLyrics = {
    id: "song082",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "がんじがらめのまま" }] },
                        { text: [{ lyrics: "固まってしまってる後悔も" }] },
                        { text: [{ lyrics: "SOS 一人きりで　飲み込んで塞いだ感情も" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "君を捕まえるには　避けられない理なら" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "この身もこころも　喜んで差し出そう" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "すべて　正しい世界だけじゃないさ" }] },
                        { text: [{ lyrics: "君も僕も" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "さあ" }] },
                        { text: [{ lyrics: "間違えちゃってもいいから" }] },
                        { text: [{ lyrics: "地獄に向かっちゃってもいいから" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "壊れちゃったって愛してよ" }] },
                        { text: [{ lyrics: "果てるまで　道連れなるまま" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "イケナイなんてわかってる" }] },
                        { text: [{ lyrics: "それでも染まってしまう　愛無常" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "踏み外しても　無謀でも" }] },
                        { text: [{ lyrics: "誰かを裏切る運命だとしても" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "仮面の外　数cm前で" }] },
                        { text: [{ lyrics: "微笑む眼差しが痛いのです" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "僕の正体の一部始終" }] },
                        { text: [{ lyrics: "見られてるようで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "息をする度　胸が軋んでいく闇の中も" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "容易く泳いで　君の隣へ行こう" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "すべて　綺麗な世界なわけないさ" }] },
                        { text: [{ lyrics: "君も僕も" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "さあ" }] },
                        { text: [{ lyrics: "傷ついちゃってもいいから" }] },
                        { text: [{ lyrics: "またバチ当たっちゃってもいいから" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "戻れないように愛してよ" }] },
                        { text: [{ lyrics: "いたずらに　気の向くまにまに" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "アブナイなんてわかってる" }] },
                        { text: [{ lyrics: "それでも染まってしまう　愛無常" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "幸せ一つ　獲れやしない" }] },
                        { text: [{ lyrics: "最悪な結末へ続いてても" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "どうか　叶うならば" }] },
                        { text: [{ lyrics: "僕のことを　許してくれ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "さあ" }] },
                        { text: [{ lyrics: "間違えちゃってもいいから" }] },
                        { text: [{ lyrics: "地獄に向かっちゃってもいいから" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "壊れちゃったって愛してよ" }] },
                        { text: [{ lyrics: "果てるまで　道連れなるまま" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "イケナイなんてわかってる" }] },
                        { text: [{ lyrics: "それでも染まってしまう　愛無常" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "踏み外しても　無謀でも" }] },
                        { text: [{ lyrics: "誰かを裏切る運命だとしても" }] },
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
                            text: [{ lyrics: "今さら時をどこに戻そうが" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "あらゆる別の解を探ろうが" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "君が現れるのならどうせ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "同じ終着点だ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "恋とは罪深き性" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "誰も彼も違わず　狂わせるのさ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "それがもし　他でもない" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "自分を裏切る運命だとしても" }]
                        },
                    ],
                },
            ],
        },
    ],
}
