/* マルチバース・アドベンチャー */
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

export const song052: SongLyrics = {
    id: "song052",
    note: "コールの詳細は公式YouTubeのコール動画を参照。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "全然揃わないパズルのような僕の心は" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "自分だけにハマるぴったりのピース" }] },
                        { text: [{ lyrics: "ずっと探してたけど" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "あなたが教えてくれたのは" }] },
                        { text: [{ lyrics: "正しさは唯一つだけではないこと" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "完成だけがすべてではなく" }] },
                        { text: [{ lyrics: "欠けたとこも愛しいこと" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "もしももしも僕のこの世界が" }] },
                        { text: [{ lyrics: "足りない何かを埋める旅ならば" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "刹那的な価値観の意味" }] },
                        { text: [{ lyrics: "誰とも比べたくない" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "間違ってるなんて間違ってたかも" }] },
                        { text: [{ lyrics: "耳を塞いだその手を離した" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "その瞬間から" }] },
                        { text: [{ lyrics: "あなたと共に勝ち誇れ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（LaLaLa）" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "コン" , call: true }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "パスよりも" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "確" , call: true }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "かなのかは" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "半信半疑" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "なのに" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "絶対安心" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "だから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ハッ" , call: true }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ピーエンドで" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "拍" , call: true }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "手喝采" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "見つけたひと欠片しあわせ" }] },
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
                            text: [{ lyrics: "Hello 水平線の向こう側の光の向こう" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "あなたの世界が生きるところ" }]
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
                        { text: [{ lyrics: "見えない場所に宿る煌めき" }] },
                        { text: [{ lyrics: "見えるまで幻" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "（例えば無くした隙間に）" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "何が見えるの？同色で並ぶ宇宙" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "躊躇うことも貫くことも" }] },
                        { text: [{ lyrics: "仮定の話なら" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "夢も理想の自分も境界も" }] },
                        { text: [{ lyrics: "ジグソームーブも信じたままでいい" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "痛み 憂い 勇気 悲しみ" }] },
                        { text: [{ lyrics: "全部全部呼吸にして" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "間違ってるなんて間違ってたかも" }] },
                        { text: [{ lyrics: "耳を塞いだその手を離した" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "その瞬間から" }] },
                        { text: [{ lyrics: "あなたと共に勝ち誇れ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（LaLaLa）" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "コン" , call: true }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "パスよりも" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "確" , call: true }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "かなのかは" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "半信半疑" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "なのに" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "絶対安心" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "だから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ハッ" , call: true }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ピーエンドで" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "拍" , call: true }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "手喝采" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "もしもあなたが" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "そう、もしもあなたが" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "あなたがいてくれたら" }]
                        },
                    ],
                },
            ],
        },
    ],
}
