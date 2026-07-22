export const song_template = {
    id: "song_template",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        { members: [""], text: [{ lyrics: "歌詞テキスト" }] },
                        {
                            members: [""],
                            text: [
                                { lyrics: "歌詞テキスト" },
                                { lyrics: "歌詞テキスト", call: true },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
