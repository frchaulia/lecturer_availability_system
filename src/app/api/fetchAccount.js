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