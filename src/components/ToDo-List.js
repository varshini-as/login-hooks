import React from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"

export default function ToDoList({handleRemoveTask, currentTaskList}) {

    return (
        <div>
            {/* <ul>
                {
                    tasks.map((item) => {
                        return <li>{item.task}</li>
                    })
                }
            </ul> */}
            <ListGroup className="task-list">
                {
                    currentTaskList.map((task) => {
                        return (
                            <ListGroupItem
                                className="d-flex justify-content-between align-items-center"
                                key={task.id}>
                                {task.task}
                                <button type="submit"
                                    className="btn btn-danger pull-right"
                                    id={task.id}
                                    onClick={() => (handleRemoveTask(task.id))}>Delete</button>
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}