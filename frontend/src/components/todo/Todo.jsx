import React, { useState } from 'react'
import './Todo.css'
import TodoCards from './TodoCards';

const Todo = () => {
    const [inputs, setInputs]=useState({title:'',body:''});
    const [array,setArray]=useState([]);
    const show = () => {
        document.getElementById("textarea").style.display="block";
    };
    const change = (e) => {
        const {name,value}=e.target;
        setInputs({...inputs,[name]:value});
    };
    const submit = () => {
        setArray([...array,inputs]);
        setInputs({title:'',body:''});
    };
  return (
    <div className='todo'>
        <div className='todo-main container d-flex justify-content-center align-items-center my-4 flex-column'>
            <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
                <input
                type='text'
                placeholder='Title'
                className='my-2 p-2 todo-inputs'
                name='title'
                value={inputs.title}
                onClick={show}
                onChange={change}
                />
                <textarea id='textarea'
                type='text'
                placeholder='Body'
                className=' p-2 todo-inputs'
                name='body'
                value={inputs.body}
                onChange={change}
                />
            </div>
            <div className='w-50 d-flex justify-content-end my-3'>
                <button className='home-btn px-2 py-1' onClick={submit}>Add</button>
            </div>
        </div>
        <div className='todo-body'>
            <div className='container-fluid'>
                <div className='row'>
                    {array && array.map((item,index)=>(
                    <div className='col-lg-3 col-10 mx-5 my-2'>
                        <TodoCards title={item.title} body={item.body} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo