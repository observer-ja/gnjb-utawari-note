/* 貴方に溺れて、僕は潤んで。 */
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

export const song032: SongLyrics = {
    id: "song032",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "曖昧な態度で日々を誤魔化して" }] },
                        { text: [{ lyrics: "その内側は何も見えないマスク" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "笑顔の隅からこぼれる口角が" }] },
                        { text: [{ lyrics: "この生活を彩っていた" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "目の前が歪んでいく" }] },
                        { text: [{ lyrics: "ぬるい雨が染み込んで僕が潤んだ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "さあ　燻んだ藍色の世界で" }] },
                        { text: [{ lyrics: "溺れてしまいましょう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "貴方に恋をしたあの日から" }] },
                        { text: [{ lyrics: "夢を見た　なんて僕は愚かだったのだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "もう　愛？を知った日々を全部壊してよ" }] },
                        { text: [{ lyrics: "全て貴方の手で" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "それは凛と滑稽に溜息(はぁ)　枯れていく" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "本当の終わりとは" }] },
                        { text: [{ lyrics: "ドライフラワーにもできず" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "あっけなくて" }] },
                        { text: [{ lyrics: "でも確かに散っている　喪失感" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "美しさと冷たい匂いがした" }] },
                        { text: [{ lyrics: "貴方という名の花びらは" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "僕を去って飛んでいく" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "あぁ　錆び付いてしまった愛色の世界が" }] },
                        { text: [{ lyrics: "溢れ出して止まらないわ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "恋を見た時から" }] },
                        { text: [{ lyrics: "夢の中　とうに僕は愚かだったようだ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "もう　あい変わらずの曖昧な愛でいい" }] },
                        { text: [{ lyrics: "見えないフリをして" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "恋をした時から" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "溢れ出す退屈と滑稽な世界に" }] },
                        { text: [{ lyrics: "溺れてしまいましょう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "あなたに恋をした日々には" }] },
                        { text: [{ lyrics: "夢を見た　僕とその心を詰め込んで" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "もう　最後の時を飾ってくれないか" }] },
                        { text: [{ lyrics: "全て貴方の手で" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "灰被った世界を壊してよ　あぁ" }] },
                        { text: [{ lyrics: "僕と貴方の手で" }] },
                    ],
                },
            ],
        },
    ],
}
