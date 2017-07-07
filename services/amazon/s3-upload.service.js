import { multer } from 'multer';
import { AWS } from 'aws-sdk';

const config = require('../../config.json');
const app = require('../../server');

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
  s3.putObject({
      Bucket: 'brighton-high-1987',
      Key: req.filename, 
      Body: req.file.buffer,
      ACL: 'public-read', // your permisions  
    }, (err) => { 
      if (err) return res.status(400).send(err);
      console.log(res);
      res.send('File uploaded to S3');
  })
});