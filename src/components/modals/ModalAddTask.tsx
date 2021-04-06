import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
} from '../../styles/components/modals/ModalAddTask';

import UserPicture from '../../assets/ativo.png';
import AddUser from '../../assets/add-user.svg';

import { api } from '../../services/api';

// import { EventContext } from '../../context/CreateEventInfoContext';

interface Props {
  name: string;
}

interface UserInterface {
  id: number;
  name: string;
  email: string;
  nickname?: string;
}

interface dataInterface {
  name: string;
  email: string;
  nickname?: string;
}

const ModalAddUser: React.FC = () => {
  const [show, setShow] = useState(false);
  const [displayList, SetDisplayList] = useState('none');
  const [isRegistred, setIsRegistred] = useState(false);

  const [listUsers, setListUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSwitch = () => setIsRegistred(true);

  // to modal register
  async function isCreated(data: dataInterface) {
    try {
      const response = await api.post(`api/v1/accounts/invite-${name}/`, data, {
        withCredentials: true,
      });

      handleClose();
    } catch (error) {
      const erroElement = Object.keys(error.response.data)[0];
      const errorMessage = error.response.data[erroElement][0];
      toast.error(errorMessage, { draggable: true, className: 'error-toast' });
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      nickname: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('E-mail inválido').required('Campo necessário'),
      name: yup.string().required('Campo necessário'),
      nickname: yup.string(),
    }),
    onSubmit: (values) => {
      const data = values;
      isCreated(data);
    },
  });

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
        }}
        className="button"
      >
        Adicionar
        <FaPlus />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddUser;
