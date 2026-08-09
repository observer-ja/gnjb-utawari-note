/* Up and Down 7人ver.*/
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

export const song003_7: SongLyrics = {
    id: "song003_7",
    note: "7人ver.は5th Anniversary LIVE 夢現の続きでのみ披露された。",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Summer lover lover lover　なぜ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　ゆらゆら　揺れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Shining over over over　晴れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　さらさら　往(ゆ)け" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "人混みに逆らいながら" }] },
                        { text: [{ lyrics: "帰る場所を忘れ歩く" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "花火の香り残る風" }] },
                        { text: [{ lyrics: "そっと　鼻をかすめる" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "言葉なく繋いだ指から" }] },
                        { text: [{ lyrics: "淋しさを分け合う二人に" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "祭りのあとの月が笑う" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "汗ばむ素肌と凍える心が" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ぶつかる苛立ち" }] },
                        { text: [{ lyrics: "誰にも言えなかった" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "似ている目をした" }] },
                        { text: [{ lyrics: "君に気づかなければ" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Summer lover lover lover　なぜ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　ゆらゆら　揺れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Shining over over over　晴れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　さらさら　往(ゆ)け" }] },
                        { text: [{ lyrics: "Up and Down" }] },
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
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "信じたい" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "信じたい" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "無理に笑って逃げないで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "守りたい" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "守りたい" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "夏の夢よ　愛を見せて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "未来を描いても" }] },
                        { text: [{ lyrics: "心は弾まない" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "どこまで追いかけたら" }] },
                        { text: [{ lyrics: "ホントの自分がいる" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "抱き寄せた時　君の温度が" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "僕の傷　癒す事だけ" }] },
                        { text: [{ lyrics: "今のリアル" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "並んだ屋台の　明かりが消えたら" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "小さく呟く" }] },
                        { text: [{ lyrics: "君の声を聞いた" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "綺麗な目をして" }] },
                        { text: [{ lyrics: "明日を待っていたね" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Summer lover lover lover　永遠(とわ)" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　ゆらゆら　触れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Shining over over over　空" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　きらきら　往(ゆ)け" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "太陽昇れば　また1つ" }] },
                        { text: [{ lyrics: "思い出になる　過去は増えてく" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "この夏終われば　また深く" }] },
                        { text: [{ lyrics: "君を知ってく　恋に落ちて行く" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Summer lover lover lover　なぜ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　ゆらゆら　揺れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Shining over over over　晴れ" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "陽炎　さらさら　往(ゆ)け" }] },
                        { text: [{ lyrics: "Up and Down" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "W", "S", "B", "G", "P"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["Y", "W", "S", "B", "G", "P"],
                            text: [{ lyrics: "信じてる" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "信じてる" }]
                        },
                    ],
                },
                {
                    members: ["Y", "W", "S", "B", "G", "P"],
                    chunks: [
                        { text: [{ lyrics: "僕の想いを受け止めて" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "S", "B", "G", "P"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "君だけ" }]
                        },
                        {
                            members: ["Y", "W", "S", "B", "G", "P"],
                            text: [{ lyrics: "守るから" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "守るから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "S", "B", "G", "P"],
                            text: [{ lyrics: "夏の" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "夢よ　愛を見せて" }]
                        },
                    ],
                },
            ],
        },
    ],
}
