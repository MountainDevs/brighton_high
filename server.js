"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static('./build'))
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`listening on port ${this.address().port}`);
})
