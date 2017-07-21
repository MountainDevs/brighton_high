import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser, logout, userData} from '../dataService';
import './Header.css';

class Header extends Component {
    render() {

        let button = null;
        if (this.props.loggedIn && userData.paid) {
          button = <Link to="/" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>Logout</Link>
        } else if (this.props.loggedIn && !userData.paid) {
          button = <Link to="/register/pay" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>Pay</Link>
        } else {
          button =  <Link to="/login" className="login-button">Login</Link>;
        }

        return (
            <header className="header-wrapper">
                <div className="header-title">Brighton High Class of 1987</div>
                <div className="header-login">
                    {button}
                </div>
            </header>
        );
    }
}

export default Header;