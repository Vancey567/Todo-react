import React from "react";
import "./Todo.css";

const Todo = ({ todo, setUser, setData, setAscending, setToggle, toggle }) => {
  const url = "/users";
  function getUser(todoData, userid) {
    fetch(`${url}/${userid}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setData(todoData);
        setToggle(!toggle);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log("Rendering");
  return (
    <div className="todo">
      <div className="todo-body">
        <div className="todo-title">
          <h1>Todo Id</h1>
          <h1>Title</h1>
          <h1>Status</h1>
          <h1>Action</h1>
        </div>

        <div className="todo-scroll-div">
          {setAscending
            ? todo.map((data, index) => {
                console.log(data);
                return (
                  <div className="todo-item" key={data.id}>
                    <p>{data.id}</p>
                    <p className="todo-detail">{data.title}</p>
                    <p>{(data.completed) ? "Complete" : "Incomplete"} </p>
                    <button
                      onClick={() => {
                        getUser(data, data.userId);
                      }}
                    >
                      view user
                    </button>
                  </div>
                );
              })
            : todo
                .slice(0)
                .reverse()
                .map((data, index) => {
                  // slice to make shallow copy
                  return (
                    <div className="todo-item" key={data.id}>
                      <p>{data.id}</p>
                      <p>{data.title}</p>
                      <p>{String(data.completed)}</p>
                      <button
                        onClick={() => {
                          getUser(data, data.userId);
                        }}
                      >
                        view user
                      </button>
                    </div>
                  );
                })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
