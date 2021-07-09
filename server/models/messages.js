var db = require('../db/index.js');

//interacting with the database directly

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT message FROM messages'; //mysql command
    db.query(queryString, (error, result) => {
      if (error) {
        callback(error);
      } else {
        callback(null, result);
      }
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryString = `INSERT INTO messages (message, user, room_name) values ("${params.message}", "${params.username}", "${params.roomname}")`;
    db.query(queryString, (error, result) => {
      if (error) {
        callback(error);
      } else {
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
