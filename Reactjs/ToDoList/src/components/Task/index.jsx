import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash, TbEdit } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa';
import { useEffect, useState } from 'react';


export function Task({ task, deleteTask, toggleCompletion, editTask, tasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    setNewTitle(task.title);
  }, [task.title]);

  function handleEditClick() {
    setIsEditing(true);
    setErrorMessage('');
  }

  function handleInputChange(event) {
    setNewTitle(event.target.value);
  }

  function handleSave() {
    if (newTitle.trim() === "") {
      setErrorMessage("⚠ Task name cannot be empty!");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    const isDuplicate = tasks.some(t => t.title.toLowerCase() === newTitle.toLowerCase() && t.id !== task.id);
    if (isDuplicate) {
      setErrorMessage("⚠ Task already exists!");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    if (newTitle !== task.title) {
      editTask(task.id, newTitle);
    }
    setIsEditing(false);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSave();  // Save when Enter key is pressed
    }
  }

  function handleBlur() {
    setTimeout(() => {
      setIsEditing(false);
    }, 150);  // Small delay to allow clicking the tick button
  }

  return (
    <div className={styles.taskItem}>
      <button className={styles.checkBox} onClick={() => toggleCompletion(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <div className={styles.taskContent}>
        {isEditing ? (
          <div className={styles.editContainer}>
            <input 
              className={styles.editInput} 
              type="text" 
              value={newTitle} 
              onChange={handleInputChange} 
              onBlur={handleBlur} 
              onKeyDown={handleKeyPress} 
              autoFocus 
            />
            <button className={styles.saveButton} onClick={handleSave}>
              <FaCheck size={18} />
            </button>
          </div>
        ) : (
          <p className={task.isCompleted ? styles.taskCompleted : ""}>
            {task.title}
          </p>
        )}

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.editButton} onClick={handleEditClick}>
          <TbEdit size={20} />
        </button>
        <button className={styles.trashButton} onClick={() => deleteTask(task.id)}>
          <TbTrash size={20} />
        </button>
      </div>
    </div>
  )
}