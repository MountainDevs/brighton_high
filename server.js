"use strict";
const multer = require('multer');
const AWS = require('aws-sdk');
const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');

massive(config.databaseString).then(instance => {
  const db = instance;
  app.use(express.static('./build'))
  app.use(bodyParser.json());
  app.use(require('./services/amazon/s3-upload.controller'));
  // app.use(require('./services/profile/user-profile.controller'));
  app.set('db', db);

  const controller = require('./controller');

  app.get('/api/users', (req, res, next) => {
    db.read_users().then((err, data) => {
      if (err) res.status(500).json(err);
      res.json(data);
    });
  });

  var port = process.env.PORT || 8080;
  app.listen(port, function () {
    console.log(`listening on port ${this.address().port}`);
  });

});



