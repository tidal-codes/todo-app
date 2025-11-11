import type { Priority } from "@/shared/types";
import type { NewTaskForm, ReducerAction } from "../types/newTask";

export const REDUCER_ACTIONS = {
  UPDATE_TITLE: "UPDATE_TITLE",
  UPDATE_DESCRIPTION: "UPDATE_DESCRIPTION",
  DUE_DATE: "DUE_DATE",
  SET_PRIORITY: "SET_PRIORITY",
  ADD_MEMBER: "ADD_MEMBER",
  REMOVE_MEMBER: "REMOVE_MEMBER",
  RESET: "RESET",
} as const;

export const initialForm: NewTaskForm = {
  title: "",
  description: "",
  dueDate: "1404-8-22",
  priority: "0",
  assignedMembers: [],
};

export function ReducerFunction(state: NewTaskForm, action: ReducerAction) {
  switch (action.type) {
    case REDUCER_ACTIONS.UPDATE_TITLE:
      return { ...state, title: action.value };
    case REDUCER_ACTIONS.UPDATE_DESCRIPTION:
      return { ...state, description: action.value };
    case REDUCER_ACTIONS.ADD_MEMBER:
      return {
        ...state,
        assignedMembers: [...state.assignedMembers, action.value],
      };
    case REDUCER_ACTIONS.REMOVE_MEMBER:
      return {
        ...state,
        assignedMembers: state.assignedMembers.filter(
          (m) => m !== action.value,
        ),
      };
    case REDUCER_ACTIONS.DUE_DATE:
      return { ...state, dueDate: action.value };
    case REDUCER_ACTIONS.SET_PRIORITY:
      return { ...state, priority: action.value };
    case REDUCER_ACTIONS.RESET:
      return {
        title: "",
        dueDate: "1404-8-22",
        assignedMembers: [],
        priority: "0" as Priority,
      };
    default:
      return state;
  }
}
