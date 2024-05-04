import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import { users } from "./data";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
