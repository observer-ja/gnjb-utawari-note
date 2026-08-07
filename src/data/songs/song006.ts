/* Joy to the world */
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

export const song006: SongLyrics = {
    id: "song006",
    
    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "君と見たいなMoon Light" }],
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "ほらこんなステップいかがでしょう？" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LaLaLa…)" }],
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Joy to the world" }], },
                    ]
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "二人きりでRoom Light" }],
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ハイなビートで踊り明かそう" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LaLaLa…)" }],
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
                        { text: [{ lyrics: "そっと滑るBLUE　どんな気分？" }], },
                        { text: [{ lyrics: "その目で見届けて興奮" }], },
                    ]
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "忖度も　混濁も" }], },
                        { text: [{ lyrics: "そんなもんじゃないようなもん" }], },
                    ]
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "Ah　割とノリでGo" }], },
                        { text: [{ lyrics: "愛も裁くの？　神様って" }], },
                    ]
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "Ah　割とノリでGo" }], },
                        { text: [{ lyrics: "愛も裁くの？　神様って" }], },
                    ]
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "君のリズムで　頭空っぽで" }], },
                        { text: [{ lyrics: "Oh Yeah" }], },
                    ]
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "真夜中のStep" }], },
                        { text: [{ lyrics: "なんだか怪しげ" }], },
                        { text: [{ lyrics: "窓に映るシルエット" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "そうDA DA DALA Dance" }], },
                        { text: [{ lyrics: "そしてDA DA DALA Dance" }], },
                        { text: [{ lyrics: "楽しく　激しく" }], },
                    ]
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Joy to the world" }], },
                        { text: [{ lyrics: "Joy to the world" }], },
                    ]
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Pump it up！" }], },
                        { text: [{ lyrics: "足りない　まだ物足りない" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "爽快" }], },
                        { text: [{ lyrics: "クリアしたらもっかい New game" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Pump it up！" }], },
                        { text: [{ lyrics: "肝心なのは感じ方だ" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Party time　さあ　回せ" }], },
                        { text: [{ lyrics: "その指まで" }], },
                    ]
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "君を知りたいな　まだ頭の中" }], },
                        { text: [{ lyrics: "大混乱してるの？期待感" }], },
                    ]
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "そう　その瞳で" }], },
                        { text: [{ lyrics: "もっと僕を撃ち抜いて" }], },
                    ]
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "カラカラの砂漠のオアシスに湧き出す" }], },
                    ]
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "露が濡らす" }], },
                        { text: [{ lyrics: "華は夜に咲き乱す" }], },
                    ]
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "まだまだもっとSpeed up" }],
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ほらこんなの初めてでしょ？" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LaLaLa…)" }],
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Joy to the world" }], },
                    ]
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "まだまだもっとPick up" }],
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "足がもつれても踊りましょう" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(LaLaLa…)" }],
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
                        { text: [{ lyrics: "真夜中のStage" }], },
                        { text: [{ lyrics: "何回も熱狂へ" }], },
                        { text: [{ lyrics: "二人の世界線" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "そうDA DA DALA Dance" }], },
                        { text: [{ lyrics: "そしてDA DA DALA Dance" }], },
                        { text: [{ lyrics: "楽しく　激しく" }], },
                    ]
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Joy to the world" }], },
                        { text: [{ lyrics: "Joy to the world" }], },
                    ]
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Pump it up！" }], },
                        { text: [{ lyrics: "足りない　まだ物足りない" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "爽快" }], },
                        { text: [{ lyrics: "クリアしたらもっかい New game" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Pump it up！" }], },
                        { text: [{ lyrics: "肝心なのは感じ方だ" }], },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Party time　さあ　回せ" }], },
                        { text: [{ lyrics: "その指まで" }], },
                    ]
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        {
                            text: [{ lyrics: "(LaLaLa…)" }],
                        },
                    ]
                },
                {
                    chunks: [
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "Chu-Lu Chu Chu-Chu" }],
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "Chu-Lu Chu Chu-Chu" }],
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Joy to the world" }], },
                    ]
                },
                {
                    members: [],
                    chunks: [
                        {
                            text: [{ lyrics: "(LaLaLa…)" }],
                        },
                    ]
                },
                {
                    chunks: [
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "Chu-Lu Chu Chu-Chu" }],
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "Chu-Lu Chu Chu-Chu" }],
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "もう止めないで" }], },
                    ]
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Joy to the world" }], },
                    ]
                },
            ],
        },
    ],
};