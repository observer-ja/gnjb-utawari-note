/* 夢之相 - イメノアイ */
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

export const song060: SongLyrics = {
    id: "song060",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "影は寄せて波のように" }] },
                        { text: [{ lyrics: "此処は何処と訊ねている" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "歩き錆びた石杖も" }] },
                        { text: [{ lyrics: "こんな景色は知らない 知らない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "泡沫のようだと眼は云った" }] },
                        { text: [{ lyrics: "斃った夢跡が 未だ怖かった" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "この心は覚えていた" }] },
                        { text: [{ lyrics: "再び集うことを" }] },
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
                            text: [{ lyrics: "うらぶれど 仄聞こゆ いとし声" }]
                        },
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "花は旅 弥終に散るまで" }]
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
                        { text: [{ lyrics: "唄よ往け 祈りのまま" }] },
                        { text: [{ lyrics: "君の泣く その彼方へ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "風に息吹が宿る" }] },
                        { text: [{ lyrics: "その手に触れたのは" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "在りもしない夢だろうか" }] },
                        { text: [{ lyrics: "否や 僕らが夢だろうか" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ならば この胸に咲く" }] },
                        { text: [{ lyrics: "とこしえの炎は" }] },
                        { text: [{ lyrics: "何だ" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "何だ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "色なき砂を編むように" }] },
                        { text: [{ lyrics: "この孤独は伝えられない" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "うつつ 全て悟り合える" }] },
                        { text: [{ lyrics: "そんな言葉を知らない 知らない" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "姿のない黄昏も" }] },
                        { text: [{ lyrics: "傍にあると想えるのは" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "徒花の見た まぼろしか" }] },
                        { text: [{ lyrics: "心よ 答えてくれ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君を想う今" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "つつやみ 仄聞こゆ いとし声" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "花は旅 弥終に還るまで" }]
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
                        { text: [{ lyrics: "君よ往け 命のまま" }] },
                        { text: [{ lyrics: "丘を越え 唄の方へ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "風に息吹が宿る" }] },
                        { text: [{ lyrics: "この手に触れたのは" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "在りもしない夢だとして" }] },
                        { text: [{ lyrics: "いま 僕らは夢だろうか" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "されど 何よりも咲く" }] },
                        { text: [{ lyrics: "とこしえの炎に" }] },
                        { text: [{ lyrics: "集った" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "集った" }] },
                    ],
                },
            ],
        },
    ],
}
