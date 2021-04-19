import React, { useContext } from 'react';
import Head from 'next/head';

import { Container, NumbersContainer, PendingTask } from '../styles/pages/Home';
import Cowntdown from '../components/Cowntdown';
import { TaskContext } from '../context/TaskContext';
import ListTasks from '../components/ListTasks';

import { CountdownProvider } from '../context/TaskCountdown';

const Home: React.FC = () => {
  const { pendingTasks } = useContext(TaskContext);

  return (
    <>
      <Head>
        <title>PomoTask</title>
      </Head>

      <Container>
        <CountdownProvider>
          <NumbersContainer>
            <PendingTask>
              <span>Tarefas pendentes</span>
              <span>{pendingTasks}</span>
            </PendingTask>
          </NumbersContainer>
          <Cowntdown />
          <ListTasks />
        </CountdownProvider>
      </Container>
    </>
  );
};

export default Home;
