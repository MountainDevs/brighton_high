import React from 'react';
import PropTypes from 'prop-types';

import './NavHeader.css';

const NavHeader = props => {
    return (
        <div className="navheader-wrapper">
            <div className="navheader-image-wrapper">
                <img className="navheader-image" src={props.imageUrl} alt="Profile"/>
            </div>
            <div className="navheader-name">{props.name}</div>
        </div>
    );
};

NavHeader.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default NavHeader;