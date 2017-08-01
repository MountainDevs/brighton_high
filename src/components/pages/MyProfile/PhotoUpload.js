import React, { Component } from 'react';
import { userData } from '../../../dataService';
import FileUpload from '../../FileUpload/FileUpload'
import './PhotoUpload.css';
import '../../../styles/common.css';

class PhotoUpload extends Component {
  constructor(props) {
        super(props);
        this.state = {
            photoTwo: userData.photoTwo,
            photoThree: userData.photoThree,
            hideUploadTwo: true,
            hideUploadThree: true,
            beTall: false
        }
        this.hideUploadTwo = this.hideUploadTwo.bind(this);
        this.hideUploadThree = this.hideUploadThree.bind(this);
        this.checkHeight = this.checkHeight.bind(this);
    }   
      
    hideUploadTwo() {
      var newValue = !this.state.hideUploadTwo;
      this.setState({
        hideUploadTwo: newValue
      })
    }
    hideUploadThree() {
      var newValue = !this.state.hideUploadThree;
      this.setState({
        hideUploadThree: newValue
      })
    }

    checkHeight() {
      if (!this.state.hideUploadThree || !this.state.hideUploadTwo) {
        this.setState({
          beTall: true
        });
      } else {
        this.setState({
          beTall: false
        })
      }
    }

    onCompleteUploadTwo(value) {
      this.setState({
        hideUploadTwo: value,
        photoTwo: userData.photoTwo,
        photoThree: userData.photoThree
      })
    }

    onCompleteUploadThree(value) {
      this.setState({
        hideUploadThree: value,
        photoTwo: userData.photoTwo,
        photoThree: userData.photoThree
      })
    }

  render() {
    var self = this;
    return (
      <div className={ 'photo-wrapper ' + (this.state.beTall ? 'tall' : '') }>
        <div className="photo-header">UPLOAD PHOTOS</div>
        <div className="photo-body">
          <div className="flex-column">  
            {
              this.state.photoTwo
              ? <img className="photo-img1" src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoTwo} alt={this.state.firstName || ""}/>
              : <div className="photo-img1">Photo 2</div>
            }
            <div onClick={this.hideUploadTwo} className="pointer">Upload Photo</div>
            <FileUpload hideUpload={ this.state.hideUploadTwo } photoType="photoTwo" onCompleteUpload={ self.onCompleteUploadTwo.bind(self) }/>
          </div>
          <div className="flex-column">
            {
              this.state.photoThree
              ? <img className="photo-img1" src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoThree} alt={this.state.firstName || ""}/>
              : <div className="photo-img1">Photo 3</div>
            }
            <div onClick={this.hideUploadThree} className="pointer">Upload Photo</div>
            <FileUpload hideUpload={ this.state.hideUploadThree } photoType="photoThree" onCompleteUpload={ self.onCompleteUploadThree.bind(self) }/>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoUpload;