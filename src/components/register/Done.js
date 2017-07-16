import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Done.css';

class Done extends Component {
    render() {
        return (
            <div className='done-bg'>
                <div className='done-wrapper'>
                    <div className='done-header'>Ready to go!</div>
                    <div className='done-body'>
                        <p>You have successfully registered for the event! You may continue to view classmate profiles.</p>
                        <div className='done-buttons'>
                            <Link to='/'>Continue</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Done;