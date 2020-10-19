import React, { useEffect, useState } from "react";
import TaskForm from "./component/TaskFrom";
import TaskList from "./component/TaskList";
import "./styles.css";

export default function App() {
  const initialTask = [
    {
      id: "1",
      name: "milu",
      species: "Whale",
      age: 12
    },
    {
      id: "2",
      name: "mila",
      species: "Shark",
      age: 121
    },
    {
      id: "3",
      name: "mike",
      species: "Whale",
      age: 50
    }
  ];
  const [tasks, setTasks] = useState(initialTask);

  const _onHandleSubmit = (data) => {
    var arrTask = tasks;
    arrTask.push(data);
    setTasks(arrTask);
  };

  const _onDelete = (index) => {
    tasks.splice(index, 1);
  };

  const _onUpdate = (index) => {
    console.log(index);
  };

  return (
    <div className="App">
      {console.log("render app")}
      <div className="task-form">
        <TaskForm setTasks={setTasks} />
      </div>
      <div className="task-list">
        <TaskList tasks={tasks} onDelete={_onDelete} onUpdate={_onUpdate} />
      </div>
    </div>
  );
}
