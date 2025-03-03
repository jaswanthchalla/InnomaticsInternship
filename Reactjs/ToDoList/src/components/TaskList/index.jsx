import { Task } from '../Task';
import styles from './tasks.module.css';

export function TaskList({ tasks, deleteTask, toggleCompletion, editTask }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasksList}>
      <header className={styles.header}>
        <div>
          <p>Total tasks</p>
          <span>{totalTasks}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>{completedTasks} of {totalTasks}</span>
        </div>
      </header>

      <div className={styles.taskContainer}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} toggleCompletion={toggleCompletion} editTask={editTask} tasks={tasks} />
        ))}
      </div>
    </section>
  )
}