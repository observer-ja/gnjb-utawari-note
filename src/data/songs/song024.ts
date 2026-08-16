/* 0to1の幻想 */
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

export const song024: SongLyrics = {
    id: "song024",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Let's get this love game started" }] },
                        { text: [{ lyrics: "転送して　乗り込む Starship" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "触れられないアクセス　解析" }] },
                        { text: [{ lyrics: "指先震えて交わるメモリー" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "Make it hotter" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "狂わす Control" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "Let me get that" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "咲かせる　電子Love" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ココロハイズコ『Do you wanna try？』" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "聴こえてるキミの波動" }] },
                        { text: [{ lyrics: "時折見せる機動" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ここから紡ぐ理想" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "パラレル Paradise" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "現実から Runaway" }] },
                        { text: [{ lyrics: "電波受信　ユートピアへ" }] },
                        { text: [{ lyrics: "合わせてく2人のシンクロ Wave" }] },
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
                            text: [{ lyrics: "消えゆく　ドアを" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "I know you are the only one" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "切らせない　その先へと" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "0to1の幻想" }] },
                        { text: [{ lyrics: "AIし合う感情" }] },
                        { text: [{ lyrics: "舞う花火 I'm falling for you" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "100TB　エピソード" }] },
                        { text: [{ lyrics: "光に映る　閃光" }] },
                        { text: [{ lyrics: "届かない筈はない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Every day every night" }] },
                        { text: [{ lyrics: "Need backup" }] },
                        { text: [{ lyrics: "数式的なの？ Let me know!" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(So I got the key," }] },
                        { text: [{ lyrics: "we gotta go see new bright world)" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "Every day every night" }] },
                        { text: [{ lyrics: "Feel your heart" }] },
                        { text: [{ lyrics: "深層心理の奥まで" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(So I got the key," }] },
                        { text: [{ lyrics: "we gotta go see new bright world)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Let's get that CHAOS over" }] },
                        { text: [{ lyrics: "電知電能　ネオンのFlavor" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "目に残す電影　歪みへ" }] },
                        { text: [{ lyrics: "Emojiの❤️で　伝える　メッセージ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "Want you closer" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "弾ける Holy light" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "Let me break that" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "叶わぬ Hold you tight" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "イツカトオクヘ？『Can you come with me？』" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "聴こえないキミの鼓動" }] },
                        { text: [{ lyrics: "釣り合わないその速度" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "それでもいつでも" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "プロセス Load by…" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Wi-fi乗ってRunaway" }] },
                        { text: [{ lyrics: "ノイズ消して　ディストピアへ" }] },
                        { text: [{ lyrics: "繋げてく2人のEasy wave" }] },
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
                            text: [{ lyrics: "見えない　場所を" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "I know you are the only one" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "探し出す　また明日へと" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "0to1の幻想" }] },
                        { text: [{ lyrics: "AIし合う感情" }] },
                        { text: [{ lyrics: "舞う花火 I'm falling for you" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "100TB　エピソード" }] },
                        { text: [{ lyrics: "光に映る　閃光" }] },
                        { text: [{ lyrics: "届かない筈はない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Every day every night" }] },
                        { text: [{ lyrics: "Need backup" }] },
                        { text: [{ lyrics: "数式的なの？ Let me know!" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(So I got the key," }] },
                        { text: [{ lyrics: "we gotta go see new bright world)" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "Every day every night" }] },
                        { text: [{ lyrics: "Feel your heart" }] },
                        { text: [{ lyrics: "深層心理の奥まで" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(So I got the key," }] },
                        { text: [{ lyrics: "we gotta go see new bright world)" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "0to1" }] },
                    ],
                },
            ],
        },
    ],
}
