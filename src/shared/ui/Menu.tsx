import { Menu as BaseMenu, Portal } from "@chakra-ui/react";
import React, { useState } from "react";
import type { Priority } from "../types";
import type { DynamicMenuItem } from "../types/menu";

interface MenuProps {
  children: React.ReactNode;
  items: DynamicMenuItem[];
}

const Menu = ({ children, items }: MenuProps) => {
  return (
    <BaseMenu.Root positioning={{ strategy: "fixed", hideWhenDetached: true }}>
      <BaseMenu.Trigger asChild>{children}</BaseMenu.Trigger>
      <Portal>
        <BaseMenu.Positioner>
          <BaseMenu.Content minW="10rem" zIndex={1500}>
            {/* {items.map((item, i) => {
              switch (item.type) {
                case "optionGroup":
                  return item.optionType === "radio" ? (
                    <BaseMenu.RadioItemGroup
                      key={i}
                      value={item.value}
                      onValueChange={({ value }) => item.onChange(value)}
                    >
                      {item.options.map((opt) => (
                        <BaseMenu.RadioItem key={opt.value} value={opt.value}>
                          {opt.label}
                          <BaseMenu.ItemIndicator />
                        </BaseMenu.RadioItem>
                      ))}
                    </BaseMenu.RadioItemGroup>
                  ) : null;

                default:
                  return null;
              }
            })} */}
          </BaseMenu.Content>
        </BaseMenu.Positioner>
      </Portal>
    </BaseMenu.Root>
  );
};

export default Menu;
