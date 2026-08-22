/* 方程式は恋模様 */
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

export const song069: SongLyrics = {
    id: "song069",

    lyrics_blocks: [
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "胸の鼓動よ落ち着け　BPMがUP Oh NO!!" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(ドキドキ!!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(止まらない!!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(ドギマギ!!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(Oh My God!!)" }]
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
                        { text: [{ lyrics: "朝のチャイム響く教室" }] },
                        { text: [{ lyrics: "君はペンを走らせ夢中" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "教科書広げるふりして" }] },
                        { text: [{ lyrics: "見つめちゃってるよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "目と目が不意にあった瞬間" }] },
                        { text: [{ lyrics: "「どうしたの？」って小さな声で" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "「なんでもない」と目を逸らして" }] },
                        { text: [{ lyrics: "黒板をただ見つめた" }] },
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
                            text: [{ lyrics: "白いチョークで書かれた［問.1］に" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "今答えるのは無理難題" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "数式も追いつかない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "君が何乗にも増やしてく愛" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "もう止まれない" }]
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
                        { text: [{ lyrics: "解けない恋の方程式" }] },
                        { text: [{ lyrics: "知りたい君の事more" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "隣向くと微笑んでさ" }] },
                        { text: [{ lyrics: "好きが増す一方" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "引き算なんて使えなくてさ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "掛け算だらけで止まれないよ" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "君の答え見えなくても" }] },
                        { text: [{ lyrics: "夢中になっていい？" }] },
                        { text: [{ lyrics: "なんて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(ドキドキ!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(止まらない!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(ワカラナイ!!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(君が)" }]
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
                            text: [{ lyrics: "あー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(残念)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "緊急クエスト席替え" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "机の距離が遠すぎて" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "伝えたい言葉届かない" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "シャー芯が折れるこの心みたいに" }] },
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
                            text: [{ lyrics: "僕の人生−君＝空っぽ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "窓の外景色が滲んで" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "(答えも空欄で)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "いつもと同じ景色のはずなのに" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "君がいないだけで違う" }]
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
                            members: ["R"],
                            text: [{ lyrics: "二人の間にある座標に" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "答えを描く術も知らずに" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "遠くなるその背中　届かないよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "難解恋の方程式" }] },
                        { text: [{ lyrics: "むず痒いこの気持ち" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "何にも当てはまらない" }] },
                        { text: [{ lyrics: "方程式崩壊" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "引き算なんか使えなくてさ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "掛け算だらけで先走るの" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君と答え合わせいつかできるかな" }] },
                        { text: [{ lyrics: "なんて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "放課後に君と2人で" }] },
                        { text: [{ lyrics: "僕に話しかけては笑顔で" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "たわいもない会話で　一つ一つ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "君の値文字にできないほどに未解" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "でも何が正解か分からなくても" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "この気持ちだけは本物" }]
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
                        { text: [{ lyrics: "解けない恋の方程式" }] },
                        { text: [{ lyrics: "君が変えてく法則" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "曖昧なヒント伝い" }] },
                        { text: [{ lyrics: "踏み出すよ今" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "無理な計算なんていらない" }] },
                        { text: [{ lyrics: "君に届けるんだもう" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "勇気出せない弱虫には戻らないよ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君がくれた日々記憶の中で" }] },
                        { text: [{ lyrics: "眠らせないように今伝えよう" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "君の事が好きなんだ　隣にいて" }] },
                        { text: [{ lyrics: "(くれないかな？)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(ドキドキ!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(I Love You!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala la lala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(ダイスキ!!)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Lalala lalala" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(君は？)" }]
                        },
                    ],
                },
            ],
        },
    ],
}
