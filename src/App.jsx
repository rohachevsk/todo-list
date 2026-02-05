import "./App.css";
import React from "react";
import TodoApp from "./TodoApp.jsx";
import Timer from "./Timer.jsx";

function App() {
  return (
    <div className="App" style={{ padding: 24 }}>
      <Timer />
      <TodoApp />
    </div>
  );
}

export default App;
