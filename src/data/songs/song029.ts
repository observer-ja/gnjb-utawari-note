/* キミヲナクシテ */
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

export const song029: SongLyrics = {
    id: "song029",
    note: "",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "後悔を写した顔が" }] },
                        { text: [{ lyrics: "意味深に辺りの 景色を曇らせ" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "当然のセリフを吐いて" }] },
                        { text: [{ lyrics: "背を向たままこぼれる" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "君をみていた" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "乾いて枯れた瞳が" }] },
                        { text: [{ lyrics: "嘲笑うかのように" }] },
                        { text: [{ lyrics: "僕に答える" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "血色の悪い日常に" }] },
                        { text: [{ lyrics: "香る コーヒーの 苦さも" }] },
                        { text: [{ lyrics: "嫌味に思えた" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "いつまで 探してるの？" }] },
                        { text: [{ lyrics: "あの 言葉 変わりきった表情の理由(わけ)を" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "間違えた記憶から" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "そうやって世界から朦朧と消えていく様に" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "目を閉じる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ねぇ" }] },
                        { text: [{ lyrics: "明かりが消えて泣いた" }] },
                        { text: [{ lyrics: "もう君は明日に来ないから" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "正解をねじまげた" }] },
                        { text: [{ lyrics: "不正解の未来さえ信じて" }] },
                        { text: [{ lyrics: "ねぇ もう一度 もう一度" }] },
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
                            text: [{ lyrics: "透明なあなたの声が" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "一瞬の戸惑いをもって" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "少しづつ黒く濁っていく" }]
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
                        { text: [{ lyrics: "至って平然の様で" }] },
                        { text: [{ lyrics: "何度もそれに縋っては悔いた" }] },
                        { text: [{ lyrics: "本当は分かっていたんだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "壊れたあとに何を願っても叶やしないさ" }] },
                        { text: [{ lyrics: "独り俯いて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ねぇ" }] },
                        { text: [{ lyrics: "始まりの世界とその未来を" }] },
                        { text: [{ lyrics: "いったい僕はどこで落としただろう" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "目が覚めた時にはもどっていてよ" }] },
                        { text: [{ lyrics: "昨日のストーリーへと" }] },
                        { text: [{ lyrics: "ねぇ もう一度 もう一度" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "終わらない命に永遠の愛を" }] },
                        { text: [{ lyrics: "かけた生活は さぞかし美味しいだろ" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "そうやって世界を恨んだ思いに溺れていく" }] },
                        { text: [{ lyrics: "日々に乾杯を" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ねぇ" }] },
                        { text: [{ lyrics: "愛に似たあの気持ちは" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "今日も変わらずにここにある" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "いつかは朽ちていく" }] },
                        { text: [{ lyrics: "僕の身体を無視して笑っている" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "崩れ落ちた この思いも 未来も" }] },
                        { text: [{ lyrics: "本当はどうでも良かった" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君のあの言葉の意味がもう分かるから" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "だからさ 今度こそは" }] },
                        { text: [{ lyrics: "本当の愛を教えて" }] },
                        { text: [{ lyrics: "また 隣にいて" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "そう 何回も 夢の中" }] },
                        { text: [{ lyrics: "君を待った" }] },
                    ],
                },
            ],
        },
    ],
}
