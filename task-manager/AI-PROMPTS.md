# AI Assistant Prompts for Each Team Member

This file contains AI prompts that each team member can use to complete their assigned tasks.

---

## 👤 MEMBER 1: Project Lead & Core Functionality

### Files You Need to Work On:
- ✅ `src/App.js`
- ✅ `src/components/TaskForm.js`
- ✅ `src/components/TaskList.js`
- ✅ `src/components/TaskCard.js`

### AI Prompts to Use:

#### Prompt 1: Complete App.js
```
I'm working on a React task manager app. In the file src/App.js, I need you to:

1. Implement the addTask function that:
   - Creates a new task object with: id (using Date.now()), text, completed (false), and createdAt
   - Adds it to the tasks array
   
2. Implement the deleteTask function that removes a task by id

3. Implement the toggleTask function that toggles the completed status of a task

4. Implement the editTask function that updates the task text

5. Uncomment and implement the useEffect hooks to:
   - Load tasks from localStorage on mount
   - Save tasks to localStorage whenever tasks change

Please implement these functions properly.
```

#### Prompt 2: Complete TaskForm.js
```
In src/components/TaskForm.js, complete the handleSubmit function to:
1. Check if input is not empty (trim whitespace)
2. If valid, call addTask(input) 
3. Clear the input field after submission
4. If empty, show an alert or don't submit

Also add proper styling classes to the form elements.
```

#### Prompt 3: Complete TaskList.js
```
In src/components/TaskList.js:
1. Import and use the filterTasks helper function from utils/helpers.js
2. Apply the filter to get filteredTasks based on the current filter prop
3. Make sure the component properly renders the filtered tasks
```

#### Prompt 4: Complete TaskCard.js
```
The TaskCard component is mostly done, but please:
1. Ensure the edit functionality works properly
2. Add proper CSS class names for styling
3. Make sure double-click to edit works
4. Ensure Enter key saves the edit
5. Import the TaskCard.css file
```

---

## 🎨 MEMBER 2: UI/UX Developer

### Files You Need to Work On:
- ✅ `src/styles/App.css`
- ✅ `src/styles/TaskCard.css`
- ✅ `src/components/Header.js`
- ✅ `src/components/ThemeToggle.js`

### AI Prompts to Use:

#### Prompt 1: Complete App.css Styling
```
I'm working on src/styles/App.css for a task manager app. Please complete the CSS with:

1. Beautiful styling for:
   - .task-stats (display statistics in a grid/flex layout)
   - .filter-bar (style filter buttons)
   - .task-list (container for all tasks)
   - .no-tasks (message when no tasks exist)

2. Responsive design:
   - Mobile: stack elements vertically
   - Tablet: 2-column layout
   - Desktop: optimal spacing

3. Dark theme styles:
   - Update all components to support .dark class
   - Proper contrast for readability
   - Smooth color transitions

4. Add hover effects and smooth transitions throughout
```

#### Prompt 2: Complete TaskCard.css
```
In src/styles/TaskCard.css, please add complete styling for:

1. Task card layout with flexbox
2. Checkbox styling (custom styled)
3. Edit mode input styling
4. Delete button with hover effect (maybe red on hover)
5. Completed task appearance (strikethrough, faded)
6. Smooth animations for hover and state changes
7. Responsive sizing for mobile devices

Make it modern and beautiful!
```

#### Prompt 3: Improve Header.js
```
In src/components/Header.js, make the header more attractive:
1. Add a creative subtitle
2. Maybe add an icon or emoji
3. Add gradient background
4. Make it responsive
5. Import and use proper CSS classes

Keep it simple but eye-catching.
```

#### Prompt 4: Style ThemeToggle.js
```
In src/components/ThemeToggle.js:
1. Make the toggle button more attractive
2. Position it nicely (top-right corner)
3. Add smooth transition when switching themes
4. Use proper emojis or icons
5. Make it look like a modern toggle switch
```

---

## ⚙️ MEMBER 3: Features Developer

### Files You Need to Work On:
- ✅ `src/components/FilterBar.js`
- ✅ `src/components/TaskStats.js`
- ✅ `src/utils/localStorage.js`
- ✅ `src/utils/helpers.js`

### AI Prompts to Use:

#### Prompt 1: Complete FilterBar.js
```
In src/components/FilterBar.js, enhance the filter functionality:

1. Ensure all three buttons (All, Active, Completed) work properly
2. Add proper CSS classes for active state highlighting
3. Make it responsive for mobile
4. Maybe add task count next to each filter (e.g., "All (5)")

The basic structure is there, just enhance it.
```

#### Prompt 2: Enhance TaskStats.js
```
In src/components/TaskStats.js, improve the statistics display:

1. The logic is complete, but make the JSX more attractive
2. Maybe add icons or emojis for each stat
3. Calculate and show completion percentage
4. Add progress bar visualization
5. Make it responsive and visually appealing

Display: Total tasks, Active tasks, Completed tasks, and completion %
```

#### Prompt 3: Complete localStorage.js
```
In src/utils/localStorage.js:

The saveTasks and loadTasks functions are already implemented, but please:
1. Add error handling
2. Test that they work properly
3. Maybe add a clearTasks function for future use
4. Add JSDoc comments

Make sure localStorage operations are safe and won't crash the app.
```

#### Prompt 4: Enhance helpers.js
```
In src/utils/helpers.js, the helper functions are there but:

1. Test that filterTasks works correctly for all three filters
2. Improve sortTasksByDate to handle edge cases
3. Add more helper functions like:
   - getCompletionPercentage(tasks)
   - searchTasks(tasks, searchTerm)
   - validateTaskText(text)

Add JSDoc comments for all functions.
```

---

## 🚀 Common Prompts for All Members

### When You Complete Your Part:
```
I've completed my assigned files for the task manager project. Please:
1. Review my code for any bugs or improvements
2. Check if all functions work correctly
3. Ensure the code follows React best practices
4. Check for any console errors
5. Test edge cases
```

### When You Need to Test:
```
Help me test the task manager app. Check:
1. Can I add tasks?
2. Can I delete tasks?
3. Can I mark tasks as complete?
4. Do filters work (All, Active, Completed)?
5. Does the theme toggle work?
6. Is data persisting in localStorage?
7. Is it responsive on mobile?
```

### Before Creating Pull Request:
```
I'm ready to create a pull request for my feature branch. Please:
1. Review all my changes
2. Check for any missing functionality
3. Ensure code is clean and well-commented
4. Verify no console errors
5. Check that my code doesn't break other members' work
6. Suggest a good PR title and description
```

---

## 📝 Quick Reference: Who Does What?

| Member | Role | Files | Main Tasks |
|--------|------|-------|------------|
| **Member 1** | Core Logic | App.js, TaskForm.js, TaskList.js, TaskCard.js | Task CRUD operations, state management |
| **Member 2** | UI/UX | App.css, TaskCard.css, Header.js, ThemeToggle.js | Styling, themes, visual design |
| **Member 3** | Features | FilterBar.js, TaskStats.js, localStorage.js, helpers.js | Filtering, stats, data persistence |

---

## 💡 Tips for Using These Prompts:

1. **Copy-paste** the exact prompt to your AI assistant (ChatGPT, Copilot, etc.)
2. **Share your file** content with the AI when asking for help
3. **Test locally** after implementing each change
4. **Commit frequently** with clear messages
5. **Don't work on other members' files** to avoid merge conflicts

---

## 🆘 Troubleshooting Prompts:

### If you get errors:
```
I'm getting this error in my React task manager app:
[paste error here]

The error is in file: [filename]
Here's the relevant code:
[paste code]

Please help me fix it.
```

### If features don't work:
```
In my task manager app, [describe what's not working].
Here's the relevant code from [filename]:
[paste code]

What's wrong and how do I fix it?
```

### Before merging:
```
I need to merge my branch with main. Help me:
1. Check for potential conflicts
2. Ensure my code integrates well
3. Verify all functionality still works
```

---

**Good luck with your collaboration! 🎉**
