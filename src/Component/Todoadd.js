import React from 'react'
import { Form } from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import { useState } from 'react'
import { addtask } from '../Redux/TodoSlice'
import {useDispatch } from 'react-redux'
const Todoadd = () => {
    const [newtask,setnewtask]= useState(
        {
            id: Math.random(),
            title:'',
            isDone:false,
            description:''
        }
    )
    const dispatch = useDispatch()
  return (
    <div className='add'>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">    
    <Form.Control type="text" placeholder="Enter title of the task" onChange={(e)=>setnewtask({...newtask,title:e.target.value})}/>
  </Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3}  placeholder="Enter description of the task" onChange={(e)=>setnewtask({...newtask, description:e.target.value})}/>
  </Form.Group>
  <Button variant="success" className='addb'  onClick={() => dispatch(addtask(newtask))}>Add task</Button>{' '}
    </div>

  )
}

export default Todoadd