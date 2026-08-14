/* 545 */
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

export const song030: SongLyrics = {
    id: "song030",
    note: "三部作の内の一曲。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "またいつも大事なとこで" }] },
                        { text: [{ lyrics: "ミスしては絡まって" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "小さな期待 小さな痛み" }] },
                        { text: [{ lyrics: "繰り返したり(:||)" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "白い雲が好きだったんだ" }] },
                        { text: [{ lyrics: "風薫る鈴懸通り" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "遠回りした 毎日に逆らった" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "バスが停まる" }] },
                        { text: [{ lyrics: "夏の始まりには疾うに気づいてた" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "役に立たない記憶ばかり増えたけど" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "全部知らない もう知らない" }] },
                        { text: [{ lyrics: "確かめない 未来は" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "息をのむくらいなら" }] },
                        { text: [{ lyrics: "このままって このままって" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "歯牙にかけない 空理空論" }] },
                        { text: [{ lyrics: "振りかざしているんだまた" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "知らないんだ それも全部" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "赤線だらけの五線譜" }] },
                        { text: [{ lyrics: "淡い午後の白丁花" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "16小節の日常 諦めかけた一進一退" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "「もう一度、やり直せるなら」なんて" }] },
                        { text: [{ lyrics: "まあ、わかってるんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "正しさを飛び越えて" }] },
                        { text: [{ lyrics: "空走りで飛び込んで" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "昨日より冷たい 空気に触れたい" }] },
                        { text: [{ lyrics: "満たされてたい なんかそれも嫌だ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "遣る瀬無くて" }] },
                        { text: [{ lyrics: "でも甘くて" }] },
                        { text: [{ lyrics: "手を繋いで" }] },
                        { text: [{ lyrics: "夢の中へ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "花と消えて" }] },
                        { text: [{ lyrics: "遠い記憶へ" }] },
                        { text: [{ lyrics: "だけど痛くて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "またいつもどおりのとこで" }] },
                        { text: [{ lyrics: "ほんとうは待っていた" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "足りない言葉 そんな我儘" }] },
                        { text: [{ lyrics: "でも待っていた" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "日が落ちるみたいに" }] },
                        { text: [{ lyrics: "過ぎればいいのに" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "バスを降りる" }] },
                        { text: [{ lyrics: "帰り道はどうせ一人になって" }] },
                        { text: [{ lyrics: "役に立たない記憶ばかりだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "全部知らない もう知らない" }] },
                        { text: [{ lyrics: "垢抜けない青空" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "本当も嘘も答えも" }] },
                        { text: [{ lyrics: "風になって それを歌って" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "涙はまた色変えんだ" }] },
                        { text: [{ lyrics: "それはとても綺麗だ" }] },
                        { text: [{ lyrics: "あぁ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "それでいいんだ それも全部" }] },
                        { text: [{ lyrics: "あぁ また" }] },
                    ],
                },
            ],
        },
    ],
}
