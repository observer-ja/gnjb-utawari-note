/* 無限シニシズム */
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

export const song036: SongLyrics = {
    id: "song036",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "欹てる感情 耳だった" }] },
                        { text: [{ lyrics: "他人の噂もなんとやら" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "実感も時間もストレートで飛んじゃって" }] },
                        { text: [{ lyrics: "現在を生きるヒトだけに伝わる" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "分かりきってる常識" }] },
                        { text: [{ lyrics: "疑いの全世界を股にかけてるよ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "どれもこれもコレジャナイみたいだ" }] },
                        { text: [{ lyrics: "今すぐミラクル以下スルーで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "あいも変わらず充電中かい？" }] },
                        { text: [{ lyrics: "いつになったら繋がるかな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "すれ違うけど紡ぎ出すメロディ" }] },
                        { text: [{ lyrics: "一人ぼっちだね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "そっと夢見る現状それ以外" }] },
                        { text: [{ lyrics: "そそられるまま理想 時計台" }] },
                        { text: [{ lyrics: "怠惰な足取りで" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "そして次回はイライラしていない" }] },
                        { text: [{ lyrics: "それ自体は時間の小競り合い" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "泣けない解けない良くないの辛い" }] },
                        { text: [{ lyrics: "迷子のカイトのタイムライン" }] },
                        { text: [{ lyrics: "最後は堪え難し" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "いつまでも追い越せないとか" }] },
                        { text: [{ lyrics: "永久にボールは止まらんとか" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "言う通り行くだけ、会える？10時" }] },
                        { text: [{ lyrics: "不良品 渋谷で無限ループに" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "つーか足んない 17才 通はサンシャイン" }] },
                        { text: [{ lyrics: "翼授けりゃ止めらんない" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "どれもこれもコレジャナイみたいだ" }] },
                        { text: [{ lyrics: "楽に行こうよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "終わりの終わりは世の理" }] },
                        { text: [{ lyrics: "弱いの。怖いのはお断り" }] },
                        { text: [{ lyrics: "ありがたいアポロ9" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "のらりとくらりはやっぱトモダチ" }] },
                        { text: [{ lyrics: "齢の若いのから旅立ち" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "押し合いへし合いそつないのみたい" }] },
                        { text: [{ lyrics: "相子の内包のライフライン" }] },
                        { text: [{ lyrics: "それはなんだし" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "あいも変わらず充電中かい？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "（それは" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "巻き戻し）" }]
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
                        { text: [{ lyrics: "夢みたいな愛なら見てみたい" }] },
                        { text: [{ lyrics: "暮れないなら涙は飾れない" }] },
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
                            text: [{ lyrics: "そっと夢見る現状それ以外" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "そそられるまま理想 時計台" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "怠惰な足取りで" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（うっせー）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "命題対価に価値がない" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（Worthlessness?）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "言うて毎回時間は足りてない" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（粕ですね?）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "泣けない解けない良くないの辛い" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "迷子のカイトのタイムライン" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（I’m Fine）" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "最後は堪え難し" }]
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
                            text: [{ lyrics: "無限の世界だ すべて飲み込む三次関数じゃ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "足りないOmniverse" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "解釈は難解で半信半疑" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "アイザックだって投げ出すMathematics" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "終わっちゃわないで一般式" }] },
                        { text: [{ lyrics: "I will be what you wanna be みたいに" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "どれもこれもコレジャナイみたいだ" }] },
                        { text: [{ lyrics: "今すぐミラクル以下スルーで" }] },
                    ],
                },
            ],
        },
    ],
}
