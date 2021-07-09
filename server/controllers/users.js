var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, result)=> {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(result);
      }

    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      //console.log(req.body);
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(data);
      }
    });
  }
};
