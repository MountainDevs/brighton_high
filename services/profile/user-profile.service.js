const massive = require('massive'),
      config = require('../../config.json');

massive(config.databaseString).then(instance => {
  db = instance;
});

module.exports = {
  indexUsers: (req, res, next) => {
    // db.read_users((err, data) => {
    //   if (err) {
    //     res.status(500).json(err);
    //   } else {
    //     res.json(users);
    //   }
    // });
    res.json("something");
  },

  // showUserPrivilege: (req, res, next) => {

  // }
}