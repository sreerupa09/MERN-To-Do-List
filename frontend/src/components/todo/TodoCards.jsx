import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

const TodoCards = ({ title, body, id, delid, display }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.slice("", 77)}...</p>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 card-text"
        onClick={() => {
            display('block');
        }}>
          <GrUpdate className="card-icons update" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 card-text"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete className="card-icons del card-icon-head" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
