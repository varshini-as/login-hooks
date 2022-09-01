import React, {useState} from "react";

export function ToDoInput({ handleAddTask, setShow }) {

    const [currentTask, setTaskInput] = useState('');

    const handleInput = (input) => {
        if (input) {
            setTaskInput(input)
            handleAddTask(input);
        }
        document.getElementById("task").value = '';
        setTaskInput('');
    }

    return (
        <div className="d-flex mb-2 justify-content-between align-items-center todo-list-input mx-auto">
            <input type="text"
                placeholder="What do you need to do today?"
                id="task"
                onChange={(e) => setTaskInput(e.target.value)} />
            <button className="btn btn-success pull-right"
                onClick={() => handleInput(document.getElementById("task").value)}
                disabled = {currentTask === ''? true: false}
            >Add</button>
        </div>
    )
}