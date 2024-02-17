import React from 'react'

const Update = ({display}) => {
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
        <h3>Update Your Task</h3>
        <input type='text' className='todo-inputs my-4 w-100 p-3'/>
        <textarea className='todo-inputs w-100 p-3'/>
        <div className="d-flex justify-content-start w-100">
            <button className='home-btn update-btn p-2 my-3'>Update</button>
            <button className='home-btn close-btn p-2 my-3 mx-3' onClick={() => {
                display('none');
            }}>Close</button>
        </div>
        
    </div>
  );
};

export default Update