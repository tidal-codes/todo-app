import { createContext, useContext, type ReactNode } from "react";
import { useAddNewProject } from "../hooks/useAddNewProject";

const NewProjectContext = createContext<any>(null);

export const NewProjectProvider = ({ children }: { children: ReactNode }) => {
  const projectHook = useAddNewProject();

  return (
    <NewProjectContext.Provider value={projectHook}>
      {children}
    </NewProjectContext.Provider>
  );
};

export const useAddNewProjectContext = () => {
  const context = useContext(NewProjectContext);
  if (!context) throw new Error("Must be used within NewProjectProvider");
  return context;
};
