export const song_template = {
  id: "song_template" /* idを書く */,
  note: "" /* 注釈 */,

  /* 歌詞全体 */
  lyrics_blocks: [
    {
      /* ブロック分け */
      rows: [
        {
          /* 強制改行 */
          chunks: [
            /* 任意改行 */
            { members: [""], text: [{ lyrics: "歌詞テキスト" }] },
            {
              /* コールパターン */ members: [""],
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
};
