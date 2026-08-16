/* Lion */
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

export const song038: SongLyrics = {
    id: "song038",

    lyrics_blocks: [
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "妄想どうしちゃってスレスレの" }] },
                        { text: [{ lyrics: "キミが強くなっちゃって" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "超身勝手ストレス脳 虹をボクは待てない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "Ride on 鼓動が響く" }] },
                        { text: [{ lyrics: "この雷音キミに伝えたい" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "飢えたケモノはGoin' my way" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "上昇気運乗っかって" }] },
                        { text: [{ lyrics: "コンティニュー、もっかい戦" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "「無理」って言う前に立つんだJOE" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "伸るか反るかで迷ったりしないで" }] },
                        { text: [{ lyrics: "答えは一つ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "No look No look No look No look" }] },
                        { text: [{ lyrics: "No look back!" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "妄想どうしちゃってスレスレの" }] },
                        { text: [{ lyrics: "キミが強くなっちゃって" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "超身勝手ストレス脳 虹をボクは待てない" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "重なる夢 高鳴るYou may" }] },
                        { text: [{ lyrics: "恋の行方 ならいつOK?" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "乗り遅れ What do you say?" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "流されるなこのリアルな" }] },
                        { text: [{ lyrics: "燃えてるのさ野生のHuman" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "キミへの道を" }]
                        },
                        {
                            members: ["Y", "R"],
                            text: [{ lyrics: "邪魔するな" }]
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
                        { text: [{ lyrics: "Lion なびくタテガミ" }] },
                        { text: [{ lyrics: "付和雷同 他人の評価?" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "どうせ奴等はFreaky Freaky" }] },
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
                            text: [{ lyrics: "Welcomeようこそ獲物" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "ターゲットロックオンってどうよ?" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "最強無敵百獣の王" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "愛を喰らうバケモンの子" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "www不可避のWAVE乗ってけ↑" }] },
                        { text: [{ lyrics: "大冒険これはWAISTの上?" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "泣いちゃうね逃げてくなんてBAD↓" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "つ・か・ま・え・た♡" }]
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
                        { text: [{ lyrics: "No look, No look, No look, No look" }] },
                        { text: [{ lyrics: "No look back！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "妄想暴走してギリギリだ" }] },
                        { text: [{ lyrics: "そんな目でボクを見ないで" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "衝動的で理屈じゃない" }] },
                        { text: [{ lyrics: "ボクはキミを待てない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "妄想どうしちゃってスレスレの" }] },
                        { text: [{ lyrics: "キミが強くなっちゃって" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "超身勝手ストレス脳 虹をボクは待てない" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "重なる夢 高鳴るYou may" }] },
                        { text: [{ lyrics: "恋の行方 ならいつOK?" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "乗り遅れ What do you say?" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "流されるなこのリアルな" }] },
                        { text: [{ lyrics: "燃えてるのさ野生のHuman" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "キミへの道を" }]
                        },
                        {
                            members: ["Y", "R"],
                            text: [{ lyrics: "邪魔するな" }]
                        },
                    ],
                },
            ],
        },
    ],
}
