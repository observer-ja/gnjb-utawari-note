/* シェイクスピアに学ぶ恋愛定理 */
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

export const song010: SongLyrics = {
    id: "song010",
    note: "サビの手振りを真似する人も多い。",

    lyrics_blocks: [
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "予想外にシェイクスピアのラブストーリー？" }] },
                        { text: [{ lyrics: "To be or not to beのKiss" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "消えそうで曖昧な水平線なぞって" }] },
                        { text: [{ lyrics: "どこまでも繋がる距離感" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "石畳に踊る" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "ブーツのつま先から" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "朝日は登る" }]
                        },
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "鐘が聞こえる" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "君への衝動は燃える" }]
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
                            members: ["Y", "B"],
                            text: [{ lyrics: "ねえ　パンパンパン" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "空騒ぎじゃない" }]
                        },
                        {
                            members: ["Y", "B"],
                            text: [{ lyrics: "乱反射" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "恋の夜は真昼" }]
                        },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "遠くても近いなんて思い出したんだ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "この世は誂えたステージで" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "僕らは不憫な表現者だ" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "ウラオモテカミヒトエ" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ほら" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "ほら" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "ほら" }]
                        },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "寄せては返す波の間に" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S"],
                            text: [{ lyrics: "僕がいるのかな" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "見透かされそうだ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "ターコイズブルーに溶けた" }]
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
                            text: [{ lyrics: "予想外に" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "シェイクスピアのラブストーリー？" }]
                        },
                        {
                            members: ["B", "P"],
                            text: [{ lyrics: "To be or not to beのKiss" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Lalala…)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "不確かな恋の証明を" }]
                        },
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "リアルタイムでQ.E.D." }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "トラップに" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "厳重注意で二重跳び" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "次はNOTHINGなんて" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "言わせない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G", "P"],
                            text: [{ lyrics: "だからYou & I" }]
                        },
                        {
                            members: ["W", "S"],
                            text: [{ lyrics: "空と" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "恋愛定理のPhrase" }]
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
                            text: [{ lyrics: "悲しみが連れてきた悲しみを笑って" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "劇的な展開　演じてみる？" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "となりへさあおいで" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "喜びを知ったなら" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["G"],
                            text: [{ lyrics: "劇場なんか" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "飛び出しちゃって" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "隠れて花を" }]
                        },
                        {
                            members: ["Y", "G"],
                            text: [{ lyrics: "咲かそう" }]
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
                            text: [{ lyrics: "ねえ　パンパンパン" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "お気に召すままに" }]
                        },
                        {
                            members: ["Y", "B"],
                            text: [{ lyrics: "燦々と" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "太陽の瞳を" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "僕だけに見せてよ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "その先の素顔まで" }]
                        },
                        {
                            members: ["S"],
                            text: [{ lyrics: "どうなの？" }]
                        },
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "That is the question" }]
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
                            members: ["W", "S", "B", "R", "G"],
                            text: [{ lyrics: "To be or not to be" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "時計台から響くよ Longing" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "S", "B", "R", "G"],
                            text: [{ lyrics: "To be or not to be" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "この身を焦がして" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "S", "B", "R", "G"],
                            text: [{ lyrics: "To be or not to be" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "バラの花の香りが" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "S", "B", "R", "G"],
                            text: [{ lyrics: "To be or not to be" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "That is the question" }]
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
                            text: [{ lyrics: "無条件に好きと嫌いが混じり合う" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "どんな f なんだって" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Lalala…)" }]
                        },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "不確かな恋の証明をこの出会いが故に" }] },
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
                            text: [{ lyrics: "予想外に" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "シェイクスピアのラブストーリー？" }]
                        },
                        {
                            members: ["R", "P"],
                            text: [{ lyrics: "To be or not to beのKiss" }]
                        },
                        {
                            members: [],
                            text: [{ lyrics: "(Lalala…)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W", "P"],
                            text: [{ lyrics: "不確かな恋の証明を" }]
                        },
                        {
                            members: ["Y", "P"],
                            text: [{ lyrics: "リアルタイムでQ.E.D." }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["B"],
                            text: [{ lyrics: "トラップに" }]
                        },
                        {
                            members: ["B", "R", "P"],
                            text: [{ lyrics: "厳重注意で二重跳び" }]
                        },
                        {
                            members: ["B", "R", "P"],
                            text: [{ lyrics: "次はNOTHINGなんて" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "言わせない" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "学ぶ憧憬に" }]
                        },
                        {
                            members: ["B", "G"],
                            text: [{ lyrics: "今日だって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["S", "P"],
                            text: [{ lyrics: "だからYou & I" }]
                        },
                        {
                            members: ["Y", "R"],
                            text: [{ lyrics: "空と" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "恋愛定理のPhrase" }]
                        },
                    ],
                },
            ],
        },
    ],
}
