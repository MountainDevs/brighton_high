import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 // Components
import TopInfo from './MyProfile/TopInfo';
import ContactForm from './MyProfile/ContactForm';
import AboutForm from './MyProfile/AboutForm';
import LoginRequest from '../login/LoginRequest';
// CSS
import './MyProfile.css';

class MyProfile extends Component {
    render() {
        return !this.props.loggedIn ? <LoginRequest></LoginRequest> :
        (
            <div className="myProfile-wrapper">
                <TopInfo />
                <ContactForm />
                <AboutForm />
            </div>
        );
    }
}

export default MyProfile;