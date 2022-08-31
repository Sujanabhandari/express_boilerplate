
const { Pool } = require("pg");

const { ELEPHANT_SQL_CONNECTION_STRING } = process.env;

const pool = new Pool({
  connectionString: ELEPHANT_SQL_CONNECTION_STRING,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};