const React = require('react');
const Dropzone = require('react-dropzone');
const superagent = require('superagent')

 class FileUpload extends React.Component{
   //TODO: Filename should include user name plus new date in order to distinguish between photos - replace 'fileName' with that information
    onDrop (files) {
      superagent.post('/api/s3/upload')
      .attach('file', files[0], 'fileName')
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          //Save the file name to the user: JSON.parse(res.text).fileName;
          console.log(JSON.parse(res.text));
        }
      })
    }

    render(){
      return (
          <div>
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div>Try dropping a file here, or click to select a file to upload.</div>
            </Dropzone>
          </div>
      );
    }
};

export default FileUpload;