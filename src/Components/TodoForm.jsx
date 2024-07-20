import React from "react"; 
import styles from "./TodoForm.module.css";
import { CgAdd } from "react-icons/cg";

function TodoForm({handleSubmit, setInput,input}){
    return (
    <form onSubmit={handleSubmit}>    
    <div className={styles.inputWrapper}>
  <input
    className={styles.input}
    value={input}
    type="text"
    onChange={(e) => setInput(e.target.value)}
  />
  {!input && (
    <div className={styles.placeholder}>
      <CgAdd />
      <span>Add item...</span>
    </div>
  )}
</div>  
    </form>  
    );
}

export default TodoForm; 