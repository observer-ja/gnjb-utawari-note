export interface LyricText {
    lyrics: string;
    call?: boolean;
    members?: string[];
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

export const bs002: SongLyrics = {
    id: "bs002",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "どんな騒がしいとこでも" }] },
                        { text: [{ lyrics: "不思議なくらい聞こえてくる" }] },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "近づいてくるその声に" }] },
                        { text: [{ lyrics: "I think I like you." }] },
                    ]
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "こんな事で落ちる恋なんて" }] },
                        { text: [{ lyrics: "アンビリーバボーでなんか不安定" }] },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "きっとアナタはワタシの見た目" }] },
                        { text: [{ lyrics: "仕方ないけどThat's it" }] },
                        { text: [{ lyrics: "認める　だって" }] },
                    ]
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "もう虜　パニックを" }] },
                        { text: [{ lyrics: "オサエラレナイこの気持ちを" }] },
                    ]
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "ねぇなんで？" }] },
                        { text: [{ lyrics: "もしかしてアンサーは？" }] },
                    ]
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "アナタが囁いた声が" }] },
                        { text: [{ lyrics: "ココロつかんで離さない" }] },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "“I need your voice”" }] },
                        { text: [{ lyrics: "気付いてないでしょ？　欲しくなるの…" }] },
                    ]
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ナニしてても" }] },
                        { text: [{ lyrics: "ドコにいても" }] },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "どんな時も" }] },
                        { text: [{ lyrics: "その声に触れていたいの" }] },
                    ]
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "想う気持ちが深くなるほど" }] },
                    ]
                },
                {
                    chunks: [
                        { text: [{ lyrics: "魅せられていく" }] },
                        { text: [{ lyrics: "揺れるMy heart" }] },
                    ]
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "気づいて" }] },
                        { text: [{ lyrics: "近づいてる？" }] },
                        { text: [{ lyrics: "キョリ感じてるのワタシだけ？" }] },
                    ]
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "一瞬で" }] },
                        { text: [{ lyrics: "恋して" }] },
                        { text: [{ lyrics: "止まらなくなるジブンがScared" }] },
                    ]
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "I've lost my voice" }] },
                    ]
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "“I need your voice”" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "心の中は" }]
                        },
                    ]
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "“I need your voice”" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "繰り返しちゃう" }]
                        },
                    ]
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [{ lyrics: "“I need your voice”" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "I'm so in love with you" }]
                        },
                    ]
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "There's no turning back" }] },
                        { text: [{ lyrics: "The thing is..." }] },
                    ]
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "I don't want to return" }] },
                    ]
                },
            ],
        },
    ],
}