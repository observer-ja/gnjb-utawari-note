/* 火宴 */
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

export const song084: SongLyrics = {
    id: "song084",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "揺らぐ闇の中火を灯せ" }] },
                        { text: [{ lyrics: "塞がる明日も今こじ開け" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "妥協なんてなし" }] },
                        { text: [{ lyrics: "これが俺のスタンス" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "燃え盛るtaste 喰らいつけ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "この手で定めてく" }] },
                        { text: [{ lyrics: "研ぎ澄まされてるflavor" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "錆びついた扉を蹴りあげて" }] },
                        { text: [{ lyrics: "起こす革命" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "煮えたぎる炎の中で" }] },
                        { text: [{ lyrics: "宿る刃は俺の勲章" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "揺るがぬスタンス" }] },
                        { text: [{ lyrics: "急所突き刺す" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "牙向く運命も高々と笑い飛ばしGO" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "常識なんて捻じ曲げるゆえに負けなんてNO" }]
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
                            members: ["W"],
                            text: [{ lyrics: "答えのない夜を切り刻み" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "降り注ぐスパイス痛みも醍醐味" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "明日が映す未来ならこの手に" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "駆られた衝動湧き立つままに" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "響かせろ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "燃やせその命果てるまで" }] },
                        { text: [{ lyrics: "惑わされず我が身のままで" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "消えた足跡" }] },
                        { text: [{ lyrics: "笑い飛ばせよ" }] },
                        { text: [{ lyrics: "眺めるだけじゃ道は開かない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "揺らぐ闇の中火を荒げ" }] },
                        { text: [{ lyrics: "塞がる明日も今ぶち破って" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "妥協なんてなし" }] },
                        { text: [{ lyrics: "これが俺のスタンス" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "燃え盛るtaste 喰い尽くせ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "渦巻く雑音を" }] },
                        { text: [{ lyrics: "密かに煮詰めたルール" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "踏み外すほどalive" }] },
                        { text: [{ lyrics: "魂が疼く" }] },
                        { text: [{ lyrics: "ジャックポット" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "あーもうちょっと" }] },
                        { text: [{ lyrics: "そんなくだんねぇ" }] },
                        { text: [{ lyrics: "言い訳 no" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "宿すこの手に raw" }] },
                        { text: [{ lyrics: "曲げないやり方 you know" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "調理中の道中" }] },
                        { text: [{ lyrics: "油汚れ染みる sweat" }] },
                        { text: [{ lyrics: "綺麗な見せかけに興味ねえ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "勝負なら泥臭く" }] },
                        { text: [{ lyrics: "ずる賢くても勝ちだけ" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "型にハマって思考止まってんなら、" }] },
                        { text: [{ lyrics: "所詮口だけ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Paradox ぶった斬る" }] },
                        { text: [{ lyrics: "そんなんじゃ退屈" }] },
                        { text: [{ lyrics: "鏡とか興醒め割って俺を塗り替える" }] },
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
                            text: [{ lyrics: "答えのない夜を切り刻み" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "降り注ぐスパイス痛みも醍醐味" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "俺だけが魅せれる明日を提示" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "その目に焼き付けて" }]
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
                        { text: [{ lyrics: "狂わせるその運命さえ" }] },
                        { text: [{ lyrics: "喰らわすこの匙で幕開け" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "響かす残響" }] },
                        { text: [{ lyrics: "脳内侵食" }] },
                        { text: [{ lyrics: "病みつく衝動貪る勝利(御馳走)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "焼き尽くせ迷いごと全て" }] },
                        { text: [{ lyrics: "焦げついた過去も明日のメインディッシュ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "砕けた魔法" }] },
                        { text: [{ lyrics: "ふりかけrevive" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "燃え盛るtaste 掻っ攫え" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "燃え上がるflame 壊すリミッター" }]
                        },
                    ],
                },
            ],
        },
    ],
}
