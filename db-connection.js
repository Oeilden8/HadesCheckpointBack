// access to process.env
require("dotenv").config();
const mysql = require("mysql2");

// config local mysql
// let config = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   multipleStatements: true,
// };

// config cleardb heroku
let config = {
  host: process.env.DB_CLEAR_HOST,
  port: process.env.DB_CLEAR_PORT,
  user: process.env.DB_CLEAR_USER,
  password: process.env.DB_CLEAR_PASS,
  database: process.env.DB_CLEAR_NAME,
  multipleStatements: true,
};

const connection = mysql.createPool(config);

const query = (...args) => {
  return new Promise((resolve, reject) => {
    connection.query(...args, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const closeConnection = () => {
  return new Promise((resolve, reject) => {
    if (connection) {
      connection.end((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    } else {
      resolve();
    }
  });
};

module.exports = {
  connection,
  closeConnection,
  query,
};
