/* ラベンダー */
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

export const song004: SongLyrics = {
    id: "song004",

    lyrics_blocks: [
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Good going　君といた　同じ恋をした" }] },
                        { text: [{ lyrics: "振り向かないまま　未来を選んでよ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "病む前に鼓動　鎮めて" }] },
                        { text: [{ lyrics: "君を見送くれるように" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "朝が始まる度" }] },
                        { text: [{ lyrics: "周回遅れになる心" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ベッドの隣で　枯れてもまだ" }] },
                        { text: [{ lyrics: "甘く匂う　紫の花" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "たった君が一人" }] },
                        { text: [{ lyrics: "僕を好きじゃなくなっただけ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "この爪も　傘も　世界も変わらず" }] },
                        { text: [{ lyrics: "日常続けてる" }] },
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
                            text: [{ lyrics: "君が僕を選ぶファンタジー" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "二人は最後まで演じ切れた" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "元へ戻るだけなのに" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "何が痛むの" }]
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
                        { text: [{ lyrics: "Good-bye now　君と見た　何度も信じた" }] },
                        { text: [{ lyrics: "残像の恋は　キレイなままにして" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "君の忘れもの　捨てたら" }] },
                        { text: [{ lyrics: "未練に化けてしまう" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "好きだった　だから過去にした" }] },
                        { text: [{ lyrics: "思い出の君は　もう僕だけのもの" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "迫り来る孤独　癒して" }] },
                        { text: [{ lyrics: "僕を眠らせてほしい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "どうしても　愛になれずに" }] },
                        { text: [{ lyrics: "無念の恋が　また星に変わった" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "悲しいのは　僕だけじゃない" }] },
                        { text: [{ lyrics: "きっと　君だって" }] },
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
                            text: [{ lyrics: "別の光探し踏み出す" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "二人を過ぎた日々が見守るよ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "間違いなんて何一つ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "無いと教えて" }]
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
                        { text: [{ lyrics: "Good going　君といた　ここまで歩いた" }] },
                        { text: [{ lyrics: "振り向かないまま　未来を選んでよ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "君がいた証　いつかは" }] },
                        { text: [{ lyrics: "カタチもなくなるだろう" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "好きだった　だけど過去にした" }] },
                        { text: [{ lyrics: "引き留めないのは　せめてもの強がり" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "病む前に鼓動　鎮めて" }] },
                        { text: [{ lyrics: "君を見送くれるように" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "離れて進めた二人の物語　いつか" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "語り合えるよね" }] },
                        { text: [{ lyrics: "少しだけ歳をとった笑顔で" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Good-bye now　君と見た　何度も信じた" }] },
                        { text: [{ lyrics: "残像の恋は　キレイなままにして" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "君の忘れもの　捨てたら" }] },
                        { text: [{ lyrics: "未練に化けてしまう" }] },
                    ],
                },
            ],
        },
        {
            members: ["W", "B", "R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "好きだった　だから過去にした" }] },
                        { text: [{ lyrics: "思い出の君は　もう僕だけのもの" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "ラベンダー" }] },
                        { text: [{ lyrics: "乾かない涙　癒して" }] },
                        { text: [{ lyrics: "僕を眠らせてほしい" }] },
                    ],
                },
            ],
        },
    ],
}
