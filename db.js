// server.js
//CARA KEDUA DARI YOUTUBE KE CHATGPT
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db'); // Adjust path as per your setup

const app = express();
const port = 8080;

// Middleware
app.use(cors());

// API endpoint to fetch availability data
app.get('/api/fetchAvailability', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('availability');
        const availabilityData = await collection.find({}).toArray();
        res.status(200).json(availabilityData);
    } catch (error) {
        console.error('Error fetching availability data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//INI CARA PERTAMA DARI CHATGPT
// import { MongoClient } from 'mongodb';



// const uri = 'mongodb://35.209.44.95:27017';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// let cachedDb = null;

// async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   try {
//     if (!client.isConnected()) {
//       await client.connect();
//     }
//     const db = client.db('lectureattendance');
//     cachedDb = db;
//     return db;
//   } catch (error) {
//     console.error('Error connecting to database:', error);
//     throw error;
//   }
// }

// export { connectToDatabase };