/* 原因は君にもある。 */
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

export const song031: SongLyrics = {
    id: "song031",
    note: "「ららら…」の部分はメンバーがマイク向けてくれることがほとんどなのでその際に歌う。",

    lyrics_blocks: [
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ららら…" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "どうやって変えてみたっけ？" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "挙って逃げる短3度" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "Pa-Pa-La Pa-La-Pa" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "エゴサ疲れちゃって不貞寝" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "画面割れてからね" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "買ってきたスマホカバー" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "「意味ないじゃん」" }] },
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
                            text: [{ lyrics: "なんだって連戦連勝" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "海底1000メートル" }]
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "原因は何処にあるんですか？" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "偶さかで Say “Hoo”" }] },
                        { text: [{ lyrics: "Over the Rainbow" }] },
                        { text: [{ lyrics: "君の声で" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ららら…" }] },
                        { text: [{ lyrics: "そんな言葉じゃリアルじゃない" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "ららら…らぶ" }] },
                        { text: [{ lyrics: "それじゃまだ足りないのなら" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "このすれ違い 好きピの参加で優勝" }] },
                        { text: [{ lyrics: "ドキドキになっても ランキングは序章" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "足し算ならゼッタイ負けないんじゃね？" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "美味しいパスタが食べたいだけ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今日もどっかで Hello Goodbye" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ああ 運命に逆らってもやっぱそうでしょ" }] },
                        { text: [{ lyrics: "ときどき泣いてまっさらな友情" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "結局君だ それが宝の在り処" }] },
                        { text: [{ lyrics: "知ったらまだ、生きたい(シネナイ)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "拒絶がクセニナル" }] },
                        { text: [{ lyrics: "孤独すら上にある" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "それこそが君にある響き合う" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "シチリア風 気になる" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "Tシャツ" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "プレミアム 幸せは既にある" }] },
                        { text: [{ lyrics: "君は僕のVenus" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "「意味あるじゃん」" }] },
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
                            text: [{ lyrics: "まさに急転直下" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "大切にしよっか" }]
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "原因は君にもある。んですね" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "そして有言実行" }] },
                        { text: [{ lyrics: "定言的命法" }] },
                        { text: [{ lyrics: "君の声に" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "その嬉し恥ずかしも なんちゃって優勝" }] },
                        { text: [{ lyrics: "雨の音沙汰も スルーしてイイんでしょ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "暇つぶしの連続なんじゃね" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "この歌詞にも意味いらないんじゃね" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "思考次第って Hello Goodbye" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ああ クレージーかトゥーレイジーだ 100％" }] },
                        { text: [{ lyrics: "よきよき受け取りたいな表彰状" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "報われない青春だ それさえも一興" }] },
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
                            text: [{ lyrics: "やっぱり君のせいだろ？" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "それとも僕のせいなのかい？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "君だ！君だ！絶対君だ！！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "水かけあって沼っちゃう不可知論" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "共犯だっていうのかい？" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "でも僕がここにいるのは" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "明らかに君のせいだよね？" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ららら…" , call: true }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "このすれ違い 好きピの参加で優勝" }] },
                        { text: [{ lyrics: "ドキドキになっても ランキングは序章" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "足し算ならゼッタイ負けないんじゃね？" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "1+1+37" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（強引？）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今日もどっかで Hello Goodbye" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ああ 運命に逆らってもやっぱそうでしょ" }] },
                        { text: [{ lyrics: "ときどき泣いてまっさらな友情" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "結局君だ それが宝の在り処" }] },
                        { text: [{ lyrics: "知ったらまだ ああ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "まだ" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "まだ まだ、生きたい(シネナイ)" }]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ららら…" , call: true }] },
                    ],
                },
            ],
        },
    ],
}
