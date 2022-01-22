import './App.css';
import {useState} from "react";
import TodoList from './components/Todo/TodoList'
import UserDetail from './components/UserDetail/UserDetail'

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <TodoList setData={setData} />
      <UserDetail user={data} />
    </div>
  );
}

export default App;
