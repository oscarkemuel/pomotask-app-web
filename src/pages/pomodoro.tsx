import React from 'react';
import Head from 'next/head';
import { Card } from 'react-bootstrap';
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
        <h1>Técnica Pomodoro</h1>
        <Content>
          <h2>
            <b>Pomodoro Online</b> que irá aumentar a sua produtividade!
          </h2>

          <div className="info">
            <h3>
              O que é <b>PomoTask</b>?
            </h3>
            <p>
              <b>PomoTask</b>, um timer que irá ajuda-lo a gerenciar suas
              tarefas e executá-las com auxílio da técnica Pomodoro.
              <b> Produtividade</b> garantida.{' '}
            </p>
          </div>

          <div className="info">
            <h3>
              O que é a <b>Tecnica Pomodoro</b>?
            </h3>
            <p>
              <b>Tecnica Pomodoro</b>, A técnica é composta por períodos de 25
              minutos (chamados “pomodoros”) que deverão ser usados no
              ininterruptamente na realização das suas tarefas durante a
              jornada. Ao fim de cada período, é feita uma pausa de 5 minutos e,
              ao final de cada 4 blocos de 25 minutos, uma pausa de 30.{' '}
            </p>
          </div>

          <div className="info">
            <h3>
              O que o <b>Pomodoro</b> proporciona?
            </h3>

            <ol>
              <li>Melhor organização de tempo.</li>
              <li>Aumento de foco e concentração.</li>
              <li>
                100% <b>PRODUTIVIDADE</b>.
              </li>
            </ol>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Home;
