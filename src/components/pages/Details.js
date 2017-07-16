import React, { Component } from 'react';

import bengal_logo from '../../assets/brighton-logo.png';

import './Details.css';

class Details extends Component {
    render() {
        return (
            <div className="details-wrapper">
                 <div className="details-top">
                     <div className="details-top-title">
                        Event Details
                     </div>
                </div> 

                <div className="details-date-bar">
                    <div className="details-date-bar-title">
                        October 14, 2017 at 6.00 pm
                    </div>
                </div>

                <div className="details-content-wrapper">
                    <div className="details-content">
                        <h3>Park City Marriott, 895 Sidewinder Dr, Park City, UT 84060</h3>

                        <br />

                        <p className="details-left-small">
                            A limited number of rooms are available for alumni at the group price of
                            $119/room. Rooms and rate are provided based upon availability, first
                            come, first serve. This offer ends on September 22. 
                        </p>

                        <br />

                        <p>
                            To take advantage of this stellar offer, please call the Park City Marriott at (800) 228-9290 and ask for the Brighton 30th High School Reunion Rate.
                        </p>

                        <br />
                        
                        <p>    
                        Alternatively, <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=BRIGHTON%2030TH%20HIGH%20SCHOOL%20REUNION%5ESLCPC%60BBBBBBA%60119.00%60USD%60false%604%6010/11/17%6010/18/17%609/22/17&app=resvlink&stop_mobi=yes">
                            follow this link</a> to book online.
                        </p>
                    </div>

                    <div className="details-logo">
                        <img src={bengal_logo} className="bengal-logo"alt="Brighton High Bengals"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Details;