import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Pay.css';

class Pay extends Component {
    render() {
        return (
            <div className='pay-bg'>
                <div className='pay-wrapper'>
                    <div className='pay-header'>Registration Fee</div>
                    <div className='pay-body'>
                        <p>Here we will explain a little about the fees and what they are paying for.</p>
                        <section className='stripe-code'>
                            
                        </section>
                        <div className='pay-buttons'>
                            <Link to='/register/additional'>Back</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Pay;