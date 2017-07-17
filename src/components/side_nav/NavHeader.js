import React from 'react';
import { Link } from 'react-router-dom';
// Images
import prof_pic from '../../assets/profile_pic.png';
// CSS
import './NavHeader.css';

const NavHeader = props => {
    return (
        <div className="navheader-wrapper">
            <Link to="/user/1">
                <div className="navheader-content">
                    <div className="navheader-image-wrapper">
                        <img className="navheader-image" src={props.imageUrl} alt="Profile"/>
                    </div>
                    <div className="navheader-name">{props.name}</div>
                </div>
            </Link>
        </div>
    );
};

NavHeader.defaultProps = {
    name: 'John Smith',
    imageUrl: prof_pic
}

export default NavHeader;