import fetchAccount from './fetchAccount';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { email, password } = req.body;

  try {
    const users = await fetchAccount(email); // Fetch data for the specific email

    if (users.length > 0) {
      const user = users[0];
      if (user.password === password) { // Validate credentials
        res.status(200).json({ message: 'Login successful'});
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
