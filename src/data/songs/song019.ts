/*  灼けゆく青 */
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

export const song019: SongLyrics = {
    id: "song019",
    note: "ポエトリーリーディングが特徴の楽曲。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "酷く憂鬱が染み付いた夜に" }] },
                        { text: [{ lyrics: "じっと、悲しさだけをみつめていた" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "分かり合えない教室の片隅" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "二度と逢えないあなたと想い出" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "そっと、癒えない涙が滲んだ" }]
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
                        { text: [{ lyrics: "鋭い言葉や灼ける視線が" }] },
                        { text: [{ lyrics: "僕らの柔い傷口を深く切り裂いた" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "空白を静かに塗り潰す様に" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "虚ろな涙を満たす様に" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "僕らは口も噤めなかった" }]
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
                        { text: [{ lyrics: "酷く 違って、違って、違っていた。" }] },
                        { text: [{ lyrics: "足掻いた全ても" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "うたって、うたって、うたっていた。" }] },
                        { text: [{ lyrics: "心も枯れて" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ら〜 癒えぬ傷と" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ら〜" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "僕らのうた" }]
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
                        { text: [{ lyrics: "いつまで経とうが誰かの所為で" }] },
                        { text: [{ lyrics: "澄んだ空気すら死んでいた" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "「何で？」なんて 泣いてたって" }] },
                        { text: [{ lyrics: "救われることすらないんでしょう" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "深いため息 眩む呪い" }] },
                        { text: [{ lyrics: "浅い呼吸に 恨む憶い" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "脆くて遠い宝石の様な" }] },
                        { text: [{ lyrics: "それはきっと 灼けゆく青" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "果てしないほど沈んでゆく毎日で" }] },
                        { text: [{ lyrics: "僕らは喪失感すらも失ってしまった" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "忌み嫌った苦渋すらも" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "蝉のやまない真夏すらも" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "懐かしく想えたその情景は" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "酷く素敵でした" }]
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
                        { text: [{ lyrics: "塞いで、塞いで、塞いでいた。" }] },
                        { text: [{ lyrics: "孕んだ事実も" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "染まって、染まって、染まっていた。" }] },
                        { text: [{ lyrics: "飲み干せぬ今も" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "酷く 違って、違って、違っていた。" }] },
                        { text: [{ lyrics: "足掻いた全ても" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "うたって、うたって、うたっていた。" }] },
                        { text: [{ lyrics: "心も枯れて" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "ら〜 癒えぬ傷と" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ら〜" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "僕らのうた" }]
                        },
                    ],
                },
            ],
        },
    ],
}
