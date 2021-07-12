var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => { //callback definition
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, (err, data) => {
      //console.log('this is data back from post msg', data);
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
