/* 半分相逢傘 */
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

export const song021: SongLyrics = {
    id: "song021",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "深く寝静まった　真夜中過ぎの部屋で" }] },
                        { text: [{ lyrics: "二人は息を潜めていた" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "散らかったテーブル　遠ざかる記憶" }] },
                        { text: [{ lyrics: "ちょっとだけ触れる足元" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "誰かの通知を切る　君を見ないフリして" }] },
                        { text: [{ lyrics: "抱き寄せられて　絡めた指" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "耳元でそっと　囁くコトバに" }] },
                        { text: [{ lyrics: "もう後戻りできないね" }] },
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
                            text: [{ lyrics: "ねぇ　ねぇ　こっちを見つめてよ"}]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ねぇ　ねぇ　ゆっくり目を閉じて"}]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "ねぇ　ねぇ　明かりを消してよ"}]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "『これでどっちも悪いね』"}]
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
                        { text: [{ lyrics: "そっと　口付けをして" }] },
                        { text: [{ lyrics: "湿った夜に堕ちてゆく" }] },
                        { text: [{ lyrics: "今夜だけは　愛し合って" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "濡れた指先　汗ばむ体" }] },
                        { text: [{ lyrics: "二人だけの秘密だね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "声を隠したままで" }] },
                        { text: [{ lyrics: "本当の姿を見せてよ" }] },
                        { text: [{ lyrics: "友達以上の関係に、、、" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "もしも本気で　好きになったら" }] },
                        { text: [{ lyrics: "なんて気持ち　飲み込んだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "夜のコンビニ　慣れた道のり" }] },
                        { text: [{ lyrics: "君の服着て　アイス分け合っても" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "さっきのLINE　誰からのLINE？" }] },
                        { text: [{ lyrics: "聞けずにいる　聞かずにいるよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "「恋人みたい？」そう見えるかな" }] },
                        { text: [{ lyrics: "どこかで願う　普通の恋したい" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "信号待ちで　小指繋いで" }] },
                        { text: [{ lyrics: "まだ離さない　君は嘘つき、、、" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "もう一度　口付けをして" }] },
                        { text: [{ lyrics: "湿った夜に堕ちてゆく" }] },
                        { text: [{ lyrics: "今夜だけは　名前呼んで" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "濡れた指先　汗ばむ体" }] },
                        { text: [{ lyrics: "二人だけの秘密だね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "降り出す雨　もう帰るね" }] },
                        { text: [{ lyrics: "ごめん　傘はいらないよ" }] },
                        { text: [{ lyrics: "涙ごまかす　夜だから、" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ずっと前から　好きになってた" }] },
                        { text: [{ lyrics: "なんて気持ち　飲み込んだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["R", "G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "どこまでも　どこまでも　報われない関係" }] },
                        { text: [{ lyrics: "いつまでも　いつまでも　続かないでしょ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "どこまでも　どこまでも　報われない関係" }] },
                        { text: [{ lyrics: "いつまでも　いつまでも" }] },
                    ],
                },
            ],
        },
    ],
}
