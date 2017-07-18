const React = require('react');
const Dropzone = require('react-dropzone');
const superagent = require('superagent');
const dataService = require('../../dataService');

 class FileUpload extends React.Component{
    onDrop (files) {
      superagent.post('http://localhost:5000/api/s3/upload')
      .attach('file', files[0], `${dataService.userData.id}_${dataService.userData.lastName}_${new Date()}`)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          dataService.changePhoto(JSON.parse(res.text).fileName);
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