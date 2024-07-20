import React from "react"; 
import styles from "./TodoList.module.css"; 
import { CgRemove } from "react-icons/cg";


function TodoList({ todo, remove }) {
    return (
      <>
        <h1 className={styles.heading}>TO DOs</h1>
        {todo.map((item, i) => (
          <div  className ={styles.todoItem}key={i} id={i} onClick={remove}>
              <span>{item.text}</span>
              <CgRemove />
          </div>
        ))}
      </>
    );
  }

  export default TodoList;
  