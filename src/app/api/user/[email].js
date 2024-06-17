import { BigQuery } from '@google-cloud/bigquery';

export default async function handler(req, res) {
  try {
    const { identifier, type } = req.query;

    // Ensure either NIDN or NIM is provided in the query parameters
    if (!identifier || !type || (type !== 'NIDN' && type !== 'NIM')) {
      return res.status(400).json({ error: 'Invalid query parameters' });
    }

    // Initialize BigQuery client
    const bigquery = new BigQuery();

    // Construct SQL query based on the type (NIDN or NIM)
    const query = `
      SELECT *
      FROM \`vertical-tuner-423007-m8.dataset_new_lectureattendance.login\`
      WHERE ${type} = @identifier
    `;

    // Run query with parameterized values
    const options = {
      query: query,
      params: {
        identifier: identifier,
      },
    };

    // Run query against BigQuery
    const [rows] = await bigquery.query(options);

    // Return user login data
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user login data:', error);
    res.status(500).json({ error: 'Failed to fetch user login data' });
  }
}
