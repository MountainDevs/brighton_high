import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser, logout} from '../dataService';
import './Header.css';

class Header extends Component {
    render() {

        let button = this.props.loggedIn ? <Link to="/" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>Logout</Link> : <Link to="/login" className="login-button">Login</Link>;

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