import './TaskForm.css'

function TaskForm({ newTask, setNewTask, handleAddTask }) {
  return (
    <form onSubmit={handleAddTask} className="task-form">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

