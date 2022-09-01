import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { ToDoInput } from "./ToDo-Input";
import ToDoList from "./ToDo-List";

export default function ToDoLayout({setShow}) {

    const getTaskList = () => {
        return JSON.parse(localStorage.getItem("Tasks"));
    }

    const tasks = getTaskList();

    const [currentTaskList, setTaskList] = useState(tasks);

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(currentTaskList));
    }, [currentTaskList]);


    const handleAddTask = (input) => {
        if (currentTaskList.find(task => task.task === input)) {
            setShow(true);
        } else {
            setTaskList([...currentTaskList, { id: currentTaskList.length, task: input }]);
        }
    }

    const handleRemoveTask = (id) => {
        const selectedTask = id;
        setTaskList(currentTaskList.filter(item => item.id !== selectedTask));
    }

    const clearTasks = () => {
        setTaskList([]);
        localStorage.clear("Tasks");
    }

    return (
        <div>
            <Card className="d-flex mx-auto layout shadow">
                <Card.Body>
                    <Card.Title>To-Do List App</Card.Title>
                    <ToDoInput handleAddTask={handleAddTask} setShow={setShow}></ToDoInput>
                    <ToDoList handleRemoveTask={handleRemoveTask} currentTaskList={currentTaskList}></ToDoList>
                </Card.Body>
                <Card.Footer className="text-muted text-center">
                    <button className="btn btn-primary"
                        onClick={() => clearTasks()}>Clear Tasks</button>
                </Card.Footer>
            </Card>
        </div>
    )
}