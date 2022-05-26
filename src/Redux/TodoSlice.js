import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todolist: [
        {
            id: Math.random(),
            title: 'Learn Python',
            isDone: false,
            description:' Description Task of day 1'
        },
        {
            id: Math.random(),
            title: 'Learn CSS',
            isDone: true,
            description:'Description Task of day 2'
        },
        {
            id: Math.random(),
            title: 'Learn Redux',
            isDone: true,
            description:'Description Task of day 3'
        },
        {
            id: Math.random(),
            title: 'Learn JavaScript',
            isDone: true,
            description:'Description Task of day 4'
        }
    ]
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    
    addtask: (state, action) => {
      state.todolist.push(action.payload) 
    },
    removetask:(state , action) => {
        state.todolist=state.todolist.filter((el)=>el.id !== action.payload.id)
    },
    editaskk:(state,action)=> {
        let i = state.todolist.findIndex((el)=>el.id === action.payload.id)
        state.todolist[i] = {
            ...state.todolist[i],
            title:action.payload.edit.title,
            description:action.payload.edit.description,
        }
    },
    filterlist:(state,action)=>{
        state.todolist=state.todolist.filter((el)=>el.isDone=== true)
    
      },
      filternot:(state,action)=>{
        state.todolist=state.todolist.filter((el)=>el.isDone=== false)
    
      },
  }
 
})


export const { addtask ,removetask ,editaskk ,filterlist, filternot} = TodoSlice.actions

export default TodoSlice.reducer