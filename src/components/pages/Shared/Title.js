import React from 'react';
// CSS
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

Title.defaultProps = {
    title: 'Remember to pass a Title prop'
}

export default Title;
