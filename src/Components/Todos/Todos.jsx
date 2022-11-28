import React, {useState} from "react";
import {NewTodo} from "./NewTodo/NewTodo";

export const Todos = () => {

    const [todos, setTodos] = useState([])

    const handleCompletedTask = (id) => {
        setTodos(todos.map(element => {
                    if (element.id === id) {
                element.completed = !element.completed
            }
            return element
        })

        )
    }
    return (
        <div className='wrapper'>

            <NewTodo todos={todos} setTodos={setTodos} />
            {!todos.length ? <p>No todos yet!</p> : '' }
            {todos.map(todo => <div className={todo.completed ? 'todoCompleted' : ''} key={todo.id}>
                {todo.todoName}
                {todo.description}
                <button onClick={ () => handleCompletedTask(todo.id) }>{todo.completed ? "Unmark" : "Mark"}</button>
            </div>)}
        </div>
    )
}