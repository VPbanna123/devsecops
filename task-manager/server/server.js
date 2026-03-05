const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = 'taskmanager';
const COLLECTION_NAME = 'tasks';

let db;
let tasksCollection;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize MongoDB connection
const initDB = async () => {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(DB_NAME);
    tasksCollection = db.collection(COLLECTION_NAME);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await tasksCollection.find({}).toArray();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to read tasks' });
  }
});

// Save tasks (replace all)
app.post('/api/tasks', async (req, res) => {
  try {
    const tasks = req.body;
    
    // Clear existing tasks and insert new ones
    await tasksCollection.deleteMany({});
    
    if (tasks.length > 0) {
      await tasksCollection.insertMany(tasks);
    }
    
    res.json({ success: true, message: 'Tasks saved' });
  } catch (error) {
    console.error('Error saving tasks:', error);
    res.status(500).json({ error: 'Failed to save tasks' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', database: db ? 'connected' : 'disconnected' });
});

// Start server
initDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
});
