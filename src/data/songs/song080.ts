/* ニヒリズムプリズム */
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

export const song080: SongLyrics = {
    id: "song080",

    lyrics_blocks: [
        {
            members: ["R", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "虚無虚無虚無虚無 Sadしたくない" }] },
                        { text: [{ lyrics: "虚無虚無虚無虚無 さあどうしたい" }] },
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
                            text: [{ lyrics: "何時何時こうすれば Make it up?" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（夢見た）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "空の隙間から Make it up?" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（的な）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "イミテーション撫でた混沌の歯" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "（強行突破）" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "始まりはいつもノスタルジックマジック" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "だってだってだってワイワイ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "わかってんだってだって Why? Why?" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "なんでかってまあうざったい" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "（虚無虚無虚無虚無 Sadしたくない）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "待って待って待って幸い" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "やっぱやっぱまだ足んない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "かつてないほど分かんない" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "（虚無虚無虚無虚無 さあどうしたい）" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "軌跡を眺めてた" }] },
                        { text: [{ lyrics: "寄る辺もないままに" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "戦慄とプリズム" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "しんぱしーだってわたがし" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "懶い願いはファンタジーだったり" }]
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
                        { text: [{ lyrics: "アイムソーリー　バイバイ　運命に期待" }] },
                        { text: [{ lyrics: "表裏一体　もういいかい？まだ足りない？" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "やめないで　蒼穹のスポットライト" }] },
                        { text: [{ lyrics: "何度だって信じたっていいんじゃない！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "DaDaDaDa 誰が DaDaDaDa 駄目だ？" }] },
                        { text: [{ lyrics: "Me? me? 意味深 I my I my な野心" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "DaDaDaDa 大胆 DaDaDa Dance Floor" }] },
                        { text: [{ lyrics: "Me? me? 踊れよ　曖昧に自然体" }] },
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
                            text: [{ lyrics: "どう転んでも人間だし" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（虚しい）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "危ない橋は見たいし" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（渡りたいし）" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "回り道もやがてグラヴィティー" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "一歩進んで" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "戻って" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "意地悪 REAL" }]
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
                            text: [{ lyrics: "だってだってだって Wi-Fi" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "不安定だって待って　泣きたい" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "ぜんぶぜんぶぜんぶ Lie Lie" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "あっちこっちそっち界隈" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "夜明け前が Most 暗い暗い" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "かけがえない愛は Lifeline" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "でも肌感で開いたドアに期待" }] },
                        { text: [{ lyrics: "自由自在　この世は化かし合い" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "詰まらない言い訳じゃ埋まらない" }] },
                        { text: [{ lyrics: "貴方と貴方の隙間" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "あの雲は何処から来たの" }] },
                        { text: [{ lyrics: "何処へ消えてゆくの" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "風の中に春の終わり" }] },
                        { text: [{ lyrics: "きらきら舞う旋律" }] },
                    ],
                },
            ],
        },
        {
            members: ["R", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "（虚無虚無虚無虚無 Sad…）" }] },
                        { text: [{ lyrics: "（虚無虚無虚無虚無…）" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "曲げないって撥ねても良い" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "なくても良い" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "受け取ってみても良い" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "躊躇いって行く先を変える光のために" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "「急に、晴れたね」" }] },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "アイムソーリー　バイバイ　運命に期待" }] },
                        { text: [{ lyrics: "表裏一体　もういいかい？まだ足りない？" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "やめないで　蒼穹のスポットライト" }] },
                        { text: [{ lyrics: "何度だって信じたっていいんじゃない！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "DaDaDaDa 誰が DaDaDaDa 駄目だ？" }] },
                        { text: [{ lyrics: "Me? me? 意味深 I my I my な野心" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "DaDaDaDa 大胆 DaDaDa Dance Floor" }] },
                        { text: [{ lyrics: "Me? me? 踊れよ　曖昧に自然体" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "虚無虚無虚無虚無虚無虚無虚無虚無" }] },
                    ],
                },
            ],
        },
    ],
}
