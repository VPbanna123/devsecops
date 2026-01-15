import React, { useState } from 'react';

/**
 * MEMBER 1: Task Form Component
 * Handles task input and submission
 */

function TaskForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (input.trim()) {
      addTask(input.trim());
      setInput(''); // Clear input after submission
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">
        ➕ Add Task
      </button>
    </form>
  );
}

export default TaskForm;
