/* 犬と猫とミルクにシュガー */
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

export const song017: SongLyrics = {
    id: "song017",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "日差し強め洒落たオープンカフェで" }] },
                        { text: [{ lyrics: "僕はコーヒーじゃなくて飲む「ラテ」は" }] },
                        { text: [{ lyrics: "君のプードルの名前" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "「ねえ聞いてる？」" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "君は犬派" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "僕は猫派" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "わからないや 答えないな" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "分断 どなたが一番？" }] },
                        { text: [{ lyrics: "普段じゃない 俯瞰で見りゃ茶番" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "誰も彼も答え探して今日は独り" }] },
                        { text: [{ lyrics: "成れの果てもおかげさま" }] },
                        { text: [{ lyrics: "見て、共和主義！" }] },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "Who agreed?" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "わからない" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（わかりたい）" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "話し合い" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（他愛ない）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "分かち合い" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（わたしたち）" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "だがしかし" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（形ない）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "学び合い" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（果し合い）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "奈良時代" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（から至り）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "分かち合い" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（わたしたち）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "渡したい" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "（甘い愛）" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "イメージ通りで 生きてたいけど" }] },
                        { text: [{ lyrics: "否定し遠い目 気にしないでね" }] },
                        { text: [{ lyrics: "今はDon’t stop 駆けめぐって" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "S", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "不完全なんです" }] },
                        { text: [{ lyrics: "観念なんて君は甘すぎんだ" }] },
                    ],
                },
                {
                    members: ["Y", "S", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "わかってないね徹底的" }] },
                        { text: [{ lyrics: "嫌い嫌い嫌い てごわい" }] },
                    ],
                },
                {
                    members: ["W", "B", "P"],
                    chunks: [
                        { text: [{ lyrics: "残念反面教師にだって" }] },
                        { text: [{ lyrics: "愛とかってあんだ？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "角砂糖もう一つ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "君のカップに落とした" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "求む自由" }] },
                        { text: [{ lyrics: "あり得そうか理想かは" }] },
                        { text: [{ lyrics: "曖昧なリズムで指導者ジレンマ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "「なんでもいい」" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "それじゃ決めれんな" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "Put your hands up" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "手あげりゃ" }]
                        },
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "そのせいに Surrender" }]
                        },
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
                            text: [{ lyrics: "一番最初になっちゃったって" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "そりゃ貧乏くじ？" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "道案内 容疑者なんちゃって信号無視" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "所詮君らの" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "Showtime" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "お膳立て気になる正体" }]
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
                        { text: [{ lyrics: "境目なんてあってないよVS." }] },
                        { text: [{ lyrics: "足りねーなんて泣いて毎夜ナーバス" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "蟻と螽斯ですら心理戦" }] },
                        { text: [{ lyrics: "マイノリティーSeekですか？新次元" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "AとB CとDと、" }] },
                        { text: [{ lyrics: "並んでもう言おうよ包囲網と" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "8ビートもういいよ" }] },
                        { text: [{ lyrics: "我慢して共依存もリモート" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "（残念反面教師になって" }] },
                        { text: [{ lyrics: "泣いてたって遅いや）" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "あれも駄目 これも駄目" }] },
                        { text: [{ lyrics: "がんじがらめだね 安全の為" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "不安消えないけど「関係ない」って" }] },
                        { text: [{ lyrics: "みんなそっと We doubt" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "明後日向いて 限定的に" }]
                        },
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "期待 期待 期待 でもWhy?" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "安定じゃんけんぽんに勝って" }] },
                        { text: [{ lyrics: "泣いてたって遅いや" }] },
                    ],
                },
                {
                    members: ["W", "R"],
                    chunks: [
                        { text: [{ lyrics: "あといくつ寝ると…" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "S", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "不完全なんです" }] },
                        { text: [{ lyrics: "観念なんて君は甘すぎんだ" }] },
                    ],
                },
                {
                    members: ["Y", "S", "R", "G"],
                    chunks: [
                        { text: [{ lyrics: "わかってないね徹底的" }] },
                        { text: [{ lyrics: "嫌い嫌い嫌い でもない" }] },
                    ],
                },
                {
                    members: ["W", "B", "P"],
                    chunks: [
                        { text: [{ lyrics: "残念反面教師になって" }] },
                        { text: [{ lyrics: "泣いてたって遅いや" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "角砂糖もう一つ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "僕はそっと隠した" }]
                        },
                    ],
                },
            ],
        },
    ],
}
