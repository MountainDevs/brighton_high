import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Personal.css';

class Personal extends Component {
    render() {
        return (
            <div className='personal-bg'>
                <div className='personal-wrapper'>
                    <div className='personal-header'>Profile Information</div>
                    <div className='personal-body'>
                        <div className='personal-photo'>
                            <img src={require('./../../assets/pic.png')} alt=""/>
                            <div>Upload Photo</div>
                        </div> 
                        <div className='personal-info'>
                        <section style={{display: 'flex'}}>
                            <div>
                            <label htmlFor="" id='firstName' name='firstName'>First Name</label>
                            <input type="text"/>
                            </div>
                            <div>
                            <label htmlFor="" id='lastName' name='lastName'>Last Name</label>        
                            <input type="text"/> 
                            </div>         
                        </section>
                        <section style={{display: 'flex'}}>
                            <div>
                            <label htmlFor="" id='middleName' name='middleName'>Middle Name</label>
                            <input type="text"/>  
                            </div>
                            <div>
                            <label htmlFor="">Email Address</label>      
                            <input type="text" id='email' name='name'/> 
                            </div>  
                        </section>
                        <div className='personal-buttons'>
                            <Link to='/register'>Back</Link>
                            <Link to='/register/contact_info'>Continue</Link>
                        </div> 
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Personal;