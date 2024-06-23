// pages/api/availability.js

import fetchAvailability from './fetchAvailability';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { email } = req.query;

  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  try {
    const availabilityData = await fetchAvailability(email); // Fetch availability data for the specific email
    if (availabilityData.length > 0) {
      res.status(200).json(availabilityData);
    } else {
      res.status(404).json({ error: 'Availability not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
