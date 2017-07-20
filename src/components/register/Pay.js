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
                        <p>Here is a breakdown of what you're paying for:</p>
                        <section className='stripe-code'>
                            <ul>
                                <li>Early registration = $94 for alumni and $63 for spouses</li>
                                <li>Early registration is available until August 1, 2017</li>
                                <li>Registration will be $104 per person after August 1</li>
                                <li>Registration will be $120 per person when registering the day of the event</li>
                            </ul>
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