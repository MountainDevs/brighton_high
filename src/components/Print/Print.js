import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getRegisteredUsers } from '../../dataService';
import '../../styles/common.css';

import Title from '../pages/Shared/Title';

class Print extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    getRegisteredUsers()
      .then(res => {

      })
  }

  handleSubmit() {
  }

  render() {
    return (
      <div className="component-wrapper">
        <Title title="You can print all registrants here" />

      </div>
    )
  }
}

export default Print;