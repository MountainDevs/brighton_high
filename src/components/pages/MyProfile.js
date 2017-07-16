import React, { Component } from 'react';
// Components
import Title from './Shared/Title';
// Images
import prof_pic from '../../assets/profile_pic.png';
// CSS
import './MyProfile.css';

class MyProfile extends Component {
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
                </div>
            </div>
        );
    }
}

export default MyProfile;