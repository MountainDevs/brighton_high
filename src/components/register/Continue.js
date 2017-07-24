import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateShowProfile } from './../../dataService';
import './Continue.css';
import '../../styles/common.css';

class Continue extends Component {
  constructor(props) {
    super(props);

    this.showProfile = this.showProfile.bind(this);
  }

  showProfile() {
    updateShowProfile(true)
      .then()
      .catch();
  }  
    
  render() {
    return (
      <div className='Continue-bg'>
        <div className='Continue-wrapper'>
          <div className='Continue-header'>Profile Information</div>
          <div className='Continue-body'>
            <h1>Would you like to continue to create a profile to share with your classmates?</h1>
            <div className='Continue-buttons'>
              <Link to='/'>No</Link>
              <Link to='/register/personal' onClick={this.showProfile}>Yes</Link>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Continue;