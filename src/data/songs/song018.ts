/*.  以呂波 feat.fox capture plan */
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

export const song_template: SongLyrics = {
    id: "song_template",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "肝心要のハイリスク" }] },
                        { text: [{ lyrics: "安心の為のタイミング" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "掛け違ったボタンも" }] },
                        { text: [{ lyrics: "今ならアリじゃん的な" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "感じ方なんて「はいチーズ!」" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「はいチーズ!」" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "そん時こぼれた廃棄物" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "案外　千年前も変わらない" }] },
                        { text: [{ lyrics: "ヨシナシゴトだね" }] },
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
                            text: [{ lyrics: "色は匂えども散って" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(Just chilled out)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "諸行無常　分かってんだ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "(Just chilled out)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "君 Cry together　限られた時間さえ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "(Just chilled out)" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "忘れはしないけど" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "いずれ朽ち果てるこの身なら" }] },
                        { text: [{ lyrics: "見捨てるだけ好みだから" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "存在証明なんて要らない" }] },
                        { text: [{ lyrics: "風に吹かれ 繰り返すの" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "行くね 勘違いもハナハダ" }] },
                        { text: [{ lyrics: "時代超えちゃえば歴史かな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "でもね案ずるは君だけ" }] },
                        { text: [{ lyrics: "届け 届け この世界で" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "本能の保存料" }] },
                        { text: [{ lyrics: "情報の超流動" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "退屈に任せ 一日中考えてる" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "ワードパッドの羅列で" }] },
                        { text: [{ lyrics: "あたおかっぽい感じになってくるね" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "でも尊い君ならわかりみしかない" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "現状でオッケーです 滑稽でトゲトゲ" }] },
                        { text: [{ lyrics: "そんなもんさ いつだったって" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "今も昔も 係り結び" }] },
                        { text: [{ lyrics: "でも 突然消えるんじゃ悲しいよ" }] },
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
                            text: [{ lyrics: "思考回路 淀んで" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "(Just chilled out)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "のらりくらりになっちゃって" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(Just chilled out)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "意味ない?Clever 問いかけた光さえ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "(Just chilled out)" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "忘れはしないけど" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "行くぜ 朽ち果てるこの身から" }] },
                        { text: [{ lyrics: "ミステイクなんて狼煙だから" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "オオカミ少年だって未だに" }] },
                        { text: [{ lyrics: "風に吹かれ 繰り返すの" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "憎いね パンチラインの花が咲く" }] },
                        { text: [{ lyrics: "それは段違い 枯れ木に花" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "そして何度だって歌うよ" }] },
                        { text: [{ lyrics: "届け 届け この世界で" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "本能の保存料" }] },
                        { text: [{ lyrics: "情報の超流動" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "いずれ朽ち果てるこの身なら" }] },
                        { text: [{ lyrics: "見捨てるだけ好みだから" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "存在証明なんて要らない" }] },
                        { text: [{ lyrics: "風に吹かれ 繰り返すの" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "行くぜ 朽ち果てるこの身から" }] },
                        { text: [{ lyrics: "ミステイクなんて狼煙だから" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "オオカミ少年だって未だに" }] },
                        { text: [{ lyrics: "風に吹かれ 繰り返すの" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "憎いね パンチラインの花が咲く" }] },
                        { text: [{ lyrics: "それは段違い 枯れ木に花" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "でもね案ずるは君だけ" }] },
                        { text: [{ lyrics: "届け 届け この世界で" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "本能の保存料" }] },
                        { text: [{ lyrics: "情報の超流動" }] },
                    ],
                },
            ],
        },
    ],
}
