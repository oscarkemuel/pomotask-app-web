import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { TaskContext } from './TaskContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  taskActive: string;
  idTaskActive: string;
  startCountdown: (task: string) => void;
  resetCountdown: () => void;
  setTaskActive: React.Dispatch<React.SetStateAction<string>>;
  setIdTaskActive: React.Dispatch<React.SetStateAction<string>>;
  setHasFinished: React.Dispatch<React.SetStateAction<boolean>>;
  completeTask: (idTask: string) => void;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  resetProgress: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({
  children
}: CountdownProviderProps) => {
  const { updateList, setUpdateList, setProgress } = useContext(TaskContext);

  const [time, setTime] = useState(25 * 60);
  const [current, setCurrent] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [idTaskActive, setIdTaskActive] = useState('');
  const [taskActive, setTaskActive] = useState('');

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function resetProgress(): void {
    setProgress(100);
  }

  function startCountdown(task: string): void {
    setHasFinished(false);
    setTaskActive(task);
    setIsActive(true);
  }

  function resetCountdown(): void {
    clearTimeout(countdownTimeout);
    setIsActive(false);

    if (quantity % 8 === 0 && quantity !== 0) {
      setTime(20 * 60);
      setCurrent(20 * 60);
      resetProgress();
      return;
    }

    if (quantity % 2 === 0) {
      setTime(5 * 60);
      setCurrent(5 * 60);
      resetProgress();
    } else {
      setTime(25 * 60);
      setCurrent(25 * 60);
      resetProgress();
    }
  }

  async function completeTask(idTask: string): Promise<void> {
    if (idTask.length > 1) {
      try {
        await api.delete(`/tasks/${idTask}`);

        setUpdateList(!updateList);
        setTaskActive('');
        setTime(25 * 60);
        setCurrent(25 * 60);
        resetProgress();
        setHasFinished(false);
        setIdTaskActive('');
        toast.success('Tarefa finalziada', {
          draggable: true
        });
      } catch (error) {
        toast.error('Problema em remover tarefa', {
          draggable: true
        });
      }
    } else {
      setTaskActive('');
      resetCountdown();
      setHasFinished(false);
      setIdTaskActive('');
      toast.success('Tarefa finalziada', {
        draggable: true
      });
    }
  }

  useEffect(() => {
    function getBodyMessage(): string {
      if (quantity % 8 === 0 && quantity !== 0) {
        return `Descanço de 20min - Tarefa: ${taskActive || 'Nenhuma'}`;
      }

      if (quantity % 2 === 0) {
        return `Descanço de 5min - Tarefa: ${taskActive || 'Nenhuma'}`;
      }

      return `Bora trabalhar! - Tarefa: ${taskActive || 'Nenhuma'}`;
    }

    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
        setProgress(Math.round((time - 1) * 100) / current);
        // console.log(Math.round((time - 1) * 100) / current);
        // console.log(progress);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      resetCountdown();

      new Audio('/notification.mp3').play();

      const bodyMessage = getBodyMessage();
      if (Notification.permission === 'granted') {
        (() => new Notification(bodyMessage, {}))();
      }

      const quantityTemp = quantity + 1;
      setQuantity(quantityTemp);
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        taskActive,
        idTaskActive,
        startCountdown,
        resetCountdown,
        setTaskActive,
        setIdTaskActive,
        setHasFinished,
        completeTask,
        setTime,
        setQuantity,
        setCurrent,
        resetProgress
      }}>
      {children}
    </CountdownContext.Provider>
  );
};
