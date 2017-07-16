import React, { Component } from 'react';
// Components
import Card from './Shared/Card';
import Title from './Shared/Title';
// Images
import prof_pic from '../../assets/profile_pic.png'
// CSS
import './Profiles.css';

class Profiles extends Component {
    render() {
        return (
            <div className="profiles-wrapper">
                <Title title="Classmate Profiles"/>

                <div className="profiles-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div>Attending?</div>
                    </div>
                    {/* Placeholders until mapping over data and outputting Cards  */}
                    <Card name="Gustav Nordstrom" imageUrl={prof_pic} attending="Yes"/>
                    <Card name="Jon Myrick" imageUrl={prof_pic} attending="Yes"/>
                    <Card name="Steven Nagie" imageUrl={prof_pic} attending="Yes"/>
                    <Card name="Abraham Lincoln" imageUrl={prof_pic} attending="Yes"/>
                </div>
            </div>
        );
    }
}

export default Profiles;