import React, { Component } from 'react';
// Components
import Title from './Shared/Title';
// CSS
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="component-wrapper">
                <Title title="Contact Us"/>

                <div className="details-date-bar">
                    <div className="details-date-bar-title"></div>
                </div>

                <div className="contact-content">
                    For questions, please reach out to Jessica Church at Jessica@BrightonHigh1987.com
                </div>

            </div>
        );
    }
}

export default Contact;