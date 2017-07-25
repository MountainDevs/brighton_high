import React, { Component } from 'react';
import { updateShowProfile, userData } from '../../dataService';

 // Components
import TopInfo from './MyProfile/TopInfo';
import ContactForm from './MyProfile/ContactForm';
import AboutForm from './MyProfile/AboutForm';
import Questionnaire from './MyProfile/Questionnaire';
import LoginRequest from '../login/LoginRequest';
// CSS
import './MyProfile.css';
import '../../styles/common.css';

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
        // return !this.props.loggedIn ? <LoginRequest></LoginRequest> :
        // (
        //     <div className="myProfile-wrapper">
        //       {this.state.showProfile ? (
        //         <div className="showProfile-wrapper">
        //           <p>You are currently displaying your profile information to your fellow alumni. If you would like to hide, click here:</p>
        //           <button className="blue-button" onClick={this.showProfileFalse}>Hide profile</button>
        //         </div>
        //       ) : (
        //         <div className="showProfile-wrapper">
        //           <p>You are currently hiding your profile information from your fellow alumni. Click below if you would like to show them your information:</p>
        //           <button className="blue-button" onClick={this.showProfileTrue}>Show Profile</button>
        //         </div>
        //       )}
        return (
          <div className="myProfile-wrapper">
                <TopInfo />
                <ContactForm />
                <AboutForm />
                <Questionnaire />
            </div>
        );
    }
}

export default MyProfile;