import React from 'react';
// import PropTypes from 'prop-types';
// Images
import prof_pic from '../../../assets/profile_pic.png';
// CSS
import './CardProfile.css';

const CardProfile = props => {
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

CardProfile.defaultProps = {
    name: 'John Doe',
    imageUrl: prof_pic,
    attending: 'N/A'
}

// CardProfile.propTypes = {
//     name: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     attending: PropTypes.string.isRequired
// };

export default CardProfile;


