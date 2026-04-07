import { useState } from "react";

function Header({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);   // App ko bhej diya
    setInput("");     // clear input
  };

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button  className="add-btn" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Header;