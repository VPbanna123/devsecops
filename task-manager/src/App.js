import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import TaskStats from './components/TaskStats';
import ThemeToggle from './components/ThemeToggle';
import { loadTasks, saveTasks } from './utils/localStorage';

/**
 * MEMBER 1: Main App Component
 * Complete implementation of task management
 */

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [theme, setTheme] = useState('light');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = loadTasks();
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add new task
  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTasks([newTask, ...tasks]);
  };

  // Delete task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle completed status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Update task text
  const editTask = (id, newText) => {
    if (!newText.trim()) return;
    
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      
      <div className="container">
        <TaskForm addTask={addTask} />
        <TaskStats tasks={tasks} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TaskList 
          tasks={tasks}
          filter={filter}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
