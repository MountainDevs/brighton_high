import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header-wrapper">
                <div className="header-title">Brighton High Class of 1987</div>
                <div className="header-login">
                    <Link to="/login" className="login-button">Login/Logout</Link>
                </div>
            </header>
        );
    }
}

export default Header;