import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.trim() === '') return
    
    const task = {
      text: newTask.trim(),
      completed: false
    }
    
    setTasks([...tasks, task])
    setNewTask('')
  }

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Task Tracker</h1>
          <p className="subtitle">Manage your tasks efficiently</p>
        </header>
        
        <TaskForm 
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddTask={handleAddTask}
        />
        
        <TaskList 
          tasks={tasks}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  )
}

export default App
