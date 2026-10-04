/* 逃光行 */
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

export const song085: SongLyrics = {
    id: "song085",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "行くあてもなく彷徨ってた" }] },
                        { text: [{ lyrics: "消えかけのこの灯が" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "名前も知らないその背に" }] },
                        { text: [{ lyrics: "連なって息を取り戻した" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "言葉よりも心伝い" }] },
                        { text: [{ lyrics: "繋がる運命のイタズラ" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "気づけば導かれるがままに" }] },
                        { text: [{ lyrics: "まだ見ぬ先へと走ってた" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "滲む月光が" }] },
                        { text: [{ lyrics: "まるで僕らを試す様に揺れ蠢く" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "瞬く星が" }] },
                        { text: [{ lyrics: "陰で道を囁く宵の闇に飲まれぬように" }] },
                        { text: [{ lyrics: "この手を離さないで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "止まらぬ針が刻むリズム" }] },
                        { text: [{ lyrics: "答えを求める" }] },
                        { text: [{ lyrics: "その瞳が包み込む宿命(さだめ)でさえも" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "押し寄せる時を振り解いて" }] },
                        { text: [{ lyrics: "待つ夜明けを君のそばで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "君と繋ぐエピファニー" }] },
                        { text: [{ lyrics: "カオスの狭間を駆け抜けて" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "守る彼方のヒカリ" }] },
                        { text: [{ lyrics: "奪わせない刻む誓い" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "ru ru runaway ru runaway" }] },
                        { text: [{ lyrics: "背を向けたこの世界で" }] },
                        { text: [{ lyrics: "暗闇の中君を見た" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "ru ru runaway ru runaway" }] },
                        { text: [{ lyrics: "それでも絶やさぬ光" }] },
                        { text: [{ lyrics: "目覚めても深く焼き付けて" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["P"],
                    chunks: [
                        { text: [{ lyrics: "滅びを背負うこの体に" }] },
                        { text: [{ lyrics: "綻びのような願い芽吹く" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "それが罪でも構わない" }] },
                        { text: [{ lyrics: "揺るがぬ思いは僕は君の守護神" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ガラスのような夜の底" }] },
                        { text: [{ lyrics: "音もなく明日が割れて" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "裸足のまま走る最中" }] },
                        { text: [{ lyrics: "滲む傷を美化していた" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "今この瞬間" }] },
                        { text: [{ lyrics: "諦めない" }] },
                        { text: [{ lyrics: "それは君の笑顔のおかげ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "たとえ果てしない雨" }] },
                        { text: [{ lyrics: "降り注いでも君の横で" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "押し寄せる闇を振り払って" }] },
                        { text: [{ lyrics: "迎える暁　君のそばで" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "残酷なこの世界が" }] },
                        { text: [{ lyrics: "僕らを試すよう笑っても" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "君が灯した燈" }] },
                        { text: [{ lyrics: "輝かせていてね永遠に" }] },
                    ],
                },
                {
                    members: [""],
                    chunks: [
                        { text: [{ lyrics: "（永遠に）" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "君と繋いだエピファニー" }] },
                        { text: [{ lyrics: "カオスの狭間を超えて行く" }] },
                    ],
                },
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "消えぬ僕らのヒカリ" }] },
                        { text: [{ lyrics: "胸に刻むこの誓い" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "ru ru runaway ru runaway" }] },
                        { text: [{ lyrics: "離れた空の下でも" }] },
                        { text: [{ lyrics: "君の声が照らす道" }] },
                    ],
                },
                {
                    members: ["W"],
                    chunks: [
                        { text: [{ lyrics: "ru ru runaway ru runaway" }] },
                        { text: [{ lyrics: "変わりゆくこの運命(さだめ)を" }] },
                        { text: [{ lyrics: "目に染みるほどに焼き付けて" }] },
                    ],
                },
            ],
        },
    ],
}
