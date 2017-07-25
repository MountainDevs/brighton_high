import React, { Component } from 'react';

// Components
import NavHeader from './side_nav/NavHeader';
import NavItems from './side_nav/NavItems';
import { userData } from '../dataService.js';

// Images
import profile_pic from '../assets/profile_pic.png';

// CSS
import './SideNav.css';

class SideNav extends Component {
    render() {
        if(this.props.loggedIn){
          return (
            <div className="sidenav-wrapper">
              <NavHeader 
                  name={userData.firstName}
                  imageUrl={userData.photoOne ? "https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + userData.photoOne : profile_pic}
              />
              
              <NavItems />
            </div>
            )
        }
        else {
          return(
          <div className="sidenav-wrapper">
              <NavHeader 
                  name={"Welcome!"}
                  imageUrl={profile_pic}
              />
              
              <NavItems />
            </div>
          )
        }
        
    }
}

export default SideNav;