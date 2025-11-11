import { createContext, useContext, useReducer } from "react";
import type { NewTaskForm, ReducerAction } from "../types/newTask";
import { initialForm, ReducerFunction } from "../reducers/newTaskFormReducer";

const NewTaskContext = createContext<{
  form: NewTaskForm;
  dispatch: (action: ReducerAction) => void;
} | null>(null);

export const NewTaskProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, dispatch] = useReducer(ReducerFunction, initialForm);
  return <NewTaskContext value={{ form, dispatch }}>{children}</NewTaskContext>;
};

export const UseNewTaskContext = () => {
  const context = useContext(NewTaskContext);
  if (!context)
    throw new Error("useNewTaskContext must be used within a NewTaskProvider");
  return context;
};
