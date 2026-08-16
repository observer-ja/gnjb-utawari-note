/* 夜夏 */
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

export const song025: SongLyrics = {
    id: "song025",

    lyrics_blocks: [
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "朝日が差し込む頃　残り香乾いた風" }] },
                        { text: [{ lyrics: "浴びる日差し" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "身に纏い直す姿は" }] },
                        { text: [{ lyrics: "いつも通り過ぎて　少し戸惑い" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ハンバーガー、コーラを持って歩き出したり" }] },
                        { text: [{ lyrics: "気慣れた　話し声に寄り添ったり" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "隣どうし合わせ鏡ならば" }] },
                        { text: [{ lyrics: "どちらも深く抱いていたい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "沈み、泣いて歌って" }] },
                        { text: [{ lyrics: "噛んで憂いて　背丈伸ばしたら" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "まだ見ぬ世界が見れるような気がしてた" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Shaba Daba Do Do…Shaba Daba)" }]
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
                        { text: [{ lyrics: "昇り、湧いて笑って" }] },
                        { text: [{ lyrics: "抱いて憂いて　身の丈合わせたら" }] },
                        { text: [{ lyrics: "これもこれでいいさって感情で" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "夜夏に浸ってるんだ" }] },
                        { text: [{ lyrics: "浸ってるんだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "三日月差し込む頃　尖った光目掛け" }] },
                        { text: [{ lyrics: "背伸びをした" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "脱ぎ捨てた纏いは　心も同左して" }] },
                        { text: [{ lyrics: "僕を飾る" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "舌鋒なら　聞き飽きたし" }] },
                        { text: [{ lyrics: "そっと、夜夏にゆらゆられ" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ライターに　魅惑が香りを移したなら" }] },
                        { text: [{ lyrics: "紅、暮れない、夜と決め込んでさ" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "サっと　薄明かりに忍び込んでさ" }] },
                        { text: [{ lyrics: "映る姿見とれた" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "夜夏と昼夜は冬夏" }] },
                        { text: [{ lyrics: "雪と墨となり" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "沈み、泣いて歌って" }] },
                        { text: [{ lyrics: "噛んで憂いて　背丈伸ばしたら" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "まだ見ぬ世界が見れるような気がしてた" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Shaba Daba Do Do…Shaba Daba)" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "昇り、湧いて笑って" }] },
                        { text: [{ lyrics: "抱いて憂いて　身の丈合わせたら" }] },
                        { text: [{ lyrics: "これもこれでいいさって感情で" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "夜夏に浸ってるんだ" }] },
                        { text: [{ lyrics: "浸ってるんだ" }] },
                    ],
                },
            ],
        },
    ],
}
