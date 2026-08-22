/* Operation Ego */
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

export const song061: SongLyrics = {
    id: "song061",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "不可視のレールに、敷かれた猛毒、" }] },
                        { text: [{ lyrics: "現に介する、安寧を。" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "ただ、規律に対する自縄自縛、" }] },
                        { text: [{ lyrics: "凝り固まる、意識の形状が、" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "押し付けた差異と、ステージの乖離で" }] },
                        { text: [{ lyrics: "奇妙な価値が、生まれていた。" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "いつまでも、こんな絡繰りなんかじゃ、" }] },
                        { text: [{ lyrics: "痛くない事象。" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "天啓通りのロールプレイで、" }] },
                        { text: [{ lyrics: "与えられている帰納法は" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "以下同文だ、とか言わんばかりであり、" }] },
                        { text: [{ lyrics: "強制的に、踊っている。" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "繕ってばかりの、陳腐な態度は、" }] },
                        { text: [{ lyrics: "見破られても、余儀はないが、" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "只管、虚像を纏って紡いでる想像。" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "不完全だった、思考の補正が、" }] },
                        { text: [{ lyrics: "思惟の機会を与えていた。" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "圧殺された時代の隙間から、" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "僅かな自我を、募っていたい" }]
                        },
                        {
                            members: ["Y", "R"],
                            text: [{ lyrics: "衝動！" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "心臓は、未だ、僕らを" }] },
                        { text: [{ lyrics: "人たらしめようと鳴っている" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "心中めいた祈りも虚しく" }] },
                        { text: [{ lyrics: "僕らの声は、聞こえなくなってしまう？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "幻想故の、過剰な期待で" }] },
                        { text: [{ lyrics: "尚更付け入られ、悪循環" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "ただ、雁字搦めの支配を、期待を、" }] },
                        { text: [{ lyrics: "もう形骸化した考えを。" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "抑圧の果てに、吐いた言葉が、" }] },
                        { text: [{ lyrics: "掻き消され、灰になっていた。" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "作られた本意に沿って、動いている傀儡？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "未完成だった理想の意向が" }] },
                        { text: [{ lyrics: "彼方の方で光っていた。" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "際限ない、願望の形から、" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "選択ですら、ままならない" }]
                        },
                        {
                            members: ["W", "S"],
                            text: [{ lyrics: "現状！" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "喝采は、絶えず僕らを" }] },
                        { text: [{ lyrics: "意のままに律したがっている。" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "散々、吐いた数多の嘘から" }] },
                        { text: [{ lyrics: "真の希望を奪い取りたい！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "不完全だった、思考の補正が、" }] },
                        { text: [{ lyrics: "思惟の機会を与えていた。" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "圧殺された時代の隙間から、" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "僅かな自我を、募っていたい" }]
                        },
                        {
                            members: ["Y", "W", "B", "R"],
                            text: [{ lyrics: "衝動！" }]
                        },
                    ],
                },
                {
                    members: ["Y", "W", "R"],
                    chunks: [
                        { text: [{ lyrics: "相対した、最後の姿は" }] },
                        { text: [{ lyrics: "まるで、自分の鏡だった" }] },
                    ],
                },
                {
                    members: ["Y", "W", "R"],
                    chunks: [
                        { text: [{ lyrics: "等身大を叫ぶ声はもう" }] },
                        { text: [{ lyrics: "とっくのとうに" }] },
                        { text: [{ lyrics: "聞こえなくなっていた。" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "不可視のレールに、抗う挑発、" }] },
                        { text: [{ lyrics: "現を脱する、乱行を。" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "ただ、イデアに対する、試行試作" }] },
                        { text: [{ lyrics: "阻止できない、律儀な影響が、" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "組み込んだ勝機と、雑多な在処で" }] },
                        { text: [{ lyrics: "微妙な立場になっていた。" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "いつまでも、こんな絡繰りなんかじゃ、" }] },
                        { text: [{ lyrics: "居たくないでしょう。" }] },
                    ],
                },
            ],
        },
    ],
}
