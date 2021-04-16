const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

config = {
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 20,
};

const pool = new Pool(db_config);

pool.on('connect', (client) => {
  console.log('database connected');
});

pool.on('remove', (client) => {
  console.log('database removed');
});

module.exports(pool);
