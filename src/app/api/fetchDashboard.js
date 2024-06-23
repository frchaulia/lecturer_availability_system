// lib/fetchDashboard.js

const bigquery = require('./bigquery');

async function fetchDashboard() {
  const query = `
    SELECT l.name_lecturer AS name, l.room_lecturer AS room, l.course_lecture AS course, a.lecturer_status AS status
    FROM \`vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer\` l
    LEFT JOIN \`vertical-tuner-423007-m8.dataset_new_lectureattendance.availability\` a
    ON l.NIDN = a.NIDN
  `;

  const options = {
    query: query,
    location: 'asia-southeast2',
  };

  const [rows] = await bigquery.query(options);
  return rows;
}

module.exports = fetchDashboard;