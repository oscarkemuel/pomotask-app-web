import React, { useContext, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Head from 'next/head';

import * as yup from 'yup';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Container, Content } from '../styles/pages/Import-export';
import Footer from '../components/Footer';
import { TaskContext } from '../context/TaskContext';
import validateImports from '../utils/validateImport';

const Home: React.FC = () => {
  const { tasks, updateList, setUpdateList } = useContext(TaskContext);
  const router = useRouter();

  const [copySuccess, setCopySuccess] = useState('Copiar');
  const [buttonColor, setButtonColor] = useState('info');
  const textAreaRef = useRef(null);

  function copyToClipboard(): void {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copiado!');
    setButtonColor('success');
  }

  const formik = useFormik({
    initialValues: {
      tasks: ''
    },
    validationSchema: yup.object({
      tasks: yup.string().required('Campo necessário')
    }),
    onSubmit: (values) => {
      const data = values;
      if (validateImports(data.tasks) && process.browser) {
        localStorage.setItem('tasks', data.tasks);
        toast.success('Tarefas Importadas', {
          draggable: true
        });
        setUpdateList(!updateList);
        router.push('/');
      } else {
        toast.error('Problema ao tentar importar tarefas', {
          draggable: true
        });
      }
      // console.log(data.tasks);
    }
  });

  return (
    <>
      <Head>
        <title>PomoTask - Importar/Exportar</title>
      </Head>
      ;
      <Container>
        <h1>Importar/Exportar</h1>
        <Content>
          <Row>
            <Col>
              <Alert variant="warning">
                <Alert.Heading>Como usar</Alert.Heading>
                <p>
                  Para salvar seus dados, basta clicar em <b>Copiar</b> e
                  guardar o conteúdo em algum lugar. Para importar os dados,
                  basta colar o conteúdo copiado e então clicar em <b>Enviar</b>
                  .
                </p>
              </Alert>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Exportar</h2>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Exportar tarefas</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={JSON.stringify(tasks)}
                  ref={textAreaRef}
                  readOnly
                />
              </Form.Group>
              {process.browser ? (
                <div>
                  <Button
                    onClick={copyToClipboard}
                    type="button"
                    variant={buttonColor}>
                    {copySuccess}
                  </Button>
                </div>
              ) : (
                <div>
                  <Button type="button" variant={buttonColor}>
                    {copySuccess}
                  </Button>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Importar</h2>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Importar tarefas</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="tasks"
                    onChange={formik.handleChange}
                    value={formik.values.tasks}
                    isInvalid={!!formik.errors.tasks}
                  />
                  {formik.errors.tasks && formik.touched.tasks ? (
                    <span className="errorLabel">{formik.errors.tasks}</span>
                  ) : null}
                </Form.Group>

                <Row>
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>

          <div />
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
