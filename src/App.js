import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") {
      alert("Please fill out empty task.");
      return;
    } else {
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
      });
      todoNameRef.current.value = null;
    }
  }

  const handleKeyDown = (event) => {
    console.log("User pressed: ", event.key);

    // console.log(message);

    if (event.key === "Enter") {
      handleAddTodo();
      console.log("Enter key pressed ✅");
    }
  };

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Header title="Task Tracker" />
      <div id="app-new-task-container">
        <div id="app-new-task">
          <input
            ref={todoNameRef}
            type="text"
            id="app-input"
            placeholder="Enter task here.."
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleAddTodo}
            id="app-add-button"
            className="todo-done-button"
          >
            <i className="fas fa-plus-circle fa-2x"></i>
          </button>
        </div>
        <button onClick={handleClearTodos} id="app-clear-button">
          Clear completed tasks
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
