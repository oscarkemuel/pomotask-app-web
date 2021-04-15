import React, { useState, useEffect, useContext } from 'react';

import { Button } from 'react-bootstrap';
import { Container, List, Title } from '../styles/components/ListTasks';
// import { FaPlus } from 'react-icons/fa'
import { api } from '../services/api';
import ModalAddUser from './modals/ModalAddTask';
import { TaskContext } from '../context/TaskContext';
import ModalEditUser from './modals/ModalEditTask';

interface tasksInterface {
  title: string;
  description: string;
  points: number;
  date: Date;
  id: string;
}

const ListTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Array<tasksInterface>>([]);
  const { updateList, setPendingTasks } = useContext(TaskContext);

  useEffect(() => {
    async function getTasks(): Promise<void> {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
        setPendingTasks(response.data.length);
      } catch (error) {
        console.error(error);
      }
    }

    getTasks();
  }, [updateList]);

  return (
    <>
      <Title>Tarefas</Title>
      <Container>
        <ModalAddUser />
        <List>
          {tasks.length > 0 ? (
            tasks.map((task, id) => {
              const date = new Date(task.date);
              const dateFormated = date.toLocaleDateString();

              return (
                <div className="listItem" key={id.toString()}>
                  <div className="itemNumber">{id + 1}</div>
                  <div className="itemInfo">
                    <div className="name">
                      <ModalEditUser
                        name={task.title}
                        idTask={task.id}
                        dateValue={task.date}
                        pointsValue={task.points}
                      />
                    </div>
                    <div className="infoChildren">
                      <div>{dateFormated}</div>
                      <div>{task.points}</div>
                      <Button variant="primary">Iniciar</Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Adicione uma nova tarefa</h3>
          )}
          {}
        </List>
      </Container>
    </>
  );
};

export default ListTasks;
