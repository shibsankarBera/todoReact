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
            className={todo.completed ? "done" : ""}
          >
            {todo.text}
          </span>

          <button className="complete-btn"  onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? "Undo" : "Done"}
          </button>

          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>

          <button  className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
