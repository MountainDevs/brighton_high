import React from 'react';

import logo from '../../../assets/brighton-logo.png';

import './DetailComponent.css';

const DetailComponent = (props) => {
    return (
        <div className="details-container">
            <div className="details-left">
                <p className="details-left-big">Event Details</p>
                <p className="details-left-medium">October 14, 2017 at 6.00 pm</p>
                <p className="details-left-medium">895 Sidewinder Dr, Park City, UT 84060</p>
                {/* spacing */}
                <br />

                <p className="details-left-small">
                    A limited number of rooms are available for alumni at the group price of
                    $119/room. Rooms and rate are provided based upon availability, first
                    come, first serve.
                </p>

            </div>
            <div className="details-right">
                <img className="logo" src={logo} alt="Brighton Bengals"/>
            </div>
        </div>
    );
};

export default DetailComponent