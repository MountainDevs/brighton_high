import React from 'react';

import logo from '../../../assets/brighton-logo.png';

import './DetailComponent.css';

const DetailComponent = (props) => {
    return (
        <div className="details-container">
            <div className="details-left">
                <h1 className="details-left-big">Event Details</h1>
                <h3 className="details-left-medium">October 14, 2017 at 6.00 pm</h3>
                <h3 className="details-left-medium">Park City Marriott, 895 Sidewinder Dr, Park City, UT 84060</h3>
                {/* spacing */}
                <br />

                <p className="details-left-small">
                    A limited number of rooms are available for alumni at the group price of
                    $119/room. Rooms and rate are provided based upon availability, first
                    come, first serve. This offer ends on September 22. 
                </p>

                <br></br>

                <p className="details-left-small">
                  To take advantage of this stellar offer, please call the Park City Marriott at (800) 228-9290 and ask for the Brighton 30th High School Reunion Rate.
                  Alternatively, <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=BRIGHTON%2030TH%20HIGH%20SCHOOL%20REUNION%5ESLCPC%60BBBBBBA%60119.00%60USD%60false%604%6010/11/17%6010/18/17%609/22/17&app=resvlink&stop_mobi=yes">
                  follow this link 
                  </a> to book online.
                </p>

            </div>
            <div className="details-right">
                <img className="logo" src={logo} alt="Brighton Bengals"/>
            </div>
        </div>
    );
};

export default DetailComponent