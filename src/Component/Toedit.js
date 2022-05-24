import React from 'react'
import { Form } from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import {useDispatch } from 'react-redux'
import { editaskk } from '../Redux/TodoSlice';


const Toedit = ({todo}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edit,setedit]= useState(
    {
        title:'',
        description:''
    }
)
const dispatch = useDispatch()

  return (
    <div>
        
      <Button variant="primary" onClick={handleShow}>
      Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">    
    <Form.Control type="text" placeholder={todo.title} onChange={(e)=>setedit({...edit, title: e.target.value})} />
  </Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3}  placeholder={todo.description} onChange={(e)=>setedit({...edit, description: e.target.value})} />
  </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
            onClick={() => dispatch(editaskk({id: todo.id, edit})) || handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Toedit