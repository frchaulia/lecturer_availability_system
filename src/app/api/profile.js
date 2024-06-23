// pages/api/profile.js

import fetchProfile from '../../fetchProfile';

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
    const profileData = await fetchProfile(email);
    if (profileData.length > 0) {
      res.status(200).json(profileData[0]);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}