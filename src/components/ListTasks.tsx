import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { Container, List, Title } from '../styles/components/ListTasks';
import ModalAddUser from './modals/ModalAddTask';
import { TaskContext } from '../context/TaskContext';
import ModalEditUser from './modals/ModalEditTask';

import pointsData from '../data/points.json';

const ListTasks: React.FC = () => {
  const { tasks } = useContext(TaskContext);

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

              const point = pointsData.filter(
                (points) => task.points === points.point
              );

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
                        descriptionValue={task.description}
                      />
                    </div>
                    <div className="infoChildren">
                      <div>{dateFormated}</div>
                      <div
                        style={{
                          backgroundColor: `${point[0].backgroundColor}`
                        }}>
                        {task.points}
                      </div>
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
