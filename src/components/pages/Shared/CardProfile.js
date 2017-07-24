import React from 'react';
// Images
import prof_pic from '../../../assets/profile_pic.png';
// CSS
import './CardProfile.css';

const CardProfile = props => {
    return (
        <div className="table-card">
            <div className="card-left">
                <div className="card-left-photo">
                    <img alt='' src={props.photo ? "https://s3-us-west-2.amazonaws.com/brighton-high-1987/" + props.photo : prof_pic}/>
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

CardProfile.defaultProps = {
    name: 'John Smith',
    attending: 'N/A'
}

export default CardProfile;


