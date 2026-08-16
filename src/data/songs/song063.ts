/* 小説ならば */
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

export const song063: SongLyrics = {
    id: "song063",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "君の隣はまだ 空いてるかな" }] },
                        { text: [{ lyrics: "別に言わないでいいよ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "その答えが僕を終わらせてしまう" }] },
                        { text: [{ lyrics: "可能性があるからね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "今となれば随分とまあ　出かけすぎたな" }] },
                        { text: [{ lyrics: "どこもかしこも　全部" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "嫌気がさすほど　君との記憶なんだ" }] },
                        { text: [{ lyrics: "暮らしづらい街になったなあ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "きっと　このお話が小説ならば" }] },
                        { text: [{ lyrics: "またこれも起承転結の一種で" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "最後には君と" }] },
                        { text: [{ lyrics: "結ばれるエンドロールが待ってる" }] },
                        { text: [{ lyrics: "わけがないのに" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "なんでもないようなこと" }] },
                        { text: [{ lyrics: "ばかり溢れ出してしまうよ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "見つける手間が　省けるほどに" }] },
                        { text: [{ lyrics: "君ばかりだ" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "栞をちゃんと挟んだわけでもないのに" }] },
                        { text: [{ lyrics: "すぐ思い出せてしまうんだよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "さよならと言った言葉の" }] },
                        { text: [{ lyrics: "意味は当たり前にわかるよ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "それでもなぜか　心は今日も" }] },
                        { text: [{ lyrics: "わかってないんだよ" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "次の恋でもすればいいのに" }] },
                        { text: [{ lyrics: "バカだよな　まだ君を探してる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "白線の内側では　境目もなく" }] },
                        { text: [{ lyrics: "並んだ二つの影" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "まるでいつかの僕らを見てるようで" }] },
                        { text: [{ lyrics: "またそっと君を思い出す" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "きっと　この瞬間が小説ならば" }] },
                        { text: [{ lyrics: "ここからが面白くなるところだろう" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "それなのに　君は" }] },
                        { text: [{ lyrics: "こんな僕を尻目に歩いてく" }] },
                        { text: [{ lyrics: "ずるいよな　ほんと" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "どうせなら上手いこと" }] },
                        { text: [{ lyrics: "嫌いにさせてから" }] },
                        { text: [{ lyrics: "いなくなってくれよ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "僕だけまだ　あの日の君の背中を" }] },
                        { text: [{ lyrics: "追い続けている" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "終わりから学んだって" }] },
                        { text: [{ lyrics: "この先のどこにも" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "君はいないんだろう" }] },
                        { text: [{ lyrics: "それじゃもう　意味がないのに" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "二度と書き足されずに" }] },
                        { text: [{ lyrics: "振り返ることしか出来ずに" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "あとどれほどに季節とともに" }] },
                        { text: [{ lyrics: "過ごすのだろう" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "あとがきと呼ぶには　拙い言葉だとしても" }] },
                        { text: [{ lyrics: "やっぱり　君のことが好きで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "なんでもないようなこと" }] },
                        { text: [{ lyrics: "ばかり溢れ出してしまうよ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "見つける手間が　省けるほどに" }] },
                        { text: [{ lyrics: "君ばかりだ" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "栞をちゃんと挟んだわけでもないのに" }] },
                        { text: [{ lyrics: "すぐ思い出せてしまうんだよ" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "さよならと言った言葉の" }] },
                        { text: [{ lyrics: "意味は当たり前にわかるよ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "それでもなぜか　心は今日も" }] },
                        { text: [{ lyrics: "わかってないんだよ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "次の恋でもすればいいのに" }] },
                        { text: [{ lyrics: "バカだよな" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ずっと君を探してる" }] },
                    ],
                },
            ],
        },
    ],
}
