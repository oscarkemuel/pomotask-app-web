import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { ModalContent } from '../../styles/components/modals/ModalAddTask';

import pointsData from '../../data/points.json';

import { api } from '../../services/api';

import { TaskContext } from '../../context/TaskContext';

interface dataInterface {
  title: string;
  date: Date;
  points: number;
  description?: string;
}

interface Props {
  name: string;
  idTask: string;
  dateValue: Date;
  pointsValue: number;
}

const ModalEditUser: React.FC<Props> = ({
  name,
  idTask,
  dateValue,
  pointsValue
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
    try {
      await api.delete(`/tasks/${idTask}`);

      toast.error('Tarefa removida', {
        draggable: true
      });
      handleClose();
      setUpdateList(!updateList);
    } catch (error) {
      toast.error('Problema em remover tarefa', {
        draggable: true
      });
    }
  }

  const formik = useFormik({
    initialValues: {
      title: name || '',
      date: dateFormated || '',
      points: pointsValue || 1,
      description: ''
    },
    validationSchema: yup.object({
      title: yup.string().required('Campo necessário'),
      date: yup.string().required('Campo necessário'),
      points: yup.number(),
      description: yup.string()
    }),
    onSubmit: (values) => {
      const data = values;
      console.log(data);
    }
  });

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
            <Modal.Title>Informações</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Row>
                <Form.Group controlId="formName">
                  <Form.Label>Nome da tarefa</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
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
                    isInvalid={!!formik.errors.points}>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Salvar
            </Button>
            <Button variant="danger" onClick={() => deleteTask()}>
              Remover
            </Button>
          </Modal.Footer>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditUser;
