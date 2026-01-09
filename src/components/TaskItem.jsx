import './TaskItem.css'

function TaskItem({ task, index, toggleComplete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      <div className="task-content">
        <span className="task-text">{task.text}</span>
        <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      <button
        onClick={() => toggleComplete(index)}
        className={`toggle-button ${task.completed ? 'mark-pending' : 'mark-completed'}`}
      >
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
    </li>
  )
}

export default TaskItem

