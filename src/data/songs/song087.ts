/* ドパミン・シンギュラリティ */
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

export const song087: SongLyrics = {
    id: "song087",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "足りないないないないない" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "満たされないないないない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "消えないないないないない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "足りないないないないない" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ないないないないないない" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "(足りねぇよ…)" }]
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
                        { text: [{ lyrics: "暮れる痛みに" }] },
                        { text: [{ lyrics: "麻痺した基盤" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ログ書く→ラグつく→ログアウト" }] },
                        { text: [{ lyrics: "出口は？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "歪んだドアノブ" }] },
                        { text: [{ lyrics: "握るけどビクとも(ハード)" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "モードもどかしく" }] },
                        { text: [{ lyrics: "囲うミュートバイオレンス" }] },
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
                            text: [{ lyrics: "正常性　装って" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "*walking" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "でも内部は　ずっと" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "*warning" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "強制終了　できない" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "*morning" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "(ドパドパドパドパドパ　熱中しよう)" }] },
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
                            text: [{ lyrics: "止まらない　雑音と" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "*コーヒー" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "苦くて　冷めた" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "*とうに" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "見せかけの表裏　もういい！" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "GIVE ME, GIVE ME" }] },
                        { text: [{ lyrics: "フレーバー：SWEET" }] },
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
                            text: [{ lyrics: "ねぇねぇ　誰の言葉が正解？" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "並列　流れる君ドーパミン" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "細める目" }] },
                        { text: [{ lyrics: "覗き込んだ光" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "いいな　いいな" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "満たされないな" }]
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
                        { text: [{ lyrics: "あからさま見えちゃえば" }] },
                        { text: [{ lyrics: "シンプル・シンギュラリティ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "見せ合う剥き出しは" }] },
                        { text: [{ lyrics: "本音と乖離？" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "濁るミラー映るのは" }] },
                        { text: [{ lyrics: "錆びた輝き" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "＜閲覧注意＞" }] 
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "地獄の始まり" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(Welcome)" }]
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
                            members: ["G"],
                            text: [{ lyrics: "足りないないないないない" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "満たされないないないない" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "今日も間違い探し" }] },
                        { text: [{ lyrics: "止めれない" }] },
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
                            text: [{ lyrics: "消えないないないないない" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "戻れないないない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "どぱみん" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "どぱみん" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "過剰に" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "リプライ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "どこに" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "どこに" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "どこに" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "丸をつける？" }]
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
                            text: [{ lyrics: "(足りない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "足リない" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "足リナい" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "足リナイ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "足リ無イ)" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "(足りねぇよ…)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "消えないないハンコ消そうと" }] },
                        { text: [{ lyrics: "反抗中です定期。" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "シェイキンまたシェイキン" }] },
                        { text: [{ lyrics: "スキップしちゃいたい正義！" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "お花畑をこう歩くのは skipping" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "頭が空なら綺麗に映る？の？" }]
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
                            text: [{ lyrics: "全肯定　笑って" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「頂戴」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "忘れて　いたいんだ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「問題」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "戻らないで　いいよ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「本題」" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "(ドパドパドパドパドパ　熱中しよう)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "キラリ光合成　画面が" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "「招待」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "ただいま　暴れて" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "「爽快」" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "異常？　正常？" }] },
                        { text: [{ lyrics: "知らない　平気" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "WELCOME, WELCOME TO" }] },
                        { text: [{ lyrics: "フレーバー：SWEET" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "のめり込んだ先には" }] },
                        { text: [{ lyrics: "エンドレス・シンギュラリティ" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "おいでよこっちに" }] },
                        { text: [{ lyrics: "綺麗でしょアイリス？" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "焼きついたこの瞳に映る幻" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "※拡散注意※" }] },
                        { text: [{ lyrics: "天国の始まり" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "(踊ろう　永久的に…)" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "止まらない　ドパミン" }] },
                        { text: [{ lyrics: "(ドパ・ドパ)" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "止まらない　ドパミン" }] },
                        { text: [{ lyrics: "(ドパ・ドパ)" }] },
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
                            text: [{ lyrics: "(足りない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "足りない" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "足りない" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "足りない…)" }]
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
                            text: [{ lyrics: "度重なる思いが　きっと溢れ出し" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "僕を連れた先には　光が差す" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "全てが霞んだ　まやかしの夜に" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "気を取られてた　ただ" }]
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
                        { text: [{ lyrics: "あからさま見えちゃえば" }] },
                        { text: [{ lyrics: "シンプル・シンギュラリティ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "見せ合う剥き出しは" }] },
                        { text: [{ lyrics: "本音と乖離？" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "濁るミラー映るのは" }] },
                        { text: [{ lyrics: "錆びた輝き" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "＜閲覧注意＞" }] 
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "地獄の始まり" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "(Welcome)" }]
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
                            members: ["G"],
                            text: [{ lyrics: "足りないないないないない" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "満たされないないないない" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "今日も間違い探し" }] },
                        { text: [{ lyrics: "止めれない？" }] },
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
                            text: [{ lyrics: "消えないないないないない" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "戻れないないない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "どぱみん" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "どぱみん" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "過剰に" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "リプライ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "どこに" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "どこに" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "どこに" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "丸をつける？" }]
                        },
                    ],
                },
            ],
        },
    ],
}
