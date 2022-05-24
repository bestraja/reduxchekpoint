import React from 'react'
import { useSelector } from 'react-redux'
import Todoitems from './Todoitems';

const Todolist = () => {
    const todos = useSelector((state) => state.todo.todolist);
    console.log(todos)

  return (
    <div className='cart'>
        {todos.map((el)=><Todoitems todo={el}/>)}
    </div>
  )
  }

export default Todolist