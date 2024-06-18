import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/mongodb';
import mongoose from 'mongoose';

interface Lecture {
  _id: mongoose.Types.ObjectId;
  date: string;
  time: string;
  NIDN: string;
  status: string;
  course: string;
}

const lectureSchema = new mongoose.Schema<Lecture>({
  date: String,
  time: String,
  NIDN: String,
  status: String,
  course: String,
});

const Lecture = mongoose.models.Lecture || mongoose.model<Lecture>('Lecture', lectureSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();

  if (req.method === 'GET') {
    try {
      const lectures = await Lecture.find({});
      res.status(200).json(lectures);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch lectures', error });
    }
  } else if (req.method === 'POST') {
    try {
      const newLecture = new Lecture(req.body);
      await newLecture.save();
      res.status(201).json(newLecture);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create lecture', error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
