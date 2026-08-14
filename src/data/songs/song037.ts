/* Run away */
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

export const song037: SongLyrics = {
    id: "song037",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "なんでもできるよってうなずいた" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "君のまぶしい" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "まっすぐなその瞳まっすぐ見れない" }]
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
                        { text: [{ lyrics: "君の日常の隅っこに僕がいたらいいな" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "朝食のパンに" }] },
                        { text: [{ lyrics: "たまに付けるジャムくらいでいい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "触れないように呟いてみる" }] },
                        { text: [{ lyrics: "「誕生日くらいは一緒にいたい」" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "わがままを言えるのなら" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "言わせてもらえるのなら" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ケーキは大きめがいいな" }]
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
                        { text: [{ lyrics: "Run away ねえ 二人で" }] },
                        { text: [{ lyrics: "誰も見たことない世界へ" }] },
                        { text: [{ lyrics: "行けないなら夢で 夢で抱くよ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギュッと ギュッとこのまま" }] },
                        { text: [{ lyrics: "消えちゃえないかな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "なんて思っていいかな" }] },
                        { text: [{ lyrics: "ああ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "僕なんか一人で" }] },
                        { text: [{ lyrics: "一人っきりでもいいからさ" }] },
                        { text: [{ lyrics: "なんて言えないね 強がれなくて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ギュッと ギュッとこのまま" }] },
                        { text: [{ lyrics: "離れたくないな" }] },
                        { text: [{ lyrics: "もう きっとずっと、なんてどうだろう?" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "遠くに聞こえる無邪気な笑い声" }] },
                        { text: [{ lyrics: "夕焼けが窓を叩いた" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "それは紛れもなく片思いだと知った色" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "掛け違えてたボタンみたいに" }] },
                        { text: [{ lyrics: "間違えた場所からやり直せたら" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "何度でも「好き」と君に" }] },
                        { text: [{ lyrics: "言えるだろうな、それでも" }] },
                        { text: [{ lyrics: "答えは同じだろうな" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Run away ねえ これから" }] },
                        { text: [{ lyrics: "何も駆け引きのない世界へ" }] },
                        { text: [{ lyrics: "行けないなら夢で 夢で描くよ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "そっと そっとこのまま" }] },
                        { text: [{ lyrics: "逃げちゃえないかな" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "なんて思っていいかな" }] },
                        { text: [{ lyrics: "ああ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "１００年くらいさ" }] },
                        { text: [{ lyrics: "ずっと一緒に歩こうよ" }] },
                        { text: [{ lyrics: "結末なんかは後回しでいい" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "そっと そっとこのまま" }] },
                        { text: [{ lyrics: "側に居れたら" }] },
                        { text: [{ lyrics: "友達のまま、なんてどうだろう?" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "君の横顔を見ている時だけ" }] },
                        { text: [{ lyrics: "本当の僕で居られるんだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "こっちを見ないように祈るけれど" }] },
                        { text: [{ lyrics: "君は気づかない" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "だから" }] },
                        { text: [{ lyrics: "Run away ねえ 二人で" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "Run away ねえ 二人で" }] },
                        { text: [{ lyrics: "誰も見たことない世界へ" }] },
                        { text: [{ lyrics: "行けないなら夢で 夢で抱くよ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ギュッと ギュッとこのまま" }] },
                        { text: [{ lyrics: "消えちゃえないかな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "なんて思っていいかな" }] },
                        { text: [{ lyrics: "ああ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "僕なんか一人で" }] },
                        { text: [{ lyrics: "一人っきりでもいいからさ" }] },
                        { text: [{ lyrics: "なんて言えないね 強がれなくて" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ギュッと ギュッとこのまま" }] },
                        { text: [{ lyrics: "離れたくないな" }] },
                        { text: [{ lyrics: "もう きっとずっと、なんてどうだろう?" }] },
                    ],
                },
            ],
        },
    ],
}
