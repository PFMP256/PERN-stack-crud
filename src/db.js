const dotenv = require('dotenv');

const { Pool } = require("pg");

dotenv.config({ path: './.env' })

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {pool};
