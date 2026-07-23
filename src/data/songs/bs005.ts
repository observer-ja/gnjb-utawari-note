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
    note: string;
    lyrics_blocks: LyricBlock[];
}

export const bs005: SongLyrics = {
    id: "bs005",
    note: "",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "星降る　夜に生まれた" }] },
                        { text: [{ lyrics: "そのときから" }] },
                        { text: [{ lyrics: "カウントダウンは" }] },
                        { text: [{ lyrics: "スタートしていた" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "時の荒野の" }] },
                        { text: [{ lyrics: "闇のその向こうに" }] },
                        { text: [{ lyrics: "祭囃子の" }] },
                        { text: [{ lyrics: "熱狂を聴いた" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "夜空の彼方　光る星は" }] },
                        { text: [{ lyrics: "使い古しの　サテライトのよう" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "知っている　新たな星座に踊る" }] },
                        { text: [{ lyrics: "心解き放て" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "毎朝、気分塞ぐニュース" }] },
                        { text: [{ lyrics: "垂れ流れる、目の前のループ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "そんな空気吸って、世間知って" }] },
                        { text: [{ lyrics: "何もない大人に turn tail" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "祈りをかける流れ星？" }] },
                        { text: [{ lyrics: "真っ当な勝負の流れ、勝機？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "Come get" },]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "Come get" },]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "このゲーム" },]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "このゲーム" },]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "It has started" },]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "Countdown" },]
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
                        { text: [{ lyrics: "Countdown has started" }] },
                        { text: [{ lyrics: "Oh Yeah" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Countdown" }] },
                        { text: [{ lyrics: "Oh Yeah" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "星を奪いに行くこの旅" }] },
                        { text: [{ lyrics: "いつかたどりつくさ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "似た者同士　銀河系" }] },
                        { text: [{ lyrics: "星屑のパレス" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "不思議な気分" }] },
                        { text: [{ lyrics: "生まれてはじめての気分" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "見たことのない扉が目の前で開くように" }] },
                        { text: [{ lyrics: "変わってゆく" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Go For It！　あの星を奪え" }] },
                        { text: [{ lyrics: "Go For It！　今このときを" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "自分の背中も自分で見れない" }] },
                        { text: [{ lyrics: "自分の声も自分に聴こえない" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "そんな気分、身分、基準、探しをするより" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "自分を忘れ、いざ明日へ" }] },
                        { text: [{ lyrics: "気持ち溢れ、それが運命(さだめ)" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "使い古しのサテライト　その先に" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "It has started" },]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "Countdown" },]
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
                        { text: [{ lyrics: "Countdown has started" }] },
                        { text: [{ lyrics: "Oh Yeah" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Countdown" }] },
                        { text: [{ lyrics: "Oh Yeah" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "カウントダウン！" }] },
                        { text: [{ lyrics: "君と一緒に" }] },
                    ],
                },
            ]
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "カウントダウン！" }] },
                        { text: [{ lyrics: "星を奪いに" }] },
                        { text: [{ lyrics: "時が来たる" }] },
                    ],
                },
            ],
        },
    ],
}