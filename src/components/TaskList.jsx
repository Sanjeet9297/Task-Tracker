import TaskItem from './TaskItem'
import './TaskList.css'

function TaskList({ tasks, toggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add your first task above!</p>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  )
}

export default TaskList

