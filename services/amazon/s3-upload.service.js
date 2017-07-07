import { multer } from 'multer';
import { AWS } from 'aws-sdk';

const app = require('../../server');

// Amazon s3 config
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
      Bucket: 'your-bucket-name',
      Key: 'your-key-name', 
      Body: req.file.buffer,
      ACL: 'public-read', // your permisions  
    }, (err) => { 
      if (err) return res.status(400).send(err);
      res.send('File uploaded to S3');
  })
}),

module.exports = router;