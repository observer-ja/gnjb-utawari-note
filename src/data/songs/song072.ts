/* Paradox Re:Write */
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

export const song072: SongLyrics = {
    id: "song072",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "Ready go" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(Ready go)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "Time is up" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(Time is up)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "始まりだ" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "手に取るマイクここは独壇場" }]
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
                            text: [{ lyrics: "Paradox" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(Paradox)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "いらない訂正は" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "平成から今令和" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "塗り替える古びた正解グッバイ" }]
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
                        { text: [{ lyrics: "甘い刃につどる世の“買惰”〈バイヤー〉" }] },
                        { text: [{ lyrics: "限りない時間 set the “時流”〈タイマー〉" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "(Right or Left)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ダラダラ寝坊助は“棄権“〈リタイア〉" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "伍×肆×参" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "締切の" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "合図　弍×壱×" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "零々　溢れたプレイヤー" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "必要な付随価値" }]
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
                        { text: [{ lyrics: "周りの努力の上っ面" }] },
                        { text: [{ lyrics: "吸い込むだけじゃ" }] },
                        { text: [{ lyrics: "ただの覇王花〈ラフレシア〉" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "根強く咲いては枯れぬ華" }] },
                        { text: [{ lyrics: "意味成して次に進めたい駒" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Are you ready?" }] },
                        { text: [{ lyrics: "Time is clicking" }] },
                        { text: [{ lyrics: "準備ができたなら鐘鳴らせ" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "唖々　燃え上がれParadox Flame" }] },
                        { text: [{ lyrics: "正答↔誤答〈正しさ〉なんてぶっ壊して" }] },
                        { text: [{ lyrics: "嘲笑う聲も巻き込んで" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "叫び出せParadox Flame" }] },
                        { text: [{ lyrics: "蹴り上げる天井" }] },
                        { text: [{ lyrics: "そこには自問自答〈アンサー〉" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Rat ta-Tarat tata-Rat tatara-Ta" }] },
                        { text: [{ lyrics: "叫べ燃やせその魂の全てを" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Rat ta-Tarat tata-Rat tatara-Ta" }] },
                        { text: [{ lyrics: "壊せ闇に閉ざされた" }] },
                        { text: [{ lyrics: "零未打〈リミッター〉" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "(Yeah turn it up 轟音〈ゲイン〉なら上昇)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "Yeah bring it" }] },
                        { text: [{ lyrics: "枯れてた大地毎日水やり" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "凡才脱細詰漫悩" }] },
                        { text: [{ lyrics: "〈凡才だっさいつまんない〉" }] },
                        { text: [{ lyrics: "型にはめるあなたお話にならない" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "Say it out" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(Say it out)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "己がNumber 1" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "(Number 1)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "要らないよ建前" }]
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
                        { text: [{ lyrics: "鏡越しに問いかける　偽りと正義なんて" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "無理にでも捻じ曲げる" }] },
                        { text: [{ lyrics: "ここは戦場 -バトルフィールド-" }] },
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
                            text: [{ lyrics: "(Oh-wo oh-woah)" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "牙を剥け shout out" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "その煮えたぎった腹の内を" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "(Oh-wo oh-woah)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "Say it now sing it now 響かせろ" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "唖々　燃え上がれParadox Flame" }] },
                        { text: [{ lyrics: "正答↔誤答〈正しさ〉なんてぶっ壊して" }] },
                        { text: [{ lyrics: "嘲笑う聲も巻き込んで" }] },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "叫び出せParadox Flame" }] },
                        { text: [{ lyrics: "蹴り上げる天井" }] },
                        { text: [{ lyrics: "そこには自問自答〈アンサー〉" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "ドン底からの再生〈リセット〉" }] },
                        { text: [{ lyrics: "終わりがないって　下を見て" }] },
                        { text: [{ lyrics: "得たものはすぐに零れ落ちて" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "変えてくだけさ運命 -ディステニー-" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "(Are you ready now)" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "蹴り上げる天井　そこに答え" }] },
                        { text: [{ lyrics: "さぁ掴め　その手で" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "(Paradox Re:Write)" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "Rat ta-Tarat tata-Rat tatara-Ta" }] },
                        { text: [{ lyrics: "叫べ燃やせその魂の全てを" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "Rat ta-Tarat tata-Rat tatara-Ta" }] },
                        { text: [{ lyrics: "最後には奏でる" }] },
                        { text: [{ lyrics: "勝利の四重奏〈カルテット〉" }] },
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
                            text: [{ lyrics: "Paradox　要らない訂正は" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "平成から今令和" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "塗り替える古びた正解グッバイ" }]
                        },
                    ],
                },
            ],
        },
    ],
}
