import { BigQuery } from '@google-cloud/bigquery';
import { getSession } from 'next-auth/react';

const bigquery = new BigQuery();

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'You must be logged in to access this resource' });
    return;
  }

  const { NIDN } = req.query;

  const query = `SELECT * FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer WHERE NIDN = @NIDN`;
  const options = {
    query: query,
    params: { NIDN: NIDN }
  };

  try {
    const [rows] = await bigquery.query(options);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Lecturer not found' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
