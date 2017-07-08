// import { multer } from 'multer';
// import { AWS } from 'aws-sdk';
const multer = require('multer');
const AWS = require('aws-sdk');

const express = require('express'),
    app = express.Router(),
    config = require('../../config.json');


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
app.get('/trial', (req, res, next) => {
  res.send("Something smmdmdmdm");
});
app.post('/upload', upload.single('theseNamesMustMatch.jpg'), (req, res) => {
  // req.file is the 'theseNamesMustMatch' file
  
        console.log(req.file);
  // s3.putObject({
  //     Bucket: 'brighton-high-1987',
  //     Key: req.file.fieldname, 
  //     Body: req.file.buffer,
  //     ACL: 'public-read', // your permisions  
  //   }, (err, data) => { 
  //     if (err) {
  //       console.log("error: ", err);
  //       return res.status(400).send(err);
  //     }
  //     console.log("success: ", data);
  //     res.send('File uploaded to S3');
  // })
  res.send("suck a duck");
});

module.exports = app;