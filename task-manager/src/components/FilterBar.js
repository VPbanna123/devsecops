import React from 'react';

/**
 * MEMBER 3: Filter Bar Component
 * 
 * TODO:
 * 1. Create buttons for: All, Active, Completed
 * 2. Highlight currently selected filter
 * 3. Call setFilter when button clicked
 * 4. Style buttons nicely
 */

function FilterBar({ filter, setFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? 'active' : ''}`}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
