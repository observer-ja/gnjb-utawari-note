/* 放課後ギュッと */
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

export const song042: SongLyrics = {
    id: "song042",
    note: "2番サビ終わりにペンライトを振る箇所がある。詳しくは公式ファンクラブであるゲンジブ観測所内の動画を参照。",

    lyrics_blocks: [
        {
            members: ["all"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "１２３４" }] },
                    ],
                },
            ],
        },
        {
            members: ["G"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "月曜から始まるテストのことなど" }] },
                        { text: [{ lyrics: "もう忘れてしまいたいな" }] },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "突然降る雨と待ち合わせした覚えはないけど" }] },
                        { text: [{ lyrics: "まあ悪くないか" }] },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "何気ない仕草や声を聞くだけで馬鹿になる" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "放課後ギュッと君の手を引いていけたら" }] },
                        { text: [{ lyrics: "きっと僕は弾けてしまう" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "あと少しで壊れそうなリミッターに" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "明日絶対負けないようにって起きた" }] },
                        { text: [{ lyrics: "午後の授業中" }] },
                    ],
                },
            ],
        },
        {
            members: ["P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "「全校諸君〜」述べる校長先生" }] },
                        { text: [{ lyrics: "ちょっと話長すぎてもうしんどいわ" }] },
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
                            text: [{ lyrics: "４時間目腹ペコで二次関数" }]
                        },
                        {
                            members: ["all"],
                            text: [{ lyrics: "あーやってらんねー！" }]
                        },
                        {
                            members: ["Y"],
                            text: [{ lyrics: "でも最前列　サボれない" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["S"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "こんな時君が隣、いや近くの席でいい" }] },
                        { text: [{ lyrics: "それだけで楽しいのに" }] },
                    ],
                },
            ],
        },
        {
            members: ["W"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "あの日ひいたクジが１５番なら、" }] },
                        { text: [{ lyrics: "消しゴムを落として・・・" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "待ち合わせ１０分前に着いて今きたよと" }] },
                        { text: [{ lyrics: "言えたのならかっこいいかな" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "あと少しで爆破されてしまいそうな" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "心臓(こころ)をギュッと押しこらえて" }] },
                        { text: [{ lyrics: "今僕の声を届けるよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "こんな僕の言葉だけじゃ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "君の顔は曇り始め困らせてしまうなんて" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "野暮な妄想はやめて" }] },
                        { text: [{ lyrics: "言うこと言わなきゃいけないね" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "ああ　握る汗　震えた声響く" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "放課後ギュッと君と繋いだこの手を" }] },
                        { text: [{ lyrics: "離さぬよう優しく掴んでる" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "あと少しを超えたリミッターは" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "これからはもう要らないね" }] },
                        { text: [{ lyrics: "止めどない未来を歌ってく" }] },
                    ],
                },
            ],
        },
    ],
}
