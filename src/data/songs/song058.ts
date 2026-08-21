/* P-P-P-PERO */
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

export const song058: SongLyrics = {
    id: "song058",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ダバダバ・シャバダバ" }] },
                        { text: [{ lyrics: "ダダダ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "ダバダバ・シャバダバ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "PEPEPEPE…" }]
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
                            members: ["Y"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "何が正解で" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "何が駄目ですか？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "本当はしたくて" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "したくてたまらない" }]
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
                        { text: [{ lyrics: "契り=約束" }] },
                        { text: [{ lyrics: "千切られたなら" }] },
                        { text: [{ lyrics: "破られる" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君と君と一緒にいよう" }] },
                        { text: [{ lyrics: "そしたらほら、だからだから…Ah" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ねえねえねえ" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（Dream）" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Dream Dream Dreamで味見する" }] },
                        { text: [{ lyrics: "おかしなお菓子は何で出来てる？" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（それはCream）" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Cream Cream Creamでできている" }] },
                        { text: [{ lyrics: "好きだけで満たされてる" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（だけど）" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "扉つけるの忘れた うっかり忘れた" }] },
                        { text: [{ lyrics: "それでも！Happyなら！OKです！" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（だから）" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ひとつ見つけたら ひとつ無くしちゃう" }] },
                        { text: [{ lyrics: "全部ちょうだい" }] },
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
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（LaLaLa…）" }]
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
                            members: ["S"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（LaLaLa…）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "何が真っ白で" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（LaLaLa…）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "何が黒ですか？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（LaLaLa…）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "本当は見えても" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "PEPEPEPE-RO！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（LaLaLa…）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "見えないふりしてるかも" }]
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
                        { text: [{ lyrics: "ねえねえねえ" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（Dream）" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "Dream Dream Dreamで生きている" }] },
                        { text: [{ lyrics: "つまらないくらいならつまみぐい" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（それはCream）" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Cream Cream Creamが甘すぎる" }] },
                        { text: [{ lyrics: "甘すぎなら大丈夫" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "（だけど）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "だけど" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "本当じゃなくても" }] },
                        { text: [{ lyrics: "嘘でもないもの" }] },
                        { text: [{ lyrics: "子供で大人で半分で" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（だから）" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "扉はなくても" }] },
                        { text: [{ lyrics: "心はあるもの" }] },
                        { text: [{ lyrics: "まさか逆さま Ah" }] },
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
                            text: [{ lyrics: "zzz…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ずっと忘れてた" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "ことすらも忘れてた" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "zzz…" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "夢の中を泳いでるような" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Ha…）" }]
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
                        { text: [{ lyrics: "ねえねえねえ" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（Dream）" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Dream Dream Dreamで味見する" }] },
                        { text: [{ lyrics: "味見だけじゃなんだか終われない" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（それはCream）" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Cream Cream Creamでできている" }] },
                        { text: [{ lyrics: "好きだけで満たされてる" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "（だから）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "だから" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "一口あげちゃう たくさんあげちゃう" }] },
                        { text: [{ lyrics: "それする！Happyする！Ruleです！" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（だけど）" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "二口あげたら なくなっちゃうから" }] },
                        { text: [{ lyrics: "ちょっとにする…でも！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "開け そう Happy ending" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "開け そう Happy ending" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "開け そう Happy ending" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "だけどページはそのまま" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "（だから）" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "開け そう Happy ending" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "開け そう Happy ending" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "S"],
                            text: [{ lyrics: "PEPEPEPE…" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "開け そう Happy ending" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "お楽しみはこれから？" }] },
                        { text: [{ lyrics: "バイバイ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ダバダバ・シャバダバ" }] },
                        { text: [{ lyrics: "ダダダ" }] },
                        { text: [{ lyrics: "ダバダバ・シャバダバ" }] },
                    ],
                },
            ],
        },
    ],
}
