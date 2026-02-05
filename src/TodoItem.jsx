import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
