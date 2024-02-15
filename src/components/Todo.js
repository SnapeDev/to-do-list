import React from "react";
import "./Todo.css";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div
      className={todo.complete ? "todo-container-completed" : "todo-container"}
    >
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          className="todo-checkbox"
        />
        <p className={`${todo.complete ? "completed" : ""}`}>{todo.name}</p>
      </label>
    </div>
  );
}
