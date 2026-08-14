/* 推論的に宇宙人 */
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

export const song055: SongLyrics = {
    id: "song055",
    note: "クラップをする箇所も多い。詳しくは公式YouTubeのコール動画を参照。",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "恋は甘い予感と不安定感のクレイドル" }] },
                        { text: [{ lyrics: "キミのせいで脳内は　クレイジークレイジー" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "あぁ、止まんない" }] },
                        { text: [{ lyrics: "またキミのこと考えてループ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "アイフォーリン宇宙中中中" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(宙！)" , call: true }]
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
                            text: [{ lyrics: "パッと光ったの　キミに逢った瞬間" }]
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "(超常現象だ　未知との遭遇)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "バーン！と胸を　撃たれたみたいだった" }]
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "(知らない感情だ　解明を急ぐ)" }]
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
                            text: [{ lyrics: "つかめないキミの正体" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(正体！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "宙に浮かぶ状態" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(状態！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "宇宙も同じだ　これは…" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(これは！)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "演繹的妄想" }] },
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
                            text: [{ lyrics: "沼りそうな眼" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(眼！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "人智超えたムーブ" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(ムーブ！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "どれもがキミに着く…" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(着く！)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "帰納的ラブ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "近づくほど視えなくなる" }] },
                        { text: [{ lyrics: "でも消えないキミのグラビティ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "いつのまにかココロが" }]
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "(ニナニナニナニナ…)" , call: true }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "キャトられる……！" }]
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
                        { text: [{ lyrics: "恋は甘い予感と不安定感のクレイドル" }] },
                        { text: [
                            { lyrics: "キミのせいで脳内は　" },
                            { lyrics: "クレイジークレイジー" , call: true },
                        ] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "目と目があって　そこでつぶやいて" }] },
                        { text: [{ lyrics: "でも、それだけさユーエンミー" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "キミは宇宙人なんだきっと" }] },
                        { text: [{ lyrics: "追いつけないスピード" }] },
                        { text: [
                            { lyrics: "太陽系のどこかで　" },
                            { lyrics: "フォーユーフォーユー" , call: true },
                        ] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "あぁ、まとまんない" }] },
                        { text: [{ lyrics: "この推論を出らんないくらい" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "アイフォーリン宇宙中中中" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(宙！)" , call: true }]
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
                            members: ["W", "B"],
                            text: [{ lyrics: "(ニナニナニナニナ…なにかちがう)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ねえ誰より理解したい　キミなのになあ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "(ニナニナニナニナ…キミ以外にない)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "その神秘を少しでも　僕にくれないか" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "えっ！？休日に君に会った偶然" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "(なりゆきで同行！？" }] },
                        { text: [{ lyrics: "調査ミッションスタート)" }] },
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
                            text: [{ lyrics: "うわめっちゃ盛ってるパクチー！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(パクチー！？)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "デザートにはチョコミント！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(スウィート！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "「ついてきて」って、そこは…" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(そこは？)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["W", "S", "R"],
                    chunks: [
                        { text: [{ lyrics: "まさかのゲーセン！？" }] },
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
                            text: [{ lyrics: "めっちゃ強ぇ格ゲー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(格ゲー！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "指どうなってんの？音ゲー" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(音ゲー！)" , call: true }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "調査結果、キミは…" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(キミは！)" , call: true }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "『もっとわからない…！！』" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "キミについての1を知ると" }] },
                        { text: [{ lyrics: "もっと気になる10が顔をだすの" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "あー僕のアタマは" }]
                        },
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "(ニナニナニナニナ…)" , call: true }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "侵略される……！" }]
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
                        { text: [{ lyrics: "恋は甘い予感と不安定感のクレイドル" }] },
                        { text: [{ lyrics: "キミのせいで脳内は　クレイジークレイジー" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "目と目があって　また好きになって" }] },
                        { text: [{ lyrics: "もう、それでいいやユーエンミー！" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "キミは宇宙人なんだきっと" }] },
                        { text: [{ lyrics: "この超常感がいいの！" }] },
                        { text: [
                            { lyrics: "届きそうもない星へ　" },
                            { lyrics: "フォーユーフォーユー" , call: true },
                        ] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "あぁ、終わんない　キミと僕は推論でループ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "アイフォーリン宇宙中中中" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(宙！)" , call: true }]
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
                            members: ["W", "B"],
                            text: [{ lyrics: "(ニナニナニナニナ…なにかちがう)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "ねえ誰より理解したい　キミなのになあ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "B"],
                            text: [{ lyrics: "(ニナニナニナニナ…キミ以外にない)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "その神秘を少しでも　僕にくれないか" }]
                        },
                    ],
                },
            ],
        },
    ],
}
