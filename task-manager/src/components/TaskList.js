import React from 'react';
import TaskCard from './TaskCard';
import { filterTasks } from '../utils/helpers';

/**
 * MEMBER 1: Task List Component
 * Displays filtered list of tasks
 */

function TaskList({ tasks, filter, toggleTask, deleteTask, editTask }) {
  // Apply filter to tasks
  const filteredTasks = filterTasks(tasks, filter);

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p className="no-tasks">
          {tasks.length === 0 
            ? '📝 No tasks yet. Add one above!' 
            : `No ${filter} tasks.`}
        </p>
      ) : (
        filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
