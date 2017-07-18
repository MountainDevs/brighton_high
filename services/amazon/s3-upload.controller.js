const multer = require('multer');
const amazon = require('./s3-upload.service');

const express = require('express'),
    app = express.Router(),
    config = require('../../config.json'),
    cors = require('cors');

//TODO: Have total services file, which imports everything from services then exports an app that uses everything so that the server only has to import the one file.

//It's worth noting that this will use up server ram, so we have to be careful not to get overloaded.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});


app.post('/api/s3/upload', upload.single('file'), amazon.upload);

module.exports = app;