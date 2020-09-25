import React from "react";
import TodoInput from "./components/todo-input";
import "./App.css";
import TodoProvider from "./Provider/todo";
import TodoList from "./components/todolist";
const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
