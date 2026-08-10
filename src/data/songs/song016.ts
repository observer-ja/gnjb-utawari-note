/* ネバーエンドロール */
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

export const song016: SongLyrics = {
    id: "song016",
    note: "クラップをする箇所が多い。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "1/2が2つに戻って" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "元通りのルーティーン" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "(A→B→C→D→…)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "今朝の占いはさそり座が1位" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "信じられないんだけどな" }]
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
                            text: [{ lyrics: "何度だって" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "何度だって" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ループする" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "ループする" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "君じゃなきゃ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "君じゃなきゃ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "僕の側にいる人はさ" }]
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
                            text: [{ lyrics: "ワンカットラストシーン" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "街を抜け出すトレイン" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "近づいていくほど" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "光る" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "光る" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "光る" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "想いが止まらなくなって困った" }]
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
                        { text: [{ lyrics: "「じゃあまたね」と" }] },
                        { text: [{ lyrics: "同じ言葉いつも通りエンドロール" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "さみしそうな顔しながら言うのも" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "わかってる" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "(Stop Movie)" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "巻き戻してももう遅い" }] },
                        { text: [{ lyrics: "2人だった" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "それでもねえ" }] },
                        { text: [{ lyrics: "すきだよ" }] },
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
                            text: [{ lyrics: "1人分のスペースが増えて" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "広くはなったけど" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(LDK)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "あらゆる気持ちが1/4" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ふと気付いてしまうんだよな" }]
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
                            text: [{ lyrics: "味気ないな" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "味気ないな" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "笑っちゃうくらい平坦" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "君とならば" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "君とならば" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "すべて映画のようだった" }]
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
                            text: [{ lyrics: "モノクロームも素敵" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "天才的微笑み" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "遠く離れるほど" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "深く" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "深く" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "深く" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "心を捉えてしまって参った" }]
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
                        { text: [{ lyrics: "「じゃあまたね」と" }] },
                        { text: [{ lyrics: "ぽつり　涙　流れながらエンドロール" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "楽しいだけじゃ幕は切れるって" }]
                        },
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "わかってる" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "(Stop Movie)" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "いつまでも続く「つづき」を" }] },
                        { text: [{ lyrics: "知りたかった" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "やっぱりねえ" }]
                        },
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "すきだよ" }]
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
                            text: [{ lyrics: "お蔵入り未来図は" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "どれだけ描いても" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "形にならない" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "君はいないから" }]
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
                        { text: [{ lyrics: "「はじめまして」" }] },
                        { text: [{ lyrics: "物語の1ページ目　読み返す" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "どんな出会い方しても" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "最後は決まってる" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "(Stop Movie)" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "だけど恋に落ちてしまう" }] },
                        { text: [{ lyrics: "運命なんだ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "悲しい脚本だね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "「じゃあまたね」と" }] },
                        { text: [{ lyrics: "同じ言葉いつも通りエンドロール" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "さみしそうな顔しながら言うのも" }]
                        },
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "わかってる" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "(Stop Movie)" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "巻き戻してももう遅い" }] },
                        { text: [{ lyrics: "2人だった" }] },
                    ],
                },
                {
                    members: ["Y", "S"],
                    chunks: [
                        { text: [{ lyrics: "それでもねえ" }] },
                        { text: [{ lyrics: "すきだよ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "その2文字　言ってよ" }] },
                    ],
                },
            ],
        },
    ],
}
