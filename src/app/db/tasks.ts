import type { Task } from "@/shared/types";
import { db } from "./indexedDB";

async function dbGetAllTasks(): Promise<Task[]> {
  return await db.tasks.toArray();
}
async function dbAddTask(task: Task): Promise<void> {
  await db.tasks.add(task);
}
async function dbUpdateTask(id: string, newTask: Partial<Task>): Promise<void> {
  await db.tasks.update(id, newTask);
}
async function dbDeleteTask(id: string): Promise<void> {
  await db.tasks.delete(id);
}
async function dbResetTasks(tasks: Task[]): Promise<void> {
  await db.tasks.clear();
  await db.tasks.bulkAdd(tasks);
}
async function dbGetTasksByProject(projectId: string): Promise<Task[]> {
  return await db.tasks.where("projectId").equals(projectId).toArray();
}

export {
  dbGetAllTasks,
  dbAddTask,
  dbDeleteTask,
  dbUpdateTask,
  dbResetTasks,
  dbGetTasksByProject,
};
