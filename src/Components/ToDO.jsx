
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from './ToDO.module.css';

export default function ToDo() {
  const [todo, setTodo] = useState([
    {
      text: "Clean the Kitchen",
      isDone: false
    },
    {
      text: "Walk the Dog",
      isDone: false
    },
    {
      text: "Cook dinner",
      isDone: false
    },
  ]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input && input.trim() !== '') {
      const newData = [...todo, { text: input.trim() + " (-)", isDone: false }];
      setTodo(newData);
      setInput('');
    }
  }

  function remove(event) {
    const id = parseInt(event.target.id);
    const updatedTodo = todo.filter((item, index) => index !== id);
    setTodo(updatedTodo);
  }

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.title}>My Todo List</h1>
      <div className={styles.todoList}>
        <TodoList todo={todo} remove={remove} />
      </div>
      <div className={styles.todoForm}>
        <TodoForm handleSubmit={handleSubmit} setInput={setInput} input={input} />
      </div>
    </div>
  );
}
