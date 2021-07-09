var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, result)=> {
      if (err) {
        return res.sendStatus(404);
      } else {
        res.sendStatus(200).send(result);
      }

    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      //console.log(req.body);
      if (err) {
        return res.sendStatus(404);
      } else {
        res.sendStatus(201).send(data);
      }
    });
  }
};
