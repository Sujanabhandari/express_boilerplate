
const { Pool } = require("pg");


const { ELEPHANT_SQL_CONNECTION_STRING } = process.env;


//creates a new instance of the pool that connects server and db instance on ElpehantSQL
const pool = new Pool({
  connectionString: ELEPHANT_SQL_CONNECTION_STRING,
});

module.exports = {
  //text is the SQL statement, params are the params array
  query: (text, params) => pool.query(text, params),
};