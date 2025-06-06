import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000},
        ])
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return( 
        <form >
        <div className="inputarea"><input value={inputText} onChange={inputTextHandler} className="todo-input" type="text" placeholder="hello"/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit"><i className="fas fa-plus-circle"></i></button></div>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        <section className="line"></section>
      </form>
    );
};

export default Form;