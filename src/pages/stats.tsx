import React from 'react';
import Head from 'next/head';
import { Card } from 'react-bootstrap';
import { Container } from '../styles/pages/Home';
import { Content } from '../styles/pages/Pomodoro';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>PomoTask - Status</title>
      </Head>
      ;
      <Container>
        <h1>Status</h1>
        <Content>
          <h1>hello</h1>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
