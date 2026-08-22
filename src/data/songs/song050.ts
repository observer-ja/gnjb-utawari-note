/* Museum:0 */
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

export const song050: SongLyrics = {
    id: "song050",
    note: "初アリーナ公演「因果律の逆転」テーマソング。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "Welcome Back!" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Museum: Zero" }]
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
                        { text: [{ lyrics: "思考と仮定が 宙を舞う" }] },
                        { text: [{ lyrics: "此処は未だ 何処でもない美術館" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "飾られるは 未完成" }] },
                        { text: [{ lyrics: "まだ 満たない 未知 未来" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "僕にとって幸せって何ですか" }] },
                        { text: [{ lyrics: "模倣して 写せない幸福を" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "踠きながら 描くのさ" }] },
                        { text: [{ lyrics: "歪なれ 現在 現在" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "何千 筆をとった" }] },
                        { text: [{ lyrics: "何千回の ゼロになった" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "夢幻は 歩き出した" }] },
                        { text: [{ lyrics: "光は 貴方が教えてくれた" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "どうぞ 傍に寄って" }] },
                        { text: [{ lyrics: "壮絶なる最高傑作" }] },
                        { text: [{ lyrics: "Welcome Back! Museum: Zero" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "大成功 大後悔" }] },
                        { text: [{ lyrics: "どっちだって愛し合おう" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "我楽多 されども 真作よ" }] },
                        { text: [{ lyrics: "貴方が居て 生まれた一枚" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "サア 結界の向こうへ" }] },
                        { text: [{ lyrics: "手を伸ばす時だろう" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "眺め続けるのは 退屈だったろう" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "共に 行こう" }] },
                        { text: [{ lyrics: "Museum: Zero" }] },
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
                            text: [{ lyrics: "浮かんだ言葉に Red Red Check" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "試行錯誤の果て 本能に漂着" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "巨大な天蓋に至る 片道は虚し" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "暴き合え 魂" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "恥などやむなし" }]
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
                        { text: [{ lyrics: "正解なき キャンパスに" }] },
                        { text: [{ lyrics: "七色と一石のワンダー" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "何もかもを 描くパレット" }] },
                        { text: [{ lyrics: "振り翳せ 現在 現在" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "終局の晩餐会" }] },
                        { text: [{ lyrics: "拭う口元は 揚々と" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "きっと 語り飽きない" }] },
                        { text: [{ lyrics: "たった一度を 味わうならば" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "どうぞ 此処においで" }] },
                        { text: [{ lyrics: "壮絶なる最高傑作" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "イメージを" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "イメージを" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "イメージを" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Welcome Back! Museum: Zero" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "かつて描いた一縷" }] },
                        { text: [{ lyrics: "その先は 無限" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "大逆転といこうか" }] },
                    ],
                },
            ],
        },
        {
            members: ["R"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "大成功 大後悔" }] },
                        { text: [{ lyrics: "どっちだって愛し合おう" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "我楽多 それこそ 真作だ" }] },
                        { text: [{ lyrics: "貴方と居て 生まれた一枚" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "サア 結界の向こうで" }] },
                        { text: [{ lyrics: "ちゃんと 笑い合おう" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "何処にもないなら 描いてしまえばいい" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "永久に 行こう" }] },
                        { text: [{ lyrics: "Museum: Zero" }] },
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
                            text: [{ lyrics: "Welcome Back!" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "Museum: Zero" }]
                        },
                    ],
                },
            ],
        },
    ],
}
