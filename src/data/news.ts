export interface NewsItemType {
    date: string;
    text: string;
    url?: string;
}

export const newsData: NewsItemType[] = [
    {
        date: "2026.08.23" ,
        text: "お問い合わせの確認・対応スケジュールに関する案内を追記しました。",
        url: "/gnjb-utawari-note/contact"
    },
    {
        date: "2026.08.23" ,
        text: "一部楽曲の歌割りの修正を行いました。"
    },
    {
        date: "2026.08.22" ,
        text: "全楽曲の歌割りを公開しました。"
    },
    {
        date: "2026.08.18" ,
        text: "楽曲検索ページにおける、「選択中の条件」部分の軽微な修正を行いました。"
    },
    {
        date: "2026.08.16",
        text: "サイトをオープンしました。"
    },
];