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

export const bs003: SongLyrics = {
    id: "bs003",
    note: "「ハイ！」のコールで右手のひらを右前に突き出す。また、「Carnival」の部分も腕で「C」の形を作る。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Na na na night" }],
                        },
                        {
                            members: [],
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Na na na night" }],
                        },
                        {
                            members: [],
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
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
                        {
                            text: [
                                { lyrics: "夜更け過ぎ　人知れずこの場所で" },
                            ],
                        },
                        { text: [{ lyrics: "繰り広げられる　The Carnival" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "耳の奥を刺激するKiller Sound" }] },
                        { text: [{ lyrics: "No, Nobody can stop me" }] },
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
                            text: [{ lyrics: "Na na na night" }],
                        },
                        {
                            members: [],
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Na na na night" }],
                        },
                        {
                            members: [],
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "踊って、歌って　自分流" }] },
                        { text: [{ lyrics: "どこまでいけるか　一晩中" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "I'm Going Going Baby" }] },
                        { text: [{ lyrics: "I'm Going Going 永遠" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Feel so nice, Like a paradise" }] },
                        { text: [{ lyrics: "止められない　心　体" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "裸足で　そう　ステップして" }] },
                        {
                            text: [
                                {
                                    lyrics: "Hey, Turn it up, Turn it up, Dance！",
                                },
                            ],
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
                            text: [
                                { lyrics: "Macanas momie qui las calle co" },
                            ],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "めくるめく魅惑の音に溺れよう" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [
                                { lyrics: "Macanas momie qui las calle co" },
                            ],
                        },
                        {
                            members: ["R"],
                            text: [
                                { lyrics: "合わせた手のひらを叩き　始めよう" },
                            ],
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [{ text: [{ lyrics: "Hola" }] }],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Na na na night" }],
                        },
                        {
                            members: [],
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Na na na night" }],
                        },
                        {
                            members: [],
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
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
                            text: [
                                { lyrics: "俺の鼓膜を支配する弾ける音の誓い" },
                            ],
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "すぐ" }],
                        },
                        {
                            members: ["P"],
                            text: [
                                {
                                    lyrics: "そこで光る未来が手招きしてるTonight",
                                },
                            ],
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
                            members: ["B"],
                            text: [{ lyrics: "この先どんな事が起ころうとも" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "We don't care, It's okay" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "この音さえあれば何も要らない" }],
                        },
                        {
                            members: [],
                            text: [{ lyrics: "We will get, It's okay" }],
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
                            text: [
                                { lyrics: "Macanas momie qui las calle co" },
                            ],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "廻れ、廻れ　音の渦に溺れよう" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [
                                { lyrics: "Macanas momie qui las calle co" },
                            ],
                        },
                        {
                            members: ["R"],
                            text: [
                                { lyrics: "後戻り出来ない夜に Bien venidos" },
                            ],
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [{ text: [{ lyrics: "Hola" }] }],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Yeah　やっと見つけた" }] },
                        {
                            text: [
                                { lyrics: "織りなすMelodyと弾むうねるBeat" },
                            ],
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
                        { text: [{ lyrics: "もう聞きたくないんだ" }] },
                        { text: [{ lyrics: "嘘にまみれた浮世のDirty sound" }] },
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
                            text: [
                                { lyrics: "Macanas momie qui las calle co" },
                            ],
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "めくるめく魅惑の音に溺れよう" }],
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: [],
                            text: [
                                { lyrics: "Macanas momie qui las calle co" },
                            ],
                        },
                        {
                            members: ["R"],
                            text: [
                                { lyrics: "合わせた手のひらを叩き　始めよう" },
                            ],
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [{ text: [{ lyrics: "Hola" }] }],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        {
                            text: [
                                {
                                    lyrics: "ハイ！　ハイ！　ハイ！　ハイ！",
                                    call: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
