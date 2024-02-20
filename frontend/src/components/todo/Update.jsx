import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Update = ({ display, update }) => {

  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body,
    });
  }, [update]);
  
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async () => {
    await axios
      .put(`http://localhost:1000/api/v2/updateTask/${update._id}`,inputs)
      .then((res) => {
        //console.log(res);
        toast.success(res.data.message);
      });
    
    display("none");
    console.log(inputs);
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Your Task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={inputs.title}
        name="title"
        onChange={change}
      />
      <textarea
        className="todo-inputs w-100 p-3"
        value={inputs.body}
        name="body"
        onChange={change}
      />
      {/* <div className="d-flex justify-content-start w-100"> */}
      <div>
        <button className="home-btn update-btn p-2 my-3 " onClick={submit}>
          Update
        </button>
        <button
          className="home-btn close-btn p-2 my-3 mx-3"
          onClick={() => {
            display("none");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
