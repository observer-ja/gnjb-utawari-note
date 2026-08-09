/* 嗜好に関する世論調査 */
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

export const song005: SongLyrics = {
    id: "song005",
    note: "2番後の感想で2択コールをする。サビは推しに合わせて同じ振り付けをいている人も多い。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "尖った" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "コトバ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "愛したいけれどなんだか愛せないんだ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "どっちの" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ミカタ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "あっちに行けばこっちは損なんだ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "光った" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "陰った" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "様子見" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "どっちつかずも" }]
                        },
                        {
                            members: ["W", "G"],
                            text: [{ lyrics: "なんか疲れたんだ" }]
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
                            text: [{ lyrics: "わかっちゃいないがどうした" }]
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "ジレンマ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "世論調査も" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "なんで" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "だって" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "晒して" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "笑って" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "誤魔化して　雲隠れ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "好きか" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "嫌いか" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "説得" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "無効票でもさあ　投開票だ" }]
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
                            text: [{ lyrics: "どんな時も　2択　2択　2択" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "選べよ　2択　2択　2択" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "2択　2択　2択" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "選べよ" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "2択　2択　に勝つ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "のムズいな" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "人生なんて無理ゲーだな" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "Live or die" }]
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
                        { text: [{ lyrics: "○×ですか" }] },
                        { text: [{ lyrics: "もうどっちが正解ですか" }] },
                        { text: [{ lyrics: "笑っても泣いても自分次第" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ねえ　ギリギリ光　そう心の奥の" }] },
                        { text: [{ lyrics: "無関心な感性に誰何" }] },
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
                            text: [{ lyrics: "ああ　どんな議論" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(ドミドミド)" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ああ　ドミノ理論" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(ドミドミド)" }]
                        },
                    ],
                },
                {
                    members: ["Y", "R"],
                    chunks: [
                        { text: [{ lyrics: "Wow…" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "今何時？" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(目を覚ませ)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "ああ今　爾" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(目を覚ませ)" }]
                        },
                    ],
                },
                {
                    members: ["B", "R"],
                    chunks: [
                        { text: [{ lyrics: "ナムあみだくじ　ラララ" }] },
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
                            text: [{ lyrics: "条件反射でバズって" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "結局何にも残んないから探すのかな" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "無知って分かってるだけ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "知ってることしか分からないんだまだ" }]
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
                            text: [{ lyrics: "順番待ってる同士で" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "「偽善者」" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "偽善ってなんだろ？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "なんで？" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "だって" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "あいつが" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "言ってた" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "なんだっけ　結局は" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "好きか" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "嫌いか" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ほっとく" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "沈黙が最大の防御だ" }]
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
                            text: [{ lyrics: "どんな時も　2択　2択　2択" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "選べよ　視覚　美学　味覚" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "息抜きの" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "人生なんてヌルゲーだな" }]
                        },
                        {
                            members: ["S", "G"],
                            text: [{ lyrics: "Live or die" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["Y", "B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "○×ですか" }] },
                        { text: [{ lyrics: "もう一回　撤回ですか" }] },
                        { text: [{ lyrics: "誘って強請っても即間違い" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ねえ　ニシエヒガシ　そう心の奥の" }] },
                        { text: [{ lyrics: "無関係な感情に誰何" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "2択　2択　2択…", call: true }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "最終的に積みゲーだな" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "○×ですか" }] },
                        { text: [{ lyrics: "もうどっちが正解ですか" }] },
                        { text: [{ lyrics: "笑っても泣いても自分次第" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ねえ　ギリギリ光　そう心の奥の" }] },
                        { text: [{ lyrics: "無関心な感性に誰何" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y", "B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "○×ですか" }] },
                        { text: [{ lyrics: "もう一回　撤回ですか" }] },
                        { text: [{ lyrics: "誘って強請っても即間違い" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ねえ　ニシエヒガシ　そう心の奥の" }] },
                        { text: [{ lyrics: "無関係な感情に誰何" }] },
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
                            text: [{ lyrics: "ああ　どんな議論" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(ドミドミド)" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ああ　ドミノ理論" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(ドミドミド)" }]
                        },
                    ],
                },
                {
                    members: ["Y", "R"],
                    chunks: [
                        { text: [{ lyrics: "Wow…" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "今何時？" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(目を覚ませ)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "ああ今　爾" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(目を覚ませ)" }]
                        },
                    ],
                },
                {
                    members: ["B", "R"],
                    chunks: [
                        { text: [{ lyrics: "ナムあみだくじ　ラララ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "ラララ" }]
                        },
                        {
                            members: ["B", "G"],
                            text: [{ lyrics: "ラララ" }]
                        },
                        {
                            members: ["W", "S"],
                            text: [{ lyrics: "ラララ" }]
                        },
                    ],
                },
            ],
        },
    ],
}
