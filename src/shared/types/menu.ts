type MenuItemType = {
  type: "item";
  label: string;
  onClick?: () => void;
};

type MenuGroupType = {
  type: "group";
  label: string;
  children: MenuItemType[];
};

type MenuOptionGroupType = {
  type: "optionGroup";
  label: string;
  optionType: "radio" | "checkbox";
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
};

type MenuSubmenuType = {
  type: "submenu";
  label: string;
  children: (MenuItemType | MenuOptionGroupType)[];
};

export type DynamicMenuItem =
  | MenuItemType
  | MenuGroupType
  | MenuOptionGroupType
  | MenuSubmenuType;
