import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';

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

  function completeTask(idTask: string): void {
    if (idTask.length > 1) {
      const dataTemporary = JSON.parse(localStorage.getItem('tasks'));
      const arrayTemporary = dataTemporary.filter((task) => task.id !== idTask);
      const tasksTemporary = JSON.stringify(arrayTemporary);
      localStorage.setItem('tasks', tasksTemporary);

      setUpdateList(!updateList);

      toast.success('Tarefa finalziada', {
        draggable: true
      });
    }
  }

  useEffect(() => {
    function getTasks(): void {
      let data = JSON.parse(localStorage.getItem('tasks'));
      if (data) {
        data.sort(function (a, b): any {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      }
      if (data === null) {
        const tasksTemporary = JSON.stringify([]);
        localStorage.setItem('tasks', tasksTemporary);
        data = JSON.parse(localStorage.getItem('tasks'));

        setTasks([]);
        localStorage.setItem('tasks', JSON.stringify([]));
        setPendingTasks(0);
      } else {
        setTasks([]);
        setTasks(data);
        localStorage.setItem('tasks', JSON.stringify(data));
        setPendingTasks(data.length);
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
