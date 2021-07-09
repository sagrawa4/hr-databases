var db = require('../db/index.js');

//interacting with the database directly

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT message FROM messages'; //mysql command
    db.query(queryString, (error, result) => {
      if (error) {
        callback(error);
      } else {
        console.log('result', result);
        callback(null, result); //callback invocation
      }
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var queryString = 'INSERT INTO messages (message, room_name, u_id) values (?, ?, (SELECT id FROM users WHERE user_name = ?))';
    db.query(queryString, [params.message, params.roomname, params.username], (error, result) => {
      if (error) {
        console.error(error);
        callback(error);
      } else {
        //console.log('results in post model', result);
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
