/* 黄昏よりも早く疾走れ */
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

export const song022: SongLyrics = {
    id: "song022",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "自由になんてなりたくない" }],
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "縛られていたいの" }],
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "Tied up baby" }],
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "精神世界で迷子" }] },
                        { text: [{ lyrics: "狂った妄想 消えない" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "化けの皮 剥がしてしまえば" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "見える少年少女の戯言" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "そんなことだから未だ未だ" }] },
                        { text: [{ lyrics: "傷は増え続ける" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "紫外線も気にせずに" }] },
                        { text: [{ lyrics: "僕らの夏は過ぎてった" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "革靴を脱ぎ捨て" }],
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "笑いあった日々を" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "離したくない" }],
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "忘れたくない" }],
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "The blue sky of my heart" }],
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
                            text: [{ lyrics: "ねえ いつか太陽が翳る前の" }],
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "三分間の残像" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ゆらゆら時駆ける 青い春" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "限界なんてほら" }],
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "破り捨てればいいさ" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "黄昏よりも早く疾走れ…" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Run…）" }],
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "疾走れ…" }] },
                        { text: [{ lyrics: "ああ 満たされないよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "渡せなかった手紙も" }] },
                        { text: [{ lyrics: "目を逸らしてしまった君のことも" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "懐かしくなってしまうこと" }] },
                        { text: [{ lyrics: "それは恐怖なんだよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "水たまりに反射した入道雲と陽炎" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "クラスメイトたちの" }],
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "笑う声が響く" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "どこにいるの" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ここにいるさ" }],
                        },
                        {
                            members: ["S", "R"],
                            text: [{ lyrics: "The blue sky of my heart" }],
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
                        { text: [{ lyrics: "ねえ 今 幻想が霞む前の" }] },
                        { text: [{ lyrics: "三分間の残像" }] },
                        { text: [{ lyrics: "メラメラ燃え落ちる 午後の赤" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "振り返るなんてさ まだ早い気がしてる" }],
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "黄昏よりも早く" }],
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
                        { text: [{ lyrics: "紫外線も気にせずに" }] },
                        { text: [{ lyrics: "僕らの夏は過ぎてった" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "制服を脱ぎ捨て" }],
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "笑いあった日々を" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "離したくない" }],
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "どこにいるの" }],
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "忘れたくない" }],
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ここにいるさ" }],
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "“僕はここにいる”" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "ねえ いつか…" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ねえ いつか太陽が翳る前の" }],
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "三分間の残像" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ゆらゆら時駆ける 青い春" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "限界なんてほら" }],
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "破り捨てればいいさ" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "僕ら今 これから" }],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "どこへいこう" }],
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "翳す手から キラキラこぼれる光浴びて" }],
                        },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "振り返るなんてさ まだ早い気がしてる" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "黄昏よりも早く疾走れ…" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（Run…）" }],
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "疾走れ…" }] },
                        { text: [{ lyrics: "ああ 満たされないよ" }] },
                    ],
                },
            ],
        },
    ],
}
