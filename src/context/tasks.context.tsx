import {
  useState,
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { Task } from "../types/types";
import { getTasksService } from "../services/get-tasks.service";

type TasksContext = {
  tasks: Array<Task>;
  fetchTasks: () => void;
};

const initialState: TasksContext = {
  tasks: [],
  fetchTasks: () => {},
};

const TasksContext = createContext<TasksContext>(initialState);

type TasksProviderProps = {
  children: ReactElement;
};

const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const fetchTasks = useCallback(() => {
    const items = getTasksService();
    setTasks(items);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, fetchTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;

export const useTasksContext = () => useContext(TasksContext);
