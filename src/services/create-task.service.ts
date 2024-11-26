import { Task } from "../types/types";

export const createTaskService = (task: Omit<Task, "id">): Promise<Task> => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const newTask = { ...task, id: new Date().getTime() };

      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

      resolve(newTask);
    }, 500);
  });
};
