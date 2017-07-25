import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData} from '../dataService';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header-wrapper">
                <div className="header-title">Brighton High Class of 1987</div>
                <div className="header-login">

                    {!this.props.loggedIn ? (
                        <Link to="/login" className="login-button">
                            Login/Register
                        </Link>
                    ) : null}

                    {this.props.loggedIn && !userData.stripe_token ? (
                        <div>
                            <Link to="/register/pay" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>
                                Pay
                            </Link>
                            <Link to="/" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>
                                Logout
                            </Link>
                        </div>
                    ): null }

                    {this.props.loggedIn && userData.stripe_token ? (
                        <Link to="/" className="login-button" onClick={this.props.switchLogin.bind(null, false)}>
                            Logout
                        </Link>
                    ) : null}
                    
                </div>
            </header>
        );
    }
}

export default Header;