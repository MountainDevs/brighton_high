
const React = require('react');
const Dropzone = require('react-dropzone');
const superagent = require('superagent')

 class FileUpload extends React.Component{
   //TODO: Filename should include user name plus new date in order to distinguish between photos
    onDrop (files) {
      superagent.post('/api/s3/upload')
      .attach('theseNamesMustMatch.jpg', files[0], new Date().toDateString())
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      })
    }

    render(){
      return (
          <div>
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div>Try dropping a file here, or click to select a file to upload.</div>
            </Dropzone>
            <p>Nothing</p>
            <img src="https://s3-us-west-2.amazonaws.com/brighton-high-1987/theseNamesMustMatch"></img>
          </div>
      );
    }
};

export default FileUpload;