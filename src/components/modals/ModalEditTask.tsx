import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { ModalContent } from '../../styles/components/modals/ModalAddTask';

import pointsData from '../../data/points.json';

import { TaskContext } from '../../context/TaskContext';

interface dataInterface {
  title: string;
  date: string;
  points: number;
  description?: string;
}

interface Props {
  name: string;
  idTask: string;
  dateValue: Date;
  pointsValue: number;
  descriptionValue: string;
  position: number;
}

const ModalEditUser: React.FC<Props> = ({
  name,
  idTask,
  dateValue,
  pointsValue,
  descriptionValue,
  position
}: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  const { updateList, setUpdateList } = useContext(TaskContext);

  function formatDate(date: Date): string {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join('-');
  }

  const dateFormated = formatDate(new Date(dateValue));

  async function deleteTask(): Promise<void> {
    const dataTemporary = JSON.parse(localStorage.getItem('tasks'));
    const arrayTemporary = dataTemporary.filter((task) => task.id !== idTask);
    const tasksTemporary = JSON.stringify(arrayTemporary);
    localStorage.setItem('tasks', tasksTemporary);

    setUpdateList(!updateList);
    toast.error('Tarefa removida', {
      draggable: true
    });
  }

  async function editTask(data: dataInterface): Promise<void> {
    const dataTemporary = JSON.parse(localStorage.getItem('tasks'));
    const tasksTemporary = [...dataTemporary];
    const newObject = {
      title: data.title,
      description: data.description,
      points: Number(data.points),
      date: data.date,
      id: idTask
    };
    tasksTemporary[position] = newObject;

    localStorage.setItem('tasks', JSON.stringify(tasksTemporary));

    setUpdateList(!updateList);

    toast.success('Tarefa atualizada', {
      draggable: true
    });
  }

  const formik = useFormik({
    initialValues: {
      title: name || '',
      date: dateFormated || '',
      points: pointsValue || 1,
      description: descriptionValue || ''
    },
    validationSchema: yup.object({
      title: yup.string().required('Campo necessário'),
      date: yup.string().required('Campo necessário'),
      points: yup.number(),
      description: yup.string()
    }),
    onSubmit: (values) => {
      const data = values;
      editTask(data);
    }
  });

  function colorSelect(pointValue: number): Array<string> {
    const teste = Number(pointValue);
    const point = pointsData.filter((points) => points.point === teste);

    if (point[0]) {
      return [point[0].backgroundColor, point[0].color];
    }

    return ['#fff', '#000'];
  }

  return (
    <>
      <button
        onClick={() => {
          handleShow();
        }}
        type="button">
        {name}
      </button>
      <Modal show={show} onHide={handleClose}>
        <ModalContent>
          <Modal.Header closeButton>
            <Modal.Title>Alterar ou Excluir</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Row>
                <Form.Group controlId="formName">
                  <Form.Label>Nome da tarefa</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    maxLength={20}
                    className="mb-2"
                    placeholder="Digite o nome da tarefa"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    isInvalid={!!formik.errors.title}
                  />
                  {formik.errors.title && formik.touched.title ? (
                    <span className="errorLabel">{formik.errors.title}</span>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formDate">
                  <Form.Label>Data de entrega</Form.Label>
                  <Form.Control
                    name="date"
                    type="date"
                    className="mb-2"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    isInvalid={!!formik.errors.date}
                  />
                  {formik.errors.date && formik.touched.date ? (
                    <span className="errorLabel">{formik.errors.date}</span>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formpoints">
                  <Form.Label>Pontos</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    name="points"
                    className="mb-2"
                    onChange={formik.handleChange}
                    value={formik.values.points}
                    isInvalid={!!formik.errors.points}
                    style={{
                      backgroundColor: `${
                        colorSelect(formik.values.points)[0]
                      }`,
                      color: `${colorSelect(formik.values.points)[1]}`
                    }}>
                    {pointsData.map((points, id) => {
                      return (
                        <option
                          style={{
                            backgroundColor: points.backgroundColor,
                            color: points.color
                          }}
                          className="options"
                          key={id.toString()}>
                          {points.point}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formDescription">
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    name="description"
                    as="textarea"
                    className="mb-2"
                    placeholder="Descrição"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    isInvalid={!!formik.errors.description}
                  />
                  {formik.errors.description && formik.touched.description ? (
                    <span className="errorLabel">
                      {formik.errors.description}
                    </span>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Modal.Footer>
                <Button variant="success" type="submit" onClick={handleClose}>
                  Salvar
                </Button>
                <Button variant="danger" onClick={() => deleteTask()}>
                  Remover
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditUser;
