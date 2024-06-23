// // src/api/bigquery.js
// import queryBigQuery from '../lib/bigquery';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const query = 'SELECT * FROM `vertical-tuner-423007-m8.dataset_new_lectureattendance.login` LIMIT 10'; // Replace with your query
//       const data = await queryBigQuery(query);
//       res.status(200).json(data);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }


// lib/bigquery.js
const { BigQuery } = require('@google-cloud/bigquery');
const path = require('path');

require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

const bigquery = new BigQuery({
  projectId: process.env.BIGQUERY_PROJECT_ID,
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

module.exports = bigquery;