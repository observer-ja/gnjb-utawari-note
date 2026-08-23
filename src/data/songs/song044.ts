/* 余白のための瘡蓋狂想曲 */
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

export const song044: SongLyrics = {
    id: "song044",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "らしさがらしくてらしくなくして" }] },
                        { text: [{ lyrics: "らりるれろ・ろ・ろ・ろ呂律がぶーっ！" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "Ism のリズムでキツく〆たら" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "飛び出す言葉でごぼう抜き" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "曖昧な“I”を相も愛して" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "なむなむもっとかむかむのビーム" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "リンゴリラみたいにピンときたから" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "優等生 youknowhatImsayin" }]
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
                            text: [{ lyrics: "単純で" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "明快で" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "なんだかな" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ああ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "味見" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "しないの" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "何十回目？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "やるやる詐欺の嘘も方便" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "期待通りじゃなくてなんかごめん" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "Myself で泣いてんじゃないぜ" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "（どうだい？）" }]
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
                        { text: [{ lyrics: "超アブナイ Keep on*2 carnival" }] },
                        { text: [{ lyrics: "ふぁぼられたい Animal" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "相談してそんなんで DaDaDa" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Oh no Oh no ハンニバル" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "また各々参ります" }] },
                        { text: [{ lyrics: "そんな僕らだ" }] },
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
                            text: [{ lyrics: "All I Need おかえり 脳内に我愛爾" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "あっちもこっちも Dancing AhAhAhAh" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "問題視 存在意義 本体に Don't touch me" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "踊れ踊れらしさしらじらしいさ" }]
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
                        { text: [{ lyrics: "ライフがないならパンを食べれば？" }] },
                        { text: [{ lyrics: "笑わないで印象派" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "誰でもない僕を愛して" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "ライバル泣いてるアイデンティティー" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "大暴走の妄想" }] },
                        { text: [{ lyrics: "それでもちょっと痛いよ猛勉強" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "知恵熱すぐ出るそんな脳レベル" }] },
                        { text: [{ lyrics: "もうちょっと寝とこ" }] },
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
                            text: [{ lyrics: "簡単な戦略でEuphoria ああ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "そうはいかないよ自分勝手" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "早口過ぎても聴き取れないけど" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "ゆっくりもイヤ" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "結局どうしたいの？" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "いよいよパーリナイ" }] },
                        { text: [{ lyrics: "この祭り終わらない" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "褒めて褒めて DaDaDa" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "色々あります" }] },
                        { text: [{ lyrics: "でも1歩1歩参ります" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "道草茹でんだ" }] },
                    ],
                },
            ],
        },
        {
            members: [],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "LaLaLa…" }] },
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
                            text: [{ lyrics: "もうちょっとあるよ" }]
                        },
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "もうちょっとあるよ" }]
                        },
                        {
                            members: ["Y", "G", "P"],
                            text: [{ lyrics: "もうちょっとだけ行こう" }]
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
                        { text: [{ lyrics: "超アブナイ Keep on*2 carnival" }] },
                        { text: [{ lyrics: "ふぁぼられたい Animal" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "相談してそんなんで DaDaDa" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Oh no Oh no ハンニバル" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "また各々参ります" }] },
                        { text: [{ lyrics: "そんな僕らだ" }] },
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
                            text: [{ lyrics: "All I Need おかえり 脳内に我愛爾" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "あっちもこっちも Dancing AhAhAhAh" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "問題視 存在意義 本体に Don't touch me" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "踊れ踊れらしさしらじらしいさ" }]
                        },
                    ],
                },
            ],
        },
    ],
}
