import React, { createContext, useContext, useMemo, useState } from "react";
import { type SortBy, type GroupBy } from "@/shared/types";
type Filter = {
  groupBy: GroupBy;
  sortBy: SortBy;
};
type FilterState = {
  filter: { groupBy: GroupBy; sortBy: SortBy };
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};
const FilterContext = createContext<null | FilterState>(null);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<{ groupBy: GroupBy; sortBy: SortBy }>({
    groupBy: "DATE",
    sortBy: "DATE",
  });
  const value = useMemo(() => ({ filter, setFilter }), [filter]);
  return <FilterContext value={value}>{children}</FilterContext>;
};
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
};
