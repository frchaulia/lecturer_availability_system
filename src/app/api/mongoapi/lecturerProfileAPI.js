// api/lecturerProfileAPI.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await client.connect();
      const database = client.db('lectureattendance');
      const lecturers = database.collection('lecturer');
      const username = req.query.username;
      const lecturer = await lecturers.findOne({ email: username });

      if (!lecturer) {
        res.status(404).json({ message: 'Lecturer not found' });
      } else {
        res.status(200).json(lecturer);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching lecturer data', error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}