/* NOW */
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

export const song079: SongLyrics = {
    id: "song079",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "忙しない日々の〆切" }] },
                        { text: [{ lyrics: "空っぽのマグに君が気付いて" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ほっと一息のお誘い" }] },
                        { text: [{ lyrics: "世界一好きなコーヒー" }] },
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
                            text: [{ lyrics: "便利なようで不便なLife" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "文明、もうよくない？" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "愛情さえもエモが勝ってしまう" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "コスパで価値を測るなよ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "僕しか知らない君のSmile" }]
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
                        { text: [{ lyrics: "走り出した空の先にピント合わせたって" }] },
                        { text: [{ lyrics: "眩しすぎて上手く写せないんだ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "二人だけに宿った" }] },
                        { text: [{ lyrics: "残った光が確かにあった" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ちゃんと目の前の暮らしと" }] },
                        { text: [{ lyrics: "向き合おうとする僕らの決心が" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "押し寄せる不安も後悔も" }] },
                        { text: [{ lyrics: "溶かすから" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "最上級のNOW" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "なかなか開かずの踏切" }] },
                        { text: [{ lyrics: "ニヒリズムに染まる都会の思想" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "ああ　もうどうにでもなってしまえと" }] },
                        { text: [{ lyrics: "逃げたくなる" }] },
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
                            text: [{ lyrics: "人と話すより人工知能" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "誰より僕を分かってくれるの" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ネット見たら人と人が" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "精度" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "の低い論争　妄想　暴走" }]
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
                            text: [{ lyrics: "てか顔も見えてない" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "やつのメッセに意味はない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "君から通知来れば普通に高まる" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "仲間内で\"FAV\"" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "翳り出した空もコントラスト" }] },
                        { text: [{ lyrics: "意味があって" }] },
                        { text: [{ lyrics: "この目で見た景色は" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "僕らだけに宿った「特別」なんだよ" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "一瞬たりとも見逃せないよ" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "言葉を選び　節度を守り" }] },
                        { text: [{ lyrics: "言わない？言えない？" }] },
                        { text: [{ lyrics: "いつも気持ちだけが空振り" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "生まれてすぐに無邪気に叫び" }] },
                        { text: [{ lyrics: "泣き止み　だんまり" }] },
                        { text: [{ lyrics: "大人になるたびに何か失くした" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "走り出した空の先にピント合わせたって" }] },
                        { text: [{ lyrics: "レンズ越しに君を追いかけたんだ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "誰よりもきっと僕が" }] },
                        { text: [{ lyrics: "最高の君を残せるから" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "「こっち向いて」" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "走り出した空の先にピント合わせたって" }] },
                        { text: [{ lyrics: "眩しすぎて上手く写せないんだ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "二人だけに宿った" }] },
                        { text: [{ lyrics: "残った光が確かにあった" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ちゃんと目の前の暮らしと" }] },
                        { text: [{ lyrics: "向き合おうとする僕らの決心が" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "押し寄せる不安も後悔も" }] },
                        { text: [{ lyrics: "溶かすから" }] },
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
                            text: [{ lyrics: "最上級のNOW" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "徹底的フォーカス" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "全瞬間シャッターチャンス" }]
                        },
                    ],
                },
            ],
        },
    ],
}
