/* スノウダンス */
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

export const song013: SongLyrics = {
    id: "song013",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "吐き出した溜息は" }] },
                        { text: [{ lyrics: "白く頬を掠めた" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "君と見た景色に" }] },
                        { text: [{ lyrics: "淡い雪が積もる" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "間違ってないかどうかを" }] },
                        { text: [{ lyrics: "探り合う毎日" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "疲れ果てた僕らは" }] },
                        { text: [{ lyrics: "互いに背を向けた" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "忘れたい言葉は" }] },
                        { text: [{ lyrics: "忘れられないところに" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "染み付いたまま離れない" }] },
                        { text: [{ lyrics: "季節は巡り来るのに" }] },
                    ],
                },
            ],
        },
        {
            members: ["W", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "巻き戻せない時間と" }] },
                        { text: [{ lyrics: "戻らないあの日々に" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "手を伸ばす僕の瞳に" }] },
                        { text: [{ lyrics: "映り込む白い世界" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "吐き出したい感情と" }] },
                        { text: [{ lyrics: "寄り添ったまま歩く" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "疲れてないフリして" }] },
                        { text: [{ lyrics: "無理に笑って見せた" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "B"],
                    chunks: [
                        { text: [{ lyrics: "浅い眠りの中" }] },
                        { text: [{ lyrics: "思い出した君の言葉は" }] },
                    ],
                },
                {
                    members: ["Y", "B"],
                    chunks: [
                        { text: [{ lyrics: "ごめんねとありがとうの" }] },
                        { text: [{ lyrics: "間のさよなら" }] },
                    ],
                },
                {
                    members: ["W", "G"],
                    chunks: [
                        { text: [{ lyrics: "夜に灯る光" }] },
                        { text: [{ lyrics: "煌びやかに街を彩る" }] },
                        { text: [{ lyrics: "君は今何を見つめているの" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "吐き出した溜息は" }] },
                        { text: [{ lyrics: "白く頬を掠めた" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "君のいない景色に" }] },
                        { text: [{ lyrics: "淡い雪が積もる" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "忘れたい言葉は" }] },
                        { text: [{ lyrics: "忘れられないところに" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "染み付いたまま離れない" }] },
                        { text: [{ lyrics: "季節は巡り来るのに" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "巻き戻せない時間と" }] },
                        { text: [{ lyrics: "戻らないあの日々に" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "手を伸ばす僕の瞳に" }] },
                        { text: [{ lyrics: "映り込む白い世界" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "あの日から動けなくて" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "気が付けば君を想う" }] },
                        { text: [{ lyrics: "僕を一人置き去りに" }] },
                        { text: [{ lyrics: "季節は廻る何度でも" }] },
                    ],
                },
            ],
        },
    ],
}
