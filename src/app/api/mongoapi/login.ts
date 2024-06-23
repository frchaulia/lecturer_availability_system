// // pages/api/login.ts

// // pages/api/login.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
//  // Update with your MongoDB connection logic
// import connectMongo from '../../lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ success: false, message: 'Method not allowed' });
//   }

//   try {
//     const { db } = await connectMongo(); // Ensure this function connects to your MongoDB instance

//     const { email, password } = req.body;
//     const user = await db.collection('login').findOne({ email, password, NIM: null });

//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }

//     return res.status(200).json({ success: true, message: 'Login successful' });
//   } catch (error) {
//     console.error('Login failed:', error);
//     return res.status(500).json({ success: false, message: 'Login failed. Please try again later.' });
//   }
// }
// pages/api/login.ts
// pages/api/login.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectMongo from '../../lib/mongodb';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ success: false, message: 'Method not allowed' });
//   }

//   try {
//     const db = await connectMongo(); // Ensure this function connects to your MongoDB instance and returns the database

//     const { email, password } = req.body;
//     const user = await db.collection('login').findOne({ email, password, NIM: null });

//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }

//     return res.status(200).json({ success: true, message: 'Login successful' });
//   } catch (error) {
//     console.error('Login failed:', error);
//     return res.status(500).json({ success: false, message: 'Login failed. Please try again later.' });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import connectMongo from '@/app/lib/mongodb'; // Import the MongoDB connection function
import { Login } from '@/app/components/interfaces/schema'; // Import the Login model (adjust import path as per your actual file structure)

// Handler function for the login route
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  
    try {
      await connectMongo(); // Ensure MongoDB is connected
  
      const { email, password } = req.body;
  
      // Find user by email in MongoDB
      const user = await Login.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
  
      // Verify password using bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
  
      // If login is successful
      return res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
      console.error('Login failed:', error);
      return res.status(500).json({ success: false, message: 'Login failed. Please try again later.' });
    }
  }