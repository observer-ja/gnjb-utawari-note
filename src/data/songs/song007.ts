/* ジュトゥブ */
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
    id: "song007",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W", "S", "G"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                        {
                            members: ["Y", "B", "R", "P"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S", "B"],
                            text: [{ lyrics: "I like youのQ-Q-Q-Q" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "Oh～Baby" }],
                        },
                    ],
                },
                {
                    members: ["Y", "W", "S", "B", "G", "P"],
                    chunks: [
                        { text: [{ lyrics: "I miss youのShu-Shu-Shu-Shu" }] },
                        { text: [{ lyrics: "I want youのChu-Chu-Chu-Chu" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["S", "R", "G"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["S", "R", "G"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["Y", "W", "B", "G"],
                            text: [{ lyrics: "Oh Yeah" }],
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "君との出会いはスゴい" }] },
                        { text: [{ lyrics: "偶然？むしろ、必然？" }] },
                        { text: [{ lyrics: "知りたいこと山盛り" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [{ text: [{ lyrics: "君は何が欲しいの" }] }],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "あれ？" }],
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "(あれ！)" }],
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "それ？" }],
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "(それ！)" }],
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [{ text: [{ lyrics: "以心伝心" }] }],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "太陽も溶けちゃうくらい" }] },
                        { text: [{ lyrics: "ずっとそばにいたいよ" }] },
                        { text: [{ lyrics: "そっと空に願いを" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "もう一回　聞いてみようか" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "あれ？" }],
                        },
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "(あれ！)" }],
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "それ？" }],
                        },
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "(それ！)" }],
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [{ text: [{ lyrics: "決まってんでしょ" }] }],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [
                                { lyrics: "不意にマジな声で　からかいたい" },
                            ],
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "意地悪でごめん" }],
                        },
                        {
                            members: ["S", "G"],
                            text: [{ lyrics: "(Yeah)" }],
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "どのリアクションも可愛くてLady" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "恥ずかしがる仕草さえ" }],
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "また始まるよ　幸せ" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "止められない" }],
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Yeah" }],
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
                        { text: [{ lyrics: "Show me, baby" }] },
                        { text: [{ lyrics: "どんな困難だってEasy" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ひとりの時　ひとりじゃないみたいで" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "どんなストーリーもラブストーリーだよ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "ねえ" }],
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "2人でいるだけで特別" }],
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "何回だって言わせてよ" }] },
                        { text: [{ lyrics: "メルシ　シェリ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W", "S", "G"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                        {
                            members: ["Y", "B", "R", "P"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S", "B"],
                            text: [{ lyrics: "I like youのQ-Q-Q-Q" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "Oh～Baby" }],
                        },
                    ],
                },
                {
                    members: ["Y", "W", "S", "B", "G", "P"],
                    chunks: [
                        { text: [{ lyrics: "I miss youのShu-Shu-Shu-Shu" }] },
                        { text: [{ lyrics: "I want youのChu-Chu-Chu-Chu" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["S", "R", "G"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["S", "R", "G"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["Y", "W", "B", "G"],
                            text: [{ lyrics: "Oh Yeah" }],
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "独り占めしてみたい" }] },
                        { text: [{ lyrics: "君の笑顔　涙" }] },
                        { text: [{ lyrics: "だけど　独りよがり？" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "僕のどの辺が好き？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "どこ？" }],
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "(そこ！)" }],
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "ここ？" }],
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "(そこ！！！)" }],
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [{ text: [{ lyrics: "わかってんだよ" }] }],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [
                                { lyrics: "すれ違いや孤独を　楽しむほど" },
                            ],
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "大切でごめん" }],
                        },
                        {
                            members: ["S", "G"],
                            text: [{ lyrics: "(Yeah)" }],
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
                        { text: [{ lyrics: "惚気話　記憶全部が" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "もう言葉なんか要らない" }],
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "心から抱きしめたい" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "連れて行くよ" }],
                        },
                        {
                            members: ["Y", "B", "G", "P"],
                            text: [{ lyrics: "Yeah" }],
                        },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Show me, baby" }] },
                        { text: [{ lyrics: "そんなこんなあってCrazy" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "そう一日千秋　お互い感じてる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "オーキードーキー" }] },
                        { text: [{ lyrics: "ときどきレイニーでも平気" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "2人でいるだけで特別" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "何回だって聞かせてよ" }] },
                        { text: [{ lyrics: "メルシ　シェリ" }] },
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
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "I need youのJu-Ju-Ju-Ju" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "I like youのQ-Q-Q-Q" }],
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "I want youのChu-Chu-Chu-Chu" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "I need youのJu-Ju-Ju-Ju" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "I like youのQ-Q-Q-Q" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "I want youのChu-Chu-Chu-Chu" }],
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
                            members: ["W", "S", "P"],
                            text: [{ lyrics: "恥ずかしがる仕草さえ" }],
                        },
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "また始まるよ　幸せ" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "止められない" }],
                        },
                        {
                            members: ["Y", "W", "B", "G"],
                            text: [{ lyrics: "Yeah" }],
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Show me, baby" }] },
                        { text: [{ lyrics: "どんな困難だってEasy" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "ひとりの時　ひとりじゃないみたいで" }] },
                    ],
                },
                {
                    members: ["W", "S"],
                    chunks: [
                        { text: [{ lyrics: "どんなストーリーもラブストーリーだよ" }] },
                        { text: [{ lyrics: "ねえ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "2人でいるだけで特別" }] },
                    ],
                },
            ],
        },
        {
            members: ["S", "B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Show me, baby" }] },
                        { text: [{ lyrics: "そんなこんなあってCrazy" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "そう一日千秋　お互い感じてる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "S"],
                    chunks: [
                        { text: [{ lyrics: "オーキードーキー" }] },
                        { text: [{ lyrics: "ときどきレイニーでも平気" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "2人でいるだけで特別" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "何回だって聞かせてよ" }] },
                        { text: [{ lyrics: "メルシ　シェリ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["W", "S", "G"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                        {
                            members: ["Y", "B", "R", "P"],
                            text: [{ lyrics: "I luv uのU-U-U-U" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S", "B"],
                            text: [{ lyrics: "I like youのQ-Q-Q-Q" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "Oh～Baby" }],
                        },
                    ],
                },
                {
                    members: ["Y", "W", "S", "B", "G", "P"],
                    chunks: [
                        { text: [{ lyrics: "I miss youのShu-Shu-Shu-Shu" }] },
                        { text: [{ lyrics: "I want youのChu-Chu-Chu-Chu" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["S", "R", "G"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["Y", "W", "B", "P"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["S", "R", "G"],
                            text: [{ lyrics: "Yeah～" }],
                        },
                        {
                            members: ["Y", "W", "B", "G"],
                            text: [{ lyrics: "Oh Yeah" }],
                        },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "I luv uのU-U-U-U" }] },
                    ],
                },
            ],
        },
    ],
};
