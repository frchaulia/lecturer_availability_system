// // fetchAvailability.js

// const bigquery = require('./bigquery');

// async function fetchAvailability(email) {
//   const query = `
//     SELECT a.date, a.timetaken AS time, a.NIDN, a.lecturer_status AS status, l.course_lecture AS course
//     FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.availability a
//     JOIN vertical-tuner-423007-m8.dataset_new_lectureattendance.login lg
//     ON a.NIDN = lg.NIDN
//     JOIN vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer l
//     ON a.NIDN = l.NIDN
//     WHERE lg.email = @email
//   `;

//   const options = {
//     query: query,
//     params: { email: email },
//     location: 'asia-southeast2',
//   };

//   const [rows] = await bigquery.query(options);
//   return rows;
// }

// module.exports = fetchAvailability;

// fetchAvailability.js

const bigquery = require('./bigquery');

async function fetchAvailability(email) {
  const query = `
    SELECT a.date, a.timetaken AS time, a.NIDN, a.lecturer_status AS status, l.course_lecture AS course
    FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.availability a
    JOIN vertical-tuner-423007-m8.dataset_new_lectureattendance.login lg
    ON a.NIDN = lg.NIDN
    JOIN vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer l
    ON a.NIDN = l.NIDN
    WHERE lg.email = @email
  `;

  const options = {
    query: query,
    params: { email: email },
    location: 'asia-southeast2',
  };

  const [rows] = await bigquery.query(options);
  return rows;
}

module.exports = fetchAvailability;