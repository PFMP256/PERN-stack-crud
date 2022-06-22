const { Pool } = require("pg");


const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://xsvvlvtpcwhubs:046a93dd21fab075266ba00d361c48fdc9fd61b874bd93ac91221a8a60e27366@ec2-44-199-143-43.compute-1.amazonaws.com:5432/d2c42a4hi7hkq8",
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {pool};
