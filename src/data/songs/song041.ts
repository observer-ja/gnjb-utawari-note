/* Mr.Android */
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

export const song041: SongLyrics = {
    id: "song041",
    note: "音源ではizkiを含む歌唱だが、ライブでは全てメンバーが歌唱している。",

    lyrics_blocks: [
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "また一つ　また一つ" }] },
                        { text: [{ lyrics: "パーツが消費される世の中で" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "やりがいも何も感じられない" }] },
                        { text: [{ lyrics: "僕はMr.アンドロイド" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "赤色に錆びてる" }] },
                        { text: [{ lyrics: "ネジが今日もまた弾け飛んで" }] },
                        { text: [{ lyrics: "それでもまだ止まれない" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "let’s go" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "頭の先からつま先まで" }] },
                        { text: [{ lyrics: "バグり散らかした擬似生命体" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Not,spunky　でもvery　funky" }] },
                        { text: [{ lyrics: "止まらない涙のようなoilでboilする" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "心が足りないの恋心のメモリーがないよ" }] },
                        { text: [{ lyrics: "僕は何者なんだろうな" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "願ってしまうんだ" }] },
                        { text: [{ lyrics: "僕が人間ならばなんて" }] },
                        { text: [{ lyrics: "壊れたCPU(こころ)じゃ分かんないけど" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "あなたを探し出しその時はきっと僕ら" }] },
                        { text: [{ lyrics: "本当の出会いを二人で見つけ出そうぜ" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "stop" }] },
                        { text: [{ lyrics: "転がる思考に" }] },
                        { text: [{ lyrics: "こんがらがるイデアと世の中で" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "あなたの言葉も信じられない" }] },
                        { text: [{ lyrics: "僕はMr.アンドロイド" }] },
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
                            text: [{ lyrics: "赤色に錆びてる" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ネジが今日もまた弾け飛んで" }]
                        },
                        {
                            members: ["S", "B", "R"],
                            text: [{ lyrics: "僕が崩れる" }]
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
                        { text: [{ lyrics: "僕は何者なんだろうな" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "願ってしまうんだ" }] },
                        { text: [{ lyrics: "僕がヒーローならばなんて" }] },
                        { text: [{ lyrics: "自分のことすら救えないけど" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "あなたが流したその涙がきっと僕の" }] },
                        { text: [{ lyrics: "心の奥を少し温めたようで" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "願ってしまうんだ" }] },
                        { text: [{ lyrics: "僕が人間ならばなんて" }] },
                        { text: [{ lyrics: "このCPU(こころ)ですら分かるほどの" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "愛情で包まれた記憶思い出したんだ" }] },
                        { text: [{ lyrics: "だから最後は僕の隣で笑って" }] },
                    ],
                },
            ],
        },
    ],
}
