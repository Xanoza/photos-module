const { Pool } = require('pg');
const { user, password } = require('./config');

const pool = new Pool({
  user: user,
  host: 'localhost',
  database: 'photos',
  password: password,
  port: 5432
});

pool.connect()

const findPhotos = (id, callback) => {
  const queryString = `SELECT * FROM photos WHERE restaurant_id = ${id}`;
  pool.query(queryString, (err, photos) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, photos);
  })
}

module.exports = { findPhotos };
