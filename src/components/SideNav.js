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
  constructor(props) {
    super(props)

    this.state = {
      name: userData.firstName,
      photoSrc: userData.photo
    }
  }
    render() {
        return (
            <div className="sidenav-wrapper">
                <NavHeader 
                    name={this.state.name || "Welcome!"}
                    imageUrl={this.state.photoSrc ? "https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + this.state.photoSrc : profile_pic}
                />
                
                <NavItems />
            </div>
        );
    }
}

export default SideNav;