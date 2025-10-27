import { Dexie } from "dexie";
import { type Task } from "@/shared/types";

class TasksDB extends Dexie {
  tasks: Dexie.Table<Task, string>;
  constructor() {
    super("TasksDB");
    this.version(1).stores({
      tasks: "id , title",
    });
    this.tasks = this.table("tasks");
  }
}

export const db = new TasksDB();

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

export { dbGetAllTasks, dbAddTask, dbDeleteTask, dbUpdateTask, dbResetTasks };
