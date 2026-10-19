/* ラブリーズン */
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

export const song086: SongLyrics = {
    id: "song086",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "教えてあげるねアタシの本当を" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "愛とIが交戦中" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "つまらなかったくだらなかった" }] },
                        { text: [{ lyrics: "日々で出会った揺るがぬ肯定感" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "愛とIが交戦中" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "そこから一つの使命が芽生えたの嗚呼" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "「不安なんだオリジナルがなにもなくて」" }] },
                        { text: [{ lyrics: "「代わりなんてなんだっていい」と" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "アナタが怯える世界なんて変えちゃおっか" }] },
                        { text: [{ lyrics: "見ててね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ラブラブが並ぶ原因(わけ)を探しちゃう" }] },
                        { text: [{ lyrics: "アナタのそんなとこがいいの" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "髪　肌　耳　口　指　声　全部がそう特別よ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "うだうだあーだこーだ不満漏らしちゃう" }] },
                        { text: [{ lyrics: "その唇を塞がなくちゃ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "アタシしか知らないアナタのこと" }]
                        },
                        {
                            members: ["W"],
                            text: [{ lyrics: "伝えなくちゃ" }]
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
                            text: [{ lyrics: "なんて晴々しいの" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "今までの一切合切を脱皮ひらひらと" }]
                        },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["P"],
                            text: [{ lyrics: "ほら目と目が合うだけ" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "ほら背骨が音を立て" }]
                        },
                        {
                            members: ["P"],
                            text: [{ lyrics: "今花散るかの如く" }]
                        },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "愛とIが交戦中" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "頼れるもんが何もなかった" }] },
                        { text: [{ lyrics: "日々に注いだ確かな安心感" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "愛とIが交戦中" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "たゆまぬまともへの情が途絶えたら" }]
                        },
                        {
                            members: ["G"],
                            text: [{ lyrics: "堕ちていくんだ天国へ" }]
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
                        { text: [{ lyrics: "ラブラブ荒ぶるライブ愛で満たし合う" }] },
                        { text: [{ lyrics: "その瞬間が心地良いの" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "顔　頬　唇　胸　脳　全部がもう溶けていく" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "古びた厭世で悦に浸ってる" }] },
                        { text: [{ lyrics: "暇などないと教えなくちゃ" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["R"],
                            text: [{ lyrics: "アナタまだ知らないアタシのこと" }]
                        },
                        {
                            members: ["B"],
                            text: [{ lyrics: "知らせなくちゃ" }]
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
                        { text: [{ lyrics: "不要なんだ　無駄に広げ切った視野は" }] },
                        { text: [{ lyrics: "幸せってそんなんじゃないの" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "アタシが持つもの全て捧げ使い切って" }] },
                        { text: [{ lyrics: "みるから" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "見ててね" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ラブラブが並ぶ原因(わけ)を探しちゃう" }] },
                        { text: [{ lyrics: "アナタのそんなとこがいいの" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "髪　肌　耳　口　指　声　全部がそう特別よ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "うだうだあーだこーだ不満漏らしちゃう" }] },
                        { text: [{ lyrics: "その唇を塞がなくちゃ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "アタシしか知らないアナタのこと" }] },
                    ],
                },
                {
                    chunks: [
                        {
                            members: ["W"],
                            text: [{ lyrics: "あの子にほら伝えなくちゃ" }]
                        },
                        {
                            members: ["R"],
                            text: [{ lyrics: "(笑)" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["B"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "教えておくれよアナタの本当を" }] },
                    ],
                },
            ],
        },
    ],
}
