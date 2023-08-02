import React from 'react'
import './App.css';
import { useState } from 'react';
const api_base = 'http://localhost:8000';

function App() {
  const [todos, setTodos] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const addTodo=async()=>{
    const data = await fetch(api_base + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: newTodo
      })
    }).then(res => res.json());
    setTodos([...todos, data]);
    setNewTodo("");
  }
  // const handleClick = (id) => {
  //   setTodo(todo.filter((item) => {
  //      return id !== item.id;
  //   }))
  //  console.log(id);
  // }
  return (
    <div className="bg">
      <form>
        <h1>To Do List</h1>
        <input type='text' name='taskname' className='input-box' placeholder='name of task'></input><br></br>
        <input type='text' name='description' className='input-box' placeholder='task description'></input><br></br>
        <button type='submit' onClick={addTodo} className='submit-button'>Add</button>
      </form>
      <div>
       {todos.map((item) => (
        <React.Fragment key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.desc}</h2>
          {/* <button onClick={() => handleClick(item.desc)}>Delete</button> */}
        </React.Fragment>
        ))
       }
      </div>
    </div>
  );
}

export default App;
