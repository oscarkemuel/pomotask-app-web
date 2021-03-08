import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>PomoTask</title>
      </Head>

      <h1>Hello world</h1>
    </Container>
  )
}

export default Home
