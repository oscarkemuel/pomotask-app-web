import React, { useState, useEffect } from 'react';

import { Container, List, Title } from '../styles/components/ListTasks';
import { Button } from 'react-bootstrap';
// import { FaPlus } from 'react-icons/fa'
import { api } from '../services/api';
import ModalAddUser from './modals/ModalAddTask';

interface tasksInterface {
  title: string;
  description: string;
  points: number;
  date: Date;
}

const ListTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Array<tasksInterface>>([]);

  useEffect(() => {
    async function getTasks(){
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        setTasks([{
          title: 'ERROR',
          description: 'ERROR',
          points: 0,
          date: new Date('01/01/1000'),
        }])
      }
    }

    getTasks();
  }, [])

  return(
    <>
    <Title>Tarefas</Title>
    <Container>
      {/* <Button variant="primary">Adicionar</Button> */}
      <ModalAddUser />
      <List>
        {tasks.length > 0 ? tasks.map((task, id) => {
          const date = new Date(task.date);
          const dateFormated = date.toLocaleDateString();

          return(
            <div className="listItem">
              <div className="itemNumber">{id + 1}</div>
              <div className="itemInfo">
                <div className="name">
                  <p>{task.title}</p>
                </div>
                <div className="infoChildren">
                  <p>{dateFormated}</p>
                  <p>{task.points}</p>
                  <Button variant="primary" >Iniciar</Button>
                </div>
              </div>
            </div>
          )
        }) : <h3>Adicione uma nova tarefa</h3>}
        {}
      </List>
    </Container>
    </>
  )
}

export default ListTasks;
