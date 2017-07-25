import React, { Component } from 'react';
// Data
import { userData, updateUser } from '../../../dataService';
// CSS
import './AboutForm.css';
import '../../../styles/common.css';

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
        updateUser().then(res => {
          alert("Saved successfully");
        })
        .catch(err => {
          alert("There's been a problem, please try again");
        });
    }
    
    render() {
        return (
            <div className='aboutForm-wrapper'>
                <div className='additional-header'>Additional Information</div>
                <div className='additional-body'>
                    <p>Please provide any additional information you feel could be interesting to your classmates. Fore example, where you've been and what you've been up to. Family news, your career, etc</p>
                    <textarea id="bio" name='bio' cols="30" rows="10" value={this.state.bio} onChange={this.handleInputChange}></textarea>
                    <div className='button-container'>
                      <button type="button" className="blue-button" onClick={this.handleSubmit}>Save</button>
                    </div> 
                </div>
            </div>
        );
    }
}

export default AboutForm;