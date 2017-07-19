import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        if(this.props.loggedIn) {
            getClassmates().then( classmates => {
                this.setState({classmates})
            })
        }
    }

    render() {
        let classmateList = this.state.classmates.map( classmate => {
            return !this.props.loggedIn ? <Link to='/login'>Please Login</Link> :
            (
                <CardClassmates 
                    name={`${classmate.name}`}
                    found={(classmate.found) ? "Yes" : "No" }
                    key={classmate.id}
                />
            )
        })

        return !this.props.loggedIn ? <Link to='/login'>Please Login</Link> :
            (
            <div className="component-wrapper">
                <Title title="Help us find our classmates!"/>

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