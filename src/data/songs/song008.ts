/* 時速3km */
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

export const song008: SongLyrics = {
    id: "song008",

    lyrics_blocks: [
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ありきたりな言葉なんていらないから" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ただこうやって見つめ合ってようよ" }] },
                        { text: [{ lyrics: "2人で" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "歩き慣れたこの街も" }] },
                        { text: [{ lyrics: "コンビニが増えたり駐車場になったり" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "また思い出が遠くなって" }] },
                        { text: [{ lyrics: "まあしょうがないかって僕ら笑った" }] },
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
                            text: [{ lyrics: "始まるから終わりがあって" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "だからより一層　愛しくって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "口ずさんだメロディー忘れようもない" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Wo～)" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "時間よ止まれってほんとに思ってるんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ありきたりな言葉なんていらないから" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ただこうやって見つめ合ってようよ" }] },
                        { text: [{ lyrics: "今だけ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "照れ隠しでにやけてしまっても" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼　それもまたいっか" }] },
                        { text: [{ lyrics: "君となら" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "見慣れて聞き慣れてくんだ" }] },
                        { text: [{ lyrics: "積み重ねるどれも" }] },
                        { text: [{ lyrics: "味気なくなっても" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "鮮明に覚えてるでしょう" }] },
                        { text: [{ lyrics: "あの頃だから響いた音楽" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "出会うたび　さよならが増え" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "だけど喜びは大きくなって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "口ずさむメロディーが折り重なるよ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Wo～)" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "どこまでも途切れないこと願ってるんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ねえ　うまくいかなくてもね" }] },
                        { text: [{ lyrics: "否定しなくていい" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "生きてきたからここにいる" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ねえ　原因が自分だって" }] },
                        { text: [{ lyrics: "捉え方次第で" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "明日には変わりゆくかもしれない" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Wo～" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "無情だね" }] },
                        { text: [{ lyrics: "相変わらずこの世界は" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "戻れないってとうに知ってる" }] },
                        { text: [{ lyrics: "心臓は刻んでく" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "でも時間よ止まれって思ってるんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ありきたりな言葉なんていらないから" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ただこうやって見つめ合ってようよ" }] },
                        { text: [{ lyrics: "今だけ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "照れ隠しでにやけてしまっても" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼　それもまたいっか" }] },
                        { text: [{ lyrics: "君となら" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ありきたりな言葉なんていらないから" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ただこうやって見つめ合ってようよ" }] },
                        { text: [{ lyrics: "今だけ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "照れ隠しでにやけてしまっても" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼　それもまたいっか" }] },
                        { text: [{ lyrics: "君となら" }] },
                    ],
                },
            ],
        },
    ],
}
