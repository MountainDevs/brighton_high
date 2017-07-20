import '../../styles/common.css';

const React = require('react');
const Dropzone = require('react-dropzone');
const superagent = require('superagent');
const dataService = require('../../dataService');

 class FileUpload extends React.Component{
   constructor(props) {
     super(props)

     this.state = {
       step: 1
     }
    this.onDrop = this.onDrop.bind(this);
   }

  onDrop (files) {
    this.setState({
      step: 2
    });
    superagent.post('http://localhost:5000/api/s3/upload')
    .attach('file', files[0], `${dataService.userData.id}_${dataService.userData.lastName}_${new Date()}`)
    .end((err, res) => {
      if (err) {
        console.log(err);
        this.setState({step:4});
        setTimeout(() => {this.setState({step:1})}, 1500);
      } else {
        dataService.changePhoto(JSON.parse(res.text).fileName);
        this.setState({step:3});
        setTimeout(() => {
          this.setState({step:1})
          this.props.onCompleteUpload(true);
        }, 1500);
      }
    })
  }


  render(){
    return (
        <div className={ 'margin-top-20 pointer ' +  (this.props.hideUpload ? 'hidden' : 'flex-center') }>
          <Dropzone onDrop={this.onDrop} multiple={false}>
            <div className={"full-height-width " + (this.state.step === 1 ? 'flex-center' : 'hidden')}>
              Try dropping a file here, or click to select a file to upload.
            </div>
            <div className={"full-height-width " + (this.state.step === 2 ? 'flex-center' : 'hidden')}>
              Uploading, just a moment...
            </div>
            <div className={"full-height-width " + (this.state.step === 3 ? 'flex-center' : 'hidden')}>
              All done!
            </div>
            <div className={"full-height-width " + (this.state.step === 4 ? 'flex-center' : 'hidden')}>
              Oh no, there's been an error! Please try again.
            </div>
          </Dropzone>
        </div>
    );
  }
};

export default FileUpload;