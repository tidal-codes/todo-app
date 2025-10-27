import { groupVariants } from "./filterVariants";
import { GROUP_VARIANT } from "./group";

export const groupByOption = {
  DATE: {
    action: groupVariants.DATE,
    initial: () => ({
      [GROUP_VARIANT.DATE.NONE]: [],
      [GROUP_VARIANT.DATE.YESTERDAY]: [],
      [GROUP_VARIANT.DATE.TODAY]: [],
      [GROUP_VARIANT.DATE.TOMORROW]: [],
      [GROUP_VARIANT.DATE.OTHERS]: [],
    }),
  },
  PRIORITY: {
    action: groupVariants.PRIORITY,
    initial: () => {},
  },
};
