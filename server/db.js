const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "banhduc",
  host: "localhost",
  port: 5432,
  database: "tennis_data"
});

module.exports = pool;
