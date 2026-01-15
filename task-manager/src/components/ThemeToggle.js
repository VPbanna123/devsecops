import React from 'react';

/**
 * MEMBER 2: Theme Toggle Component
 * 
 * TODO:
 * 1. Create toggle button for dark/light theme
 * 2. Update theme state when clicked
 * 3. Add icons (sun/moon) or text
 * 4. Style the toggle button nicely
 * 5. Add smooth transition animation
 */

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default ThemeToggle;
