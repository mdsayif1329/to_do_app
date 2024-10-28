import React, { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

function Todo({}) {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}

export default Todo;
