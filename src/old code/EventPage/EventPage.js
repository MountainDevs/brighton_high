import React, { Component } from 'react';

import DetailComponent from './DetailComponent/DetailComponent';

import './EventPage.css';

class EventPage extends Component {
    render() {
        return (
            <div>
                <div className="event-top">
                    <h3 className="title-small">Brighton High School</h3>
                    <h1 className="title-large">Class of 1987</h1>
                    <h3 className="title-small">30-Year Reunion</h3>
                </div>

                <DetailComponent />
            </div>
        );
    }
}

export default EventPage;