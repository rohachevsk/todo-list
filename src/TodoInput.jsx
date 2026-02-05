import React from "react";

const TodoInput = ({ value, onChange, onAdd }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Добавить</button>
    </div>
  );
};

export default TodoInput;
