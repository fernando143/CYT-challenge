import { Task } from "../types/types"

export const getTasksService = () => {
  const tasks:Array<Task> = JSON.parse(localStorage.getItem('tasks') || '[]')

  return tasks
}