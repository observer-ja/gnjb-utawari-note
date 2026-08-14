/* Q */
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

export const song034: SongLyrics = {
    id: "song034",

    lyrics_blocks: [
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "躓いた先の一秒一秒を見ていた" }] },
                        { text: [{ lyrics: "上昇気流が吹き上げた雲の果て" }] },
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
                            text: [{ lyrics: "間違いだらけだった昨日の僕らが" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "【間違いだらけだった昨日の僕らが】" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "繰り返しの毎日の中叫んでる" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "何者でもないけどそこに行きたくて" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "【何者でもないけどそこに行きたくて】" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "苛立ちも焦りも全部繋がってる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "夢見るならって" }] },
                        { text: [{ lyrics: "目を瞑ってみた" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "何も見えないって" }] },
                        { text: [{ lyrics: "それだけはわかった" }] },
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
                            text: [{ lyrics: "この風に吹かれて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【始まりはいつでも不安定で】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "どこまでも行こうって" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【それでも理想を追いかけてた】" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "この心の声を" }] },
                        { text: [{ lyrics: "なんと呼べばいいのか" }] },
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
                            text: [{ lyrics: "届かないだなんて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【この先は誰にもわからなくて】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "誰が決めてるんだ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【それこそが生きてる理由だって】" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "この心の声も" }] },
                        { text: [{ lyrics: "間違いだなんて言うのかい" }] },
                        { text: [{ lyrics: "Wow" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "通り雨が過ぎたこの街で流した" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "涙もいつか海に流れて" }] },
                        { text: [{ lyrics: "また雨になるだろう" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "悔しさが僕のためになるなら" }] },
                        { text: [{ lyrics: "もう怖くない" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "何もできなかった" }] },
                        { text: [{ lyrics: "あの日の出来事を歌いたい" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "【そしていつか】" }] },
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
                            text: [{ lyrics: "間違いだらけだった昨日の僕らが" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "【間違いだらけだった昨日の僕らが】" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "誰かの明日の喜びを作ってく" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "何者にもなれているわけじゃないけど" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "【何者にもなれているわけじゃないけど】" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "知りたいのは答えじゃないとわかってる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "僕らの自由が" }] },
                        { text: [{ lyrics: "何か奪うなら" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "何もいらないって" }] },
                        { text: [{ lyrics: "言えるわけないから" }] },
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
                            text: [{ lyrics: "本当に欲しくて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【願ってもまだ手に入らなくて】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "足りないものはなぜ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【遠い空をきっと描いてた】" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "消えてしまいそうな" }] },
                        { text: [{ lyrics: "儚いものなのか" }] },
                        { text: [{ lyrics: "Ah" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "LaLaLa…" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "悩み迷う先で" }] },
                        { text: [{ lyrics: "曖昧にしないで" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "目の前に見つけた" }] },
                        { text: [{ lyrics: "光を離さない" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "もう理想じゃなくて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【弱い気持ち隠しきれなくても】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "届きそうな明日へ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【知らないのは罪だと知ったら】" }]
                        },
                    ],
                },
                {
                    members: ["Y", "W", "R"],
                    chunks: [
                        { text: [{ lyrics: "何もしないなんて" }] },
                        { text: [{ lyrics: "そんな事できないんだ" }] },
                        { text: [{ lyrics: "LaLaLa…" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "正しいかじゃなくて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【音に乗る何度でも何度でも】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "信じてるかなんだ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【大きく羽ばたくことができる】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "この心の声が" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "僕らが歩む未来だ" }]
                        },
                    ],
                },
            ],
        },
    ],
}
