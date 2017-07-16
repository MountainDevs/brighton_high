import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactInfo.css';

class ContactInfo extends Component {
    render() {
        return (
            <div className='contactInfo-bg'>
                <div className='contactInfo-wrapper'>
                    <div className='contactInfo-header'>Contact Information</div>
                    <div className='contactInfo-body'>
                        <section>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" id='phone' name='phone'/>
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <input type="text" id='address' name='address'/>
                            </div>
                            <section style={{display: 'flex'}}>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input type="text" id='city' name='city'/>
                                </div>
                                <div>
                                    <label htmlFor="state">State</label>
                                    <input type="text" id='state' name='state'/>
                                </div>
                                <div>
                                    <label htmlFor="zipCode">Zip Code</label>
                                    <input type="text" id='zipCode' name='zipCode'/>
                                </div>
                            </section>
                        </section>
                        <div className='contactInfo-buttons'>
                            <Link to='/register/personal'>Back</Link>
                            <Link to='/register/additional'>Continue</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;