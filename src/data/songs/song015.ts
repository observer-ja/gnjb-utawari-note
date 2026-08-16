/* 夢に唄えば */
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

export const song015: SongLyrics = {
    id: "song015",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "笑って攫って" }] },
                        { text: [{ lyrics: "とどまることなんて知らないで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "進むAvenue" }]
                        },
                        {
                            members: ["W", "G"],
                            text: [{ lyrics: "(夢も全部)" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Oh Sky high" }] },
                        { text: [{ lyrics: "その向こうへ伸びる摩天楼" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "OK？　電飾の看板" }] },
                        { text: [{ lyrics: "流行りも廃りも“自由”の判断" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "やけにPeaceなLove Game" }]
                        },
                        {
                            members: ["Y", "W"],
                            text: [{ lyrics: "隣じゃ祝う Birthday" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "B"],
                            text: [{ lyrics: "街もウキウキして" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "それぞれに" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼 Clap Pa Pa Pa　探そう" }] },
                        { text: [{ lyrics: "Pa-Pa Pa Pa　何を？" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "全てが集まるのさ" }] },
                        { text: [{ lyrics: "このステージだから" }] },
                    ],
                },
                {
                    members: ["Y", "B", "P"],
                    chunks: [
                        { text: [{ lyrics: "鞄も机もほら" }] },
                        { text: [{ lyrics: "Oh　ここじゃないって" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "言ってるよ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "一緒だね" }]
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
                        { text: [{ lyrics: "ねえ　五番街　抜けて緑に抱かれ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ねえ　歩こう少し" }] },
                        { text: [{ lyrics: "Strawberry Fields Forever" }] },
                        { text: [{ lyrics: "もうWestside" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "夢を運ぶ渋滞" }]
                        },
                        {
                            members: ["Y", "B"],
                            text: [{ lyrics: "そこらじゅうで Klaxon" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B", "G"],
                            text: [{ lyrics: "街も暮れかけて" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "僕らは Free" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼 Clap Pa Pa Pa　愛そう" }] },
                        { text: [{ lyrics: "Pa-Pa Pa Pa　何を？" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "動き出せば止まらないよ" }] },
                        { text: [{ lyrics: "運命なら" }] },
                    ],
                },
                {
                    members: ["W", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "時計も月も靴も" }] },
                        { text: [{ lyrics: "Oh　ここじゃないって" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "言ってるよ" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "そうかもね" }]
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
                        { text: [{ lyrics: "ばったり願い事の交差点" }] },
                        { text: [{ lyrics: "シナリオ通りには行かない" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "なんにもないけど" }] },
                        { text: [{ lyrics: "なんとかしてみる" }] },
                        { text: [{ lyrics: "ToughなMindで" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "今夜も抜け出して" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "R"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼 Clap Pa Pa Pa　探そう" }] },
                        { text: [{ lyrics: "Pa-Pa Pa Pa　何を？" }] },
                    ],
                },
                {
                    members: ["Y", "R"],
                    chunks: [
                        { text: [{ lyrics: "全てが集まるのさ" }] },
                        { text: [{ lyrics: "このステージだから" }] },
                    ],
                },
                {
                    members: ["W", "B"],
                    chunks: [
                        { text: [{ lyrics: "鞄も机もほら" }] },
                        { text: [{ lyrics: "Oh　ここじゃないって" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "言ってるよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "B", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼 Clap Pa Pa Pa　愛そう" }] },
                        { text: [{ lyrics: "Pa-Pa Pa Pa　何を？" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "動き出せば止まらないよ" }] },
                        { text: [{ lyrics: "運命なら" }] },
                    ],
                },
                {
                    members: ["Y", "W", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "時計も月も靴も" }] },
                        { text: [{ lyrics: "Oh　ここじゃないって" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "言ってるよ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "そうかもね" }]
                        },
                    ],
                },
            ],
        },
    ],
}
