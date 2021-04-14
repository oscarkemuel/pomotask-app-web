import React, { useContext } from 'react';
import Head from 'next/head';

import { Container, NumbersContainer, PendingTask } from '../styles/pages/Home';
import Cowntdown from '../components/Cowntdown';
import { TaskContext } from '../context/TaskContext';
import ListTasks from '../components/ListTasks';

const Home: React.FC = () => {
  const { pendingTasks } = useContext(TaskContext);

  return (
    <>
      <Head>
        <title>PomoTask</title>
      </Head>

      <Container>
        <NumbersContainer>
          <PendingTask>
            <span>Pontos pendentes</span>
            <span>{pendingTasks}</span>
          </PendingTask>
        </NumbersContainer>
        <Cowntdown />
        <ListTasks />
      </Container>
    </>
  );
};

export default Home;
