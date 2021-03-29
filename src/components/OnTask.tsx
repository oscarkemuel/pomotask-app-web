import React from 'react';

import { Container } from '../styles/components/OnTask';

interface Props{
  title: string;
  body: string;
  points: number;
}

const OnTask: React.FC<Props> = ({ title, body, points }) => {

  return(
    <Container>
      <span>{title}{body}</span>
      <span>{points}</span>
    </Container>
  )
}

export default OnTask;
