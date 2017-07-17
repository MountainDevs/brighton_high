import React, { Component } from 'react';
// Components
import TopInfo from './MyProfile/TopInfo';
import ContactForm from './MyProfile/ContactForm';
import AboutForm from './MyProfile/AboutForm';

// CSS
import './MyProfile.css';

class MyProfile extends Component {
    render() {
        return (
            <div className="myProfile-wrapper">
                <TopInfo />
                <ContactForm />
                <AboutForm />
            </div>
        );
    }
}

export default MyProfile;