"use strict";
const multer = require('multer');
const AWS = require('aws-sdk');
const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config.json');

massive(config.databaseString)
.then(instance => {
  const db = instance;
  
  app.use(express.static('./build'))
  app.use(bodyParser.json());
  app.use(cors());
  app.use(require('./services/amazon/s3-upload.controller'));
  app.use(cors())
  app.set('db', db);

  const controller = require('./controller');
  const auth = require('./services/auth/auth.controller');
  const alumni = require('./services/alumni/alumni.controller');

  

  var port = process.env.PORT || 8080;
  app.listen(port, function () {
    console.log(`listening on port ${this.address().port}`);
  });

});



