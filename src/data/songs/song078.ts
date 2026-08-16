/* トレモロ */
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

export const song078: SongLyrics = {
    id: "song078",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "きらめいた朝陽がその横顔を照らしたから" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "空気が少し揺れた　少し揺れた" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "知らない声に笑顔で振り向いた君の隣で" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "笑えない自分を知った　自分を知った" }]
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
                            text: [{ lyrics: "描いたままの未来とか" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "途方もない360度の藍のカタチ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "刻もう" }]
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
                        { text: [{ lyrics: "青い。" }] },
                        { text: [{ lyrics: "空が解くeuphoria ループしてよいつまでも" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ぐるり絡まったまま" }] },
                        { text: [{ lyrics: "アンダースタンド？　繋がってたい" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "急かすチャイムが鳴り響いても" }] },
                        { text: [{ lyrics: "僕らは探していたんだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ノートの端に書いた、" }] },
                        { text: [{ lyrics: "数多　その続きは君と" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "涙から芽生えたぬくもりが" }] },
                        { text: [{ lyrics: "すべてを包み込んだ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "君が君でいる理由" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "僕が僕でいる痛みさえ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "それさえも" }]
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
                            text: [{ lyrics: "（幾度考えた）" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（傷も好きもやっぱ）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "（いつも光の中）" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "思っていたよりも透明だから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "（一瞬で過ぎ去った）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（一分でいいから）" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（This Love Will Last Forever）" }]
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
                        { text: [{ lyrics: "ひらり空にかざす手のひら" }] },
                        { text: [{ lyrics: "リフレインはいつまでも" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "白い雲流れた彼方　目を凝らした" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君の顔が見えない程に世界中が照らされて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "全部嘘みたいで　全部ホントのこと" }] },
                        { text: [{ lyrics: "Let Me Show" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "青い。" }] },
                        { text: [{ lyrics: "空が解くeuphoria ループしてよいつまでも" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ぐるり絡まったまま" }] },
                        { text: [{ lyrics: "アンダースタンド？　繋がってたい" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "今度振り向いたら言えるかな？" }] },
                        { text: [{ lyrics: "答えなんて今は無いさ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "いつか大人になる　僕ら友達よりも…" }] },
                        { text: [{ lyrics: "いつか大人になる　僕らあの空よりも青い" }] },
                    ],
                },
            ],
        },
    ],
}
