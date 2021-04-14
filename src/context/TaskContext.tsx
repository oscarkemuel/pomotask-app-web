import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react';

interface TaskContextData {
  updateList: boolean;
  setUpdateList: Dispatch<SetStateAction<boolean>>;
  pendingTasks: number;
  setPendingTasks: Dispatch<SetStateAction<number>>;
}

export const TaskContext = createContext({} as TaskContextData);

export const TaskContextProvider: React.FC = ({ children }) => {
  const [updateList, setUpdateList] = useState<boolean>(false);
  const [pendingTasks, setPendingTasks] = useState<number>(0);

  return (
    <TaskContext.Provider
      value={{
        updateList,
        setUpdateList,
        pendingTasks,
        setPendingTasks
      }}>
      {children}
    </TaskContext.Provider>
  );
};
