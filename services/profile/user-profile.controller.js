// const users = require('./user-profile.service');

// const express = require('express'),
//       massive = require('massive'),
//       app = express.Router(),
//       bodyParser = require('body-parser'),
//       config = require('../../config.json');

// app.use(bodyParser.json());

// massive(config.databaseString).then(instance => {
//   const db = instance;

//   app.get('/api/users', (req, res, next) => {
//     db.read_users((err, data) => {
//       if (err) {
//         res.status(500).json(err);
//       } else {
//         res.json(users);
//       }
//     }); 
//   });
  
//   module.exports = app;
// });

// app.get('/api/users', users.indexUsers);

// module.exports = app;

// app.get('/api/users/:privilege', users.showUserPrivilege);


