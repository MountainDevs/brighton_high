import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header-wrapper">
                <div className="header-title">Brighton High Class of 1987</div>
                <div className="header-login">Login Button</div>
            </header>
        );
    }
}

export default Header;