"use client";

import { Menu as BaseMenu, Portal } from "@chakra-ui/react";
import React, { useState } from "react";
import type { Priority } from "../types";

const Menu = ({
  children,
  menuList,
  value,
  onChange,
}: {
  children: React.ReactNode;
  defaultValue: Priority;
}) => {
  return (
    <BaseMenu.Root positioning={{ strategy: "fixed", hideWhenDetached: true }}>
      <BaseMenu.Trigger asChild>{children}</BaseMenu.Trigger>
      <Portal>
        <BaseMenu.Positioner>
          <BaseMenu.Content minW="10rem" zIndex={1500}>
            <BaseMenu.RadioItemGroup
              value={value}
              onValueChange={(e) => onChange(e.value)}
            >
              {menuList.map((item) => (
                <BaseMenu.RadioItem
                  key={item.value}
                  value={item.value}
                  dir="rtl"
                >
                  <BaseMenu.ItemIndicator dir="rtl" />
                  {item.icon}
                  {item.label}
                </BaseMenu.RadioItem>
              ))}
            </BaseMenu.RadioItemGroup>
          </BaseMenu.Content>
        </BaseMenu.Positioner>
      </Portal>
    </BaseMenu.Root>
  );
};

export default Menu;
