import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from '../styles/components/Footer';

const Footer: React.FC = () => {
  return (
    <Container>
      <nav>
        <img src="images/logo.png" alt="PomoTask" />

        <div>
          <p>
            Made with <b>{'<3'}</b> by <b>Oscar Kemuel</b>
          </p>
          <p>
            © PomoTask {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
        </div>

        <div className="links">
          <a
            href="http://github.com/oscarkemuel"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillGithub />
          </a>

          <a
            href="https://br.linkedin.com/in/oscar-kemuel"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Footer;
