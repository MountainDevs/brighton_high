"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');

app.use(express.static('./build'))
app.use(bodyParser.json());

let db = massive.connectSync({
    connectionString: config.databaseString
  })
app.set('db', db);
db.set_user((err, data) => {
  if (err) console.log(err);
  else console.log('All tables successfully reset');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`listening on port ${this.address().port}`);
})
