import React from 'react';
import { userData, removeClassmate } from '../../../dataService';

// CSS
import './CardClassmates.css';

const CardClassmates = props => {

    return (
        <div className="class-card">
            <div className="class-card-left">
                <div className="card-left-text">{props.name}</div>
            </div>
            <div className="card-right">{props.found}</div>
            {userData.permissions === 'admin' ? (
                <div 
                    className='delete-button' 
                    onClick={removeClassmate.bind(null, props.id)}
                >
                Person Found
            </div>
            ) : null }
        </div>
    );
};

CardClassmates.defaultProps = {
    name: 'John Smith',
    found: 'N/A'
}

export default CardClassmates;