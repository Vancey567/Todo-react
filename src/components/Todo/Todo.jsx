import React, { useEffect, useState } from "react";
import UserDetail from "../UserDetail/UserDetail";

import todoCss from "./Todo.css";

const Todo = ({ todo, setData }) => {
  return (
    <div className="todo">
      <div className="todo-body">
        <div className="todo-title">
          <h1>Todo Id</h1>
          <h1>Title</h1>
          <h1>Status</h1>
          <h1>Action</h1>
        </div>
        {todo.map((data, index) => {
          return (
            <div className="todo-item" key={data.id}>
              <p>{data.id}</p>
              <p>{data.title}</p>
              <p>{data.completed}</p>
              <button onClick={()=> {setData(data)}}>view user</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
