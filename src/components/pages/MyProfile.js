import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 // Components
import TopInfo from './MyProfile/TopInfo';
import ContactForm from './MyProfile/ContactForm';
import AboutForm from './MyProfile/AboutForm';
// CSS
import './MyProfile.css';

class MyProfile extends Component {
    render() {
        return !this.props.loggedIn ? <Link to='/login'>Please Login</Link> :
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