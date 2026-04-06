import React, { useState } from 'react'

const ToDoItem = ({todo,deleteTodo,editTodo}) => {
 const[isEditing,setIsEditing]=useState(false)
  const[newText,setNewText]=useState(todo.text);


  return (
    
     <li>
      {isEditing?(
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <button onClick={() => {
            editTodo(todo.id, newText);
            setIsEditing(false);
          }}>
            Save
          </button>
        </>
      ):( <>
          <span>{todo.text}</span>
           <span>{todo.id}</span>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </>)}
    
      </li>
    
  )
}

export default ToDoItem
