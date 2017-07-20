import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userData } from './../../dataService';
import './Personal.css';
import '../../styles/common.css';
import prof_pic from '../../assets/profile_pic.png'
import FileUpload from '../FileUpload/FileUpload';

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      middleName: '',
      email: userData.email || '',
      phone: '',
      photoSrc: userData.photo,
      hideUpload: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideUpload = this.hideUpload.bind(this);
  }    

  handleInputChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
     [name]: value
    });
  }

  hideUpload() {
    var newValue = !this.state.hideUpload;
    this.setState({
      hideUpload: newValue
    })
  }

  onCompleteUpload(value) {
      this.setState({
        hideUpload: value
      })
    }

  handleSubmit() {
    userData.firstName = this.state.firstName;
    userData.lastName = this.state.lastName;
    userData.middleName = this.state.middleName;
    userData.email = this.state.email;
  }
    
  render() {
    var self = this;
    return (
      <div className='personal-bg'>
        <div className={ 'personal-wrapper ' + (this.state.hideUpload ? '' : 'tall') }>
          <div className='personal-header'>Profile Information</div>
          <div className='personal-body'>
            <div className='personal-photo'>
              {
                this.state.photoSrc
                ? <img src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoSrc} alt={this.state.firstName || "No picture"}/>
                : <img src={prof_pic} alt="There should be an image here!" />
              }              
              <div onClick={this.hideUpload} className="pointer">Upload Photo</div>
              <FileUpload hideUpload={ this.state.hideUpload } onCompleteUpload={ self.onCompleteUpload.bind(self) } />
            </div> 
            <div className={'personal-info ' + (this.state.hideUpload ? '' : 'padding-left-0')}>
            <section style={{display: 'flex'}}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' name='firstName' value={this.state.firstName} onChange={this.handleInputChange}/>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>        
                <input type="text" id='lastName' name='lastName' value={this.state.lastName} onChange={this.handleInputChange}/> 
              </div>         
            </section>
            <section style={{display: 'flex'}}>
              <div>
                <label htmlFor="middleName">Middle Name</label>
                <input type="text" id='middleName' name='middleName' value={this.state.middleName} onChange={this.handleInputChange}/>  
              </div>
              <div>
                <label htmlFor="email">Email Address</label>      
                <input type="text" id='email' name='email' value={this.state.email} onChange={this.handleInputChange}/> 
              </div>  
            </section>
            <div className='personal-buttons'>
              <Link to='/register/pay'>Back</Link>
              <Link to='/register/contact_info' onClick={this.handleSubmit}>Continue</Link>
            </div> 
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;