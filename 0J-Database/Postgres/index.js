const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

pool.query(`
  CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  );
`, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table "user" created successfully');
  }
});

// You can now use the "pool" object to execute queries against the database
