"use strict";

const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const db = massive.connectSync({
    connectionString: config.databaseString
  })

app.use(express.static('./build'))
app.use(bodyParser.json());
app.set('db', db);

const controller = require('./controller')

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`listening on port ${this.address().port}`);
})
