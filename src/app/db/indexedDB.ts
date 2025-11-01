import { Dexie } from "dexie";
import type { Task, Project } from "@/shared/types";

class TasksDB extends Dexie {
  projects: Dexie.Table<Project, string>;
  tasks: Dexie.Table<Task, string>;
  constructor() {
    super("TasksDB");
    this.version(1).stores({
      projects: "id , title , created_at",
      tasks: "id , projectId , title",
    });
    this.projects = this.table("projects");
    this.tasks = this.table("tasks");
  }
}

export const db = new TasksDB();
