// import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  // const matchID = "16500"

  // const getScore = async() => {
  //   // const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=135800`);
  //   // const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=135800`);
  //   // const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4460`);
  //   const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=1361548`);
  //   const data = await response.json();
  //   console.log(data);
  // }
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed' : 
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted' : 
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    filterHandler();
    saveLocalTodos();
  },[todos,status]); 


  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="glass">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </div>
  );
}

export default App;
