import React, { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Modal, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import pointsData from '../data/points.json';

import Footer from '../components/Footer';
import { Content } from '../styles/pages/Edit';

import { TaskContext } from '../context/TaskContext';

interface dataInterface {
  title: string;
  date: string;
  points: number;
  description?: string;
}

const Edit: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const position = Number(id);

  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskObject: dataInterface = tasks[position];
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

  const dateFormated = formatDate(new Date(taskObject.date));

  function editTask(data: dataInterface): void {
    const dataTemporary = JSON.parse(localStorage.getItem('tasks'));
    const tasksTemporary = [...dataTemporary];
    tasksTemporary[position].title = data.title;
    tasksTemporary[position].date = data.date;
    tasksTemporary[position].description = data.description;
    tasksTemporary[position].points = Number(data.points);

    localStorage.setItem('tasks', JSON.stringify(tasksTemporary));

    setUpdateList(!updateList);
    router.push('/');

    toast.success('Tarefa atualizada', {
      draggable: true
    });
  }

  const formik = useFormik({
    initialValues: {
      title: taskObject.title || '',
      date: dateFormated || '',
      points: taskObject.points || 1,
      description: taskObject.description || ''
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
      <Head>
        <title>PomoTask - Editar tarefa</title>
      </Head>

      <Content>
        <h2>Editar Tarefa - {taskObject.title} </h2>

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
                  backgroundColor: `${colorSelect(formik.values.points)[0]}`,
                  color: `${colorSelect(formik.values.points)[1]}`
                }}>
                {pointsData.map((points, index) => {
                  return (
                    <option
                      style={{
                        backgroundColor: points.backgroundColor,
                        color: points.color
                      }}
                      className="options"
                      key={index.toString()}>
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
                <span className="errorLabel">{formik.errors.description}</span>
              ) : null}
            </Form.Group>
          </Form.Row>

          <Modal.Footer>
            <Button variant="success" type="submit">
              Salvar
            </Button>

            <Button variant="danger" onClick={() => router.push('/')}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Form>
      </Content>

      <Footer />
    </>
  );
};

export default Edit;
