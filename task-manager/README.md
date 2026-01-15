# Task Manager App - Collaboration Project

A simple task management application built with React (no database - uses localStorage).

## 👥 Team Members & Responsibilities

### Member 1 (Project Lead)
**Files to work on:**
- `src/App.js` - Main app component and task logic
- `src/components/TaskForm.js` - Add task form
- `src/components/TaskList.js` - Display tasks list

### Member 2 (UI/UX Developer)
**Files to work on:**
- `src/styles/App.css` - Main styling
- `src/styles/TaskCard.css` - Task card styling
- `src/components/Header.js` - App header
- `src/components/ThemeToggle.js` - Dark/Light theme

### Member 3 (Features Developer)
**Files to work on:**
- `src/components/FilterBar.js` - Filter tasks (All/Active/Completed)
- `src/components/TaskStats.js` - Statistics display
- `src/utils/localStorage.js` - Save/load tasks
- `src/utils/helpers.js` - Helper functions

## 🚀 Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
npm start
```

## 📋 Collaboration Workflow

1. **Member 1** pushes the initial structure
2. **All members** clone the repository
3. **Each member** creates their own branch:
   ```bash
   git checkout -b feature/member1-core
   git checkout -b feature/member2-ui
   git checkout -b feature/member3-features
   ```
4. Work on your assigned files
5. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add: description of changes"
   git push origin your-branch-name
   ```
6. Create a Pull Request on GitHub
7. Wait for review and merge

## 📁 Project Structure

```
task-manager/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskForm.js       # Member 1
│   │   ├── TaskList.js       # Member 1
│   │   ├── TaskCard.js       # Member 1
│   │   ├── Header.js         # Member 2
│   │   ├── ThemeToggle.js    # Member 2
│   │   ├── FilterBar.js      # Member 3
│   │   └── TaskStats.js      # Member 3
│   ├── styles/
│   │   ├── App.css           # Member 2
│   │   └── TaskCard.css      # Member 2
│   ├── utils/
│   │   ├── localStorage.js   # Member 3
│   │   └── helpers.js        # Member 3
│   ├── App.js                # Member 1
│   └── index.js              # Initial setup
├── package.json
└── README.md
```

## ✨ Features

- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Filter tasks (All, Active, Completed)
- Task statistics
- Dark/Light theme toggle
- Responsive design
- Data persists in localStorage (no database needed)

## 🔧 Technologies Used

- React 18
- CSS3
- LocalStorage API
- No backend or database required
