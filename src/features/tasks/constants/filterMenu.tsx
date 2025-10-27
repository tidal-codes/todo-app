import { CalendarFold, Star, CaseSensitive } from "lucide-react";
export const taskviewOptions = [
  {
    type: "groupBy",
    title: "دسته بندی بر اساس",
    options: [
      {
        title: "تاریخ",
        icon: <CalendarFold size={18} />,
        value: "DATE",
      },
      {
        title: "اولویت",
        icon: <Star size={18} />,
        value: "PRIORITY",
      },
    ],
  },
  {
    type: "sortBy",
    title: "اولویت بندی بر اساس",
    options: [
      {
        title: "تاریخ",
        icon: <CalendarFold size={18} />,
        value: "DATE",
      },
      {
        title: "اولویت",
        icon: <Star size={18} />,
        value: "PRIORITY",
      },
      {
        title: "عنوان",
        icon: <CaseSensitive size={18} />,
        value: "TITLE",
      },
    ],
  },
] as const;
