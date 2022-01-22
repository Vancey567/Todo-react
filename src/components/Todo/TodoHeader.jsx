import React, { useState } from "react";

import TodoCSS from '../Todo/Todo.css' 
import ToggelSwitch from '../Toggle/Toggle'


const TodoHeader = () => {
  const [search, setSearch] = useState("");

  const searchTodo = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
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
        onChange={ searchTodo }
        className="search"
      />
    </div>
  );
};

export default TodoHeader;
