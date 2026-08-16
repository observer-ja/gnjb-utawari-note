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

export const song011: SongLyrics = {
    id: "song011",

    lyrics_blocks: [
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "最上階で手を伸ばしても" }] },
                        { text: [{ lyrics: "掴めない夜空も遠いAnswer" }] },
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
                            text: [{ lyrics: "一瞬は永遠" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "そして" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "邂逅は偶然" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "じゃない" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "君で散らかしたグッバイ" }] },
                        { text: [{ lyrics: "点と線交差する感情" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "何も　静けさの隙間に" }] },
                        { text: [{ lyrics: "ただ影も俯いた" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "なんか言いかけて飲み込んだ" }] },
                        { text: [{ lyrics: "君の残り香と体温" }] },
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
                            text: [{ lyrics: "間違い" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "たくない" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "と進めないなんて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "ああ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "苦しいな" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "君が" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "焦らす" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "優しさにもう" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "笑えないよ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "笑いたいのに" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "最上階で手を伸ばしても" }] },
                        { text: [{ lyrics: "掴めない夜空も遠いAnswer" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "世界で一人" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "僕の声は君に届かないや" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "単純な気持ち？　そうじゃない" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "でも曖昧な気持ち？　そうじゃない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "もうちょっと　ねえもうちょっと" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "そばにいたくて" }]
                        },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "徹頭徹尾　君だった" }] },
                        { text: [{ lyrics: "僕のしるしは" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "喜んでる顔　撮っとかないと" }] },
                        { text: [{ lyrics: "劇画チックなMoment" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "とっておきのPicture　笑ってたね" }] },
                        { text: [{ lyrics: "嘘つきのFuture" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "悲しくも思い出のSlide" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "劇薬は飲みたくない" }] },
                        { text: [{ lyrics: "忘れたくはない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "いつも月影の隙間に" }] },
                        { text: [{ lyrics: "8月の花火が" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "ふっと吹けば消えちゃいそうな" }] },
                        { text: [{ lyrics: "君の横顔は幻想" }] },
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
                            text: [{ lyrics: "間違い" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "探し" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "の机上論" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "だって" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "ただ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "真実を" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "見れない" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "弱さ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "隠せないで" }]
                        },
                    ]
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "笑えないよ" }] },
                        { text: [{ lyrics: "笑いたいのに" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "互い違いの色に" }] },
                        { text: [{ lyrics: "気づかない振りしていられないな" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "何十回何百回でも" }] },
                        { text: [{ lyrics: "君に会いたいよ　夢の中" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "散々旋回撤回しても" }] },
                        { text: [{ lyrics: "グルグル回るよ　想いは論戦" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "世界で一人" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "君の君のラストノート" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "W"],
                    chunks: [
                        { text: [{ lyrics: "最上階で手を伸ばしても" }] },
                        { text: [{ lyrics: "掴めない夜空も遠いAnswer" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W"],
                            text: [{ lyrics: "世界で一人" }]
                        },
                        {
                            members: ["Y", "W", "P"],
                            text: [{ lyrics: "僕の声は君に届かないや" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "G"],
                            text: [{ lyrics: "単純な気持ち？" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "そうじゃない" }]
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "でも曖昧な気持ち？" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "そうじゃない" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "もうちょっと　ねえもうちょっと" }] },
                        { text: [{ lyrics: "そばにいたくて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "徹頭徹尾　君だった" }] },
                        { text: [{ lyrics: "僕のしるしは" }] },
                    ],
                },
            ],
        },
    ],
}
