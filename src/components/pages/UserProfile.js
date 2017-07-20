import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import Title from './Shared/Title';
// Data
import { getUser, userData } from '../../dataService.js';
// Images
import prof_pic from '../../assets/profile_pic.png';
// CSS
import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        if(this.props.loggedIn) {
            getUser(this.props.match.params.id).then( user => this.setState({user}))
        }
     }

    render() {
        return (
            <div className="component-wrapper">
                <Title title="Profile Page"/>

                <div className="profilepage-wrapper">

                    <div className="pcard pflex">
                        <div className="pcard-top">
                            <div className="pcard-top-left">
                                <div className="pcard-top-left-imgwrap">
                                    <img src={this.state.user.photo ? "https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.user.photo : prof_pic}/>
                                </div>
                            </div>
                            <div className="pcard-top-right">
                                <div className="pcard-top-right-name">{`${this.state.user.first_name|| ''} ${this.state.user.last_name || ''}`}</div>
                                <hr />
                                <div className="pcard-top-right-content">
                                    <h3>Contact info</h3>
                                    <p>Email: {this.state.user.email || "N/A"}</p>
                                    <p>Phone: {this.state.user.phone || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">About</div>
                            <div className="pcard-about-content">
                              {this.state.user.bio ? this.state.user.bio : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>

                    {/* <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">More Stuff</div>
                            <div className="pcard-about-content">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        );
    }
}

export default UserProfile;