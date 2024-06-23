// // src/api/fetchAccount.js
// import { NextApiRequest, NextApiResponse } from 'next';
// import { BigQuery } from '@google-cloud/bigquery';
// import bcrypt from 'bcrypt';

// const bigqueryClient = new BigQuery();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     const query = `SELECT * FROM \`vertical-tuner-423007-m8.dataset_new_lectureattendance.login\` WHERE email = @email LIMIT 1`;
//     const options = {
//       query,
//       params: { email }
//     };

//     try {
//       const [rows] = await bigqueryClient.query(options);

//       if (rows.length > 0) {
//         const user = rows[0];
//         const passwordMatch = await bcrypt.compare(password, user.password);

//         if (passwordMatch) {
//           res.status(200).json({ message: 'Login successful' });
//         } else {
//           res.status(401).json({ message: 'Invalid credentials' });
//         }
//       } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



const bigquery = require('./bigquery');

async function fetchAccount(email) {
  const query = `SELECT email, password FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.login WHERE email = @email LIMIT 1`;

  const options = {
    query: query,
    params: { email: email },
    location: 'asia-southeast2',
  };

  const [rows] = await bigquery.query(options);
  return rows;
}

module.exports = fetchAccount;