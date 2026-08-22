/* カラフるワンダフル */
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

export const song070: SongLyrics = {
    id: "song070",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "レッツライド！" }] },
                        { text: [{ lyrics: "ウィルソン、ココ、ブルースター！" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "なんてこった！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "みんな揃えば、" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "トレインタスティック！" }]
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
                        { text: [{ lyrics: "イロイロな色　マゼコゼしよう" }] },
                        { text: [{ lyrics: "ヒロビロなパレットで" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(いーあい　いーあい　おおお)" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "アシタのキノウ　アベコベ希望" }] },
                        { text: [{ lyrics: "全部叶えるよ" }] },
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
                            text: [{ lyrics: "アレと～" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(コレと～)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ソレと～" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(ソレも！)" }]
                        },
                    ],
                },
                {
                    members: ["Y", "S"],
                    chunks: [
                        { text: [{ lyrics: "欲張りだっていいじゃない" }] },
                        { text: [{ lyrics: "背伸びしたっていいじゃない" }] },
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
                            text: [{ lyrics: "キミも～" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "(キミも～)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "アナタも～" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "(アナタも！)" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "キミだけの色見つけて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B", "R", "G"],
                            text: [{ lyrics: "ぐるぐるぐるる" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ぐるぐるぐるる　いえーい！" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "カラフルるカラフルるワンダフル" }] },
                        { text: [{ lyrics: "カラフルるカラフルる色々だ(だ～！)" }] },
                    ],
                },
                {
                    members: ["Y", "W", "S", "P"],
                    chunks: [
                        { text: [{ lyrics: "カラフルるカラフルるワンダフル" }] },
                        { text: [{ lyrics: "カラフルるカラフルる色々さ" }] },
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
                            text: [{ lyrics: "はじめから" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(一歩リード)" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "続けて" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(一歩二歩)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "大好きな" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(虹色)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "輝く" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(七色)" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "カラフる　カラフる　ワンダフル(フー)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "みんなできっと楽しい日々を" }] },
                        { text: [{ lyrics: "ウキウキなパレードで" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(いーあい　いーあい　おおお)" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "アオゾラの青　タンポポ黄色" }] },
                        { text: [{ lyrics: "笑顔は何色？" }] },
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
                            text: [{ lyrics: "君の、あなたの、みんなの" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "特別な色教えて" }]
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
                            members: ["Y", "W", "S", "P"],
                            text: [{ lyrics: "ぐるぐるぐるる" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ぐるぐるぐるる　いえーい！" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "W", "S", "P"],
                    chunks: [
                        { text: [{ lyrics: "カラフルるカラフルるビューティフル" }] },
                        { text: [{ lyrics: "カラフルるカラフルる最高だ(だ～！)" }] },
                    ],
                },
                {
                    members: ["B", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "カラフルるカラフルるハートフル" }] },
                        { text: [{ lyrics: "カラフルるカラフルる塗りつぶせ" }] },
                        { text: [{ lyrics: "色々さ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ウィルソン！" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "「パーフェクトゥー！」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ココ！" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「トレインタスティック！」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ブルースター！" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "「なんてこった！」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "アクションチャガー！" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "「ビュンビュンビューン！」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "エメリー！" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "「ご乗車くださ～い！」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ジャックマン！" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "「みんなを守る！」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "スピーディー！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "「チャガーの仕事に終わりなし」" }]
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
                            text: [{ lyrics: "みんな揃った？" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "レッツライドー！" }]
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
                            text: [{ lyrics: "ぐるぐるぐるる" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ぐるぐるぐるる" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ぐるぐるぐるる　ぐるぐるぐるる" }]
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "いえーい！　わぁ～！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "カラフルるカラフルるワンダフル" }] },
                        { text: [{ lyrics: "カラフルるカラフルる色々だ(だ～！)" }] },
                    ],
                },
                {
                    members: ["Y", "W", "S", "P"],
                    chunks: [
                        { text: [{ lyrics: "カラフルるカラフルるワンダフル" }] },
                        { text: [{ lyrics: "カラフルるカラフルる色々さ" }] },
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
                            text: [{ lyrics: "はじめから" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(一歩リード)" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "続けて" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(一歩二歩)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "大好きな" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(虹色)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "輝く" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(七色)" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "カラフる　カラフる　ワンダフル(フー)" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "(フー)" }] },
                    ],
                },
            ],
        },
    ],
}
