import React, { Component } from 'react';

// Components
import NavHeader from './side_nav/NavHeader';
import NavItems from './side_nav/NavItems';

// Images
import profile_pic from '../assets/profile_pic.png';

// CSS
import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div className="sidenav-wrapper">
                <NavHeader 
                    name="Gustav"
                    imageUrl={profile_pic}
                />
                
                <NavItems />
            </div>
        );
    }
}

export default SideNav;