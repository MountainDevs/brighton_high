import React, { Component } from 'react';
import axios from 'axios';

class AlumniPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      admin: false,
      alumni: []
    }
  }

  componentWillMount() {
    console.log("getting");
    this.getAlumni();
    this.getCurrentUser();
  }

  getCurrentUser() {
    axios.get('/api/admin')
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          this.setState({ admin: true });
        }
      })
      .catch(err => {
        this.setState({ admin: false });
      })
  }

  getAlumni() {
    axios.get('/api/alumni/lost')
      .then(response => {
        this.setState({ alumni: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

    render() {
        return (
            <div style={{'color': 'white', 'margin': '20px', 'fontSize': '20px'}}>
              {this.state.alumni.map(alum => {
                return (
                  <div key={alum.id}>
                    <h2>{alum.name}</h2>
                  </div>
                );
              })} 
            </div>
        );
    }
}

export default AlumniPage;