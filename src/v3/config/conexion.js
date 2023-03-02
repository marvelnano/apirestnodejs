const mysql = require('mysql2');
const config = require('../../config');

const connection = {
  host: config.db_host,
  database: config.db_database,
  user: config.db_user,
  password: config.db_password
};

const pool = mysql.createPool(connection);

module.exports = pool;