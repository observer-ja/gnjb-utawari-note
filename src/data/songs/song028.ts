/* 結末は次のトラフィックライト */
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

export const song028: SongLyrics = {
    id: "song028",
    note: "三部作の内の一曲。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "普通だったら痛くもないんだ" }] },
                        { text: [{ lyrics: "振り払った火の粉の一つ一つも" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "数え出して限りがない" }] },
                        { text: [{ lyrics: "こんな頭では乗り切れない一つ一つを" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "具体じゃない辛いを抱いてる" }] },
                        { text: [{ lyrics: "ありふれた思考でまた彷徨うのに" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "理解したいってどっか思ってる" }] },
                        { text: [{ lyrics: "繰り返しだな" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "違いなんてあるのかな？" }] },
                        { text: [{ lyrics: "願いなんて藪の中" }] },
                        { text: [{ lyrics: "それじゃないかな？まだまだ？様々だな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "でも描いたんだ夏の花" }] },
                        { text: [{ lyrics: "世界観で泣くのかな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "行かない？行く？" }] },
                        { text: [{ lyrics: "お預けの結末" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "街なかで何が為" }] },
                        { text: [{ lyrics: "感じ方 価値観が一方通行で" }] },
                        { text: [{ lyrics: "まだ 赤い" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "渡れない向こう岸" }] },
                        { text: [{ lyrics: "比べない不等式" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "笑えないって" }] },
                        { text: [{ lyrics: "でもそれでいい" }] },
                        { text: [{ lyrics: "僕がいたあの日々" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "嫌いじゃない 期待も大切" }] },
                        { text: [{ lyrics: "ためらいと未来の選び方のコツ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "世界自体違う世迷い言" }] },
                        { text: [{ lyrics: "諦めたとき" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "自画自賛でいれるかな" }] },
                        { text: [{ lyrics: "利害関係の超え方" }] },
                        { text: [{ lyrics: "分からないから まだまだ？様々だな" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "でも描いたんだ夏の花" }] },
                        { text: [{ lyrics: "世界観は後付だ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "行かない？行く？" }] },
                        { text: [{ lyrics: "それこそが結末" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "気取らない君が好き" }] },
                        { text: [{ lyrics: "見透かされちゃうような" }] },
                        { text: [{ lyrics: "瞳の奥の黑くて深い色 " }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "また忘れちゃうよ明日の午後" }] },
                        { text: [{ lyrics: "待ち合わせた約束" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "行かない？行く？" }] },
                        { text: [{ lyrics: "手遅れの哲学" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "違いなんてあるのかな？" }] },
                        { text: [{ lyrics: "願いなんて藪の中" }] },
                        { text: [{ lyrics: "それじゃないかな？まだまだ？様々だな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "でも描いたんだ夏の花" }] },
                        { text: [{ lyrics: "世界観で泣くのかな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "行かない？行く？" }] },
                        { text: [{ lyrics: "お預けの結末" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "街なかで何が為" }] },
                        { text: [{ lyrics: "感じ方 価値観が一方通行で" }] },
                        { text: [{ lyrics: "まだ 赤い" }] },
                    ],
                },
            ],
        },
    ],
}
