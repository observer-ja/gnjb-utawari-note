/* 美しい人 */
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

export const song054: SongLyrics = {
    id: "song054",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "You're like a tuberose" }] },
                        { text: [{ lyrics: "Crazy for your love" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "幻想に酔うシティ" }] },
                        { text: [{ lyrics: "自嘲気味ギミック" }] },
                        { text: [{ lyrics: "時間ギリギリで終電" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "世界の片隅に咲いている君" }] },
                        { text: [{ lyrics: "薔薇の香りにくらくら" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "酌み交わす度に知る表情" }] },
                        { text: [{ lyrics: "見つめ合う" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "溶けそうな感覚に" }] },
                        { text: [{ lyrics: "溺れて目を瞑った" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "二人だけの" }] },
                        { text: [{ lyrics: "秘密を照らし出した" }] },
                        { text: [{ lyrics: "ムーンライト" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今宵跳ねるビートはアップテンポ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "絡める指先にテンプテーション" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "夢の終わりはいつもこの音" }]
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
                        { text: [{ lyrics: "赤いドレスを翻した" }] },
                        { text: [{ lyrics: "ファムファタール" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "魔法にかかったみたいに" }] },
                        { text: [{ lyrics: "心奪われてしまう" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "君を抱きしめて眠りたい" }] },
                        { text: [{ lyrics: "蜃気楼のような儚い恋と踊る" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "苦い誓い甘い眩暈" }] },
                        { text: [{ lyrics: "かき混ぜて夜は廻る" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "僕だけのしるしをつけて" }] },
                        { text: [{ lyrics: "痺れちゃうくらい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "不埒な奪い合い" }] },
                        { text: [{ lyrics: "曖昧なサイン" }] },
                        { text: [{ lyrics: "三文芝居で幕間" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "独占したい愛" }] },
                        { text: [{ lyrics: "溢れるジェラシー" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "のべつ幕なし" }] },
                        { text: [{ lyrics: "メラメラ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "手のひらで転がされ" }] },
                        { text: [{ lyrics: "囁かれる言葉" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "絡みつく胸の奥" }] },
                        { text: [{ lyrics: "繋がれた首輪のよう" }] },
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
                            text: [{ lyrics: "今宵高らかに叫べアイラブユー" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "振り回されて喜怒哀楽" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "近付くほどに遠く感じた" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "天使のような微笑みで惑わせて" }] },
                        { text: [{ lyrics: "何もかも全て" }] },
                        { text: [{ lyrics: "君に捧げるよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "赤いドレスを翻した" }] },
                        { text: [{ lyrics: "ファムファタール" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "魔法にかかったみたいに" }] },
                        { text: [{ lyrics: "心奪われてしまう" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "君を抱きしめて眠りたい" }] },
                        { text: [{ lyrics: "蜃気楼のような" }] },
                        { text: [{ lyrics: "儚い恋と踊る" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "苦い誓い甘い眩暈" }] },
                        { text: [{ lyrics: "かき混ぜて夜は廻る" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "僕だけのしるしをつけて" }] },
                        { text: [{ lyrics: "痺れちゃうくらい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "You're like a tuberose" }] },
                        { text: [{ lyrics: "Crazy for your love" }] },
                    ],
                },
            ],
        },
    ],
}
