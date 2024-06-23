// import { BigQuery } from '@google-cloud/bigquery';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { identifier, password } = req.body;

//     // Fetch user credentials from BigQuery
//     const bigquery = new BigQuery();
//     const query = `
//       SELECT *
//       FROM \`vertical-tuner-423007-m8.dataset_new_lectureattendance.login\`
//       WHERE NIDN = @identifier OR NIM = @identifier
//     `;
//     const options = {
//       query: query,
//       params: {
//         identifier: identifier,
//       },
//     };
//     const [rows] = await bigquery.query(options);

//     // Check if user exists and password matches
//     if (rows.length > 0 && rows[0].password === password) {
//       // Authentication successful
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       // Authentication failed
//       res.status(401).json({ error: 'Invalid NIDN/NIM or password' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }