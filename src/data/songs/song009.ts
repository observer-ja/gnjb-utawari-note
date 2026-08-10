/* 嘘から始まる自称系 */
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

export const song009: SongLyrics = {
    id: "song009",
    note: "",

    lyrics_blocks: [
        {
            rows: [
                {
                    members: ["W", "G"],
                    chunks: [
                        { text: [{ lyrics: "メーデー　メーデー　GAME 0---" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "偽装　理想　重ね" }] },
                        { text: [{ lyrics: "そう　今日も順調" }] },
                    ],
                },
                {
                    members: ["B"],
                    chunks: [
                        { text: [{ lyrics: "他人の感情　言動　誘導" }] },
                        { text: [{ lyrics: "手に取るみたいだ" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "足りないな　足りない" }] },
                        { text: [{ lyrics: "今の僕を凌駕する存在なんて無い" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "勝ちの価値ってどんだけ？" }] },
                        { text: [{ lyrics: "くらい上等が良いでしょう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["Y", "R", "P"],
                            text: [{ lyrics: "Wow…" }]
                        },
                        { 
                            members: ["W", "P"],
                            text: [{ lyrics: "魅惑　イナフ　欲しがって" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["Y", "R", "P"],
                            text: [{ lyrics: "Wow…" }]
                        },
                        { 
                            members: ["W", "P"],
                            text: [{ lyrics: "渇いてゆく" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["Y", "R", "P"],
                            text: [{ lyrics: "Wow…" }]
                        },
                        { 
                            members: ["W", "P"],
                            text: [{ lyrics: "見栄え　着映え　着飾っても" }]
                        },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "壊れかけのバルブ" }] },
                        { text: [{ lyrics: "満たされない" }] },
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
                            text: [{ lyrics: "カランと缶の音　笑った" }]
                        },
                        { 
                            members: ["S"],
                            text: [{ lyrics: "ガランドウな胸　痛た" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["G"],
                            text: [{ lyrics: "妙なシンクロ" }]
                        },
                        { 
                            members: ["S"],
                            text: [{ lyrics: "これでいいんだろう？" }]
                        },
                        { 
                            members: ["S", "G", "P"],
                            text: [{ lyrics: "空へ　Bum-Bum-Bum" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["R", "P"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "Tsk-tsk Tsk-tsk 超身勝手" }] },
                        { text: [{ lyrics: "嘘から始まる自称系" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "真実はもう" }] },
                        { text: [{ lyrics: "胸中で疾うに腐ってんだ" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "Tsk-tsk Tsk-tsk 超自我って" }] },
                        { text: [{ lyrics: "自ら蔓延る事象系？" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "安心したいなんて" }] },
                        { text: [{ lyrics: "矛盾抱いてんだよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "「眼前崩壊致命傷です！」" }]
                        },
                        { 
                            members: ["Y", "S", "R", "G"],
                            text: [{ lyrics: "(「眼前崩壊致命傷です！」)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "243.0　無限大へ！」" }]
                        },
                        { 
                            members: ["Y", "S", "R", "G"],
                            text: [{ lyrics: "(「243.0　無限大へ！」)" }]
                        },
                    ],
                },
            ],
        },
        {
            members: ["Y"],
            rows: [
                {
                    chunks: [
                        { text: [{ lyrics: "最新型の理性で再構成" }] },
                        { text: [{ lyrics: "余裕綽々 Weather 最高って" }] },
                    ],
                },
                {
                    chunks: [
                        { text: [{ lyrics: "平気ぶって　アイス食って" }] },
                        { text: [{ lyrics: "じわり　勘違いのPain" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["G"],
                    chunks: [
                        { text: [{ lyrics: "ルーザー　ルーザー　なんて厭だ" }] },
                        { text: [{ lyrics: "今の僕を棄ててまで絶対吐かない" }] },
                    ],
                },
                {
                    members: ["S"],
                    chunks: [
                        { text: [{ lyrics: "思考　抗争　右往左往" }] },
                        { text: [{ lyrics: "焦ってんのに　アイロニー" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["Y", "R", "P"],
                            text: [{ lyrics: "Wow…" }]
                        },
                        { 
                            members: ["G", "P"],
                            text: [{ lyrics: "魅力　微毒　知らぬ間に" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["Y", "R", "P"],
                            text: [{ lyrics: "Wow…" }]
                        },
                        { 
                            members: ["R", "P"],
                            text: [{ lyrics: "溜まってゆく" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["Y", "P"],
                            text: [{ lyrics: "Wow…" }]
                        },
                        { 
                            members: ["W", "P"],
                            text: [{ lyrics: "僕はきっと試作品かな" }]
                        },
                    ],
                },
                {
                    members: ["Y", "G"],
                    chunks: [
                        { text: [{ lyrics: "胸の部品　きつく締めたって" }] },
                        { text: [{ lyrics: "Bum-Bum-Bum" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "Tsk-tsk Tsk-tsk 凋落って" }] },
                        { text: [{ lyrics: "風向き次第　衝動で" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "共感はもう" }] },
                        { text: [{ lyrics: "空中で疾うに廃ってんだ" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "Tsk-tsk Tsk-tsk 蝶にだって" }] },
                        { text: [{ lyrics: "シニカルな笑みを浮かべて" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "感心したふりで" }] },
                        { text: [{ lyrics: "足元見るんだろう" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "「眼前崩壊致命傷です！」" }]
                        },
                        { 
                            members: ["Y", "S", "R", "G"],
                            text: [{ lyrics: "(「眼前崩壊致命傷です！」)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "243.0　無限大へ！」" }]
                        },
                        { 
                            members: ["Y", "S", "R", "G"],
                            text: [{ lyrics: "(「243.0　無限大へ！」)" }]
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
                        { text: [{ lyrics: "掴んで　歪んで　highになって" }] },
                        { text: [{ lyrics: "気づけば空っぽ　違うだろう" }] },
                    ],
                },
                {
                    members: ["Y"],
                    chunks: [
                        { text: [{ lyrics: "現実はもう" }] },
                        { text: [{ lyrics: "目の前に疾うに迫ってんだ" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "無冠で　向かって　灰になって" }] },
                        { text: [{ lyrics: "この手に何が残るんだろう" }] },
                    ],
                },
                {
                    members: ["R"],
                    chunks: [
                        { text: [{ lyrics: "安全地帯なんて" }] },
                        { text: [{ lyrics: "どこにもないかな" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    members: ["Y", "B", "R", "P"],
                    chunks: [
                        { text: [{ lyrics: "Tsk-tsk Tsk-tsk 超身勝手" }] },
                        { text: [{ lyrics: "嘘から始まる自称系" }] },
                    ],
                },
                {
                    members: ["B", "P"],
                    chunks: [
                        { text: [{ lyrics: "真実はもう" }] },
                        { text: [{ lyrics: "胸中で疾うに腐ってんだ" }] },
                    ],
                },
                {
                    members: ["Y", "W", "P"],
                    chunks: [
                        { text: [{ lyrics: "Tsk-tsk Tsk-tsk 超自我って" }] },
                        { text: [{ lyrics: "自ら蔓延る事象系？" }] },
                    ],
                },
                {
                    members: ["W", "P"],
                    chunks: [
                        { text: [{ lyrics: "安心したいなんて" }] },
                        { text: [{ lyrics: "矛盾抱いてんだよ" }] },
                    ],
                },
            ],
        },
        {
            rows: [
                {
                    chunks: [
                        { 
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "「眼前崩壊致命傷です！」" }]
                        },
                        { 
                            members: ["Y", "S", "R", "G"],
                            text: [{ lyrics: "(「眼前崩壊致命傷です！」)" }]
                        },
                    ],
                },
                {
                    chunks: [
                        { 
                            members: ["W", "B", "P"],
                            text: [{ lyrics: "243.0　無限大へ！」" }]
                        },
                        { 
                            members: ["Y", "S", "R", "G"],
                            text: [{ lyrics: "(「243.0　無限大へ！」)" }]
                        },
                    ],
                },
            ],
        },
    ],
}
