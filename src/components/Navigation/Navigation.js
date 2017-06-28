import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
                <div className="nav-container">
                    <div className="left">
                        <Link to="/">
                            <div className="nav-item">
                                    <p className="nav-title">Event Info</p>
                            </div>
                        </Link>
                        <Link to="/profiles">
                            <div className="nav-item">
                                    <p className="nav-title">Profiles</p>
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="/register">
                            <div className="nav-item">
                                    <p className="nav-title">Register</p>
                            </div>
                        </Link>

                    </div>
                </div>
        );
    }
}

export default Navigation;