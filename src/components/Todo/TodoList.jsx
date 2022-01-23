import React, { useEffect, useState } from "react";

import todoCss from "./Todo.css";
import TodoHeader from "./TodoHeader";
import Todo from "./Todo";

const TodoList = ({ setUser, setData, setToggle, toggle }) => {
  const [todo, setTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [ascending, setAscending] = useState(true);

  const fetchData = () => {
    const url = "/todos";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchTodo = (value) => {
    let tempTodo = todo.filter((to) => {
      let title = to.title.toLowerCase();
      return title.includes(value.toLowerCase());
    });
    setFilteredTodo(tempTodo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function sort(e) {
    console.log(e.target.value);
    if (e.target.value === "asc") {
      setAscending(true);
    } else {
      setAscending(false);
    }
  }
  return (
    <div className="todo-container">
      {/* <TodoHeader /> */}
      <div className="todo-header">
        <div className="todo-head">
          <h1>Todo</h1>
          <select name="sort" id="sort" onChange={sort}>
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
        <Todo
          todo={filteredTodo}
          setUser={setUser}
          setData={setData}
          setAscending={ascending}
          setToggle={setToggle}
          toggle={toggle}
        />
      ) : (
        <Todo
          todo={todo}
          setUser={setUser}
          setData={setData}
          setAscending={ascending}
          setToggle={setToggle}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default TodoList;
