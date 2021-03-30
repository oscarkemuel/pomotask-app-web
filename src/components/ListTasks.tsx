import React from 'react';

import { Container, List, Title } from '../styles/components/ListTasks';
import { Button } from 'react-bootstrap';
// import { FaPlus } from 'react-icons/fa'

const ListTasks: React.FC = () => {

  return(
    <>
    <Title>Tarefas</Title>
    <Container>
      <Button variant="primary">Adicionar</Button>
      <List>
        <div className="listItem">
          <div className="itemNumber">1</div>
          <div className="itemInfo">
            <div className="name">
              <p>Criar página de Complete SingUp</p>
            </div>
            <div className="infoChildren">
              <p>13/03/2021</p>
              <p>1</p>
              <Button variant="primary" >Iniciar</Button>
            </div>
          </div>
        </div>

        <div className="listItem">
          <div className="itemNumber">2</div>
          <div className="itemInfo">
            <div className="name">
              <p>Criar página de Complete SingUp</p>
            </div>
            <div className="infoChildren">
              <p>13/03/2021</p>
              <p>2</p>
              <Button variant="primary" >Iniciar</Button>
            </div>
          </div>
        </div>

        <div className="listItem">
          <div className="itemNumber">3</div>
          <div className="itemInfo">
            <div className="name">
              <p>Criar página de Complete SingUp</p>
            </div>
            <div className="infoChildren">
              <p>13/03/2021</p>
              <p>3</p>
              <Button variant="primary" >Iniciar</Button>
            </div>
          </div>
        </div>
      </List>
    </Container>
    </>
  )
}

export default ListTasks;
