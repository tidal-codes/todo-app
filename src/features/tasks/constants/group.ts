export const GROUP = {
  DATE: "DATE",
  PRIORITY: "PRIORITY",
} as const;

export const GROUP_VARIANT = {
  [GROUP.DATE]: {
    NONE: "NONE",
    YESTERDAY: "YESTERDAY",
    TODAY: "TODAY",
    TOMORROW: "TOMORROW",
    OTHERS: "OTHERS",
  },
} as const;

export const GROUP_TITLE = {
  [GROUP_VARIANT.DATE.NONE]: "بدون تاریخ",
  [GROUP_VARIANT.DATE.YESTERDAY]: "دیروز",
  [GROUP_VARIANT.DATE.TODAY]: "امروز",
  [GROUP_VARIANT.DATE.TOMORROW]: "فردا",
  [GROUP_VARIANT.DATE.OTHERS]: "غیره",
};
