import type { Priority } from "@/shared/types";
import type { REDUCER_ACTIONS } from "../reducers/newTaskFormReducer";

export type assignedMember = string;

export interface NewTaskForm {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  assignedMembers: assignedMember[];
}

export interface NewTaskSupabase extends NewTaskForm {
  project_id: string;
}

export type ReducerAction =
  | { type: typeof REDUCER_ACTIONS.UPDATE_TITLE; value: string }
  | { type: typeof REDUCER_ACTIONS.UPDATE_DESCRIPTION; value: string }
  | { type: typeof REDUCER_ACTIONS.DUE_DATE; value: string }
  | { type: typeof REDUCER_ACTIONS.SET_PRIORITY; value: Priority }
  | { type: typeof REDUCER_ACTIONS.ADD_MEMBER; value: string }
  | { type: typeof REDUCER_ACTIONS.REMOVE_MEMBER; value: string }
  | { type: typeof REDUCER_ACTIONS.RESET };
