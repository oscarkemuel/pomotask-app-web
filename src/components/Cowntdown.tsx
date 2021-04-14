import React, { useContext, useState } from 'react';

import { ThemeContext } from 'styled-components';
import {
  CountdownContainer,
  CountdownButton
} from '../styles/components/Cowntdown';

const Cowntdown: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <CountdownContainer>
      <div>
        <div>
          <span>1</span>
          <span>0</span>
        </div>
        <span className="points">:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <CountdownButton disabled>Inicie uma tarefa</CountdownButton>
    </CountdownContainer>
  );
};

export default Cowntdown;
