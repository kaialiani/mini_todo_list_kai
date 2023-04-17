import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Do the dishes",
      completed: false,
    },
  ]);

  function addTask(taskName) {
    const newTask = {
      id: uuidv4(),
      task: taskName,
      completed: false,
    };
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  function completeTask(id) {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <Form addTask={addTask} />
      <List tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
