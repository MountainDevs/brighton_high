import React, { Component } from 'react';

import './PhotoUpload.css';

class PhotoUpload extends Component {
  render() {
    return (
      <div className="photo-wrapper">
        <div className="photo-header">UPLOAD PHOTOS</div>
        <div className="photo-body">
          <div className="photo-img1">Upload 1</div>
          <div className="photo-img1">Upload 2</div>
          <div className="photo-img1">Upload 3</div>
        </div>
      </div>
    );
  }
}

export default PhotoUpload;