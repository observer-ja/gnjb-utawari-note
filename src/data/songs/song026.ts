/* 藍色閃光 */
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

export const song026: SongLyrics = {
    id: "song026",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君の命は君だけのもんだ" }] },
                        { text: [{ lyrics: "息も忘れるほどの青い星で" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "何が怖くて声上げて" }] },
                        { text: [{ lyrics: "泣いていたんだろう" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "ただ一瞬のその光を" }] },
                        { text: [{ lyrics: "燃やすために日々を使い尽くせ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "これからの未来を" }] },
                        { text: [{ lyrics: "決めるのは神の仕業じゃない" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ねぇ彷徨ってる亡霊のような" }] },
                        { text: [{ lyrics: "漂ってる魂のような" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "形のない未開拓な夢の後始末を" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "降り頻る白銀のような" }] },
                        { text: [{ lyrics: "喉を刺す灼熱のような" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "その君の記憶の先を" }] },
                        { text: [{ lyrics: "僕に見せて欲しい" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "壊れるほど繊細で" }] },
                        { text: [{ lyrics: "疑うほど鮮明な" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "毎日を過ごしてきた" }] },
                        { text: [{ lyrics: "これからはさどうしよっかな" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "稲妻が僕を呼んで" }] },
                        { text: [{ lyrics: "雷鳴が聞こえたんだ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ねぇ君と2人で全てを" }] },
                        { text: [{ lyrics: "台無しにしてしまったって" }] },
                        { text: [{ lyrics: "構いやしないよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "B", "R"],
                    chunks: [
                        { text: [{ lyrics: "成層圏を貫いて" }] },
                        { text: [{ lyrics: "その君の剣で切り裂いて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "僕の命ごと晒しあって" }] },
                        { text: [{ lyrics: "君の痛みごと愛しあって" }] },
                    ],
                },
                {
                    members: ["Y", "B", "R"],
                    chunks: [
                        { text: [{ lyrics: "水平線を縦にして" }] },
                        { text: [{ lyrics: "空なんて好きな色に変えて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "運命なんて笑っちゃおうぜ" }] },
                        { text: [{ lyrics: "どうでもよくて忘れちゃおうぜ" }] },
                        { text: [{ lyrics: "だからさ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "君と手を繋いで" }] },
                        { text: [{ lyrics: "曖昧な理想を並べて" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "教科書の端にも書かれない" }] },
                        { text: [{ lyrics: "伝説を作りに行こうよ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "僕たちは自由さ" }] },
                        { text: [{ lyrics: "何だってなれるよ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "あいつらには見えない" }] },
                        { text: [{ lyrics: "物を2人で探しに行くんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "待ち合わせの場所" }] },
                        { text: [{ lyrics: "夢が混ざった停留所" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "乗り込むバスの行き先を" }] },
                        { text: [{ lyrics: "知るのは君以外いないし" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "答えは遥か曇天の" }] },
                        { text: [{ lyrics: "向かうはさらに上空の" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "声も届かないような" }] },
                        { text: [{ lyrics: "掴めないような" }] },
                        { text: [{ lyrics: "果てしない世界" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "この変わりゆく街で変わらない" }] },
                        { text: [{ lyrics: "愛を抱いて世界を睨んでる" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "いつかは忘れてしまうから今だけは" }] },
                        { text: [{ lyrics: "内緒の話をしようよ　2人で" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "混ざり合っていく" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "些細な傷も" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "一つになっていく" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "声になって" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "正しい正しさばかりを" }] },
                        { text: [{ lyrics: "気にするのはもういいかい？ねぇ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "W", "B"],
                    chunks: [
                        { text: [{ lyrics: "延長戦を合図して" }] },
                        { text: [{ lyrics: "その君の瞳で導いて" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "僕の期待ごと背に走って" }] },
                        { text: [{ lyrics: "君の未来ごと手に掴んで" }] },
                    ],
                },
                {
                    members: ["Y", "W", "B"],
                    chunks: [
                        { text: [{ lyrics: "運命星のその先へ" }] },
                        { text: [{ lyrics: "取り留めない話ばかりして" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "相槌だけはさ打ってようぜ" }] },
                        { text: [{ lyrics: "いつかは本当に変えてこうぜ" }] },
                        { text: [{ lyrics: "だからさ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "呆れるほど鈍感で" }] },
                        { text: [{ lyrics: "くたびれるほど退屈な" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "毎日を数えてきた" }] },
                        { text: [{ lyrics: "どのくらい来たんだろうか" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "命懸けと呼べるような" }] },
                        { text: [{ lyrics: "歩みをただ繰り返すから　ねぇ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "君と2人でありもしないはずの" }] },
                        { text: [{ lyrics: "光を探しに宇宙に出ようよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S", "B", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "成層圏を貫いて" }] },
                        { text: [{ lyrics: "その君の剣で切り裂いて" }] },
                    ],
                },
                {
                    members: ["Y", "W", "G"],
                    chunks: [
                        { text: [{ lyrics: "僕の命ごと晒しあって" }] },
                        { text: [{ lyrics: "君の痛みごと愛しあって" }] },
                    ],
                },
                {
                    members: ["S", "B", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "水平線を縦にして" }] },
                        { text: [{ lyrics: "空なんて好きな色に変えて" }] },
                    ],
                },
                {
                    members: ["Y", "W", "G"],
                    chunks: [
                        { text: [{ lyrics: "運命なんて笑っちゃおうぜ" }] },
                        { text: [{ lyrics: "どうでもよくて忘れちゃおうぜ" }] },
                        { text: [{ lyrics: "だからさ" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "君と手を繋いで" }] },
                        { text: [{ lyrics: "曖昧な理想を並べて" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "教科書の端にも書かれない" }] },
                        { text: [{ lyrics: "伝説を作りに行こうよ" }] },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "僕たちは自由さ" }] },
                        { text: [{ lyrics: "何だってなれるよ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "あいつらには見えない" }] },
                        { text: [{ lyrics: "物を2人で探しに行くんだ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "決して消えない光を見るんだ" }] },
                    ],
                },
            ],
        },
    ],
}
