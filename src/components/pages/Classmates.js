import React, { Component } from 'react';
// Components
import Title from './Shared/Title';
import CardClassmates from './Shared/CardClassmates';
// Data
import { getClassmates } from '../../dataService.js';
// CSS
import './Classmates.css';

class ClassMates extends Component {
    constructor() {
        super();

        this.state = {
            classmates: []
        }
    }

    componentDidMount() {
        getClassmates().then( classmates => {
            this.setState({classmates})
        })
    }

    render() {
        let classmateList = this.state.classmates.map( classmate => {
            return (
                <CardClassmates 
                    name={`${classmate.name}`}
                    found={(classmate.found) ? "Yes" : "No" }
                    key={classmate.id}
                />
            )
        })

        return (
            <div className="component-wrapper">
                <Title title="Help us find our classmates!" message="If you have any information about someone on the list, please email Jessica@brightonhigh1987.com."/>

                <div className="classmates-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div className="table-header-right">Found?</div>
                    </div>
                    {classmateList}                
                </div>
            </div>
        );
    }
}

export default ClassMates;