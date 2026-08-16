/* パラノイドランデブー */
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

export const song075: SongLyrics = {
    id: "song075",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Ah" }] },
                        { text: [{ lyrics: "危ない" }] },
                        { text: [{ lyrics: "ランデブー" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "混ぜるな危険と刻まれたドア" }] },
                        { text: [{ lyrics: "開けようとして気取ってみたんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "SOSが小さすぎて見えない" }] },
                        { text: [{ lyrics: "極端な海に覆われて" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "楽しそうに人の心を握りつぶす" }] },
                        { text: [{ lyrics: "波は高い" }] },
                        { text: [{ lyrics: "嫌になるけど今日もあちこちで" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "はい、チーズ" }] },
                        { text: [{ lyrics: "撮られて" }] },
                        { text: [{ lyrics: "満面のポーズを" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "悲しい顔なんて載せられないでしょ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "パラノイドな頭の中" }] },
                        { text: [{ lyrics: "まだシェイクしてないの？" }] },
                        { text: [{ lyrics: "いつまでも井の中の蛙でいたいの？" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "声の洪水の外側から叫んでも" }] },
                        { text: [{ lyrics: "聞こえないから意味がない" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "はしゃぐ悪意の裏側" }] },
                        { text: [{ lyrics: "隠せてはいないよ" }] },
                        { text: [{ lyrics: "賢くないダブスタがしっかり浮き出る" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "仮面を取らずにバイバイさ" }] },
                        { text: [{ lyrics: "先に物知り顔に" }] },
                        { text: [{ lyrics: "後に知る君はいつ" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "はい、チーズ" }] },
                        { text: [{ lyrics: "撮られて" }] },
                        { text: [{ lyrics: "パシャッ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "はい、チーズ" }] },
                        { text: [{ lyrics: "撮られて" }] },
                        { text: [{ lyrics: "3、2、1" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "荒れ果てたシステム" }] },
                        { text: [{ lyrics: "嘲笑うストーリー" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "メタにメタを重ねて" }] },
                        { text: [{ lyrics: "複雑になる" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "誰が誰を見ていて" }] },
                        { text: [{ lyrics: "誰に何を見られてる" }] },
                        { text: [{ lyrics: "そんなこともわからない箱の中で騒いでる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "Ah" }] },
                        { text: [{ lyrics: "危ない" }] },
                        { text: [{ lyrics: "ランデブー" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "混ぜるな危険と刻まれたドア" }] },
                        { text: [{ lyrics: "開けようとして気取ってみたんだ" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "はい、チーズ" }] },
                        { text: [{ lyrics: "撮られた" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "パラノイドな頭の中" }] },
                        { text: [{ lyrics: "まだシェイクしてないよ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "パドリング最中の言葉" }] },
                        { text: [{ lyrics: "捕まえられないよ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "声の洪水の外側から叫んでも" }] },
                        { text: [{ lyrics: "気付かないから意味がない" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "はしゃぐ悪意の裏側" }] },
                        { text: [{ lyrics: "隠せてはいないよ" }] },
                        { text: [{ lyrics: "賢くないダブスタが定着してしまうよ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "仮面を取らずにバイバイさ" }] },
                        { text: [{ lyrics: "先に物知り顔に" }] },
                        { text: [{ lyrics: "後に知る君もいつか" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "はい、ポーズ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "優しい目で頭の中" }] },
                        { text: [{ lyrics: "空にして会おうよ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "もっと遠くへ　もっと遠くで" }] },
                        { text: [{ lyrics: "ランデブーをしようよ" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "デジタルの海水浴じゃ心は洗えない" }] },
                        { text: [{ lyrics: "みんなで出て行かない？" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "はしゃぐのは目を見てさ" }] },
                        { text: [{ lyrics: "空いた穴塞いで" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ズレた想いを溶かして" }] },
                        { text: [{ lyrics: "いつか固めよう" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "危機的な青写真を見て" }] },
                        { text: [{ lyrics: "笑える日が来ますように" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "Ah" }] },
                        { text: [{ lyrics: "優しい" }] },
                        { text: [{ lyrics: "ランデブー" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "隣にいる人にならわかるさ" }] },
                        { text: [{ lyrics: "素顔を見せて交わす心" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "はい、チーズ" }] },
                        { text: [{ lyrics: "笑顔で" }] },
                        { text: [{ lyrics: "3、2、1" }] },
                    ],
                },
            ],
        },
    ],
}
