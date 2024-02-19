import React, { useState, useEffect, useCallback } from 'react'
import './Todo.css'
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import { UseSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store';
import axios from 'axios';

let id=sessionStorage.getItem("id");

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
    const submit = async() => {
        if(inputs.title ==='' || inputs.body === '')
        {
            toast.error('Title Or Body Should Not Be Empty');
        }
        else
        {
            if(id)
            {
                await axios.post('http://localhost:1000/api/v2/addTask',{title:inputs.title,body:inputs.body,id:id}).then((res) => {
                    console.log(res);
                });
                setInputs({title:'',body:''});
                toast.success('Your Task is Added');
            }
            else
            {
                setArray([...array,inputs]);
                setInputs({title:'',body:''});
                toast.success('Your Task is Added');
                toast.error('Your Task is Not Saved! Please Sign Up');
            }
        }
    };

    const del = async(cardid) => {
        //console.log(id);
        await axios.delete(`http://localhost:1000/api/v2/deleteTask/${cardid}`,{data:{id:id}}).then((res) => {
            toast.success('Your Task is Deleted');
        });
        //array.splice(id,"1");
        //setArray([...array]);
    }
    const dis=(value) => {
        console.log(value);
        document.getElementById('todo-update').style.display=value;
    }

    useEffect(() => {
        const fetch=async () => {
            await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`).then((res) => {
                setArray(res.data.list);
            })
        };
        fetch();
    },[submit]);
    

  return (
    <>
        <div className='todo'>
            <ToastContainer />
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
                        <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                            <TodoCards title={item.title} body={item.body} id={item._id} delid={del} display={dis}/>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='todo-update' id='todo-update'>
            <div className='container update'>
                <Update display={dis} />
            </div>
        </div>
    </>
  )
}

export default Todo