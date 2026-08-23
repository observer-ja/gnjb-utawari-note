/* in the Fate */
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

export const song071: SongLyrics = {
    id: "song071",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "Yeah, are you ready?" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "We are GNJB" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "brrrra" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "Stop it?" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "Let's make it try" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(try try try)" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "I want it ここから始まる winner story" }] },
                        { text: [{ lyrics: "止まらない妄想が絵になる" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "噂の的 毎度 確信に変わっていく diamond" }] },
                        { text: [{ lyrics: "徐々にあげる limiter" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Focus on me now" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "Every day night" }] },
                        { text: [{ lyrics: "居場所を求めて這う世界" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Listening time" }] },
                        { text: [{ lyrics: "夢から醒めては give it a try" }] },
                        { text: [{ lyrics: "何度も超す限界" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "鼓動は止まらない Speed it up ×2" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "夢を見させて" }]
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
                            text: [{ lyrics: "閉ざした世界に隠した paradox" }]
                        },
                        {
                            members: ["S", "G"],
                            text: [{ lyrics: "(If you were to show up)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "間違いも全て destiny" }]
                        },
                        {
                            members: ["S", "G"],
                            text: [{ lyrics: "(今始まる story)" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "それぞれの人生じゃない?" }] },
                        { text: [{ lyrics: "従うだけ安全安牌?" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "抗っても単純明快" }] },
                        { text: [{ lyrics: "今ここに 偶然じゃない" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "どこからでも start 憧れのまま" }]
                        },
                        {
                            members: ["Y", "W", "P"],
                            text: [{ lyrics: "終われないこの future" }]
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
                            text: [{ lyrics: "今 運命さえも覆す" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "夢を見たい no a lie? 醒めるまで" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "ただ 運命さえも疑って" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "過去を捨て願う paranoia" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "(Let's Go)" }]
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
                        { text: [{ lyrics: "最初で最後の最盛期なら" }] },
                        { text: [{ lyrics: "最低で最高な半生だろ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "痛みすらも糧にかえ 抗い続ける" }] },
                        { text: [{ lyrics: "in the Fate" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "開かずの扉を knock knock" }] },
                        { text: [{ lyrics: "さぁ未来は全て君次第" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Oh baby まぁ主役は任せて I'm ready" }] },
                        { text: [{ lyrics: "今 最高速度ぶっとばばっして" }] },
                        { text: [{ lyrics: "I get high 進め" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "気づかぬ間に 言葉と party" }] },
                        { text: [{ lyrics: "見つけたhappy lucky yeah" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "火をつけ warning 右と左" }] },
                        { text: [{ lyrics: "Verseで rock it×2" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "旅の途中で落とした one piece" }] },
                        { text: [{ lyrics: "果てしない暗闇へ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Every way bright" }] },
                        { text: [{ lyrics: "光を求めて舞う世界" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Glittering sight" }] },
                        { text: [{ lyrics: "闇から抜けては see the light" }] },
                        { text: [{ lyrics: "全てを賭す展開" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "未だ止めれない heat up ×2" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "命燃やして" }]
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
                            text: [{ lyrics: "開けた世界を描いたmetaverse" }]
                        },
                        {
                            members: ["S", "R"],
                            text: [{ lyrics: "(If you stay where you belong)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "悲しみも全て history" }]
                        },
                        {
                            members: ["S", "R"],
                            text: [{ lyrics: "(また新たな journey)" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "これからは選択次第" }] },
                        { text: [{ lyrics: "まだ見ぬ明日へsunrise" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "間違ってもなんならall right" }] },
                        { text: [{ lyrics: "今までの後悔 bye bye" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "走り出したstar 憧れを今" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "超えてゆくadventure" }]
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
                            text: [{ lyrics: "We are想定外の革命児" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "まだ知らないとこへ果てるまで" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ずっと醒めない夢の中で" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "破壊と再生 何回も繰り返して" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "迷いを断ち切るなら今" }] },
                        { text: [{ lyrics: "願うだけじゃ変わらない" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "奇跡は信じたものだけ" }] },
                        { text: [{ lyrics: "新たな明日へ" }] },
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
                            text: [{ lyrics: "今 運命さえも覆す" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "夢を見たい no a lie? 醒めるまで" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "ただ 運命さえも疑って" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "過去も全て愛す paranoia" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "(Let's Go)" }]
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
                        { text: [{ lyrics: "最初で最後の最盛期なら" }] },
                        { text: [{ lyrics: "最低で最高な半生だろ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "寝ても覚めない夢を見て" }] },
                        { text: [{ lyrics: "覚悟はできてる" }] },
                        { text: [{ lyrics: "in the Fate" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "in the Fate" }] },
                    ],
                },
            ],
        },
    ],
}
