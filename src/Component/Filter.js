import React from 'react'
import {useDispatch } from 'react-redux'
import '../App.css';
import { filterlist } from '../Redux/TodoSlice';
import { filternot } from '../Redux/TodoSlice';
const Filter = ({todos}) => {
    const dispatch = useDispatch()
  return (
    
    <div className='filter'>
        <h3> Filtrer by :</h3>
        <button  value ="Done" className='bt1' onClick={() => dispatch(filterlist() )}>Done</button>
        <button  value ="NotDone" className='bt2'onClick={() =>( dispatch( filternot() ))}>NotDone</button>
       
        
    </div>
  )
}

export default Filter