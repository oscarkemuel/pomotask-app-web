import React, { useContext } from 'react';
import Head from 'next/head';

import { ProgressBar } from 'react-bootstrap';
import { Container, NumbersContainer, PendingTask } from '../styles/pages/Home';
import Cowntdown from '../components/Cowntdown';
import { TaskContext } from '../context/TaskContext';
import ListTasks from '../components/ListTasks';

import { CountdownProvider } from '../context/TaskCountdown';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const { progress } = useContext(TaskContext);

  const percent = Math.abs(progress - 100);

  return (
    <>
      <Head>
        <title>PomoTask - Home</title>
      </Head>

      <Container>
        <CountdownProvider>
          <NumbersContainer>
            <ProgressBar
              now={percent}
              label={`${Math.trunc(percent)}%`}
              style={{ margin: '1rem 0' }}
              striped
            />
          </NumbersContainer>
          <Cowntdown />
          <ListTasks />
        </CountdownProvider>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
