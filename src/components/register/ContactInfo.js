import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Data
import { userData, updateUser } from './../../dataService';
// CSS
import './ContactInfo.css';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    userData.phone = this.state.phone;
    userData.address = this.state.address;
    userData.city = this.state.city;
    userData.state = this.state.state;
    userData.zipcode = this.state.zipcode;
    updateUser().then(res => res);
  }

  render() {
    return (
      <div className='contactInfo-bg'>
        <div className='contactInfo-wrapper'>
          <div className='contactInfo-header'>Contact Information</div>
          <div className='contactInfo-body'>
            <section>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="phone" id='phone' name='phone' value={this.state.phone} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' name='address' value={this.state.address} onChange={this.handleInputChange}/>
              </div>
              <section style={{display: 'flex'}}>
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" id='city' name='city' value={this.state.city} onChange={this.handleInputChange}/>
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <input type="text" id='state' name='state' value={this.state.state} onChange={this.handleInputChange}/>
                </div>
                <div>
                  <label htmlFor="zipcode">Zip Code</label>
                  <input type="text" id='zipcode' name='zipcode' value={this.state.zipcode} onChange={this.handleInputChange}/>
                </div>
              </section>
            </section>
            <div className='contactInfo-buttons'>
                <Link to='/register/personal'>Back</Link>
                <Link to='/register/additional' onClick={this.handleSubmit}>Continue</Link>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;