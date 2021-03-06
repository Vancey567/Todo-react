import './App.css';
import { useState } from "react";
import TodoList from './components/Todo/TodoList'
import UserDetail from './components/UserDetail/UserDetail'

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({id:"", name:"", email:""});
  const [toggle, setToggle] = useState(false);
 
  return (
    <div className="App">
      <div className="todo-padd">
        <TodoList className="item1" setUser={setUser} setData={setData} setToggle={setToggle} toggle={toggle}/>
        <UserDetail className="item2" user={user} data={data} callEffect={true} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
