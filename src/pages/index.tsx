import React from 'react'
import Head from 'next/head'

import { Container, NumbersContainer } from '../styles/pages/Home'
import OnTask from '../components/OnTask'
import Cowntdown from '../components/Cowntdown'
import ListTasks from '../components/ListTasks'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>PomoTask</title>
      </Head>

      <Container>
        <NumbersContainer>
          <OnTask title="Tarefa: " body="Inicie uma tarefa" points={0}/>
          <OnTask title="Pontos pendentes" body="" points={0}/>
        </NumbersContainer>
        <Cowntdown />
        <ListTasks />
      </Container>
    </>
  )
}

export default Home
