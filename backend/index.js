const express = require('express');
const cors = require('cors');
const pool = require('./db'); // PostgreSQL pool
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Test DB connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`✅ DB Connected: ${result.rows[0].now}`);
  } catch (err) {
    console.error('❌ DB connection error:', err);
    res.status(500).send('Database connection failed');
  }
});

// Fetch all projects
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects');
    console.log('Fetched rows:', result.rows); // For debugging
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching projects:', err);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

