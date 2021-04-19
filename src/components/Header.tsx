import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from '../styles/components/Header';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <nav>
        <img src="images/logo.png" alt="PomoTask" />

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onHandleColor={colors.text}
          offHandleColor={colors.text}
          onColor="#27AE60"
          offColor="#EB5757"
        />
      </nav>
    </Container>
  );
};

export default Header;
