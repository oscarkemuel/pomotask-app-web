import React, { useContext } from 'react';
import Head from 'next/head';

import { Bar } from 'react-chartjs-2';

import { Card, Row, Col } from 'react-bootstrap';
import randomColor from 'randomcolor';
import { Container } from '../styles/pages/Stats';
import { Content } from '../styles/pages/Pomodoro';
import Footer from '../components/Footer';
import { TaskContext } from '../context/TaskContext';

interface tasksInterface {
  title: string;
  date: string;
  points: number;
  description?: string;
}

const Home: React.FC = () => {
  const { tasks } = useContext(TaskContext);
  const sum = tasks.map((t) => t.points).reduce((total, num) => total + num, 0);

  function countPoints(point: number): number {
    const array = tasks.filter((a) => a.points === point);

    return array.length;
  }

  const points = [1, 2, 3, 5, 8, 13, 21];

  return (
    <>
      <Head>
        <title>PomoTask - Status</title>
      </Head>
      ;
      <Container>
        <h1>Status</h1>
        <Content>
          <Row>
            <Col>
              <Card>
                <Card.Header>Tarefas pendentes</Card.Header>
                <Card.Body>
                  <p>{tasks.length}</p>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>Somatório de pontos</Card.Header>
                <Card.Body>
                  <p>{sum}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>Tarefas por pontos</Card.Header>

                <Card.Body>
                  <Bar
                    type="bar"
                    data={{
                      labels: points,
                      datasets: [
                        {
                          data: points.map((a) => countPoints(a)),
                          label: 'Quantidade',
                          backgroundColor: points.map((a) =>
                            randomColor({
                              luminosity: 'bright'
                            })
                          )
                        }
                      ]
                    }}
                    options={{
                      responzive: true,
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
