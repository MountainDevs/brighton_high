"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static('./build'))
app.use(bodyParser.json());
app.listen(9090, function () {
  console.log(`listening on port ${this.address().port}`);
})
