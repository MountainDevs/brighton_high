import React, { Component } from 'react';
// Components
import Title from './Shared/Title';

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
                        <div>Found?</div>
                    </div>
                
                </div>
            </div>
        );
    }
}

export default ClassMates;