import React, { Component } from 'react';
// Components
import Title from './Shared/Title';
// CSS
import './MyProfile.css';

class MyProfile extends Component {
    render() {
        return (
            <div className="component-wrapper">
                <Title title="Profile Page"/>
            </div>
        );
    }
}

export default MyProfile;