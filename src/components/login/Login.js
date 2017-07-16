import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className='login-bg'>
                <div className='login-wrapper'>
                    <div className='login-header'>Login</div>
                    <div className='login-body'>
                        <div className='login-text'>We are excited to have you here! Login to view your classmate profiles</div>
                        <div style={{display: 'flex'}}>
                            <div className='login-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
                            <input type="email" placeholder='example@gmail.com' className='login-input'/>
                            </div> 
                        <div style={{display: 'flex'}}>
                            <div className='login-icon'><img src={require('./../../assets/mail.png')} alt="[ ]"/></div>
                            <input type="password" className='login-input'/>
                            </div> 
                        <Link to='/'><div className='login-login'>Login</div></Link>
                        <Link to='/register'><div className='login-register'>Register</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;