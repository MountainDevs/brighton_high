import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData } from './../../dataService';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      middleName: ''
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
    userData.email = this.state.email;
    userData.password = this.state.password;
    userData.firstName = this.state.firstName;
    userData.lastName = this.state.lastName;
    userData.middleName = this.state.middleName;
  }

  render() {
    return (
      <div className='register-bg'>
        <div className='register-wrapper'>
          <div className='register-header'>Register</div>
          <div className='register-body'>
            <div className='register-text'>Enter a valid email address and create a password to get started!</div>
            <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/mail.png')} alt="[ ]"/></div>
              <input type="email" placeholder='example@gmail.com' name='email' value={this.state.email} onChange={this.handleInputChange} className='register-input'/>
            </div> 
            <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
              <input type="password" placeholder="password" name='password' value={this.state.password} onChange={this.handleInputChange} className='register-input'/>
            </div> 
             <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/mail.png')} alt="[ ]"/></div>
              <input type="firstName" placeholder='Your First Name' name='firstName' value={this.state.firstName} onChange={this.handleInputChange} className='register-input'/>
            </div> 
            <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
              <input type="middleName" placeholder="Your Middle Name" name='middleName' value={this.state.middleName} onChange={this.handleInputChange} className='register-input'/>
            </div>
            <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
              <input type="lastName" placeholder="Your Last Name" name='lastName' value={this.state.lastName} onChange={this.handleInputChange} className='register-input'/>
            </div>  
            <Link to='/register/pay' onClick={this.handleSubmit} className='register-register' >Continue</Link>
            <Link to='/'><div className='login-register'>Exit</div></Link>
          </div>
        </div>
    </div>
    );
  }
}

export default Register;