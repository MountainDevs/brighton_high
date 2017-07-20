import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postUser, permissions } from '../../dataService'
import './Pay.css';

class Pay extends Component {

    componentWillUnmount(){
        permissions.payed = true;
    }

    render() {
        return (
            <div className='pay-bg'>
                <div className='pay-wrapper'>
                    <div className='pay-header'>Registration Fee</div>
                    <div className='pay-body'>
                        <p>Here we will explain a little about the fees and what they are paying for.</p>
                        <section className='stripe-code'>
                            TWO buttons, one if they want to build a profile, one if they're done
                        </section>
                        <div className='pay-buttons'>
                            <Link to='/register'>Back</Link>
                            <Link to='/register/personal'>Continue</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Pay;