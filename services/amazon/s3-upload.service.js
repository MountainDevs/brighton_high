const AWS = require('aws-sdk');
const config = require('../../config.json');

AWS.config.update({
  accessKeyId: config.amazonAccess,
  secretAccessKey: config.amazonSecretAccess,
  subregion: 'us-west-2',
});
const s3 = new AWS.S3();

module.exports = {
  upload: (req, res, next) => {

    var fileName = `${req.file.originalname}.${req.file.mimetype.substring(req.file.mimetype.indexOf('/') + 1)}`;
    
    s3.putObject({
        Bucket: 'brighton-high-1987',
        Key: `${req.file.originalname}.${req.file.mimetype.substring(req.file.mimetype.indexOf('/') + 1)}`, 
        Body: req.file.buffer,
        ACL: 'public-read',
      }, (err, data) => { 
        if (err) {
          console.log("error: ", err);
          return res.status(400).send(err);
        }
        var toReturn = {
          data: data,
          fileName: fileName
        };
        res.send(toReturn);
    })
  },
  delete: (req, res, next) => {
    s3.deleteObject({
      Bucket: 'brighton-high-1987',
      Key: req.body.photoKey
    }, (err, data) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.sendStatus(200);
    })
  }
}