import React from 'react';

// CSS
import './CardClassmates.css';

const CardClassmates = props => {
    return (
        <div className="class-card">
            <div className="class-card-left">
                <div className="card-left-text">{props.name}</div>
            </div>
            <div className="card-right">{props.found}</div>
        </div>
    );
};

CardClassmates.defaultProps = {
    name: 'John Smith',
    found: 'N/A'
}

export default CardClassmates;