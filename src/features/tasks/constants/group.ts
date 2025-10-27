export type Group = typeof GROUP;
export type GroupVariants = typeof GROUP_VARIANT;

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
  [GROUP.PRIORITY]: {
    0: "NONE",
    1: "LOW",
    2: "MEDIUM",
    3: "HIGH",
    NONE: "NONE",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    HIGH: "HIGH",
  },
} as const;

export const GROUP_TITLE = {
  [GROUP.DATE]: {
    [GROUP_VARIANT.DATE.NONE]: "بدون تاریخ",
    [GROUP_VARIANT.DATE.YESTERDAY]: "دیروز",
    [GROUP_VARIANT.DATE.TODAY]: "امروز",
    [GROUP_VARIANT.DATE.TOMORROW]: "فردا",
    [GROUP_VARIANT.DATE.OTHERS]: "غیره",
  },
  [GROUP.PRIORITY]: {
    [GROUP_VARIANT.PRIORITY.NONE]: "بدون اولویت",
    [GROUP_VARIANT.PRIORITY.LOW]: "پایین",
    [GROUP_VARIANT.PRIORITY.MEDIUM]: "متوسط",
    [GROUP_VARIANT.PRIORITY.HIGH]: "بالا",
  },
};
