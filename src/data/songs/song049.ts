/* 蝋燭 */
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

export const song049: SongLyrics = {
    id: "song049",
    note: "オク下を歌う吉澤が主旋律である楽曲。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "パッと咲いたHarmony" }] },
                        { text: [{ lyrics: "別にパンチラインでもないのに" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "キャンドルたちの灯り" }] },
                        { text: [{ lyrics: "名前も知らない香水の香り" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "なんか良いよね二人" }] },
                        { text: [{ lyrics: "何も話すわけじゃないのに" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "だけど…まだ切らなくてもいい？" }] },
                        { text: [{ lyrics: "Yeah" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "P"],
                    chunks: [
                        { text: [{ lyrics: "ゆらり動き出すHeart Beat" }] },
                        { text: [{ lyrics: "そう繰り返すChord" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "吸って吐いても忘れてしまうよな" }]
                        },
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "Fantasy" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "ただ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（ただ）" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "今" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（今）" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "繋がるだけでいいから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "甘いのも悪くないな" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "（ああ）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "まどろむサイダー" }]
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
                        { text: [{ lyrics: "どこまでもSlowly Slowlyで" }] },
                        { text: [{ lyrics: "真夜中にCalling Callingです" }] },
                        { text: [{ lyrics: "あとね、5分だけ 5分だけってさ（Stay）" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "乗り乗りで" }] },
                        { text: [{ lyrics: "「おやすみ」じゃ、ねえ 終わりたくないね" }] },
                        { text: [{ lyrics: "黙って続けて良い夢が見れるまで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "パッと咲いたHarmony" }] },
                        { text: [{ lyrics: "別にパンチラインでもないのに" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "キャンドルたちの灯り" }] },
                        { text: [{ lyrics: "名前も知らない香水の香り" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "なんか良いよね二人" }] },
                        { text: [{ lyrics: "それを確かめ合うように" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "今日もStarlightは夜空に" }] },
                        { text: [{ lyrics: "Yeah" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G", "P"],
                    chunks: [
                        { text: [{ lyrics: "「落ち着くその声がいい」" }] },
                        { text: [{ lyrics: "って思ってるはずだねお互いに" }] },
                    ],
                },
                {
                    members: ["S", "P"],
                    chunks: [
                        { text: [{ lyrics: "なんて思っていい？それは本当に" }] },
                        { text: [{ lyrics: "なら嬉しい" }] },
                    ],
                },
                {
                    members: ["Y", "P"],
                    chunks: [
                        { text: [{ lyrics: "3話で止まったままのあのドラマ" }] },
                        { text: [{ lyrics: "最終回はなんかまだ見たくなくて" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "そんなとこまで同じ" }] },
                        { text: [{ lyrics: "逆に運命って話" }] },
                    ],
                },
            ],
        },
        {
            members: ["W", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ただ時が流れてくゆったり" }] },
                        { text: [{ lyrics: "夜の風カーテンがふわり" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "二人だけの世界だつまり" }] },
                        { text: [{ lyrics: "言い訳を探しているMoonlight" }] },
                    ],
                },
            ],
        },
        {
            members: ["B", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "ただ時が流れてくゆったり" }] },
                        { text: [{ lyrics: "夜の風カーテンがふわり" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "二人だけの世界だつまり" }] },
                        { text: [{ lyrics: "言い訳を探しているMoonlight" }] },
                        { text: [{ lyrics: "Yeah" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "どこまでもSlowly Slowlyで" }] },
                        { text: [{ lyrics: "真夜中にCalling Callingです" }] },
                        { text: [{ lyrics: "明日早いから 早いからってさ（Stay）" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "乗り乗りで" }] },
                        { text: [{ lyrics: "「おやすみ」は、ねえ 言いたくなくて" }] },
                        { text: [{ lyrics: "黙って続けてもう夜が明けるまで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "パッと咲いたHarmony" }] },
                        { text: [{ lyrics: "別にパンチラインでもないのに" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "キャンドルたちの灯り" }] },
                        { text: [{ lyrics: "名前も知らない香水の香り" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "なんか良いよね二人" }] },
                        { text: [{ lyrics: "それを確かめ合うように" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "今日もStarlightは夜空に" }] },
                        { text: [{ lyrics: "Yeah" }] },
                    ],
                },
            ],
        },
    ],
}
