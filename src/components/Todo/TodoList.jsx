import React, { useEffect, useState } from "react";

import todoCss from "./Todo.css";
import TodoHeader from "./TodoHeader";
import Todo from "./Todo";

const TodoList = ({setData}) => {
  const [todo, setTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);

  const fetchData = () => {
    const url = "/todos";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setFilteredTodo(data);
        setTodo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchTodo = (value) => {
    console.log("called");
    console.log(todo);
    let tempTodo = todo.filter((to) => {
      let title = to.title.toLowerCase();
      return title.includes(value.toLowerCase());
    });
    console.log(tempTodo);
    setFilteredTodo(tempTodo);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(filteredTodo.length);

  return (
    <div className="todo-container">
      {/* <TodoHeader /> */}
      <div className="todo-header">
        <div className="todo-head">
          <h1>Todo</h1>
          <select name="sort" id="sort">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search your todo"
          onChange={(e) => {
            searchTodo(e.target.value);
          }}
          className="search"
        />
      </div>
      {filteredTodo.length ? (
        <Todo todo={filteredTodo} setData={setData} />
      ) : (
        <Todo todo={todo} setData={setData} />
      )}
    </div>
  );
};

export default TodoList;
