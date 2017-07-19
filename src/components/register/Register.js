import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
    render() {
        return (
             <div className='register-bg'>
                <div className='register-wrapper'>
                    <div className='register-header'>Register</div>
                    <div className='register-body'>
                        <div className='register-text'>Enter a valid email address and create a password to get started!</div>
                        <div style={{display: 'flex'}}>
                            <div className='register-icon'><img src={require('./../../assets/mail.png')} alt="[ ]"/></div>
                            <input type="email" placeholder='example@gmail.com' className='register-input'/>
                            </div> 
                        <div style={{display: 'flex'}}>
                            <div className='register-icon'><img src={require('./../../assets/key.png')} alt="[ ]"/></div>
                            <input type="password" className='register-input'/>
                            </div> 
                        <Link to='/register/personal'><div className='register-register'>Continue</div></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;