import Menu from "@/shared/ui/Menu";
import React from "react";

const PriorityMenu = ({ children }: { children: React.ReactNode }) => {
  return <Menu buttonComponent={children}></Menu>;
};

export default PriorityMenu;
