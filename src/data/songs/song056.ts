/* 『誰も知らない歌』 */
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

export const song056: SongLyrics = {
    id: "song056",
    note: "コールの詳細は公式YouTubeのコール動画を参照。",

    lyrics_blocks: [
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "僕らは　歩いていた" }] },
                        { text: [{ lyrics: "砂嵐の　惑星を" }] },
                        { text: [{ lyrics: "冷えていく　体温を　抱きしめていた" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "愛とか　恋なんて" }] },
                        { text: [{ lyrics: "古ぼけた　惑星で" }] },
                        { text: [{ lyrics: "1000年前の歌を　口ずさんでいた" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "誰かが　遺していった" }] },
                        { text: [{ lyrics: "片想いの　残骸を" }] },
                        { text: [{ lyrics: "最後の愛の歌を　歌いながら" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "僕たちは　どっかで気づいたんだ" }] },
                        { text: [{ lyrics: "この歌詞も　メロディも" }] },
                        { text: [{ lyrics: "いつかの後悔の　ワンシーンってこと" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "巡り巡る　遠い過去で嘆いている" }] },
                        { text: [{ lyrics: "あなたの手を　握りたかった" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "もう今日は　いっそ" }] },
                        { text: [{ lyrics: "未来に　逆らって" }] },
                        { text: [{ lyrics: "昨日のあなたへ　会いに行こう" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "距離も　時間だって　超えて" }] },
                        { text: [{ lyrics: "今、船を出して" }] },
                        { text: [{ lyrics: "探しに行こう　君を" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "気の迷いを　コンパスに変えて" }] },
                        { text: [{ lyrics: "君の声を探す　探す" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "震えだって　動力に変えて" }] },
                        { text: [{ lyrics: "君の方へ　進む　進む" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "凍えだした　心臓が焼けて" }] },
                        { text: [{ lyrics: "この想いは　燃える　燃えていく" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "風の奥　光ったのは" }] },
                        { text: [{ lyrics: "きっと　見間違いじゃないはずさ" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ひとりぼっちの　今日が" }] },
                        { text: [{ lyrics: "数千年　数万年　どれだけ続いても" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "返事がしたいんだ" }] },
                        { text: [{ lyrics: "時間も　理由も　超えて" }] },
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
                            text: [{ lyrics: "Lalala…" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Lalala…" , call: true }]
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
                        { text: [{ lyrics: "もう今日は　いっそ" }] },
                        { text: [{ lyrics: "未来に　逆らって" }] },
                        { text: [{ lyrics: "昨日のあなたと　手を結ぶよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "W", "B"],
                            text: [{ lyrics: "距離も　時間だって　超えて" }]
                        },
                        {
                            members: ["Y", "W", "B"],
                            text: [{ lyrics: "全部　巻き戻して" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "繋がって　始まって" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "今、恋に変わる" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "この歌は　きっと" }] },
                        { text: [{ lyrics: "霞んだりしないで" }] },
                        { text: [{ lyrics: "1000年後の未来も　響いているよ" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "愛とか　恋が　消えた" }] },
                        { text: [{ lyrics: "世界に　逆らって" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "『誰も知らない歌』を　歌おう" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Lalala…" , call: true }] },
                    ],
                },
            ],
        },
    ],
}
