import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData } from './../../dataService';
import './Continue.css';
import '../../styles/common.css';
import prof_pic from '../../assets/profile_pic.png'
import FileUpload from '../FileUpload/FileUpload';

class Continue extends Component {

    
  render() {
    var self = this;
    return (
      <div className='Continue-bg'>
        <div className='Continue-wrapper'>
          <div className='Continue-header'>Profile Information</div>
          <div className='Continue-body'>
            <h1>Would you like to continue to create a profile to share with your classmates?</h1>
            <div className='Continue-buttons'>
              <Link to='/'>No</Link>
              <Link to='/register/personal'>Yes</Link>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Continue;