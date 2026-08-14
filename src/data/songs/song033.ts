/* チョコループ */
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

export const song033: SongLyrics = {
    id: "song033",
    note: "サビで手振りをすることが多い。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "きっと今 そのフレーバーが溶けた" }] },
                        { text: [{ lyrics: "君と同じカケラ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ドキドキする その温度でこの気持ち" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ビターな、スウィートな、" }] },
                        { text: [{ lyrics: "チョコミントみたい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "5分だけ遅れて来る" }] },
                        { text: [{ lyrics: "君の「ごめんね」とその笑顔が好きだ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "例えるならなんだろうな" }] },
                        { text: [{ lyrics: "まあ なんでもいいかな" }] },
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
                            text: [{ lyrics: "（始まる1,2,3）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "そっと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "（この1,2,3）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "イントロが好きなタイプなんだ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "（このまま1,2,3）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "そんな" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "（この1,2,3）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "伝わらない例え話も" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "優柔不断なりの次の言葉はほら" }] },
                        { text: [{ lyrics: "ポケットの中には…ないからさ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "近づいた" }] },
                        { text: [{ lyrics: "きっと今 そのフレーバーが溶けた" }] },
                        { text: [{ lyrics: "君と同じ瞬間に" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "ドキドキする　その温度でこの気持ち" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（繋がったらいいのにな）" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "甘くて少しだけ爽やかで" }] },
                        { text: [{ lyrics: "胸が痛くなるよ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "冷めてる訳じゃない" }] },
                        { text: [{ lyrics: "何か言いかけたけどやめた" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ビターな、スウィートな、チョコミント" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "「ねえねえ、こっち見てよ」って" }] },
                        { text: [{ lyrics: "カメラを向けた君が眩しすぎて" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "目をつむった" }] },
                        { text: [{ lyrics: "君が笑った" }] },
                        { text: [{ lyrics: "ああ　帰りたくないな" }] },
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
                            text: [{ lyrics: "（これから1,2,3）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "もっと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（ほら1,2,3）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "いくつも思い出を作るんだ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（そしたら1,2,3）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "なんて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（この1,2,3）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "始まる前から数えてた" }]
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
                        { text: [{ lyrics: "気がついた" }] },
                        { text: [{ lyrics: "きっと今　そのクレバーさがまた" }] },
                        { text: [{ lyrics: "ココロの声　困らせる" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "ぐるぐるぐる　もうループで何時間" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（経ったんだろう？言えなくて）" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "甘くてそれだけでもなくて" }] },
                        { text: [{ lyrics: "胸が痛くなるよ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "急な展開期待している　いつだって" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "二人同じ気持ちでいたい" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "それは信じたい" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（Believe In Ourselves）" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "「このチョコ好きなんだ」" }] },
                        { text: [{ lyrics: "それくらい自然に" }] },
                        { text: [{ lyrics: "君に言えたら良いのに" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "近づいた" }] },
                        { text: [{ lyrics: "きっと今 そのフレーバーが溶けた" }] },
                        { text: [{ lyrics: "君と同じ瞬間に" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "ドキドキする　その温度でこの気持ち" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（繋がったらいいのにな）" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "甘くて少しだけ爽やかで" }] },
                        { text: [{ lyrics: "胸が痛くなるよ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "冷めてる訳じゃない" }] },
                        { text: [{ lyrics: "何か言いかけたけどやめた" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ビターな、スウィートな、チョコミント" }] },
                    ],
                },
            ],
        },
    ],
}
