import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter';
import Todoitems from './Todoitems';

const Todolist = () => {
    const todos = useSelector((state) => state.todo.todolist);
    console.log(todos)

  return (
    <div>
   <Filter todos={todos} />
    <div className='cart'>
  
        {todos.map((el)=><Todoitems todo={el}/>)
        }

    </div>
    </div>
  )
  }

export default Todolist