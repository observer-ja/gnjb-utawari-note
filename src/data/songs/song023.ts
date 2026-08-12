/* J*O*K*E*R */
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

export const song023: SongLyrics = {
    id: "song023",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S", "R"],
                    chunks: [
                        { text: [{ lyrics: "Hello JOKER Hello JOKER" }] },
                        { text: [{ lyrics: "笑顔でサヨナラ" }] },
                    ],
                },
                {
                    members: ["B", "G"],
                    chunks: [
                        { text: [{ lyrics: "Hello JOKER Hello JOKER" }] },
                        { text: [{ lyrics: "痺れを切らした" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W"],
                            text: [{ lyrics: "Hello JOKER Hello JOKER" }]
                        },
                        {
                            members: ["Y", "W"],
                            text: [{ lyrics: "悪魔が躍るような" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "魅惑のエデンへ招待" }]
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
                            text: [{ lyrics: "嗚呼　奈落の底の底まで落とされて" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "夢じゃ誤魔化しきれない生き様で" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "馬鹿みたいだ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "それであなたは　あなたは何を得た？" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "腹の中まで覗いた神様が" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "指差して笑った" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "お手を拝借" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "もう分かってんだろ　分かってんだろ" }] },
                        { text: [{ lyrics: "戻れないことなんて" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "がらんどうの愛撫が" }] },
                        { text: [{ lyrics: "食べきれないんだわ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "もう勘弁だよ　もう勘弁だよ" }] },
                        { text: [{ lyrics: "脈打つその声は" }] },
                        { text: [{ lyrics: "あなた JOKERか？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "常世の間の間しゃしゃり出て" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "悦に入るまま眺めた道化のショー" }] },
                        { text: [{ lyrics: "指差せずにいた" }] },
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
                            text: [{ lyrics: "さぁ　応えは要らない" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "その種も咲き時" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "唄って唄って綺麗なままで" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "壊して仕舞えよ" }]
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
                            members: ["P"],
                            text: [{ lyrics: "高嶺のまま" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "お手を拝借" }]
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
                        { text: [{ lyrics: "もう分かってんだろ　分かってんだろ" }] },
                        { text: [{ lyrics: "戻れないことなんて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "がらんどうの愛撫が" }] },
                        { text: [{ lyrics: "食べきれないんだわ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "もう勘弁だよ　もう勘弁だよ" }] },
                        { text: [{ lyrics: "脈打つその声は" }] },
                        { text: [{ lyrics: "あなたの所為じゃないんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "何なんだよ　何なんだよ" }] },
                        { text: [{ lyrics: "度し難いこのフィクサー" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "噛み切れないエゴが" }] },
                        { text: [{ lyrics: "腐臭を纏っていた" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "笑っちゃうんだわ　笑っちゃうんだわ" }] },
                        { text: [{ lyrics: "育んだ想いよ" }] },
                        { text: [{ lyrics: "僕がJOKERだ" }] },
                    ],
                },
            ],
        },
    ],
}
