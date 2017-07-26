import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import CardProfile from './Shared/CardProfile';
import Title from './Shared/Title';
import LoginRequest from '../login/LoginRequest';
// Data
import { getDisplayingUsers } from '../../dataService.js';
// Images

// CSS
import './Profiles.css';

import '../login/Login.css';
import '../login/LoginRequest.css';

class Profiles extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        if(this.props.loggedIn) {
            getDisplayingUsers().then( users => {
                this.setState({users})
            })
        }
    }

    render() {
        let profileList = this.state.users.map( user => {
            return (
                <Link to={`/user/${user.id}`} key={user.id}>
                    <CardProfile 
                        name={`${user.first_name} ${user.last_name}`}
                        attending={ (user.attending == null) ? "N/A" : "Yes" }
                        photo = { user.photo_one ? user.photo_one : null }
                    />
                </Link>
            )
        })

            
          return (
            <div className="login-request">
                <div className="login-request-container">
                <p>Coming by August 10!</p>
                </div>
            </div>
        );
    }
}

export default Profiles;