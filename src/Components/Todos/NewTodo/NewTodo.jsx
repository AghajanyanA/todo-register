import React, {useState} from "react";

export const NewTodo = ({todos, setTodos}) => {

    const [todoValue, setTodoValue] = useState("")

    const handleAddTodo = (e) => {
        e.preventDefault()
       setTodos([...todos, {
                    todoName: todoValue,
                    completed: false,
                    id: todos.length
            }]
        )
        setTodoValue('')
    }


    return <div>
        <form onSubmit={handleAddTodo}>
            <input type='text' value={todoValue} onChange={e => setTodoValue(e.target.value)} placeholder='Todo Name'/>
            <input type='submit' value='Add'/>
        </form>

    </div>

}