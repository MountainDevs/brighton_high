"use strict";
const multer = require('multer');
const AWS = require('aws-sdk');
const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
// const db = massive.connectSync({
//     connectionString: config.databaseString
// });
massive(config.databaseString).then(instance => {
  const db = instance;
  app.use(express.static('./build'))
  app.use(bodyParser.json());
  app.set('db', db);

  const controller = require('./controller');
  // Amazon s3 config
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: config.amazonAccess,
    secretAccessKey: config.amazonSecretAccess,
    subregion: 'us-west-2',
  });

// Multer config
// memory storage keeps file data in a buffer
const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});

app.post('/upload', upload.single('theseNamesMustMatch'), (req, res) => {
  // req.file is the 'theseNamesMustMatch' file
  
        console.log(req.file);
  s3.putObject({
      Bucket: 'brighton-high-1987',
      Key: req.file.fieldname, 
      Body: req.file.buffer,
      ACL: 'public-read', // your permisions  
    }, (err, data) => { 
      if (err) {
        console.log("error: ", err);
        return res.status(400).send(err);
      }
      console.log("success: ", data);
      res.send('File uploaded to S3');
  })
});

  var port = process.env.PORT || 8080;
  app.listen(port, function () {
    console.log(`listening on port ${this.address().port}`);
  });
});



