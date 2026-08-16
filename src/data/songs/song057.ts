/* Mania */
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

export const song057: SongLyrics = {
    id: "song057",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "DDGDD" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "タノシクナリタイだけのバケモノ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "DDGDD" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ツナワタリならGuilty" }]
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
                        { text: [{ lyrics: "DDGDD" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "自覚症状 誰でもなくても" }] },
                        { text: [{ lyrics: "ハマりだす" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "TRAP TRAP TRAP TRAP TRAPで" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "噂話 嘘ばかり" }] },
                        { text: [{ lyrics: "ちょっ、待って 量産型に紛れるフリ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "嫉妬(ジェラス)に焼かれるほど唯一無二" }] },
                        { text: [{ lyrics: "ヤバすぎ" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "TRAP TRAP TRAP TRAP TRAPで" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "情報処理落ちボチボチ頭クラクラクラ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "暗いベイBee" }]
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
                            members: [],
                            text: [{ lyrics: "DDGDD" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "隠した裏の顔は見せないよ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "DDGDD" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "確信犯の笑顔じれったいよ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "DDGDD" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "わるいやつらから君を守るよ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "壊れた世界を創り直すの" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "Overdose of LOVE" }]
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
                        { text: [{ lyrics: "DiGiDiDaRaDa" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "どうして？肌" }] },
                        { text: [{ lyrics: "どうして？髪" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "存在自体" }] },
                        { text: [{ lyrics: "妄想ですか？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Get it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "Already" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "どうして？まだ" }] },
                        { text: [{ lyrics: "どうして？噛み" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "そんな痛み" }] },
                        { text: [{ lyrics: "待ってました" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Forget it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "腐った闇なら光ともして" }] },
                        { text: [{ lyrics: "草すら生えない夢で会おうね" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "実感いったん逝ったり期たり" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Bet it）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "一体感が欲しいだけ" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Overdose of LOVE" }] },
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
                            text: [{ lyrics: "アメよりムチが好きなんでしょ？" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "それしか知らないだけだよ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "脳が溶けてく音きいてる" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "激重(いつもの)感情" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "やっと逢えた" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ちゃんと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "上手、上手。" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "きいて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "頂" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "上" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "何" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "％？" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ズ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "ル" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "い" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "よ" }]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Overdose of LOVE" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "DiGiDiDaRaDa" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "どうして？罪" }] },
                        { text: [{ lyrics: "どうして？詰み" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "一回目の" }] },
                        { text: [{ lyrics: "正直感" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Get it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "So how many times?" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "どうして？何" }] },
                        { text: [{ lyrics: "どうして？神" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "大間違いな" }] },
                        { text: [{ lyrics: "生か死か" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Forget it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
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
                        { text: [{ lyrics: "無理っぽいのが説明できないときも そっか" }] },
                        { text: [{ lyrics: "出逢ったのは奇跡だからしょうがないよ" }] },
                        { text: [{ lyrics: "おっけー！" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ただ 色や形とか嫌いなものとか" }] },
                        { text: [{ lyrics: "そんなの要らないって言ってくれたような" }] },
                        { text: [{ lyrics: "余分なノクターン" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "どうして？" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "そう知ってた" }] },
                        { text: [{ lyrics: "こうしてたい" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "存在自体" }] },
                        { text: [{ lyrics: "妄想ですか？" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "Wo o o…（Get it）Wo o o…" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "それでもいいや" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "どうして？まだ" }] },
                        { text: [{ lyrics: "どうして？噛み" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "そんな痛み" }] },
                        { text: [{ lyrics: "待ってました" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Forget it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "腐った闇なら光ともして" }] },
                        { text: [{ lyrics: "草すら生えない夢で会おうね" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Bet it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "伝えたならどこかにいっちゃいますか" }] },
                        { text: [{ lyrics: "信じたら嘘も信じちゃいますか" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（Get it）" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "Wo o o…" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Overdose of LOVE" }] },
                    ],
                },
            ],
        },
    ],
}
