import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch } from 'react-redux'
import { removetask } from '../Redux/TodoSlice'
import Toedit from './Toedit'
const Todoitems = ({todo}) => {
    const dispatch = useDispatch()
  return (

    <div className={`item ${todo.isDone? "done" : "notdone"}`} >
       
       <h1>{todo.title}</h1>
    
       <p>{todo.description}</p>
       <Button variant="danger" className='btn'  onClick={() => dispatch(removetask ({id:todo.id}) )}>Remove</Button>
       <Toedit todo={todo}/>


    </div>
  )
}

export default Todoitems