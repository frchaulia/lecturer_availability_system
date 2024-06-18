// Example using Express.js
const express = require('express');
const app = express();

// Define route for fetching lectures
app.get('/api/fetchLecturer', (req, res) => {
    // Your logic to fetch data from MongoDB and send response
    res.json({ message: 'Lectures data' });
});

// Define route for fetching availability
app.get('/api/fetchAvailability', (req, res) => {
    // Your logic to fetch availability data from MongoDB and send response
    res.json({ message: 'Availability data' });
});

// Other middleware and server setup
app.listen(5000, () => {
    console.log('Server running on port 5000');
});