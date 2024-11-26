import { Task } from "../types/types";

export const updateTaskService = (task: Task): Promise<{ id: number }> => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      const tasks: Array<Task> = JSON.parse(
        localStorage.getItem("tasks") || "[]"
      );

      const newTasks = tasks.map((_task) => {
        if (_task.id === task.id) {
          return task;
        } else {
          return _task;
        }
      });

      localStorage.setItem("tasks", JSON.stringify(newTasks));

      resolve({
        id: task.id,
      });
    }, 500);
  });
};
