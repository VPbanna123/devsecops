import React from 'react';

/**
 * MEMBER 3: Task Statistics Component
 * Displays task statistics and progress
 */

function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const active = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="task-stats">
      <div className="stat">
        <span className="stat-icon">📊</span>
        <span className="stat-label">Total</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat">
        <span className="stat-icon">⏳</span>
        <span className="stat-label">Active</span>
        <span className="stat-value">{active}</span>
      </div>
      <div className="stat">
        <span className="stat-icon">✅</span>
        <span className="stat-label">Completed</span>
        <span className="stat-value">{completed}</span>
      </div>
      <div className="stat progress-stat">
        <span className="stat-icon">📈</span>
        <span className="stat-label">Progress</span>
        <span className="stat-value">{percentage}%</span>
      </div>
      {total > 0 && (
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default TaskStats;
