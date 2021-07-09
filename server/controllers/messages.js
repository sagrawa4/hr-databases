var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(req.body, (err, data) => {
      if (err) {
        return res.sendStatus(404);
      } else {
        res.sendStatus(201).send(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('body inside messages', req.body);
    models.messages.create(req.body, (err, data) => {
      console.log('this is data back from post msg', JSON.stringify(data));
      if (err) {
        //console.error('myerr', err);
        return res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};
