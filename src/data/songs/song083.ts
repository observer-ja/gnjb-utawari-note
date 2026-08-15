/* Silence */
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

export const song083: SongLyrics = {
    id: "song083",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "3秒で冷めた感情デリバリー" }] },
                        { text: [{ lyrics: "僕のトリプトファン不足のせい？" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "不燃ごみに捨てた僕の気持ち" }] },
                        { text: [{ lyrics: "回収不可の張り紙で返される" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "断線したままワイヤレス" }] },
                        { text: [{ lyrics: "silence ギリで繋ぐ状態です" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "アップデートできない my device" }] },
                        { text: [{ lyrics: "会いたいとか言えない" }] },
                        { text: [{ lyrics: "Cold as ice" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "既読にならないロジックだけ" }] },
                        { text: [{ lyrics: "頭の中でグルグルまわる" }] },
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
                            text: [{ lyrics: "タップするたび心にヒビが入る" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "踏み絵のように僕を試す" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "沈黙をやぶらない君を" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "信じたい自分がいる" }]
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
                        { text: [{ lyrics: "君のノイズになって" }] },
                        { text: [{ lyrics: "平穏を揺らしたい" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "完璧なシステムに" }] },
                        { text: [{ lyrics: "僕のバグを残したい" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "信じれば信じるほど" }] },
                        { text: [{ lyrics: "君は答えを教えない" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "それでも僕は" }] },
                        { text: [{ lyrics: "君の声を待っていたい" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "更新されない distance 固まるタイムライン" }] },
                        { text: [{ lyrics: "There's no guideline" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "またまた here we go, what's the シナリオ？" }] },
                        { text: [{ lyrics: "触れた気がしてもまるで蜃気楼のよう" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "マイナス5度の君の心を" }] },
                        { text: [{ lyrics: "温めることができたら" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "気持ち伝えても手応えは ghost" }] },
                        { text: [{ lyrics: "それでも待ちつづけてしまう hope" }] },
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
                            text: [{ lyrics: "タップするたび心にヒビが入る" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "踏み絵のように僕を試す" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "沈黙をやぶらない君を" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "信じたい自分がいる" }]
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
                        { text: [{ lyrics: "君のノイズになりたい" }] },
                        { text: [{ lyrics: "平穏を振り回したい" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "完璧なシステムに" }] },
                        { text: [{ lyrics: "僕のバグを残したい" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "迷うココロの" }] },
                        { text: [{ lyrics: "弱さもゆるしてよ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "沈黙の中で" }] },
                        { text: [{ lyrics: "君の心に触れていたい" }] },
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
                            text: [{ lyrics: "この沈黙に意味を持たせてるのは" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "希望の未練なのか？" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "これは" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ループする秒針抜け出せないメイズ" }] },
                        { text: [{ lyrics: "セーブできないリセットするゲーム" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "期待のエコー" }] },
                        { text: [{ lyrics: "それとも僕が作った音？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "君のノイズになって" }] },
                        { text: [{ lyrics: "平穏を揺らしたい" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "完璧なシステムに" }] },
                        { text: [{ lyrics: "僕のバグを残したい" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "救われたいわけじゃない" }] },
                        { text: [{ lyrics: "君の答えは与えられない" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "それでも僕は" }] },
                        { text: [{ lyrics: "君の声を待っていたい" }] },
                    ],
                },
            ],
        },
    ],
}
