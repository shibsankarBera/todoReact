import Header from './componants/Header'
import { useState } from 'react';
import ToDoList from './componants/ToDoList';
import ToDoItem from './componants/ToDoItem';

import './App.css'

function App() {
 const [todos, setTodos] = useState([]);

  console.log(todos)

    // Add items
  const addTodo = (text) => {
    if (text.trim() === "") return;
   const newTodo={ id: Date.now(), text: text, completed: false };
    setTodos([
      ...todos,newTodo]);
    
  };
  //delete
    const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  // edit
  const editTodo = (id, newText) => {
    const updated = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    });

    setTodos(updated);
  };
  


  return (
    <>
      <Header addTodo={addTodo} />
      <ToDoList todos={todos} 
            deleteTodo={deleteTodo}
            editTodo={editTodo}
      />

    </>

  )
}

export default App
