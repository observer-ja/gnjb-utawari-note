/* THE EMPATHY */
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

export const song045: SongLyrics = {
    id: "song045",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "抜けるように透明だ 僕らの明日はどこだ？" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "この空の下" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "走り続けている" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "向かい風よりも早く どこまでも行こう" }]
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
                            text: [{ lyrics: "ほら大丈夫感情は聞こえる" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "この衝動は鼓動に変わる" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "響き合う心 My way to 混ざりだす境界線" }]
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
                            text: [{ lyrics: "So I'm a Believer" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（I'm a Believer）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "夢を見るんだ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（最後の最後笑い合いたい）" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（越えられない壁はどこにもないんじゃない？）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "So I'm a Believer" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（I'm a Believer）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "LaLaLaLa…" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "それは PRIDE" }]
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
                            text: [{ lyrics: "今どんな Stageの上" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "困難だとして" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "後悔ばっかして" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "闘っている" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "想像の上の上" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "君との未来へ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "次の一歩で" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "もっと遠くまで" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["S", "R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "どれだけ来たんだろう？ 何回でも立ち上がる" }] },
                        { text: [{ lyrics: "強い自分を希望" }] },
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
                            text: [{ lyrics: "もう大丈夫一緒に踊れる" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "この一瞬を力に変える" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "（追いかけ理想は常に無双）" }] },
                        { text: [{ lyrics: "（未来も信頼も掴んでいこう）" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "信じてるきっとね Will come true" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "限りない期待で" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "（越えられない壁はどこにもなかった！）" }] },
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
                            text: [{ lyrics: "強がった Day by day" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "けどStep by step" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "現在進行形" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "勇気を一つだけ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "超えてくよ昨日まで" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "正面突破で" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "失敗できんのって" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "いつも勇者だけ" }]
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
                            text: [{ lyrics: "So I'm a Believer" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "夢を見るんだ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "I'm a Believer LaLaLaLa…" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "それは PRIDE" }]
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
                            text: [{ lyrics: "今どんな Stageの上" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "困難だとして" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "後悔ばっかして" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "闘っている" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "想像の上の上" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "君との未来へ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "次の一歩で" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "もっと遠くまで" }]
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
                            text: [{ lyrics: "強がった Day by day" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "けどStep by step" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "現在進行形" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "勇気を一つだけ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "超えてくよ昨日まで" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "正面突破で" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "失敗できんのって" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "いつも勇者だけ" }]
                        },
                    ],
                },
            ],
        },
    ],
}
