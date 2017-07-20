import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from './../../dataService';
import './Login.css';
import './LoginRequest.css';

class LoginRequest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='login-request'>
        <div className="login-request-container">
          <p>It looks like you aren't logged in. 
        <Link to='/login'> Please Login</Link> </p>
        </div>
      </div>
    )
  }
}

export default LoginRequest;