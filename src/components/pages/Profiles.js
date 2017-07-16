import React, { Component } from 'react';
// Components
import CardProfile from './Shared/CardProfile';
import Title from './Shared/Title';
// Images
import prof_pic from '../../assets/profile_pic.png'
// CSS
import './Profiles.css';

class Profiles extends Component {
    render() {
        return (
            <div className="component-wrapper">
                <Title title="Classmate Profiles"/>

                <div className="profiles-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div>Attending?</div>
                    </div>
                    {/* Placeholders until mapping over data and outputting Cards  */}
                    <CardProfile name="Gustav Nordstrom" imageUrl={prof_pic} attending="Yes"/>
                    <CardProfile name="Jon Myrick" imageUrl={prof_pic} attending="Yes"/>
                    <CardProfile name="Steven Nagie" imageUrl={prof_pic} attending="Yes"/>
                    <CardProfile name="Abraham Lincoln" imageUrl={prof_pic} attending="Yes"/>
                    <CardProfile />
                </div>
            </div>
        );
    }
}

export default Profiles;