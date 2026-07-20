export const song_template = {
    id: "song_template", /* idを書く */
    title: "曲名", /* 曲名を書く */
    note: "", /* 注釈 */

    /* 歌詞全体 */
    lyrics_blocks: [
        {
            /* ブロック分け */
            rows: [
                {
                    /* 強制改行 */
                    chunks: [
                        /* 任意改行 */
                        { /* 通常パターン */
                            members: [""],
                            text: [
                                { lyric: "歌詞テキスト" },
                            ],
                        },
                        { /* コールパターン */
                            members: [""],
                            text: [
                                { lyric: "歌詞テキスト"},
                                { lyric: "歌詞テキスト", call: true },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}