/* ケイカクドヲリ */
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

export const song053: SongLyrics = {
    id: "song053",
    note: "コールの詳細は公式YouTubeのコール動画を参照。複数人で歌っている箇所が多く、歌割りが正確でない箇所が多い。",

    lyrics_blocks: [
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "yoyoyo　息苦しいね" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "憂鬱と憂鬱で挟んだweekend" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "生き辛いこの世界" }]
                        },
                        {
                            members: ["Y", "G", "P"],
                            text: [{ lyrics: "誰が悪いんだよ？" }]
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
                            text: [{ lyrics: "世を忍んでる不気味な影" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "このキュートなツラも武器になったぜ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "但し飲んでる苦渋ばっかり" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "昼のペコペコ、まじでかったりぃ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "落陽　幕が開くよ" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "夜に紛れて秘密の活動" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "目には目を 歯には歯を" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "嗅ぎ分ける千里走る裏の顔" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R", "G"],
                    chunks: [
                        { text: [{ lyrics: "柳は緑　花は紅なら" }] },
                        { text: [{ lyrics: "悪は自然滅んでくれない？" }] },
                    ],
                },
                {
                    members: ["S", "B"],
                    chunks: [
                        { text: [{ lyrics: "道行くあの子の桃か青か" }] },
                        { text: [{ lyrics: "色々ありそうな溜息" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "W"],
                            text: [{ lyrics: "黄白を盗る？" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "紫が朱を奪う？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "No…捕り物開始" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "さながらドラマの犯科帳" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "逃走 or die　賭けろよ半か丁" }]
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
                        { text: [{ lyrics: "これ鬼退治" , call: true }] },
                        { text: [{ lyrics: "駆ける裏通り" , call: true }] },
                        { text: [{ lyrics: "一網打尽" , call: true }] },
                        { text: [{ lyrics: "計画通り！" , call: true }] },
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
                            text: [{ lyrics: "(Three)" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "皆様しばしご歓談" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "(Two)" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ほら立って　まだまだRound1" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "(One)" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "白黒つけるぜカウントダウン" }]
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
                        { text: [{ lyrics: "セイギシッコウ　一生堕落していくなら" }] },
                        { text: [{ lyrics: "存外　心地のいい戯曲だろ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "その線を踏み越えたら最後" }] },
                        { text: [{ lyrics: "首元　タマシイごと刈り取って" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "磔て日光の元燃やすミニクい欲望" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(too late)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "まぁもう黙れダマれよ　オシラセ今世終了" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(too late)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "吹かれた第一のラッパ　重大な裏切り行為" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(too late)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "絵に描いたように" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "完全勝利" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ケイカクドヲリ" }]
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
                        { text: [{ lyrics: "はいはい、そこに直って" }] },
                        { text: [{ lyrics: "相対したら諦めて" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "これ覆る事がない決定" }] },
                        { text: [{ lyrics: "命乞い諸々まとめて蹴って" }] },
                    ],
                },
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "静かに執行" }] },
                        { text: [{ lyrics: "水面下進行" }] },
                        { text: [{ lyrics: "誣いを強いるなら上げる狼煙" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "しつこく罵る　染み出す呪い" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "空が白み始める頃に" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "G"],
                    chunks: [
                        { text: [{ lyrics: "明日カミサマの言う通り" }] },
                        { text: [{ lyrics: "昨日はアクマの様に" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "日替わりチープな道理" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "全部分かって堕ちたんだろう？" }]
                        },
                    ],
                },
                {
                    members: ["all"],
                    chunks: [
                        { text: [{ lyrics: "明日カミサマの言う通り" }] },
                        { text: [{ lyrics: "昨日はアクマの様に" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["all"],
                            text: [{ lyrics: "日替わりチープな道理" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "全部分かって堕ちたんだろう？" }]
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
                            text: [{ lyrics: "これはボクとキミの契りtrust" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "これから幾重に重なる苦楽と" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "愛を混ぜ込んだ決意のblast" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "そして迎える衝撃のlast" }]
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
                        { text: [{ lyrics: "セイギシッコウ　一生堕落していくなら" }] },
                        { text: [{ lyrics: "存外　心地のいい戯曲だろ" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "その線を踏み越えたら最後" }] },
                        { text: [{ lyrics: "首元　タマシイごと刈り取って" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "磔て日光の元燃やすミニクい欲望" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(too late)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y"],
                            text: [{ lyrics: "まぁもう黙れダマれよ　オシラセ今世終了" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(too late)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "吹かれた第一のラッパ　重大な裏切り行為" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(too late)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "絵に描いたように" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "完全勝利" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ケイカクドヲリ" }]
                        },
                    ],
                },
            ],
        },
    ],
}
