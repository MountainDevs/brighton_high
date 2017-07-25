import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData} from '../dataService';
import './Header.css';

class Header extends Component {
    render() {
        const styles = this.styles()
        return (
            <header className="header-wrapper">
                <div className="header-title">Brighton High Class of 1987</div>
                <div className="header-login">

                    {!this.props.loggedIn ? (
                        <Link 
                            to="/login" 
                            style={styles.button}
                            >
                            Login / Register
                        </Link>
                    ) : null}

                    {this.props.loggedIn && !userData.stripe_token ? (
                        <div>
                            <Link 
                                to="/register/pay"
                                onClick={this.props.switchLogin.bind(null, false)}
                                style={styles.button}
                            >
                                Pay
                            </Link>
                            <Link 
                                to="/"
                                onClick={this.props.switchLogin.bind(null, false)}
                                style={styles.button}
                            >
                                Logout
                            </Link>
                        </div>
                    ): null }

                    {this.props.loggedIn && userData.stripe_token ? (
                        <Link
                            to="/" 
                            className="login-button" 
                            onClick={this.props.switchLogin.bind(null, false)}
                            style={styles.button}
                        >
                            Logout
                        </Link>
                    ) : null}
                    
                </div>
            </header>
        );
    }
    styles () {
        return {
            button: {
                border: 'none',
                borderRadius: 3,
                color: '#ffffff',
                textAlign: 'center',
                width: 75,
                background: '#537187',
                cursor: 'pointer',
                fontSize: 12,
                marginLeft: 20,
                padding: 13,
            }
        }
    }
}

export default Header;