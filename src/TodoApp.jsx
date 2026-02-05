import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {
    if (inputValue.length > 1) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos(prevTodos => [...prevTodos, newTodo]); //получаем новый массив, где все старые задачи + новая задача в конце.
      setInputValue("");
    }
  };
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
  };
    const toggleTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(todo =>
  todo.id === id ? { ...todo, completed: !todo.completed } : todo
));
    }
  return (
    <div className="todo-app">
      <TodoInput value={inputValue} onChange={setInputValue} onAdd={addTodo} />
      <div className="controls">
        <span className="counter">Задач: {todos.length}</span>
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};
export default TodoApp;
