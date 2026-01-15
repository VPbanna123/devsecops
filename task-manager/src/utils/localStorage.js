/**
 * MEMBER 3: LocalStorage Utility Functions
 * 
 * TODO:
 * 1. Implement saveTasks function
 * 2. Implement loadTasks function
 * 3. Handle errors gracefully
 * 4. Use JSON.stringify and JSON.parse
 */

const STORAGE_KEY = 'task-manager-tasks';

export const saveTasks = (tasks) => {
  try {
    // TODO: Save tasks array to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

export const loadTasks = () => {
  try {
    // TODO: Load tasks from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};