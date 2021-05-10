import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';

interface TaskContextData {
  updateList: boolean;
  setUpdateList: Dispatch<SetStateAction<boolean>>;
  pendingTasks: number;
  setPendingTasks: Dispatch<SetStateAction<number>>;
  tasks: Array<tasksInterface>;
  completeTask: (idTask: string) => void;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
}

interface tasksInterface {
  title: string;
  description: string;
  points: number;
  date: Date;
  id: string;
}

export const TaskContext = createContext({} as TaskContextData);

export const TaskContextProvider: React.FC = ({ children }) => {
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [pendingTasks, setPendingTasks] = useState<number>(0);
  const [tasks, setTasks] = useState<Array<tasksInterface>>([]);
  const [progress, setProgress] = useState(100);

  async function completeTask(idTask: string): Promise<void> {
    if (idTask.length > 1) {
      try {
        await api.delete(`/tasks/${idTask}`);

        setUpdateList(!updateList);
        toast.success('Tarefa finalziada', {
          draggable: true
        });
      } catch (error) {
        toast.error('Problema em finalizar tarefa', {
          draggable: true
        });
      }
    }
  }

  useEffect(() => {
    async function getTasks(): Promise<void> {
      try {
        const response = await api.get('/tasks');

        setTasks([]);
        setTasks(response.data);
        setPendingTasks(response.data.length);
      } catch (error) {
        toast.error('Problema ao carregar tarefas');
      }
    }

    getTasks();
  }, [updateList]);

  return (
    <TaskContext.Provider
      value={{
        updateList,
        setUpdateList,
        pendingTasks,
        setPendingTasks,
        tasks,
        completeTask,
        progress,
        setProgress
      }}>
      {children}
    </TaskContext.Provider>
  );
};
