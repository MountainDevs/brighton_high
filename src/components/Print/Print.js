import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getRegisteredUsers, parseRegistrants, printRegistrants } from '../../dataService';
import '../../styles/common.css';
import '../pages/Classmates.css';
import './Print.css';

import Title from '../pages/Shared/Title';

class Print extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registrants: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    getRegisteredUsers()
      .then(registrants => {
        this.setState({registrants})
      })
  }

  handleSubmit() {
    var csvString = parseRegistrants(this.state.registrants);
    // printRegistrants(csvString)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     alert("There was an error, please try again");
    //   })
    printRegistrants(csvString);
  }

  render() {
    let registrantList = this.state.registrants.map( (registrant, i) => {
      return (
        <div key={i}>
          <p>{ registrant.first_name || '' } { registrant.last_name || ''}</p>
        </div>

      )
    });

    return (
      <div className="component-wrapper">
        {/* <Title title="You can print all registrants here"/> */}

        <div className="title-top">
                <div className="title-top-title">
                  Click here to print out a list of all registrants
                </div>
                <div className="title-top-subtitle">
                  <div className="print-button" onClick={this.handleSubmit}>Print</div>
                </div>
        </div> 

        <div className="classmates-table">
            <div className="table-header">
                <div>Name</div>
            </div>
            <div className="print-table-content">
              {registrantList}                
            </div>
        </div>
      </div>
    )
  }
}

export default Print;