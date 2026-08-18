/* 夏の二等辺大三角形 */
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

export const song047: SongLyrics = {
    id: "song047",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "勝手にやってくれりゃいいのに" }] },
                        { text: [{ lyrics: "僕に内緒で仲良しこよし" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "いつの間にかのよくある話" }] },
                        { text: [{ lyrics: "お似合いの織姫　彦星" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "気まずいなんて気にしないで" }] },
                        { text: [{ lyrics: "話してくれてもいいじゃんね" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "気付かない振りするのも" }] },
                        { text: [{ lyrics: "もういい加減辛いや" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "夏の二等辺大三角形" }] },
                        { text: [{ lyrics: "二人の背中　離れた場所で" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "何でもない帰り道でさえ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "天の川みたいで溺れそうだよ" }]
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
                        { text: [{ lyrics: "That's right！君が好きで" }] },
                        { text: [{ lyrics: "誰より君が好きで" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "本当は僕だけに笑っていて欲しくて" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "あいつならしょうがない" }] },
                        { text: [{ lyrics: "僕じゃ釣り合わない" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "言い聞かせるには" }] },
                        { text: [{ lyrics: "まだ長過ぎるsummer holiday" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "所詮　期限付きの romantic" }] },
                        { text: [{ lyrics: "季節が巡れば元の位置" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "思い違いは良くある話" }] },
                        { text: [{ lyrics: "きっと僕が本当の彦星" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "なんて負け犬が吠えたって" }] },
                        { text: [{ lyrics: "誘う一言も打てなくて" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "書き直してはまた delete　諦め悪いや" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "去年は三人で撮ったポートレート" }] },
                        { text: [{ lyrics: "今年は呼ばれない君のバースデー" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "会う為の口実　探しても" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "邪魔してるみたいで嫌われるかな" }]
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
                        { text: [{ lyrics: "Midnight！液晶画面に　指で綴った想いは" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "送信できないまま　ベッドに投げ捨てた" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "夜空には星はない　心映した様な" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "窓際の景色" }] },
                        { text: [{ lyrics: "ただ眺めてる every lonely days" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "水着の日焼け跡も　花火が照らす横顔も" }] },
                        { text: [{ lyrics: "全部あいつのもんかな" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "冬になればまた　星は見えるだろうか" }] },
                        { text: [{ lyrics: "それまでにはきっと、、、じゃ遅いよな" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "One more try！ずっとそばで" }] },
                        { text: [{ lyrics: "誰より君のそばで" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "溢れる感情を伝え続けたいんだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "星が見えないなら　僕が連れて行くから" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "どうかこの手を掴んで欲しい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "That's right！君が好きで" }] },
                        { text: [{ lyrics: "誰より君が好きで" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "本当は僕だけに笑っていて欲しくて" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "あいつならしょうがない" }] },
                        { text: [{ lyrics: "僕じゃ釣り合わない" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "言い聞かせるには" }] },
                        { text: [{ lyrics: "まだ“早”過ぎるsummer holiday" }] },
                    ],
                },
            ],
        },
    ],
}
