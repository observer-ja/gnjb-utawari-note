/* ダイヤモンドリリー */
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

export const song051: SongLyrics = {
    id: "song051",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "鳴り止まないな雑踏の中" }] },
                        { text: [{ lyrics: "独りで歩いてるだけ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "夢もないままに変われないままに" }] },
                        { text: [{ lyrics: "下を向いてはため息" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "過ぎ去ってゆく過去に置いてきた" }] },
                        { text: [{ lyrics: "その香りに振り返る" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "それだけで僕らはさ" }] },
                        { text: [{ lyrics: "もう言葉なんて要らなかった" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "今日だけ飛び越えられない" }] },
                        { text: [{ lyrics: "境界が透過してゆく" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼周り出してくセカイに" }] },
                        { text: [{ lyrics: "二人で　二人で" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "歌って　君と歌って" }] },
                        { text: [{ lyrics: "その寂しい夜も超えてさ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "いつか知ってく　これが" }] },
                        { text: [{ lyrics: "永遠みたいな一瞬なんだってことだけ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "笑って君と笑って" }] },
                        { text: [{ lyrics: "この寂しい夜に灯ってく" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "その花言葉だけを" }] },
                        { text: [{ lyrics: "抱きしめて征く" }] },
                        { text: [{ lyrics: "今はそれだけで良い" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "星が降ったまま柔らかい夜に" }] },
                        { text: [{ lyrics: "二人で腰掛けてみる" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "始まりも知らず終わりも知らず" }] },
                        { text: [{ lyrics: "今をただゆく" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "嗚呼照らして僕の弱さ" }] },
                        { text: [{ lyrics: "も全て包み込んでくれるの" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "零れてくそれが何かも" }] },
                        { text: [{ lyrics: "言わずに言わずに" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "響いた空に響いた" }] },
                        { text: [{ lyrics: "言葉の温もりをかぞえて" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "僕らいつかさ" }] },
                        { text: [{ lyrics: "セカイの果てで逢えたら" }] },
                        { text: [{ lyrics: "また笑えるかな" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "繋いだ固く繋いだ" }] },
                        { text: [{ lyrics: "その両手の暖かさだけ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "覚えてるよ" }] },
                        { text: [{ lyrics: "かけがえのないものが" }] },
                        { text: [{ lyrics: "そこにあるんだ" }] },
                        { text: [{ lyrics: "嗚呼" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "優しく　夜が優しく" }] },
                        { text: [{ lyrics: "僕らを引き合わせてくれたの" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "際限の無い　ありがとうだけを" }] },
                        { text: [{ lyrics: "伝えて　居たいだけなんだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "そしたら君も笑って" }] },
                        { text: [{ lyrics: "その温もりと言葉で僕にさ" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "嗚呼" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "歌って　君と歌って" }] },
                        { text: [{ lyrics: "その寂しい夜も超えてさ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "いつか知ってく　これが" }] },
                        { text: [{ lyrics: "永遠みたいな一瞬なんだってことだけ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "笑って君と笑って" }] },
                        { text: [{ lyrics: "この寂しい夜に灯ってく" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "その花言葉だけを" }] },
                        { text: [{ lyrics: "抱きしめて征く" }] },
                        { text: [{ lyrics: "今はそれだけで良い" }] },
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
                            text: [{ lyrics: "言葉を重ねるその度に" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "溢れる涙は透明で" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "形もないまま漂った" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "管制塔の向こう側で" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "時間も抜け出し輝いて" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "何回だって伝えさせて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "ただ君と二人で笑っていた" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "木霊する音楽と" }]
                        },
                    ],
                },
            ],
        },
    ],
}
