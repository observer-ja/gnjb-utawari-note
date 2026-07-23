export interface LyricText {
    lyrics: string;
    call?: boolean;
    members?: string[];
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
    note: string;
    lyrics_blocks: LyricBlock[];
}

export const song_template: SongLyrics = {
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
