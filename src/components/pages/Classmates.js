import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Title from './Shared/Title';
import CardClassmates from './Shared/CardClassmates';
import LoginRequest from '../login/LoginRequest';
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

    reloadClassmates() {
      console.log("happening");

      getClassmates()
        .then(res => {
          this.setState({
            classmates: res
          })
          console.log("classmates");
        })
    }

    render() {
      var self = this;
        let classmateList = this.state.classmates.map( classmate => {
            return !this.props.loggedIn ? <Link to='/login'>Please Login</Link> :
            (
              !classmate.found ?
                <CardClassmates 
                    name={`${classmate.name}`}
                    found={(classmate.found) ? "Yes" : "No" }
                    key={classmate.id}
                    reloadClassmates={self.reloadClassmates.bind(self)}
                    id={classmate.id}
                />
                : null
            )
        })

        return !this.props.loggedIn ? <LoginRequest></LoginRequest> :
            (
            <div className="component-wrapper">
                <Title title="Help us find our classmates!" subtitle="If you have any information you'd like to share, please email Jessica@BrightonHigh1987.com"/>

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