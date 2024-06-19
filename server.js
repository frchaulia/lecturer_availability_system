const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
// Define MongoDB Schema and Model
const LectureSchema = new mongoose.Schema({
  date: String,
  time: String,
  NIDN: String,
  status: String,
  course: String
});

const Lecture = mongoose.model('lecture', LectureSchema);

// Body parser middleware
app.use(bodyParser.json());

// API endpoints
app.get('/api/lectures', async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching lectures' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));