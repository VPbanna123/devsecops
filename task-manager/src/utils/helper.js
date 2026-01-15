/**
 * MEMBER 3: Helper Functions
 * 
 * TODO:
 * 1. Implement filterTasks function
 * 2. Add any other useful helper functions
 * 3. Keep functions pure and reusable
 */

export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'all':
    default:
      return tasks;
  }
};

export const sortTasksByDate = (tasks) => {
  // TODO: Sort tasks by creation date
  return [...tasks].sort((a, b) => 
    new Date(b.createdAt) - new Date(a.createdAt)
  );
};

export const getTaskById = (tasks, id) => {
  // TODO: Find task by ID
  return tasks.find(task => task.id === id);
};