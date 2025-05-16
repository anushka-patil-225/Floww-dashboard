import React from 'react';

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;