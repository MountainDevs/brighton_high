import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Data
import { userData } from '../../../dataService';
// CSS
import './AboutForm.css';

class AboutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        bio: userData.bio,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        userData.bio = this.state.bio;
    }
    
    render() {
        return (
            <div className='aboutForm-wrapper'>
                <div className='additional-header'>Additional Information</div>
                <div className='additional-body'>
                    <p>Please provide any additional information you feel could be interesting to your classmates. Fore example, where you've been and what you've been up to. Family news, your career, etc</p>
                    <textarea id="bio" name='bio' cols="30" rows="10" value={this.state.bio} onChange={this.handleInputChange}></textarea>
                    <div className='additional-buttons'>
                    <Link to='/register/contact_info'>Back</Link>
                    <Link to='/register/pay' onClick={this.handleSubmit}>Continue</Link>
                    </div> 
                </div>
            </div>
        );
    }
}

export default AboutForm;