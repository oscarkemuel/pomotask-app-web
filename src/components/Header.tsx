import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import Link from 'next/link';

import { BsHouseDoor } from 'react-icons/bs';
import { GiTomato } from 'react-icons/gi';
import { IoStatsChartSharp } from 'react-icons/io5';
import { Container, Linked } from '../styles/components/Header';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const route = useRouter().pathname;

  return (
    <Container>
      <nav>
        <img src="images/logo.png" alt="PomoTask" />

        <div className="links">
          <Link href="/">
            <Linked className="home link" ItemOn={route === '/'}>
              <BsHouseDoor />
            </Linked>
          </Link>
          <Link href="/pomodoro">
            <Linked className="home link" ItemOn={route === '/pomodoro'}>
              <GiTomato />
            </Linked>
          </Link>
          <Link href="/stats">
            <Linked className="home link" ItemOn={route === '/stats'}>
              <IoStatsChartSharp />
            </Linked>
          </Link>
        </div>

        <div className="switch">
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
        </div>
      </nav>
    </Container>
  );
};

export default Header;
