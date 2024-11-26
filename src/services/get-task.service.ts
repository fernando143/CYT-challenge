import { Task } from "../types/types"

export const getTaskService = (id:number) => {
  const tasks:Array<Task> = JSON.parse(localStorage.getItem('tasks') || '[]')
  const task = tasks.find(task => task.id === id)

  return task
}