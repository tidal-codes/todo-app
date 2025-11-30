import React, { createContext, useContext, useMemo, useState } from "react";

type FilterState = {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
};
const ProjectFilterContext = createContext<null | FilterState>(null);

export const ProjectFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const value = useMemo(
    () => ({ searchKeyword, setSearchKeyword }),
    [searchKeyword],
  );
  return <ProjectFilterContext value={value}>{children}</ProjectFilterContext>;
};

export const useProjectFilter = () => {
  const context = useContext(ProjectFilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
};
