const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL Database');
  }
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('PAHDS Connect Backend is running...');
});

// ✅ Volunteer form submission route
app.post('/volunteer', (req, res) => {
  const {
    name, phone, email, age, gender, address,
    town, state, services, timeline, created_at, contribution
  } = req.body;

  const sql = `
    INSERT INTO volunteers
    (name, phone, email, age, gender, address, town, state, services, timeline,created_at, contribution)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    name, phone, email, age, gender, address,
    town, state, services, timeline, created_at, contribution
  ], (err, result) => {
    if (err) {
      console.error('❌ Error inserting data:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    console.log('✅ Volunteer data inserted successfully!');
    res.json({ message: 'Volunteer registered successfully' });
  });
});

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
