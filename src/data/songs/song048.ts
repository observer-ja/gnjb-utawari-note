/* 鳴らして、シンバル */
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

export const song048: SongLyrics = {
    id: "song048",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "運命だね" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Wow" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "高まってくよ鼓動" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（BeatingBeating）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "LaLaLa" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Hey）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "Up DownなLifeはLike a ジェットコースター" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "物憂げMotion" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（吐息）" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "夕焼けEmotion" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（OK！Alright！）" }]
                        },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "遮二無二飽きずに" }] },
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
                            text: [{ lyrics: "現状維持" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（NoNo）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "結構Easy" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（NoNo）" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "だから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["Y"],
                            text: [{ lyrics: "君のために頑張る" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（ZoomZoom）" }]
                        },
                        { 
                            members: ["Y"],
                            text: [{ lyrics: "コペルニクス的Hustle" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（Hoo）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["G"],
                            text: [{ lyrics: "渋滞気味" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（OhNo）" }]
                        },
                        { 
                            members: ["G"],
                            text: [{ lyrics: "逆転Thinking" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（そうそう）" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "パラダイムシフト日々活かす" }] },
                        { text: [{ lyrics: "最高だやっぱGenius" }] },
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
                            text: [{ lyrics: "満足なんてしない" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "Don't Stop Do it, Do it" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "アクシデントもLove" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "ビビビビビデバビデ" }]
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
                            text: [{ lyrics: "ほら" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Boo）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "We Can, We Can, We Can Do" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Sunset）" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "未来のキラーチューン" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（賛成）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Oh My God！ 楽しくね叫ぶ！" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Become a Shooting Star！）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "磨いて光る" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（歓迎）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "僕らの音楽" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（歓声）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "躊躇っちゃダメダメ 鳴らしてシンバル" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Stay Tuned DJ）" }]
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
                            text: [{ lyrics: "飛んで 飛んで 飛んでそう" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "届けこの声" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Everybody）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "飛んで 飛んで 飛んでけ Tonight" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Tonight）" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "NaLaNaLaNaLaNaLaNa" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "飛んで 飛んで 飛んでもっと" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "もっと天晴" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（PartyParty）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "そんでもって超えてこう Tonight" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Woo）" }]
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
                            members: ["P"],
                            text: [{ lyrics: "それが欲しいのさ 忘れらんない" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "攻略本は燃やせByeBye" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "能ある鷹でゆけサバイバー" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "こんがり焼けた肌さぁ乾杯" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "ワガママハイパー" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "まだまだファイヤー" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "バタバタ暴れだす熱帯夜" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "灼熱BEACHの上に腹ばい" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "逆説的にむしろパラダイス" }]
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
                            text: [{ lyrics: "集団心理" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（NoNo）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "結構Simply" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "（NoNo）" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "だから" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["B"],
                            text: [{ lyrics: "回せ回せハンドル" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（ZoomZoom）" }]
                        },
                        { 
                            members: ["B"],
                            text: [{ lyrics: "見切り発車でカマす" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（Hoo）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["W"],
                            text: [{ lyrics: "大体Pinch" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（OhNo）" }]
                        },
                        { 
                            members: ["W"],
                            text: [{ lyrics: "無い無いLimit" }]
                        },
                        { 
                            members: [],
                            text: [{ lyrics: "（そうそう）" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "やるならやるじゃん！もうそれしか" }] },
                        { text: [{ lyrics: "アブラカダブラ Hotpepper" }] },
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
                            text: [{ lyrics: "そうさ" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Boo）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "これからだよね" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Sunset）" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "諦めないで" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（賛成）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "Oh My God！ それこそがOur Way！" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Make The Most Of Now）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "HARE-BAREまわれ" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（歓迎）" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "負けないで騒げ" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（歓声）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "明日へ向かって捨て去れ固定観念" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（固定観念）" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "NaNaNa…" , call: true }] },
                        { text: [{ lyrics: "YeahYeah" , call: true }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "マンネリ繰り返して" }] },
                        { text: [{ lyrics: "三千里くらい越えてさ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "（Keep It Going…）" }] },
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
                            text: [{ lyrics: "ほら" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Boo）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "We Can, We Can, We Can Do" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Sunset）" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "未来のキラーチューン" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（賛成）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "Oh My God！ 楽しくね叫ぶ！" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Become a Shooting Star！）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "磨いて光る" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（歓迎）" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "僕らの音楽" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（歓声）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "躊躇っちゃダメダメ 鳴らしてシンバル" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Stay Tuned DJ）" }]
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
                            text: [{ lyrics: "飛んで 飛んで 飛んでそう" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "届けこの声" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Everybody）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "飛んで 飛んで 飛んでけ Tonight" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Tonight）" }]
                        },
                    ],
                },
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "NaLaNaLaNaLaNaLaNa" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "飛んで 飛んで 飛んでもっと" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "もっと天晴" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（PartyParty）" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "そんでもって超えてこう Tonight" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "（Woo）" }]
                        },
                    ],
                },
            ],
        },
    ],
}
