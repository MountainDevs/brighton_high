import React, { Component } from 'react';

import NavHeader from './side_nav/NavHeader';
import NavItems from './side_nav/NavItems';

import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div className="sidenav-wrapper">
                <NavHeader />
                
                <NavItems />
            </div>
        );
    }
}

export default SideNav;