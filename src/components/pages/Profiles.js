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
    // componentWillUpdate() {
    //     if(this.props.loggedIn && this.state.users.length === 0) {
    //         getDisplayingUsers().then( users => {
    //             this.setState({users})
    //         })
    //     }
    // }

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

        return !this.props.loggedIn ? <LoginRequest></LoginRequest> :
            this.state.users.length === 0 ? <img src="https://media.giphy.com/media/11fxhMPSRtnbTa/giphy.gif" alt=""/> :
            (
            // <div className="component-wrapper">
            //     <Title title="Classmate Profiles"/>

            //     <div className="profiles-table">
            //         <div className="table-header">
            //             <div>Name</div>
            //             <div>Attending?</div>
            //         </div>
     
            //         {profileList}
            //     </div>
            // </div>
            <div className="login-request">
                <div className="login-request-container">
                <p>Coming by August 10!</p>
                </div>
            </div>
        );
    }
}

export default Profiles;