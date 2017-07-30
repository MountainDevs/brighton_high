import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import Title from './Shared/Title';
// Data
import { getUser } from '../../dataService.js';
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
                                    <img alt='' src={this.state.user.photo_one ? "https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.user.photo_one : prof_pic}/>
                                </div>
                            </div>
                            <div className="pcard-top-right">
                                <div className="pcard-top-right-name">{`${this.state.user.first_name|| ''} ${this.state.user.last_name || ''}`}</div>
                                <hr />
                                <div className="pcard-top-right-content">
                                    <h3>Contact info</h3>
                                    <p>Email: {this.state.user.email || "N/A"}</p>
                                    <p>Phone: {this.state.user.phone || 'N/A'}</p>
                                    <p>Facebook Profile: <a href={this.state.user.facebook_page}>{this.state.user.facebook_page || 'N/A'}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Photos</div>
                            <div className="pcard-about-content">
                              {
                                    this.state.photoTwo
                                    ? <img src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.user.photo_two} alt={this.state.user.first_name || ""}/>
                                    : <div className="photo-img1">Photo 2</div>
                                }
                                {
                                    this.state.photo_three
                                    ? <img src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photo_three} alt={this.state.first_name || ""}/>
                                    : <div className="photo-img1">Photo 3</div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Where have you lived since graduation?</div>
                            <div className="pcard-about-content">
                              {this.state.user.past_residence ? this.state.user.past_residence : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                 
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Tell us about your family - Married?  If so, where did you meet your spouse?  Children?  If so, how many?  Ages?  Grandchildren?!!!  Brag about your children if you would like, but don’t tell us about your woes, we already know about those because we have them too!</div>
                            <div className="pcard-about-content">
                              {this.state.user.family ? this.state.user.family : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Did you serve in the military?  What branch?  How many years of service?</div>
                            <div className="pcard-about-content">
                              {this.state.user.millitary_service ? this.state.user.millitary_service : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Current occupation? Tell us about your career to get to where you are today.</div>
                            <div className="pcard-about-content">
                              {this.state.user.occupation ? this.state.user.occupation : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">After Brighton, did you attend college?  Where?</div>
                            <div className="pcard-about-content">
                              {this.state.user.college ? this.state.user.college : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Great accomplishments or have you been honored for anything (it’s OK to brag just this once!)?</div>
                            <div className="pcard-about-content">
                              {this.state.user.honors ? this.state.user.honors : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">What is your favorite hobby today?</div>
                            <div className="pcard-about-content">
                              {this.state.user.hobbies ? this.state.user.hobbies : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Where is the best place you have traveled to?</div>
                            <div className="pcard-about-content">
                              {this.state.user.travel ? this.state.user.travel : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">What is your best high school memory?</div>
                            <div className="pcard-about-content">
                              {this.state.user.best_memory ? this.state.user.best_memory : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">What is your worst high school memory?</div>
                            <div className="pcard-about-content">
                              {this.state.user.worst_memory ? this.state.user.worst_memory : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">What was the dumbest or most embarrassing thing you did in high school (would you be put in jail for it today?)?</div>
                            <div className="pcard-about-content">
                              {this.state.user.dumb ? this.state.user.dumb : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Who were you secret high school crushes?</div>
                            <div className="pcard-about-content">
                              {this.state.user.crushes ? this.state.user.crushes : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">According to the calendar, we are aging (note this is our 30-year reunion), what changes have you noticed (it’s OK to be honest, but maybe not too honest!)?</div>
                            <div className="pcard-about-content">
                              {this.state.user.changes ? this.state.user.changes : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Now that retirement is within sight (ouch!), what are your plans?</div>
                            <div className="pcard-about-content">
                              {this.state.user.retirement ? this.state.user.retirement : "This person hasn't filled out any information yet."}
                            </div>
                        </div>
                    </div>
                    <div className="pcard">
                        <div className="pcard-about">
                            <div className="pcard-about-title">Where do you see yourself 10 years from now (this question may haunt you at the next reunion!)?</div>
                            <div className="pcard-about-content">
                              {this.state.user.ten_years ? this.state.user.ten_years : "This person hasn't filled out any information yet."}
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