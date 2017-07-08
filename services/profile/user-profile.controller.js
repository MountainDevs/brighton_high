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