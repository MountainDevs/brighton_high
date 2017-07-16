import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = props => {
    return (
        <div className="table-card">
            <div className="card-left">
                <div className="card-left-photo">
                    <img src={props.imageUrl}/>
                </div>
                <div className="card-left-text">
                    {props.name}
                </div>
            </div>
            <div className="card-right">
                <div className="card-right-text">{props.attending}</div>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default Card;


