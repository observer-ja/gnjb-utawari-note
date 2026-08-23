/* 因果応報アンチノミー */
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

export const song067: SongLyrics = {
    id: "song067",
    note: "ラスサビの「JUDGE」で一緒に声を出すこともある。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "ANTI ANTI ANTI TI" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "NANANA…" }]
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
                            text: [{ lyrics: "なんだって良いじゃん" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（良いじゃん）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "インガオウホウ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "巡り巡って堂々" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "意外とFreedom" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（イリーガル）" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "啄む" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "だけど" }]
                        },
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "（そもそも関係ない）" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "煩いな" }] },
                        { text: [{ lyrics: "どいつもこいつも評論家" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "でも言ってること以下同文以下" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ねえ喋ってて恥ずかしくはないか？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "An An AAAn An AAAn An" }] },
                        { text: [{ lyrics: "An An AAAn Antinomie" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "An An AAAn An AAAn An" }] },
                        { text: [{ lyrics: "（ANTI ANTI）" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "An An AAAn" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "Antinomie" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（ANTI TI）" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "行きはよいよい" }] },
                        { text: [{ lyrics: "帰りもよいよい" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "此処には誰も" }] },
                        { text: [{ lyrics: "置いてかない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "おかえりエンジョイ" }] },
                        { text: [{ lyrics: "自業自得ですAll" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "地獄のROCK'N'ROLL" }] },
                        { text: [{ lyrics: "天国の階段でライブして" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Return To Myself" }] },
                        { text: [{ lyrics: "自分次第 先へ急げ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "本当おっととととっと" }] },
                        { text: [{ lyrics: "もっともっと行け！未来はLOVE" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ほいほい●でついて行っちゃって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "よいよいぴえぴえ言っちゃって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ほいほい●でついて逝っちゃって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "因果応報JUDGE" }]
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
                            text: [{ lyrics: "An An AAAn" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "Antinomie" }]
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
                            members: ["G"],
                            text: [{ lyrics: "審判はどっち" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（どっち）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "答えないし" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "（うーん）" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "アタリマエナラエ" }] },
                        { text: [{ lyrics: "輪廻転生" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "当たり前だねえ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "当たり障りねえ" }]
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
                            text: [{ lyrics: "サイレント自己啓蒙" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "止まらんボルケーノ" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "もうええでしょ" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "スケープゴート" }] },
                        { text: [{ lyrics: "探して批判のトルネード" }] },
                        { text: [{ lyrics: "から恐怖映像" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "でもなんで怒ってんの？" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（般若）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "なんか溜まってんの？" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（森羅）" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "案外ポテチ咥えながらポチポチ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "の前にエンジョイ" }] },
                        { text: [{ lyrics: "自問自答でしょ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "真実はオープンソース" }] },
                        { text: [{ lyrics: "胸いっぱいの愛をくれ！" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "（JUDGE）" }] },
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
                            text: [{ lyrics: "An An AAAn An AAAn" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "An An AAAn" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "Antinomie" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "An An AAAn An AAAn" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "An An AAAn" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "Antinomie" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "An An AAAn An AAAn An" }] },
                        { text: [{ lyrics: "An An AAAn An AAAn An" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君だけの答えだって" }] },
                        { text: [{ lyrics: "それだけを伝えて" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "おかえり…" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "おかえりエンジョイ" }] },
                        { text: [{ lyrics: "自業自得ですAll" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "地獄のROCK'N'ROLL" }] },
                        { text: [{ lyrics: "天国の階段でライブして" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Return To Myself" }] },
                        { text: [{ lyrics: "自分次第 先へ急げ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "本当おっととととっと" }] },
                        { text: [{ lyrics: "もっともっと行け！未来はLOVE" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ほいほい●でついて行っちゃって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "よいよいぴえぴえ言っちゃって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ほいほい●でついて逝っちゃって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [""],
                            text: [{ lyrics: "（AN）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "因果応報JUDGE" }]
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
                            text: [{ lyrics: "An An AAAn Antinomie" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "An An AAAn" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "Antinomie" }]
                        },
                    ],
                },
            ],
        },
    ],
}
