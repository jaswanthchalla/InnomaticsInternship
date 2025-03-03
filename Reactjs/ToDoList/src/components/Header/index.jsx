import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
// import { FcTodoList } from "react-icons/fc";
import { RiTodoLine } from "react-icons/ri";

export function Header({ addTaskFn}) {
  const [taskName, setTaskName] = useState('');


  function submitTask(event) {
    event.preventDefault();

    addTaskFn(taskName);
    setTaskName('');
  }

  function changeTaskName(event) {
    setTaskName(event.target.value);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <RiTodoLine size={28}/>
      <span className={styles.logoText}>To-Do List</span>
      </div>
      <form onSubmit={submitTask} className={styles.taskForm}>
        <input placeholder="Add a new task" type="text" onChange={changeTaskName} value={taskName} />
        <button>Add Task <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}