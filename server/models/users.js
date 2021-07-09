var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT user_name FROM users';
    db.query(queryString, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback (null, results);
      }
    });
  },
  create: function (params, callback) {
    var queryString = 'INSERT INTO users (user_name) values (?)';
    db.query(queryString, [params.username], (error, data) => {
      if (error) {
        callback(error);
      } else {
        callback(null, data);
      }
    });
  }
};
