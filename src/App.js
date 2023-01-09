import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./components/Task";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");
  const changeTask = (e) => {
    setNewTask(e.target.value);
  };

  const changeList = () => {
    if (!newTask) return;
    const newTodolist = [
      ...todolist,
      { name: newTask, id: uuidv4(), completed: false },
    ];
    setTodolist(newTodolist);
  };

  const deleteTask = (targetId) => {
    setTodolist(todolist.filter((task) => task.id !== targetId));
  };

  const completeTask = (targetId) => {
    setTodolist(
      todolist.map((task) =>
        task.id === targetId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="App min-h-screen text-black dark:text-slate flex flex-col items-center">
      <div className="header min-w-full mx-auto py-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl">
        <h1 className="text-4xl font-bold">Todolist</h1>
      </div>
      <div className="addTask my-4">
        <input
          type="text"
          maxLength={20}
          onChange={changeTask}
          className="bg-blue-200 active:bg-blue-400 p-2 mx-4 rounded-xl my-4"
        />
        <button
          className="hover:bg-blue-400 bg-blue-200 p-2 rounded-xl"
          onClick={changeList}
        >
          Submit
        </button>
      </div>

      <div className="list">
        {todolist.map((task) => {
          return (
            <Task
              key={task.id}
              completed={task.completed}
              name={task.name}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
