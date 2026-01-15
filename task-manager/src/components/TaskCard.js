import React, { useState } from 'react';
import '../styles/TaskCard.css';

/**
 * MEMBER 1: Task Card Component
 * Individual task item with edit/delete functionality
 */

function TaskCard({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editText.trim()) {
      editTask(task.id, editText.trim());
      setIsEditing(false);
    } else {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      
      {isEditing ? (
        <input
          type="text"
          className="task-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : (
        <span 
          className="task-text"
          onDoubleClick={() => setIsEditing(true)}
          title="Double-click to edit"
        >
          {task.text}
        </span>
      )}
      
      <button 
        className="delete-btn" 
        onClick={() => deleteTask(task.id)}
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskCard;
