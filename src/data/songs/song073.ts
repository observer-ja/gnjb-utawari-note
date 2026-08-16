/* 多分、僕のソネット */
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

export const song073: SongLyrics = {
    id: "song073",

    lyrics_blocks: [
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "1ミリの後悔も　もう残さないでね" }] },
                        { text: [{ lyrics: "キミと一緒に歩きたい　Fu" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ねえ ホコリを被って眠っていた気持ち" }] },
                        { text: [{ lyrics: "ねえ とりあえず言ってみる？" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "毎日できなくて、悔しくて、ダメダメ" }] },
                        { text: [{ lyrics: "そんなの全部おいておいて" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "んー･･･頭空っぽになんて言うけれど" }] },
                        { text: [{ lyrics: "本当に空っぽな心はどうしましょうか？" }] },
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
                            text: [{ lyrics: "気まぐれな一口だけでしたり顔したり" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "絵的に酔ってみたり" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "例えばパイナップルみたいな明日を" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ガブリと齧ったのはイエスタデイさ" }]
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
                            text: [{ lyrics: "1ミリの後悔も　もう残さないでね" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "きっと最初の勇気" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（不思議）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "大丈夫！ゆらゆら揺れてる夢みたい" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（いつも待ってる）" }]
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
                        { text: [{ lyrics: "「好き」とか「大切」の意味が分かるよ" }] },
                        { text: [{ lyrics: "君と一緒に歩きたい" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "繋がり合って寄りかかって" }] },
                        { text: [{ lyrics: "見上げた星空は綺麗だ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "忘れられないような" }] },
                        { text: [{ lyrics: "胸にしまってたその痛みは" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "熟成して角が取れて　また甘くなる" }] },
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
                            text: [{ lyrics: "なんてわかったような言葉を紡いだり" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "逆に彷徨ってみたり" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "酸いも“愛”も全部注いだら" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "すぐに香り立つ世界" }]
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
                            text: [{ lyrics: "1ミリの後悔も　もう残さないでね" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "そっと寄り添う空気" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（不思議）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "大丈夫！溢れた涙の向こう側" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（キミを見てる）" }]
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
                        { text: [{ lyrics: "いつだって「大切」なモノをあげるよ" }] },
                        { text: [{ lyrics: "サミシイだらけの世界で" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "帰る場所とかキミの声が" }] },
                        { text: [{ lyrics: "混じり合うこの感じ" }] },
                        { text: [{ lyrics: "キライじゃない" }] },
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
                            text: [{ lyrics: "「まあいっか」ってちゃんと笑って" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（そして）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "自分を許して" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（ねえ）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "目と目交わして" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "キミの言葉探そう" }] },
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
                            text: [{ lyrics: "1ミリの後悔も　もう残さないでね" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "きっと最初の勇気" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（不思議）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "大丈夫！ゆらゆら揺れてる夢みたい" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（いつも待ってる）" }]
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
                        { text: [{ lyrics: "「好き」とか「大切」の意味が分かるよ" }] },
                        { text: [{ lyrics: "君と一緒に歩きたい" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "繋がり合って寄りかかって" }] },
                        { text: [{ lyrics: "見上げた星空は綺麗だ" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "絡まり解け絡まるも人生だ" }] },
                        { text: [{ lyrics: "キライじゃない" }] },
                    ],
                },
            ],
        },
    ],
}
