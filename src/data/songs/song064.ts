/* Go to the Moon */
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

export const song064: SongLyrics = {
    id: "song064",
    note: "グループとして初の公式タオル回し楽曲。コール部分はメンバーが煽ってくれる。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ロケット バズーカ飛ばして" }] },
                        { text: [{ lyrics: "バカも休み休みで行こうぜ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "指先だけじゃ世界取れないぞ" }] },
                        { text: [{ lyrics: "フル･スウィングして" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "あたって砕けてもOK" }] },
                        { text: [{ lyrics: "全て吐き出してけ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "我慢なんてしたって褒めてくれない" }] },
                        { text: [{ lyrics: "Because I’m Serious" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "自分の人生 いつも真剣" }] },
                        { text: [{ lyrics: "邪魔すんなら覚悟を持ってきてくれ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "新聞の一面 なんて知らんね" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "窓でも拭いとけよ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Wow）" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "R"],
                    chunks: [
                        { text: [{ lyrics: "稀有なシチュエーション" }] },
                        { text: [{ lyrics: "描け急上昇" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "見届けてよ Oh Oh" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Oh!）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Go to the Moon）" }]
                        },
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "その先へと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Go to the Moon）" }]
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "ついて来れんの？" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "近づく太陽" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "自然とバズった そんな人生" }] },
                        { text: [{ lyrics: "バカとなんとかは紙一重" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "月まで行けば世界広がるぞ" }] },
                        { text: [{ lyrics: "宇宙も取っちゃって" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "願いは叶えるもの Someday" }] },
                        { text: [{ lyrics: "光は作り出すもの" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "昨日見ていた夢はもう夢じゃない" }] },
                        { text: [{ lyrics: "Yes I’m Serious" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "無重力で キミとすげー" }] },
                        { text: [{ lyrics: "そらの果てまで行こう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "G"],
                    chunks: [
                        { text: [{ lyrics: "異常なインプレッション" }] },
                        { text: [{ lyrics: "いつも急成長" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "見逃すなよ Oh Oh" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Oh!）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "（Go to the Moon）" }]
                        },
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "地上の渋滞も" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "（Go to the Moon）" }]
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "飛び越えてGo" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "近づく最高" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Oh Oh…" , call: true }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Hi Hi…" , call: true }] },
                        { text: [{ lyrics: "（Wow）" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "GOOOOOOO!!!!!!!" }] },
                    ],
                },
                {
                    members: ["W", "R"],
                    chunks: [
                        { text: [{ lyrics: "稀有なシチュエーション" }] },
                        { text: [{ lyrics: "描け急上昇" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "見届けてよ Oh Oh" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Oh!）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Go to the Moon）" }]
                        },
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "その先へと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Go to the Moon）" }]
                        },
                        {
                            members: ["S", "B"],
                            text: [{ lyrics: "ついて来れんの？" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "近づく太陽" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Oh Oh…" }] },
                    ],
                },
            ],
        },
    ],
}
