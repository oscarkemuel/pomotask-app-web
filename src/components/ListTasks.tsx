import React, { useContext } from 'react';

import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import { Container, List, Title } from '../styles/components/ListTasks';
import ModalAddUser from './modals/ModalAddTask';
import { TaskContext } from '../context/TaskContext';
import ModalEditUser from './modals/ModalEditTask';

import pointsData from '../data/points.json';
import { CountdownContext } from '../context/TaskCountdown';

const ListTasks: React.FC = () => {
  const { tasks } = useContext(TaskContext);
  const {
    isActive,
    startCountdown,
    taskActive,
    setIdTaskActive,
    completeTask
  } = useContext(CountdownContext);

  return (
    <>
      <Title>
        <h1>Tarefas</h1>
        <p>
          {taskActive ? `Tarefa ativa: ${taskActive}` : 'Nenhuma tarefa ativa'}
        </p>
      </Title>
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

                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          {task.description || 'Sem drescrição'}
                        </Tooltip>
                      }>
                      <span className="d-inline-block">
                        <Button disabled style={{ pointerEvents: 'none' }}>
                          Descrição
                        </Button>
                      </span>
                    </OverlayTrigger>

                    <div className="infoChildren">
                      <div>{dateFormated}</div>
                      <div
                        style={{
                          backgroundColor: `${point[0].backgroundColor}`
                        }}>
                        {task.points}
                      </div>

                      {!isActive ? (
                        <>
                          <Button
                            variant="primary"
                            onClick={() => {
                              startCountdown(task.title);
                              setIdTaskActive(task.id);
                            }}>
                            Iniciar
                          </Button>
                          <button
                            type="button"
                            onClick={() => {
                              completeTask(task.id);
                            }}
                            style={{ background: 'transparent' }}>
                            <FaCheck style={{ color: 'green' }} />
                          </button>
                        </>
                      ) : (
                        <>
                          <Button variant="secondary">Iniciar</Button>
                          <button
                            type="button"
                            style={{ background: 'transparent' }}>
                            <FaCheck style={{ color: '#6c757d' }} />
                          </button>
                        </>
                      )}

                      {/* <Button variant="success">Terminar</Button> */}
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
