import React, { useState } from "react";

const ToDoItem = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <li>
      {isEditing ? (
        <>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />

          <button
            onClick={() => {
              editTodo(todo.id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.id}</span>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "green" : "black",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
