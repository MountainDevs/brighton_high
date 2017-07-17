import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData } from './../../dataService';
import './Personal.css';

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      middleName: '',
      email: userData.email || '',
      phone: ''
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
    userData.firstName = this.state.firstName;
    userData.lastName = this.state.lastName;
    userData.middleName = this.state.middleName;
    userData.email = this.state.email;
  }
    
  render() {
    return (
      <div className='personal-bg'>
        <div className='personal-wrapper'>
          <div className='personal-header'>Profile Information</div>
          <div className='personal-body'>
            <div className='personal-photo'>
              <img src={require('./../../assets/pic.png')} alt=""/>
              <div>Upload Photo</div>
            </div> 
            <div className='personal-info'>
            <section style={{display: 'flex'}}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' name='firstName' value={this.state.firstName} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>        
                <input type="text" id='lastName' name='lastName' value={this.state.lastName} onChange={this.handleInputChange}/> 
              </div>         
            </section>
            <section style={{display: 'flex'}}>
              <div>
                <label htmlFor="middleName">Middle Name</label>
                <input type="text" id='middleName' name='middleName' value={this.state.middleName} onChange={this.handleInputChange}/>  
              </div>
              <div>
                <label htmlFor="email">Email Address</label>      
                <input type="text" id='email' name='email' value={this.state.email} onChange={this.handleInputChange}/> 
              </div>  
            </section>
            <div className='personal-buttons'>
              <Link to='/register'>Back</Link>
              <Link to='/register/contact_info' onClick={this.handleSubmit}>Continue</Link>
            </div> 
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;