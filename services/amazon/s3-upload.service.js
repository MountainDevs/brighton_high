const AWS = require('aws-sdk');
const config = require('../../config.json');

const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: config.amazonAccess,
    secretAccessKey: config.amazonSecretAccess,
    subregion: 'us-west-2',
  });

module.exports = {
  upload: (req, res, next) => {
// app.post('/upload', (req, res) => {
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
  }
}