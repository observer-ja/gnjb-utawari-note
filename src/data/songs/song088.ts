/* 爛爛LOVE */
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

export const song088: SongLyrics = {
    id: "song088",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "目が合った0.8秒　信号待ちの50cm" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "近い！" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（そう？）" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "遠い？" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（そう！）" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "どの距離でもキャパオーバー" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "返信までの56分で気持ちは世界一周さ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "迷う！" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（そう？）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "惑う？" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（そう！）" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "何で君は平気なの？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "平静装って触れるタンジェント" }] },
                        { text: [{ lyrics: "キヨクソツナク　優等生" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "頭の中じゃペンラ回せ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "もうタンバリン" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（なぁ心拍数？）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "もう止まらない" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（なぁ進化途中？）" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "爛爛しちゃった時の" }] },
                        { text: [{ lyrics: "マニュアルは何ページ？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "正解、、、" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "どこにも書いてねーぞ" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（おい！）" }]
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
                        { text: [{ lyrics: "おっとっと" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "カラカラカラッとしてる君、急接近" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（接近！）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "揺らいだ日常のブルー" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（それでもYou to say）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "もうアイノーユーノー足りんの" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "君のせいで壊れた" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Loop loop）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "感情と常識のスマイル" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（ジョイフル）" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "もっと" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "赤裸々ララなアンサー" }] },
                        { text: [{ lyrics: "ドキドキドキにしちゃって" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "大胆不敵なゴーサインも" }] },
                        { text: [{ lyrics: "遠近法で見たいじゃない！" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "赤裸々ララにフラジャイル" }] },
                        { text: [{ lyrics: "ドキドキさ気になって" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "寄せては返すの" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「何回目！？」" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "それって確定じゃん" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "心の距離の定義って？" }] },
                        { text: [{ lyrics: "どうやって測るんだっけ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "距離÷速さ＝" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "時間" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "見つめる時間は" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "永遠" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "こうやって肘と膝" }] },
                        { text: [{ lyrics: "交差して考える人" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "ヤバい人だよね" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "パッと見" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "恋って悪いよね" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "ハートに" }]
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
                            members: ["R"],
                            text: [{ lyrics: "通知音" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "「ピコン」" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "って来る度きっと" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ベッドで足バタバタ" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "天変地異でも起こりそうだ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "君の" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "「いいね」" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "だけで" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Wa Wa Wah" }]
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
                            members: ["W"],
                            text: [{ lyrics: "カラカラカラッとしてるけど最接近" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（接近！）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "熱暴走止まらなくてフリーズ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（呼吸の時間をPlease）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "期待と不安の重ね合わせでOh my love" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Loop loop）" }]
                        },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "観測して！はやく" }] },
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
                            text: [{ lyrics: "友達以上、でも" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "それすらもどう？" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Black box）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "弾けろよSlap！" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Slap!！）" }]
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
                            members: ["Y"],
                            text: [{ lyrics: "君がデレる世界線下さい！" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ねえ、それなんて構文？" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（興奮）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "心躍る方へ走ってゆくだけ" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（覚醒）" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "誰かに恋をする可能性" }] },
                        { text: [{ lyrics: "それが通じ合う％" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "好きが伝わる瞬間に" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "エントロピー" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "（エネルギー）" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "宇宙は爛爛と" }] },
                        { text: [{ lyrics: "Wow" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "もうちょっと" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "おっとっと" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "カラカラカラッとしてる君、急接近" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（接近！）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "揺らいだ日常のブルー" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "（それでもYou to say）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "もうアイノーユーノー足りんの" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "君のせいで壊れた" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Loop loop）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "感情と常識のスマイル" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（ジョイフル）" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "もっと" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "赤裸々ララなアンサー" }] },
                        { text: [{ lyrics: "ドキドキドキにしちゃって" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "大胆不敵なゴーサインも" }] },
                        { text: [{ lyrics: "遠近法で見たいじゃない！" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "赤裸々ララにフラジャイル" }] },
                        { text: [{ lyrics: "ドキドキさ気になって" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "寄せては返すの" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「何回目！？」" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "それって確定" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "寄せては返すの" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「n回目！？」" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "それってもう好きじゃん" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "「大正解！」" }] },
                    ],
                },
            ],
        },
    ],
}
