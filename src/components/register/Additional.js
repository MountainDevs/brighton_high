import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData } from './../../dataService';
import './Additional.css';

class Additional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
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
      <div className='additional-bg'>
        <div className='additional-wrapper'>
          <div className='additional-header'>Additional Information</div>
          <div className='additional-body'>
            <p>Here will be some sort of Bio. Tell us where you have been and what you have been up to</p>
            <textarea id="bio" name='bio' cols="30" rows="10" value={this.state.bio} onChange={this.handleInputChange}></textarea>
            <div className='additional-buttons'>
              <Link to='/register/contact_info'>Back</Link>
              <Link to='/register/pay' onClick={this.handleSubmit}>Continue</Link>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Additional;