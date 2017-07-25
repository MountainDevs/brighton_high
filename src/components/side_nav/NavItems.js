import React from 'react';

import { NavLink } from 'react-router-dom';
import { userData } from '../../dataService.js';
import '../../styles/common.css';

import './NavItems.css';

const NavItems = () => {
    return (
        <div className="navitems-wrapper">
            <div className="navitems-list">
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className="navitems-link" 
                            activeClassName="navitems-link-selected" 
                            exact>
                                Event Details
                        </NavLink>
                    </li>
                    <li className={ userData.stripe_token ? '' : 'hidden' }>
                        <NavLink 
                            to="/profiles" 
                            className="navitems-link" 
                            activeClassName="navitems-link-selected" 
                            exact>
                                Classmate Profiles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/classmates" 
                            className="navitems-link" 
                            activeClassName="navitems-link-selected" 
                            exact>
                                Find our Classmates
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className="navitems-link" 
                            activeClassName="navitems-link-selected" 
                            exact>
                                Contact
                        </NavLink>
                    </li>
                    {/* <li className={ userData.stripe_token ? '' : 'hidden' }>
                        <NavLink 
                            to="/my_profile" 
                            className="navitems-link" 
                            activeClassName="navitems-link-selected" 
                            exact>
                                My Profile
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default NavItems;