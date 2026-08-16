/* ビネットネット */
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

export const song076: SongLyrics = {
    id: "song076",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "低画質な絶望　密かに集めてる" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（神経が萌えてゆく…）" }]
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
                            members: ["P"],
                            text: [{ lyrics: "その♡(ハート)のマーク　笑っているね" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（わたしだけ！？）" }]
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
                            members: ["G"],
                            text: [{ lyrics: "またマイブランド迷走" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "映えてないとどれも無駄と" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（一切もう、改造を！）" }]
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
                        { text: [{ lyrics: "バイブラント過剰" }] },
                        { text: [{ lyrics: "演じるのは夢のつづき" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "（それも）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "借り物" }]
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
                        { text: [{ lyrics: "完成したの、シンパシー" }] },
                        { text: [{ lyrics: "そこに触れる、指先…///" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "まるで、" }] },
                        { text: [{ lyrics: "ダンスだったから" }] },
                        { text: [{ lyrics: "きみに焦がれてく" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ビネット、ビネット！" }] },
                        { text: [{ lyrics: "よそみ　で　き　な　い" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "絡まった「エ」と「セ」と「ラ」" }] },
                        { text: [{ lyrics: "骨になるまで抱いて！" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "すべて　すべて" }] },
                        { text: [{ lyrics: "いいねって言って" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "バグっちゃっていても…" }] },
                        { text: [{ lyrics: "会いに来て？" }] },
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
                            text: [{ lyrics: "無機質なアドリブで触れる春" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（ニンゲンのフリして）" }]
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
                            members: ["P"],
                            text: [{ lyrics: "そのハートのマーク　どこへいくの？" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（次で降ろして）" }]
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
                            text: [{ lyrics: "また通り過ぎて　喝采" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "酸化してゆくかなしみたち" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（見ちまった！永遠を）" }]
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
                        { text: [{ lyrics: "ハンドメイド幻想" }] },
                        { text: [{ lyrics: "「はじめまして」" }] },
                        { text: [{ lyrics: "やり直して" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "（ヲチて）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "言えるかな" }]
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
                            text: [{ lyrics: "今更かみさまとか言われても視えない。" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今ならきっと、素敵な嘘もつけるから、" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "“Color” になった呪いをかけて。" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "その声で。" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "逝って" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "まるでダンスだったから、から、" }] },
                        { text: [{ lyrics: "君に捕らわれて。" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ビネット、ビネット！" }] },
                        { text: [{ lyrics: "息も出来ない！" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "絡まった「エ」と「セ」と「ラ」" }] },
                        { text: [{ lyrics: "骨になるまで抱いて？" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "すべて　すべて" }] },
                        { text: [{ lyrics: "。o○(いいね、って、言って…)" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "悪夢なら" }] },
                        { text: [{ lyrics: "もう" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "醒めて、" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "口癖だった『破滅』をどうか反故にして！" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ビネット、ビネット！" }] },
                        { text: [{ lyrics: "それも、いいネ…！" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "視えなくても、" }] },
                        { text: [{ lyrics: "ア・イ・シ・テ・ル！" }] },
                    ],
                },
            ],
        },
    ],
}
