export interface LyricText {
    lyrics: string;
    call?: boolean;
    members?: string[];
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

export const bs004: SongLyrics = {
    id: "bs004",

    lyrics_blocks: [
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Yeah, why" }] },
                        { text: [{ lyrics: "Now is Show Time" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Hey, hey, you ready?" }] },
                        { text: [{ lyrics: "Come on" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Show Time　日が昇るまで" }] },
                        { text: [{ lyrics: "Turn Up　燃え尽きるまで" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "太陽　微笑む頃に　恋は咲き誇る" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "「今夜ここで会いましょう」" }] },
                        { text: [{ lyrics: "Let's Get　気の向くままに" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Frequency meter　振り切るほどの夢見せて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "We don't know where we're going" }] },
                        { text: [{ lyrics: "Nobody knows the future, but" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Just wanna be happy," }] },
                        { text: [{ lyrics: "Tonight is the night yeah" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "キミと一緒にずっとずっと" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "このままでいさせて" }]
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
                            text: [{ lyrics: "キミに　会いたい、気持ち高ぶる" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "夢だって" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Yeah Yeah" }]
                        }
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "共にずっと進み続けた日々を" }] },
                        { text: [{ lyrics: "忘れないで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "キミに　曖昧な言葉かけて" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "おどけた" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Yeah Yeah" }]
                        }
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "共にずっと進み続けていこう" }] },
                        { text: [{ lyrics: "あの未来へ！　「一緒にいよう」" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Show Time！！" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Hey, you got me baby" }] },
                        { text: [{ lyrics: "I'm crazy 'bout you badly" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Show Time！！" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Let me make your day" }] },
                        { text: [{ lyrics: "and make the best day" }] },
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
                            text: [{ lyrics: "One, Two, Step do a dance" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "Our BPM" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "合わせて" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "We gon' be alright," }] },
                        { text: [{ lyrics: "Let's keep on moving all night" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "繋いだ手離さないで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "We don't know what to do" }] },
                        { text: [{ lyrics: "YOLO, We gotta have fun" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Let's make the most of it," }] },
                        { text: [{ lyrics: "Tonight is the night yeah" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "キミと一緒にずっとずっと" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "このままでいさせて" }]
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
                            text: [{ lyrics: "キミに" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "伝えたい　溢れる心" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "Accept my love" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Yeah Yeah" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "どこにいたって　同じ場所見続けて" }] },
                        { text: [{ lyrics: "止まらないで　一緒に行こう" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Beat on" }] },
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
                            text: [{ lyrics: "キミに　One time　全て捧げる" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "夢まで" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Yeah Yeah" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Follow me," }] },
                        { text: [{ lyrics: "Specialな今日という一日を忘れないで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "キミに" }]
                        },
                        {
                            members: ["W", "B", "G"],
                            text: [{ lyrics: "曖昧な言葉かけて" }]
                        },
                        {
                            members: ["W", "B", "G"],
                            text: [{ lyrics: "おどけた" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Yeah Yeah" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "B", "R", "G"],
                            text: [{ lyrics: "共にずっと進み続けていこう" }]
                        },
                        {
                            members: ["W", "B", "R", "G"],
                            text: [{ lyrics: "あの未来へ！" }]
                        },
                        {
                            members: ["W", "B", "G"],
                            text: [{ lyrics: "「一緒にいよう」" }]
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
                        { text: [{ lyrics: "Show Time！！" }] },
                        { text: [{ lyrics: "Show Time！！" }] },
                    ],
                },
            ],
        },
    ],
}
