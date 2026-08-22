/* フィナーレ */
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

export const song068: SongLyrics = {
    id: "song068",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Let's turn the page 互いに 思い返すと" }] },
                        { text: [{ lyrics: "ちょっと期待値に対し現実は酷(むご)い" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "もう整理 綺麗にあと書きを残すなら" }] },
                        { text: [{ lyrics: "今日が唯一のChance" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "そんな風にして 格好良いふりして" }] },
                        { text: [{ lyrics: "今更キミと Hand in hand Oh" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "温もりで 何かが変わるはずもない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "冷めた色の瞳 嘆き奏でるSymphony" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "第四楽章のフィナーレは" }] },
                        { text: [{ lyrics: "転がるようなスピードで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "残さず全て" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "愛し尽くして" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "最後のChewing gum 味が無くなったって" }] },
                        { text: [{ lyrics: "香ったLove 消えないままなんて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "慰めならいいよ Can you swear？" }] },
                        { text: [{ lyrics: "All I know is I'm into you" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "（目覚めても 夢に居る様）" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Oh Tricky Tricky love Tricky love" }] },
                        { text: [{ lyrics: "戯(ざ)れるほど" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Tricky Tricky love" }] },
                        { text: [{ lyrics: "歪(ゆが)んでく理想" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Tricky Tricky love Tricky love" }] },
                        { text: [{ lyrics: "Feel like breaking more" }] },
                        { text: [{ lyrics: "Though I'm into you･･･" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Fake it 踊り明かした日も" }] },
                        { text: [{ lyrics: "今じゃ とうに昔の褪せた過去 Oh" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "第六感で 通じ合えた二人はいない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "揺れる髪の色で 辿る儚いHistory" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "第四楽章のフィナーレだ" }] },
                        { text: [{ lyrics: "盛大なフォルティシモで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "喝采を求めて" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "愛を鳴らして" }]
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
                        { text: [{ lyrics: "甘美なChewing gum 胸にへばりついて" }] },
                        { text: [{ lyrics: "剥がせない 何をどうやったって" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "偽りでもいいよ Hate on me" }] },
                        { text: [{ lyrics: "But I know you are still so sweet" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ケミカルなFlavor 飲み込んでしまえば" }] },
                        { text: [{ lyrics: "甘い記憶だけ残る" }] },
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
                            text: [{ lyrics: "もしもその手を掴んで ずっと離さないで" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "キミを攫(さら)えたとしても･･･" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "最後のChewing gum 味が無くなったって" }] },
                        { text: [{ lyrics: "香ったLove 消えないままなんて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "慰めならいいよ Can you swear？" }] },
                        { text: [{ lyrics: "All I know is I'm into you" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "（目覚めても 夢に居る様）" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Oh Tricky Tricky love Tricky love" }] },
                        { text: [{ lyrics: "戯(ざ)れるほど" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Tricky Tricky love" }] },
                        { text: [{ lyrics: "歪(ゆが)んでく理想" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Tricky Tricky love Tricky love" }] },
                        { text: [{ lyrics: "Feel like breaking more" }] },
                        { text: [{ lyrics: "Though I'm into you･･･" }] },
                    ],
                },
            ],
        },
    ],
}
