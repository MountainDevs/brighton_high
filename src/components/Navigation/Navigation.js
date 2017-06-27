import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
                <div className="nav-container">
                    <div className="left">
                        <div className="nav-item">
                            <Link to="/">
                                <p className="nav-title">Event Info</p>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/profiles">
                                <p className="nav-title">Profiles</p>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="nav-item">
                            <Link to="/register">
                                <p className="nav-title">Register</p>
                            </Link>
                        </div>

                    </div>
                </div>
        );
    }
}

export default Navigation;