import React, { Component } from 'react';
// Components
import CardProfile from './Shared/CardProfile';
import Title from './Shared/Title';
// Data
import { getAllUsers } from '../../dataService.js';
// Images
import prof_pic from '../../assets/profile_pic.png'
// CSS
import './Profiles.css';

class Profiles extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        getAllUsers().then( users => {
            this.setState({users})
        })
    }

    render() {
        let classmateList = this.state.users.map( user => {
            return (
                <CardProfile 
                    name={user.first_name}
                    attending={ (user.attending == null) ? "N/A" : "Yes" }
                    key={user.id}
                />
            )
        })

        return (
            <div className="component-wrapper">
                <Title title="Classmate Profiles"/>

                <div className="profiles-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div>Attending?</div>
                    </div>
     
                    {classmateList}
                </div>
            </div>
        );
    }
}

export default Profiles;