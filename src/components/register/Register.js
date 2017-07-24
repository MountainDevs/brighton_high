import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { userData, postUser } from './../../dataService';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      middleName: '',
      enteredAllInfo: false
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

    if(!this.state.firstName) alert('please enter your first name')
    else if(!this.state.lastName) alert('please enter your last name')
    else if(!this.state.email) alert('please enter a valid email')
    else if(!this.state.password) alert('please set your password')
    else {
      userData.email = this.state.email;
      userData.password = this.state.password;
      userData.firstName = this.state.firstName;
      userData.lastName = this.state.lastName;
      userData.middleName = this.state.middleName;
      postUser().then(res => {
        this.setState({
          enteredAllInfo: true
        })
      });
      
    }  
  }

  render() {
    return this.state.enteredAllInfo ? <Redirect to='/register/pay' /> : (
      <div className='register-bg'>
        <div className='register-wrapper'>
          <div className='register-header'>Register</div>
          <div className='register-body'>
            <div className='register-text'>Fill out the information below to get started. Enter a valid email and create a secure password</div>
             <div style={{display: 'flex'}}>
              <div className='register-icon-personal'><img src={require('./../../assets/pic.png')} alt="[ ]"/></div>
              <input type="firstName" placeholder='Your First Name' name='firstName' value={this.state.firstName} onChange={this.handleInputChange} className='register-input'/>
            </div> 
            <div style={{display: 'flex'}}>
              <div className='register-icon-personal'><img src={require('./../../assets/pic.png')} alt="[ ]"/></div>
              <input type="middleName" placeholder="Your Middle Name" name='middleName' value={this.state.middleName} onChange={this.handleInputChange} className='register-input'/>
            </div>
            <div style={{display: 'flex'}}>
              <div className='register-icon-personal'><img src={require('./../../assets/pic.png')} alt="[ ]"/></div>
              <input type="lastName" placeholder="Your Last Name" name='lastName' value={this.state.lastName} onChange={this.handleInputChange} className='register-input'/>
            </div>  
            <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/mail.png')} alt="[ ]"/></div>
              <input type="email" placeholder='example@gmail.com' name='email' value={this.state.email} onChange={this.handleInputChange} className='register-input'/>
            </div> 
            <div style={{display: 'flex'}}>
              <div className='register-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
              <input type="password" placeholder="password" name='password' value={this.state.password} onChange={this.handleInputChange} className='register-input'/>
            </div> 
            <div to='/register/pay' onClick={this.handleSubmit.bind(this)} className='register-register' >Continue</div>
            <Link to='/'><div className='login-register'>Exit</div></Link>
          </div>
        </div>
    </div>
    );
  }
}

export default Register;