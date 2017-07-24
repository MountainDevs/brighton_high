import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser, logout, userData} from '../dataService';
import './Header.css';

class Header extends Component {
    render() {

        let button = null;
        if (!this.props.loggedIn && !userData.stripe_token) {
          button = <Link to="/login" className="login-button">Login Or Register</Link>;
        } else if (this.props.loggedIn && !userData.stripe_token) {
          button = <Link to="/register/pay" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>Pay</Link>
        } 
        let logOutButton = <Link to="/" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>Logout</Link>

       

        return (
            <header className="header-wrapper">
                <div className="header-title">Brighton High Class of 1987</div>
                <div className="header-login">
                    {button}
                    { this.props.loggedIn ? logOutButton : ''}
                </div>
            </header>
        );
    }
}

export default Header;