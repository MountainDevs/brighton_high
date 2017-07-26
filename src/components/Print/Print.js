import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getRegisteredUsers } from '../../dataService';
import '../../styles/common.css';
import '../pages/Classmates.css';

import Title from '../pages/Shared/Title';

class Print extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registrants: []
    }
  }

  componentWillMount() {
    getRegisteredUsers()
      .then(registrants => {
        this.setState({registrants})
      })
  }

  handleSubmit() {
  }

  render() {
    let registrantList = this.state.registrants.map( registrant => {
      return (
        <div>
          <p>{ registrant.first_name || '' } { registrant.last_name || ''}</p>
        </div>

      )
    });

    return (
      <div className="component-wrapper">
        <Title title="You can print all registrants here" />

        <div className="classmates-table">
            <div className="table-header">
                <div>Name</div>
            </div>
            {registrantList}                
        </div>
      </div>
    )
  }
}

export default Print;