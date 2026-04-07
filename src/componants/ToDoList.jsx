import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos,deleteTodo,editTodo,toggleComplete}) => {
  
  return (
     <ul>
      {todos.map(todo => (todo&&
        <ToDoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
            toggleComplete={toggleComplete}
        />
      ))}
    </ul>  )
}

export default ToDoList
