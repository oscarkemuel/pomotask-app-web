import React, { useContext } from 'react';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';
import { Content } from '../styles/pages/Pomodoro';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>PomoTask - Técnica</title>
      </Head>
      ;
      <Container>
        <h1>Tecnica Pomodoro</h1>
        <Content>teste</Content>
      </Container>
    </>
  );
};

export default Home;
