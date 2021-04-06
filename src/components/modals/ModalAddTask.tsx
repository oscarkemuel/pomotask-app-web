import React, { useContext, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { ModalContent } from '../../styles/components/modals/ModalAddTask'

import pointsData from '../../data/points.json'

import { api } from '../../services/api'

import { TaskContext } from '../../context/TaskContext'

interface dataInterface {
  title: string
  date: string
  points: number
  description?: string
}

const ModalAddUser: React.FC = () => {
  const [show, setShow] = useState(false)

  const handleClose = (): void => setShow(false)
  const handleShow = (): void => setShow(true)
  const { updateList, setUpdateList } = useContext(TaskContext)

  async function isCreated(data: dataInterface): Promise<void> {
    try {
      await api.post(`/tasks`, data)

      toast.success('Tarefa adicionada', {
        draggable: true,
        className: 'success-toast'
      })
      handleClose()
      setUpdateList(!updateList)
    } catch (error) {
      toast.error('Problema em adicionar tarefa', {
        draggable: true,
        className: 'error-toast'
      })
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      date: '',
      points: 1,
      description: ''
    },
    validationSchema: yup.object({
      title: yup.string().required('Campo necessário'),
      date: yup.string().required('Campo necessário'),
      points: yup.number(),
      description: yup.string()
    }),
    onSubmit: values => {
      const data = values
      isCreated(data)
    }
  })

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow()
        }}
        className="buttonAddTask"
      >
        Adicionar
        <FaPlus />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <ModalContent>
          <Modal.Header closeButton>
            <Modal.Title>Informações</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Row>
                <Form.Group controlId="formName">
                  <Form.Label>Nome da tarefa</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    className="mb-2"
                    placeholder="Digite o nome da tarefa"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    isInvalid={!!formik.errors.title}
                  />
                  {formik.errors.title && formik.touched.title ? (
                    <span className="errorLabel">{formik.errors.title}</span>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formDate">
                  <Form.Label>Data de entrega</Form.Label>
                  <Form.Control
                    name="date"
                    type="date"
                    className="mb-2"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    isInvalid={!!formik.errors.date}
                  />
                  {formik.errors.date && formik.touched.date ? (
                    <span className="errorLabel">{formik.errors.date}</span>
                  ) : null}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="formpoints">
                  <Form.Label>Pontos</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    name="points"
                    className="mb-2"
                    onChange={formik.handleChange}
                    value={formik.values.points}
                    isInvalid={!!formik.errors.points}
                  >
                    {pointsData.map((points, id) => {
                      return (
                        <option
                          style={{
                            backgroundColor: points.backgroundColor,
                            color: points.color
                          }}
                          className="options"
                          key={id.toString()}
                        >
                          {points.point}
                        </option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Voltar
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="buttonAddTask"
                >
                  Adicionar tarefa
                  <FaPlus />
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalAddUser
