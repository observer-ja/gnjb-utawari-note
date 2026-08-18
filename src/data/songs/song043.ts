/* Foxy Grape */
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

export const song043: SongLyrics = {
    id: "song043",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "午後の日差しが焼き付ける怠惰な世界" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "いつものように人々は" }] },
                        { text: [{ lyrics: "はしゃいでて楽しそうだ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "相手にしてくんないから僕も逸らす目と目" }] },
                        { text: [{ lyrics: "この暑さを乗り越える為向かう壁今start" }] },
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
                            text: [{ lyrics: "だらけやしない" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "馬鹿にされてもいいよ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "こなす事やり僕が最後に笑うもんね" }]
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
                            text: [{ lyrics: "Foxy grape また毒されて赤色に" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今でも踊らされている" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "知らぬ間に焦り始めて" }] },
                        { text: [{ lyrics: "流されるような冒険嫌だね" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "今僕らの世界locked in" }] },
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
                            text: [{ lyrics: "別に誘われるとか" }]
                        },
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "思ってないし" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "今年はやることも" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "沢山あるし" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "手がとどかないって" }]
                        },
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "諦めてないし" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "酸っぱい葡萄に出てくる狐とは" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "違うから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "くらべんな" }]
                        },
                        {
                            members: ["Y", "S", "G", "P"],
                            text: [{ lyrics: "バカ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "今よそ見してたら変わらない" }]
                        },
                        {
                            members: ["Y", "S", "G", "P"],
                            text: [{ lyrics: "日々" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "でもそれでも疑心暗鬼" }] },
                        { text: [{ lyrics: "狭くなるperspective" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "やっぱあっちがよかった" }]
                        },
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "巻き戻してよtime" }]
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
                            text: [{ lyrics: "僕は強がりかな" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "孤独誤魔化してさ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "手に取った果実は実らず" }]
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
                            text: [{ lyrics: "Foxy grape また毒されて赤色に" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "今では踊らされている" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "気づかないふりをして蓋を閉じてた" }] },
                        { text: [{ lyrics: "置いてかれるのが怖くて" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "抗いながらfalling" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Foxy grape また毒されて赤色に" }] },
                        { text: [{ lyrics: "今でも踊らされている" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "知らぬ間に焦り始めて" }] },
                        { text: [{ lyrics: "流されたのは僕だったって" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "気づかないふりして" }] },
                        { text: [{ lyrics: "自分に言い聞かせたOK" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "そんな目で僕を見ないで" }] },
                    ],
                },
            ],
        },
    ],
}
