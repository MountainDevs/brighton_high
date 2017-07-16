import React from 'react';

import './Title.css';

const Title = props => {
    return (
        <div className="title-top">
                <div className="title-top-title">
                    {props.title}
                </div>
        </div> 
    );
};

export default Title;
