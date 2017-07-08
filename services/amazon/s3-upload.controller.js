const multer = require('multer');
const amazon = require('./s3-upload.service');

const express = require('express'),
    app = express.Router(),
    config = require('../../config.json');

//TODO: Have total services file, which imports everything from services then exports an app that uses everything so that the server only has to import the one file.

// Multer config
// memory storage keeps file data in a buffer
const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});



app.post('/api/s3/upload', upload.single('theseNamesMustMatch.jpg'), amazon.upload);

module.exports = app;