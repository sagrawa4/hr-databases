var mysql = require('mysql');

// Create a database connection and export it from this file.
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'chat'
});

connection.connect((err) => {
  if (err) {
    throw new Error('Error occured connecting to database');
  }
  console.log('Connected to the database');
});

module.exports = connection;

// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


