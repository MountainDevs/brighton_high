import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateShowProfile, userData } from '../../dataService';

 // Components
import TopInfo from './MyProfile/TopInfo';
import ContactForm from './MyProfile/ContactForm';
import AboutForm from './MyProfile/AboutForm';
import LoginRequest from '../login/LoginRequest';
// CSS
import './MyProfile.css';

class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProfile: userData.showProfile
    }
    this.showProfileTrue = this.showProfileTrue.bind(this);
    this.showProfileFalse = this.showProfileFalse.bind(this);
  }

  showProfileTrue() {
    updateShowProfile(true)
      .then(res => this.setState({showProfile: true}));
  }
  showProfileFalse() {
    updateShowProfile(false)
      .then(res => this.setState({showProfile: false}));
  }
    render() {
        return !this.props.loggedIn ? <LoginRequest></LoginRequest> :
        (
            <div className="myProfile-wrapper">
              <div className="showProfileSelector">
                {this.state.showProfile ? (
                  <div>
                    <p>You're currently displaying your profile information to your fellow alumni. If you'd like to hide, click here:</p>
                    <button onClick={this.showProfileFalse}>Hide profile</button>
                  </div>
                ) : (
                  <div>
                    <p>You're currently hiding your profile information from your fellow alumni. Click below if you'd like to show them your information</p>
                    <button onClick={this.showProfileTrue}>Show Profile</button>
                  </div>
                )}
              </div>
                <TopInfo />
                <ContactForm />
                <AboutForm />
            </div>
        );
    }
}

export default MyProfile;