import React from 'react';
import Head from 'next/head';

import { Bar } from 'react-chartjs-2';

import { Card } from 'react-bootstrap';
import { Container } from '../styles/pages/Home';
import { Content } from '../styles/pages/Pomodoro';
import Footer from '../components/Footer';

interface tasksInterface {
  title: string;
  date: string;
  points: number;
  description?: string;
}

const Home: React.FC = () => {
  let tasks: tasksInterface[] = [];
  if (process.browser) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

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
                      backgroundColor: ['#5965E0']
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
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
