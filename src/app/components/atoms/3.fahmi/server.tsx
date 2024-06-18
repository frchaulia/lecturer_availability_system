const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const bigquery = new BigQuery({
  projectId: 'vertical-tuner-423007', // Ganti dengan ID proyek Anda
  keyFilename: 'path/to/your/keyfile.json', // Path ke file JSON kunci layanan Anda
});

app.get('/api/lecturers', async ({req, res}:{req:any, res:any}) => {
  const query = `
    SELECT id_lecturer, NIDN, name_lecturer, room_lecturer, mac_address_lecturer, course_lecture
    FROM \`vertical-tuner-423007-m8.dataset_new_lectureattendance.lecturer\`
  `;

  const options = {
    query: query,
    location: 'US',
  };

  try {
    const [rows] = await bigquery.query(options);
    res.json(rows);
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
function async(req: any, res: any): any {
    throw new Error("Function not implemented.");
}

