/* 柘榴 */
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

export const song014: SongLyrics = {
    id: "song014",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "想像の果実落下してゲルニカ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "所詮半径2メートルなんです" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "僕はほら" }]
                        },
                        {
                            members: ["B", "G"],
                            text: [{ lyrics: "カラカラ 嗚呼" }]
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
                            text: [{ lyrics: "幸福を願うあなたに" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "脅迫が理解るか？" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "隠し持った言葉、" }] },
                        { text: [{ lyrics: "それでどうして嘘だと言えるの" }] },
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
                            text: [{ lyrics: "待てど暮せど光は見えず" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "待てど暮せど光は見えず" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Tip Tip Tap" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "Tip Tip Tap Tip Tap" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "握り潰した手のひらの感触" }] },
                        { text: [{ lyrics: "揺蕩う悲しみも" }] },
                    ],
                },
                {
                    members: ["B", "G"],
                    chunks: [
                        { text: [{ lyrics: "一十百10000000の種子が" }] },
                        { text: [{ lyrics: "堕落したいお年頃" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "苟且のオンライン許してよ" }] },
                        { text: [{ lyrics: "あなたの手もサヨナラ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "別れ際こそ ほんとに美しい人" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "今 一度 お見せします" }]
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
                        { text: [{ lyrics: "証明も、共存も、衝動も" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "批判 炎上期待してるんですか" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "らララララ 嗚呼" }]
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
                            text: [{ lyrics: "明治通り通りあなたに" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "伝えたい気持ちなんて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "違う現在地立って" }]
                        },
                        {
                            members: ["B", "G"],
                            text: [{ lyrics: "三重苦の言い訳マシだって" }]
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
                            text: [{ lyrics: "縺れてダンスして" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "絡まるメリーゴーラウンド" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "Tip Tip Tap" }]
                        },
                        {
                            members: ["W", "S"],
                            text: [{ lyrics: "Tip Tip Tap Tip Tap" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "粉々になって手のひらのレプリカ" }] },
                        { text: [{ lyrics: "深入りは禁物" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "一十百10000000の種子に" }] },
                        { text: [{ lyrics: "群れをなすお年頃" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ディスプレイの中 信じてた" }] },
                        { text: [{ lyrics: "小さな温度 サヨナラ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "別れ際こそ ほんとに美しい人" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "今 一度 お見せします" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "握り潰した手のひらの感触" }] },
                        { text: [{ lyrics: "揺蕩う悲しみも" }] },
                    ],
                },
                {
                    members: ["B", "G"],
                    chunks: [
                        { text: [{ lyrics: "一十百10000000の種子が" }] },
                        { text: [{ lyrics: "堕落したいお年頃" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "苟且のオンライン許してよ" }] },
                        { text: [{ lyrics: "あなたの手もサヨナラ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "別れ際こそ ほんとに美しい人" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "今 一度 お見せします" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "今 一度 お見せします" }]
                        },
                    ],
                },
            ],
        },
    ],
}
