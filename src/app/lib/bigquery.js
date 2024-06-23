// src/lib/bigquery.js
const { BigQuery } = require('@google-cloud/bigquery');

const bigqueryClient = new BigQuery();

async function queryBigQuery(query) {
  const [rows] = await bigqueryClient.query(query);
  return rows;
}

module.exports = queryBigQuery;
