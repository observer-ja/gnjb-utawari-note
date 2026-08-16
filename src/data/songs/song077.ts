/* 希望的観測の定義 */
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

export const song077: SongLyrics = {
    id: "song077",
    note: "コールレクチャー動画は公式ファンクラブであるゲンジブ観測所内のコンテンツであるため、ここでのコールの掲載は控える。コールの内容はその動画を参照。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "勝たんじゃ足んない　ドキドキタイム" }]
                        },
                        {
                            members: ["S", "B", "G", "P"],
                            text: [{ lyrics: "負けちゃう沼だ　キラリんビ～～～ム" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "嘲笑も欲しい" }]
                        },
                        {
                            members: ["S", "B", "G", "P"],
                            text: [{ lyrics: "別解じゃわからん" }]
                        },
                        {
                            members: ["Y", "W", "R"],
                            text: [{ lyrics: "相談しましょ" }]
                        },
                        {
                            members: ["S", "B", "G", "P"],
                            text: [{ lyrics: "そうしましょ" }]
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
                            text: [{ lyrics: "【瘡蓋(かさぶた)】" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "【傀儡(かいらい)】" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "【邂逅(かいこう)】" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "【柘榴(ざくろ)】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "【爾(なんじ)】" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "【雁字搦(がんじがら)め】" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "【我楽多(がらくた)】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "【欹(そばだ)てる】" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "【欹(そばだ)てる】" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "【揺蕩(たゆた)う】" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "【演繹(えんえき)】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "【思惟(しい)】" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "【蝋燭(ろうそく)】" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "【弥終(いやはて)】" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "【生きたい(シネナイ)】" }]
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
                            text: [{ lyrics: "管理が超完璧" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【完璧=HAPPY】" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "笑顔が宝石" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【宝石=HAPPY】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "嫌なこと全部帳消し" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【帳消し=HAPPY】" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(帳消し)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "こっち向いて" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【しんどい=HAPPY】" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "やっぱ向かないで" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【しんどい=HAPPY】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "究極二律背反" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "(無理HAPPY～)" }]
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
                            members: ["B"],
                            text: [{ lyrics: "世界観圧倒的" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【圧倒的】" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "もっと売れるべき" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【売れろー】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "教科書にも載せるべき" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【べき！】" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "(言い過ぎ)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "私たちだけじゃ守れない" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【絶滅危惧種】" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "尊い of 尊い" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【みんなが大切】" }]
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
                            text: [{ lyrics: "わっけわっかんない" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "歌詞とりあえずもっかい" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "でも漢字読めない" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "からやっぱりわっけわっかんない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "でも頑張って読解" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "したらHAPPYだね、もっかい" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "ん？あれ？欲しがってない？" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "教育(せんのう)率40%" }]
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
                            text: [{ lyrics: "観測者(おれら)のあるある" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "非観測者(みんな)のないない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "真顔で南無南無" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "教育(せんのう)完了" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "思想がマグナム" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "可愛さカムカム" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "温度差風邪ひく" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "磨ける美学" }]
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
                            text: [{ lyrics: "も～ちょっと" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "も～ちょっと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "優しくたっていいけどね" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "UPUPして" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "あ゛～！" }]
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
                            members: ["all"],
                            text: [{ lyrics: "100点満点中7億点" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【YEAH】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "愛です愛です愛です愛です" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "愛です愛です愛愛愛" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【愛】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "100年先も1000年先も" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【YEAH】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "ガチでガチでずっと輝いてフォーエバー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【バーン！】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "みんなで守ろうね" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ね！】" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "フツーなんてぶっ飛ばせ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【バーン！】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "生きててありがとうね" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ね！】" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "はぴはぴはね∞(むげんだい)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "イイねイイねして" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "はぴぴ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ぴ！】" }]
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
                            text: [{ lyrics: "SUN SUN SU SU SUN 皆SUN SUN" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "2択じゃ決めれん　ちょっと難題？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "勝海舟　勝海舟" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "さっさと建国してくださ～い" }]
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
                            text: [{ lyrics: "あざとママ転じ煽りママ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【かわいい】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "世界は先生の為にある。" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ある。】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "みんなで甘々" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【甘々】" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "みんなの末っ子" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【末っ子】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "ど真ん中が似合いがち　チャハ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【チャハ】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "年功序列" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【長男】" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "逆転しがち" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【はいはい】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "国宝級でごめんなさ～い" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【いいよ】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "雨降りだしたの誰のせい？" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【誰のせい？】" }]
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
                            text: [{ lyrics: "年中沸いちゃってもう君に夢中" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【YEAH】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "愛です愛です愛です愛です" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "愛です愛です愛愛愛" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【愛】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "しょっちゅう I Need You まだ止まれん" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【YEAH】" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "今日より明日もっと大好きになれる" }] },
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
                            text: [{ lyrics: "イソップ ル・ボヌール フォンテーヌ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ハイ】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "チョコミント パスタ オムライス" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【フー】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "炭酸水！" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "炭酸水！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "炭酸水！" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "炭酸水！" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "炭酸水！" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "炭酸水 de レベチアーズ！" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "Fuu" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "これだから観測やめれん" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "クセ強すぎて何度も聴いちゃう" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "これだから観測やめれん" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "「責任」「源氏部」「僕が悪いんです」" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "時々こっちのせいにされて" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "推したらまぁまぁ心配される" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "でもいいんです、いやいいんです" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "舌打ちさえご褒美な現場 【現場】 → TSK" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "あ゛～！" }]
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
                            members: ["all"],
                            text: [{ lyrics: "100点満点中7億点" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ウ～ッ！YEAH】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "愛です愛です愛です愛です" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "愛です愛です愛愛愛" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【愛】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "100年先も1000年先も" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【YEAH】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "ガチでガチでずっと輝いてフォーエバー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【バーン！】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "みんなで守ろうね" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ね！】" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "フツーなんてぶっ飛ばせ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【バーン！】" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "生きててありがとうね" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ね！】" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "はぴはぴはね∞(むげんだい)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "イイねイイねして" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "UPUPして" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "もっと　もっとして" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "はぴはぴ　はぴぴ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "【ぴ！】" }]
                        },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "【バーン！】" }] },
                        { text: [{ lyrics: "【ね！】" }] },
                        { text: [{ lyrics: "【バーン！】" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "《いや～あの曲と終わり方一緒…》" }] },
                    ],
                },
            ],
        },
    ],
}
