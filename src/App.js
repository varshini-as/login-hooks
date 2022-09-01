import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoLayout from './components/ToDo-Layout';
import ExistingTask from './components/modals/ExistingTask';
import { useState } from 'react';

function App() {
  let tasks = [
    { id: 0, task: "Learn React" },
    { id: 1, task: "Learn Typescript" },
    { id: 2, task: "Implement ngrx" }
  ]

  localStorage.setItem('Tasks', JSON.stringify(tasks));

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <ExistingTask show={show} setShow={setShow}></ExistingTask>
      <ToDoLayout setShow={setShow}></ToDoLayout>
    </div>
  );
}

export default App;
