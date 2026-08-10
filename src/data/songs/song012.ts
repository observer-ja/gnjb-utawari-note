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

export const song012: SongLyrics = {
    id: "song012",

    lyrics_blocks: [
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "僕を君だけのものに　さあお気に召すまで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "I'll try my luck" }] },
                        { text: [{ lyrics: "騒がしい毎晩を昇りつめる道のりは" }] },
                        { text: [{ lyrics: "One by one" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "こっち向いてClick" }] },
                        { text: [{ lyrics: "レトロなビューファインダー" }] },
                        { text: [{ lyrics: "越しに映る此処こそがワンダーランドさ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "踊らすショーケースから証明" }] },
                        { text: [{ lyrics: "虜にする今日のプリンセス" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "さあ鍵を開けて" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "照らす街の灯り" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "見惚れないで焼き付けるの" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "Shall we dance？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "メイビー　この恋　一回きり" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "日が落ちたらタイムリミット" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "俯いて気にしてるカレンダー" }] },
                        { text: [{ lyrics: "Lady　それじゃ報われない" }] },
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
                            text: [{ lyrics: "綺羅びやかなステージ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "手は届かないって気を抜きすぎ" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "S"],
                    chunks: [
                        { text: [{ lyrics: "オリジナル　クリティカルでワッ！？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "I got it" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "Hey！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Hey！)" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "What's going on？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "お望みを叶えましょう" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "すべて" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "Hey！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Hey！)" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "What's going on？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "そしてBaby" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "奪われたらいかが？" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "FreshなFruits　味見したり　タリラリ" }] },
                        { text: [{ lyrics: "LaLaLa…" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "焦らしたりしたい、欲しがりかい？" }] },
                        { text: [{ lyrics: "悔しけりゃ下唇でも噛んでみな" }] },
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
                            text: [{ lyrics: "ねえねえプリンセス　まだ踊り足りない" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "プリンセス　まだ踊り足りない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "また今日も君を探してるカーテンコール" }]
                        },
                        {
                            members: ["W", "R"],
                            text: [{ lyrics: "シャバダバ　シャバダバ" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "踏み込むステップ 1, 2, 3" }] },
                        { text: [{ lyrics: "パーティー真っ只中　視線は時計の針" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "これはFantasy　もっと夢中になって" }] },
                        { text: [{ lyrics: "背伸びして日を跨ごう　かけるマジック" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: [],
                    chunks: [
                        { text: [{ lyrics: "Shall we dance？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "「好き」じゃありきたりかな" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "実は寂しがり" }]
                        },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "レディーファーストは仕来り" }] },
                        { text: [{ lyrics: "連れて行こう　こちら手の鳴る方へ" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "All eyes on me.　作るマスターピース" }] },
                        { text: [{ lyrics: "抜け出せないトリック" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "R"],
                    chunks: [
                        { text: [{ lyrics: "取り乱すフェスティバルでワッ！？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "アガれ" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "Hey！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Hey！)" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "What's going on？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "余すとこなく召し上がれ" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "今宵" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "Hey！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Hey！)" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "What's going on？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "そしてBaby" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "惑わせる気ままに" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "TripならStopなんてないだろう？　タリラリ" }] },
                        { text: [{ lyrics: "LaLaLa…" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ウィンクでトロッとしてくその目　何度でも" }] },
                        { text: [{ lyrics: "いつも消化不良わかってんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "Wow…" }] },
                        { text: [{ lyrics: "Wow…" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "その瞳　その色に何回も惹かれる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "S"],
                    chunks: [
                        { text: [{ lyrics: "オリジナル　クリティカルでワッ！？" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "I got it" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "Hey！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Hey！)" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "What's going on？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "お望みを叶えましょう" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "すべて" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "Hey！" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Hey！)" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "What's going on？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "そしてBaby" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "奪われたらいかが？" }]
                        },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "FreshなFruits　味見したり　タリラリ" }] },
                        { text: [{ lyrics: "LaLaLa…" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "焦らしたりしたい、欲しがりかい？" }] },
                        { text: [{ lyrics: "悔しけりゃ下唇でも噛んでみな" }] },
                    ],
                },
            ],
        },
    ],
}
