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

export const song027: SongLyrics = {
    id: "song027",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "真夏の入道雲の向こう" }] },
                        { text: [{ lyrics: "アクリル絵の具のサチュレーション" }] },
                        { text: [{ lyrics: "青、その他" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "横切る急転直下の紫外線" }] },
                        { text: [{ lyrics: "僕らの希望と絶望と" }] },
                        { text: [{ lyrics: "言いかけの願い" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "思い出なんかじゃきっと終われない" }] },
                        { text: [{ lyrics: "僕らの言葉のシチュエーション" }] },
                        { text: [{ lyrics: "青、それとも" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "真冬の氷の海を渡って" }] },
                        { text: [{ lyrics: "春まで待てない渡り鳥" }] },
                        { text: [{ lyrics: "僕は一人" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "R"],
                    chunks: [
                        { text: [{ lyrics: "君は黙り込んだ あの夏を置いて" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "「さよなら。」も言えないくらい" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "早すぎた約束 そのまま" }]
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
                        { text: [{ lyrics: "飛べない事もずっと知らないまま" }] },
                        { text: [{ lyrics: "飛べるんだ" }] },
                        { text: [{ lyrics: "あの日の君がもういない" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "僕なりの設計図の飛行機じゃ届かない" }] },
                        { text: [{ lyrics: "飛べない鳥は 飛べない鳥だ" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "また隙間に影落ちてく 炭で描いた" }] },
                        { text: [{ lyrics: "またなぞって削るパンくず 繰り返した" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "夢より鮮明だったと思った" }] },
                        { text: [{ lyrics: "放課後差し込んだ西日は" }] },
                        { text: [{ lyrics: "青、その先" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "汚れたカーテンちょっとはためいて" }] },
                        { text: [{ lyrics: "油絵の具の匂いが舞う" }] },
                        { text: [{ lyrics: "君とふたり" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S", "R"],
                    chunks: [
                        { text: [{ lyrics: "キャンバスにはそっと 自由が飛び散った" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "決して留められない光" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "閉じ込めたい彩り 重ねて" }]
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
                        { text: [{ lyrics: "隣で言えないけどずっとそうだった" }] },
                        { text: [{ lyrics: "好きだった" }] },
                        { text: [{ lyrics: "あの頃 僕はもう違う" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "偽物の下書きは捨てたんだ 本当のこと" }] },
                        { text: [{ lyrics: "言えない嘘は 言えない嘘だ" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "今日で最後 そう今日で最後" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "飛べない事もずっと知らないまま" }] },
                        { text: [{ lyrics: "あの日の僕はもう" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "偽物の下書きは捨てたんだ 本当のこと" }] },
                        { text: [{ lyrics: "今日で最後なんだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "隣で言えないけどずっとそうだった" }] },
                        { text: [{ lyrics: "好きだった" }] },
                        { text: [{ lyrics: "あの日の僕はもういない" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "偽物の下書きは捨てたんだ 本当のこと" }] },
                        { text: [{ lyrics: "言えない嘘は 今日で最後なんだ" }] },
                    ],
                },
            ],
        },
    ],
}
