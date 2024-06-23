// // fetchProfile.js
// const bigquery = require('./bigquery');

// async function fetchProfile(email) {
//   const query = `
//     SELECT l.name_lecturer AS name, l.NIDN, l.room_lecturer AS room, l.course_lecture AS course
//     FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer l
//     JOIN vertical-tuner-423007-m8.dataset_new_lectureattendance.login lg
//     ON l.NIDN = lg.NIDN
//     WHERE lg.email = @email
//     LIMIT 1
//   `;

//   const options = {
//     query: query,
//     params: { email: email },
//     location: 'asia-southeast2',
//   };

//   const [rows] = await bigquery.query(options);
//   return rows;
// }

// module.exports = fetchProfile;

// fetchProfile.js

const bigquery = require('./bigquery');

async function fetchProfile(email) {
  const query = `
    SELECT l.name_lecturer AS name, l.NIDN, l.room_lecturer AS room, l.course_lecture AS course
    FROM vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer l
    JOIN vertical-tuner-423007-m8.dataset_new_lectureattendance.login lg
    ON l.NIDN = lg.NIDN
    WHERE lg.email = @email
    LIMIT 1
  `;

  const options = {
    query: query,
    params: { email: email },
    location: 'asia-southeast2',
  };

  const [rows] = await bigquery.query(options);
  return rows;
}

module.exports = fetchProfile;