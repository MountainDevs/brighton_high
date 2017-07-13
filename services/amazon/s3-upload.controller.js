const multer = require('multer');
const amazon = require('./s3-upload.service');

const express = require('express'),
    app = express.Router(),
    config = require('../../config.json'),
    cors = require('cors');

//TODO: Have total services file, which imports everything from services then exports an app that uses everything so that the server only has to import the one file.

// const storage = multer.diskStorage({
//   destination: './files',
//   filename: function(req, file, cb) {
//     cb(null, `${file.originalname}.${file.mimetype.substring(file.mimetype.indexOf('/') + 1)}`);
//   }
// });
// const upload = multer({ storage: storage });

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 52428800 },
});


app.post('/api/s3/upload', upload.single('file'), amazon.upload);

module.exports = app;