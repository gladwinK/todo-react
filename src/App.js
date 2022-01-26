import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Todos from "./Components/Todos"
import TodoForm from "./Components/TodoForm";

const App = () => {
  const [todos, SetTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    console.log({ localStorage });
    if (localTodos) {
      SetTodos(JSON.parse(localTodos))
    }
  }, []);

  const addTodos = async todo => {
    SetTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);
  const markComplete = (id) => {
    SetTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container fluid >
      <h1>Todo App</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  )
}
export default App;
