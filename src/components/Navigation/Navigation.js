import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/profiles"><li>Profiles</li></Link>
                    <Link to="/register"><li>Register</li></Link>
                </ul>
            </nav>
        );
    }
}

export default Navigation;