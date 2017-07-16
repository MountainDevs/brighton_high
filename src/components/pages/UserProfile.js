import React, { Component } from 'react';
// Components
import Title from './Shared/Title';
// Images
import prof_pic from '../../assets/profile_pic.png';
// CSS
import './UserProfile.css';

class UserProfile extends Component {
    render() {
        return (
            <div className="component-wrapper">
                <Title title="Profile Page"/>

                <div className="profilepage-wrapper">

                    <div className="pcard pflex">
                        <div className="pcard-top">
                            <div className="pcard-top-left">
                                <div className="pcard-top-left-imgwrap">
                                    <img src={prof_pic}/>
                                </div>
                            </div>
                            <div className="pcard-top-right">
                                <div className="pcard-top-right-name">John Smith</div>
                                <hr />
                                <div className="pcard-top-right-content">
                                    <h3>Contact info goes here</h3>
                                    <p>Email: test@gmail.com</p>
                                    <p>Phone: 111-111-1111</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">About</div>
                            <div className="pcard-about-content">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div>

                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">More Stuff</div>
                            <div className="pcard-about-content">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UserProfile;