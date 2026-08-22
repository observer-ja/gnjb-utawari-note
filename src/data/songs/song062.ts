/* 遊戯的反逆ノススメ */
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

export const song062: SongLyrics = {
    id: "song062",
    note: "コールの詳細は2024年12月9日に投稿された大倉のAmebaブログを参照。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Da da ra ta ta ta" }] },
                        { text: [{ lyrics: "yeah don’t stop play don't stop play uhh" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Da da ra ta ta ta" }] },
                        { text: [{ lyrics: "俺らdon’t stop play don't stop play" }] },
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
                            text: [{ lyrics: "ガラスのカケラが散らばる大地" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "世も果て人々は怯えてる待機" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "平凡な日々が暗転 no kidding" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "集合する基地企む" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(ドカンと)" , call: true }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "さて明日はどうか渋滞した日常が" }] },
                        { text: [{ lyrics: "埋まる悲しみテレビつけりゃoh god" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "未知を今討伐" }] },
                        { text: [{ lyrics: "解き明かす困難" }] },
                        { text: [{ lyrics: "笑えるよう" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "走るだけ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "どうせ終わるなら" }] },
                        { text: [{ lyrics: "弾けるtill we die" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "読めない数秒先も" }] },
                        { text: [{ lyrics: "掻っ攫って" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "託された期待を背に背負って" }] },
                        { text: [{ lyrics: "未知に放つアンチテーゼ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "終われない終わらない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "窄まれた苗の分も" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "咲いて" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "投げ出した人生なら" }] },
                        { text: [{ lyrics: "朽ち果てるまで" }] },
                        { text: [{ lyrics: "再生再生を" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "Don't stop play 向かうとこ敵なし" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今ちょっと救うか世界俺たち" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Da da ra ta ta ta" }] },
                        { text: [{ lyrics: "yeah don’t stop play don't stop play uhh" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Da da ra ta ta ta" }] },
                        { text: [{ lyrics: "俺らdon’t stop play don't stop play" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "いざ出発暗闇切り裂く" }] },
                        { text: [{ lyrics: "枯れた大地にもう一度咲く" }] },
                        { text: [{ lyrics: "俺らしぶとく汗垂らしながら次の道開く" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "柵を越えて幸掴むこの手で" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "捲る全て立ち止まらず明日に向けて" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "1,2 飛び込む we just get in" }]
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
                        { text: [{ lyrics: "Just get in distorted" }] },
                        { text: [{ lyrics: "歪んだ未来ならこの手で練り戻して" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "止まれない今は" }] },
                        { text: [{ lyrics: "横にいる大事な人が悲しまないようにと" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "荒波に揉まれ舵切って" }] },
                        { text: [{ lyrics: "見つめる先霧がかって" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "越えれないでも終われない" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ここから変えてく1秒" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "先にもしも光が差した" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ならこのまま走るだけだ" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "見えない明日に垂らした涙" }] },
                        { text: [{ lyrics: "これ以上溢さないように" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "(don't stop play!! don't stop play!!)" , call: true }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "どうせ終わるなら" }] },
                        { text: [{ lyrics: "弾けるtill we die" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "読めない数秒先も" }] },
                        { text: [{ lyrics: "掻っ攫って" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "託された期待を背に背負って" }] },
                        { text: [{ lyrics: "未知に放つアンチテーゼ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "終われない終わらない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "窄まれた苗の分も" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "咲いて" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "投げ出した人生なら" }] },
                        { text: [{ lyrics: "朽ち果てるまで" }] },
                        { text: [{ lyrics: "再生再生を" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "Don't stop play 向かうとこ敵なし" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今ちょっと救うか世界俺たち" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Da da ra ta ta ta" }] },
                        { text: [{ lyrics: "yeah don’t stop play don't stop play uhh" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Da da ra ta ta ta" }] },
                        { text: [{ lyrics: "俺らdon’t stop play don't stop play uhh" }] },
                    ],
                },
            ],
        },
    ],
}
