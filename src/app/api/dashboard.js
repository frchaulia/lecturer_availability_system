// pages/api/dashboard.js

import fetchDashboard from '../../lib/fetchDashboard';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const dashboardData = await fetchDashboard();
    if (dashboardData.length > 0) {
      res.status(200).json(dashboardData);
    } else {
      res.status(404).json({ error: 'No data found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}