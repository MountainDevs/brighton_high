import React, { Component } from 'react';
// Components
import Title from './Shared/Title';
import CardClassmates from './Shared/CardClassmates';
// CSS
import './Classmates.css';

class ClassMates extends Component {
    render() {
        return (
            <div className="component-wrapper">
                <Title title="Help us find our classmates!"/>

                <div className="classmates-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div className="table-header-right">Found?</div>
                    </div>

                    <CardClassmates />
                    <CardClassmates />
                
                </div>
            </div>
        );
    }
}

export default ClassMates;