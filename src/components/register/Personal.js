import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Personal.css';

class Personal extends Component {
    render() {
        return (
            <div className='personal-bg'>
                <div className='personal-wrapper'>
                    <div className='personal-header'>Profile Information</div>
                    <div className='personal-body'>
                       Body 
                    </div>
                </div>
            </div>
        );
    }
}

export default Personal;