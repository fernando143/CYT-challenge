import { Task } from "../types/types";

export const deleteTaskService = (id: number): Promise<{ id: number }> => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      const tasks: Array<Task> = JSON.parse(
        localStorage.getItem("tasks") || "[]"
      );
      const filteredTasks = tasks.filter((task) => task.id !== id);

      localStorage.setItem("tasks", JSON.stringify(filteredTasks));

      resolve({ id });
    }, 500);
  });
};
