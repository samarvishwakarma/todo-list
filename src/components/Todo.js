import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Todo = ( {text, todo, setTodos, todos} ) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo);
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }
    return( 
        <div className="todow">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className={`fas fa-check ${todo.completed ? "fill" : ''}`}></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-ban"></i></button>
        </div>
    );
};

export default Todo;