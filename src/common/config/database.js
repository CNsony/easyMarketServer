const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  // host: '220.231.216.128',
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'admin',
  dateStrings: true
};
