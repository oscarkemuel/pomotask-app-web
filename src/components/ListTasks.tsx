import React from 'react';

import { Container, List } from '../styles/components/ListTasks';
import { Button } from 'react-bootstrap';
// import { FaPlus } from 'react-icons/fa'

const ListTasks: React.FC = () => {

  return(
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
      </List>
    </Container>
  )
}

export default ListTasks;
