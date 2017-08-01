import React, { Component } from 'react';
// Data
import { userData, updateUser } from '../../../dataService';
// Images
import prof_pic from '../../../assets/profile_pic.png';
// CSS
import './TopInfo.css';
import '../../../styles/common.css';
import FileUpload from '../../FileUpload/FileUpload';

class TopInfo extends Component {
    constructor(props) {
        super(props);
        console.log(userData);
        this.state = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            middleName: userData.middleName,
            email: userData.email,
            photoSrc: userData.photoOne,
            hideUpload: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideUpload = this.hideUpload.bind(this);
    }   
      
    hideUpload() {
      var newValue = !this.state.hideUpload;
      this.setState({
        hideUpload: newValue
      })
    }

    onCompleteUpload(value) {
      this.setState({
        hideUpload: value,
        photoSrc: userData.photoOne
      })
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name;
        this.setState({
        [name]: value
        });
    }

    handleSubmit() {
        userData.firstName = this.state.firstName;
        userData.lastName = this.state.lastName;
        userData.middleName = this.state.middleName;
        userData.email = this.state.email;
        updateUser().then(res => {
          alert("Saved successfully");
        })
        .catch(err => {
          alert("There's been a problem, please try again");
        });
    }
    
    render() {
      var self = this;
        return (
            <div className={ 'topInfo-wrapper ' + (this.state.hideUpload ? '' : 'tall') }>
                <div className='personal-header'>PROFILE</div>
                <div className='personal-body'>
                <div className='personal-photo'>
                    {
                      this.state.photoSrc
                      ? <img src={"https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoSrc} alt={this.state.firstName || ""}/>
                     : <img src={prof_pic} alt="" />
                    }
                    <div onClick={this.hideUpload} className="pointer">Upload Photo</div>
                    <FileUpload hideUpload={ this.state.hideUpload } photoType="photoOne" onCompleteUpload={ self.onCompleteUpload.bind(self) }/>
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
                <div className='button-container'>
                    <button type="button" className="blue-button" onClick={this.handleSubmit}>Save</button>
                </div> 
                </div> 
                </div>
            </div>
        );
    }
}

export default TopInfo;