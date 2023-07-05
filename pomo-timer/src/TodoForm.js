import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value){
            //Add todo
            addTodo(value);
            // clear form after submission
            setValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange = {(e) => setValue(e.target.value)} className="todo-input" placeholder="what is the task today?"></input>
            <button type="submit" className="todo-btn">Add Task</button>

        </form>
    );
}