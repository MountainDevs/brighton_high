import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Additional.css';

class Additional extends Component {
    render() {
        return (
            <div className='additional-bg'>
                <div className='additional-wrapper'>
                    <div className='additional-header'>Additional Information</div>
                    <div className='additional-body'>
                        <p>Here will be some sort of Bio. Tell us where you have been and what you have been up to</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <div className='additional-buttons'>
                            <Link to='/register/contact_info'>Back</Link>
                            <Link to='/register/pay'>Continue</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Additional;