import React, { useContext, useState } from 'react';

import { CountdownContainer, CountdownButton } from '../styles/components/Cowntdown';

import { ThemeContext } from 'styled-components'

const Cowntdown: React.FC = () =>{
  const { colors, title } = useContext(ThemeContext)

  return(
    <CountdownContainer>
        <div>
          <div>
            <span>0</span>
            <span>0</span>
          </div>
          <span className="points">:</span>
          <div>
            <span>0</span>
            <span>0</span>
          </div>
        </div>
      <CountdownButton disabled>
        Inicie uma tarefa
      </CountdownButton>
    </CountdownContainer>
  )
}

export default Cowntdown;
