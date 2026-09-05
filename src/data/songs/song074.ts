/* 貴方らしく */
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

export const song074: SongLyrics = {
    id: "song074",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "強がりさえも見透かして" }] },
                        { text: [{ lyrics: "むしろそれも笑い合って" }] },
                        { text: [{ lyrics: "僕らだけにしかわからない言葉で" }] },
                    ],
                },
                {
                    members: ["B", "R"],
                    chunks: [
                        { text: [{ lyrics: "溢れる思いを伝えるから" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "無愛想な世界で" }] },
                        { text: [{ lyrics: "らしく生きていこう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "それなりに生きてはそれなりに歩んできた" }] },
                        { text: [{ lyrics: "でも最近はなんか違うみたい" }] },
                        { text: [{ lyrics: "足取りが軽くなったみたいで" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "立ち止まって見上げる" }] },
                        { text: [{ lyrics: "空の綺麗さに気づいたり" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "靴紐を結び直したり" }] },
                        { text: [{ lyrics: "踏み締める足音も強くなる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "君がピンチの時に" }] },
                        { text: [{ lyrics: "すぐに駆けつけられる僕になりたいけど" }] },
                        { text: [{ lyrics: "結局いつも助けられてしまう" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "照れくさいけどいつもありがとうね" }] },
                        { text: [{ lyrics: "出会った日の煌めきとか" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "向き合うことで生まれる不安" }] },
                        { text: [{ lyrics: "寂しさも全部全部" }] },
                        { text: [{ lyrics: "大切にしたいんだよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "S", "B"],
                    chunks: [
                        { text: [{ lyrics: "誰にも決められなくたって" }] },
                        { text: [{ lyrics: "答えは一つじゃないからさ" }] },
                        { text: [{ lyrics: "僕らだけの歩幅で歩いていこう" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "知りたいと思った瞬間から" }] },
                        { text: [{ lyrics: "胸を締め付ける正体には気付かないフリ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "G"],
                    chunks: [
                        { text: [{ lyrics: "強がりさえも見透かして" }] },
                        { text: [{ lyrics: "むしろそれも笑い合って" }] },
                        { text: [{ lyrics: "僕らだけにしかわからない言葉で" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "変わらぬ思いを伝えるから" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "変わってく世界で" }] },
                        { text: [{ lyrics: "らしく生きていこう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "好きなことを好きなだけ" }] },
                        { text: [{ lyrics: "そう思わせてくれたあの一言" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "透き通った瞳の裏側に" }] },
                        { text: [{ lyrics: "映っている景色の中に" }] },
                        { text: [{ lyrics: "探していたものはあったんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "「君じゃなきゃダメ」じゃなくて" }] },
                        { text: [{ lyrics: "「君だから」って言いたいんだ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "「自分なんか」って漏らす日には" }] },
                        { text: [{ lyrics: "「僕がいる」って言いたいんだ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "そうやって紡いでいくんだろう" }] },
                        { text: [{ lyrics: "手を取り合って逆境さえ" }] },
                        { text: [{ lyrics: "笑い飛ばしていこう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "S", "B"],
                    chunks: [
                        { text: [{ lyrics: "離れないし離さないけど" }] },
                        { text: [{ lyrics: "悩み事は尽きないようだ" }] },
                    ],
                },
                {
                    members: ["W", "G"],
                    chunks: [
                        { text: [{ lyrics: "僕らだけにしかわからない色々" }] },
                    ],
                },
                {
                    members: ["R", "P"],
                    chunks: [
                        { text: [{ lyrics: "鮮やかに彩られていく未来" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "美しい世界で" }] },
                        { text: [{ lyrics: "らしく生きていこう" }] },
                    ],
                },
            ],
        },
    ],
}
