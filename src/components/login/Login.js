import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import service from './../../dataService';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
   service.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='login-bg'>
        <div className='login-wrapper'>
          <div className='login-header'>Login</div>
          <div className='login-body'>
            <div className='login-text'>We are excited to have you here! Login to view your classmate profiles</div>
            <div style={{display: 'flex'}}>
              <div className='login-icon'><img src={require('./../../assets/mail.png')} alt="[ ]"/></div>
                <input type="email" placeholder='example@gmail.com' name='email' value={this.state.email} onChange={this.handleInputChange} className='login-input'/>
              </div> 
            <div style={{display: 'flex'}}>
              <div className='login-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
                <input type="password" name='password' value={this.state.password} onChange={this.handleInputChange} className='login-input'/>
              </div> 
            <Link to='/'><div className='login-login' onClick={this.handleSubmit}>Login</div></Link>
            <Link to='/register'><div className='login-register'>Register</div></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;