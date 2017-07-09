// const users = require('./user-profile.service');

// const express = require('express'),
//       massive = require('massive'),
//       app = express.Router(),
//       bodyParser = require('body-parser'),
//       config = require('../../config.json');

const app = require('../../server'),
      db = app.get('db');

app.get('/api/users', (req, res, next) => {
  db.read_users().then(data => {
    res.json(data);
  }).catch(err => {
    res.status(500).json(err);
  });
});

app.post('/api/users', (req, res, next) => {
  var user = req.body;
  db.users.save({
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    password: user.password,
    phone: user.phone,
    facebook: user.facebook,
    about: user.about,
    past_residence: user.past_residence,
    occupation: user.occupation,
    spouse_first: user.spouse_first,
    spouse_last: user.spouse_last,
    children: user.children,
    memories: user.memories,
    photo: "no photo"
  }).then(user => {
    res.json(user);
  }).catch(err => {
    res.status(500).json(err);
  });
});