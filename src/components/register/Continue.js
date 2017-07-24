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
    const styles = this.style()
    return (
      <div className='Continue-bg'>
        <div className='Continue-wrapper'>
          <div className='Continue-header'>Profile Information</div>
          <div style={styles.continue_body}>
            <div style={styles.payment_success}>
              <h1>
                Payment Successful!
              </h1>
            </div> 
            <div style={styles.payment_body}>
                If you'd like to continue on and create a full profile, click on Continue.  You can always come back and edit your profile at a later date.  Simply log in and go to "edit profile".
            </div>
            <div style={styles.payment_body}>
                Would you like to continue to create a profile to share with your classmates?
            </div>
            <div className='Continue-buttons'>
              <Link to='/' style={styles.home_button}>Home</Link>
              <Link to='/my_profile' onClick={this.showProfile}>Continue</Link>
            </div> 
          </div>
        </div>
      </div>
    );
  }
  style() {
    return {
      continue_body: {
        margin: 15
      },
      payment_success: {
        color: 'green',
        margin: 'auto',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
      },
      payment_body: {
        marginTop: 15,
        marginBottom: 15
      },
      home_button: {
        border: 'solid 1px #EAEAEA',
        borderRadius: 3,
        width: 75,
        textAlign: 'center'
      }
    }
  }
}

export default Continue;