import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    const isDuplicate = tasks.some(task => task.title.toLowerCase() === taskTitle.toLowerCase());

    if (isDuplicate) {
        showErrorMessage("Task already exists!");
        return;
    }
    
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function removeTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleCompletedTask(taskId) {
    const newTasks = tasks.map(task => 
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasksAndSave(newTasks);
  }

  function editTask(taskId, newTitle) {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasksAndSave(updatedTasks);
  }

  return (
    <>
      <Header addTaskFn={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={removeTask}
        toggleCompletion={toggleCompletedTask}
        editTask={editTask}
      />
    </>
  )
}

export default App