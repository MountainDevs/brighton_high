import React, { Component } from 'react';
import { userData } from '../../../dataService';
import FileUpload from '../../FileUpload/FileUpload'
import './PhotoUpload.css';

class PhotoUpload extends Component {
  constructor(props) {
        super(props);
        this.state = {
            photoTwo: userData.photoTwo,
            photoThree: userData.photoThree,
            hideUploadTwo: true,
            hideUploadThree: true
        }
        // this.hideUpload = this.hideUpload.bind(this);
    }   
      
    // hideUpload() {
    //   var newValue = !this.state.hideUpload;
    //   this.setState({
    //     hideUpload: newValue
    //   })
    // }

    onCompleteUpload(value) {
      this.setState({
        hideUpload: value,
        photoTwo: userData.photoOne
      })
    }

  render() {
    var self = this;
    return (
      <div className="photo-wrapper">
        <div className="photo-header">UPLOAD PHOTOS</div>
        <div className="photo-body">
          {
            this.state.photoTwo
            ? <img src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoTwo} alt={this.state.firstName || ""}/>
            : <div className="photo-img1">Photo 2</div>
          }
          <FileUpload hideUpload={ this.state.hideUploadTwo } onCompleteUpload={ self.onCompleteUpload.bind(self) }/>
          {
            this.state.photoThree
            ? <img src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoThree} alt={this.state.firstName || ""}/>
            : <div className="photo-img1">Photo 3</div>
          }
        </div>
          <FileUpload hideUpload={ this.state.hideUploadThree } onCompleteUpload={ self.onCompleteUpload.bind(self) }/>
      </div>
    );
  }
}

export default PhotoUpload;