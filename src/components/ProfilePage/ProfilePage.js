import React, { Component } from 'react';
import FileUpload from './FileUpload';
import axios from 'axios';

class ProfilePage extends Component {
    constructor(props) {
      super(props)

      this.state = {
        first_name: "steven",
        last_name: "",
        username: "",
        password: "",
        phone: "",
        facebook: "",
        about: "",
        past_residence: "",
        occupation: "",
        spouse_first: "",
        spouse_last: "",
        children: "",
        memories: "",
        users: [],
        currentUser: {}
      }

      this.createUser = this.createUser.bind(this);
    }

    componentWillMount() {
      this.getAllUsers();
      this.getCurrentUser();
    }

    getCurrentUser() {

    }

    getAllUsers() {
      axios.get('/api/users')
        .then(res => {
          this.setState({ users: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }

    createUser() {
      // let user = {
      //   first_name: this.state.first_name,
      //   last_name: this.state.last_name,
      //   username: this.state.username,
      //   password: this.state.password,
      //   phone: this.state.phone,
      //   facebook: this.state.facebook,
      //   about: this.state.about,
      //   past_residence: this.state.past_residence,
      //   occupation: this.state.occupation,
      //   spouse_first: this.state.spouse_first,
      //   spouse_last: this.state.spouse_last,
      //   children: this.state.children,
      //   memories: this.state.memories
      // }
      // axios.post('http://localhost:8080/api/users', user)
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }

    handleChange(name, event) {
      const target = event.target;
      const value = target.value;

      this.setState({[name]:  value });
    }

    render() {
        return (
          <div style={{'color': 'white', 'margin': '20px', 'font-size': '20px'}}>
                Alumni profiles available August 1st.
            </div>
            // <div style={{'color': 'white', 'margin': '20px', 'font-size': '20px'}}>
            //   <input type="text" placeholder="first" onChange={ this.handleChange.bind(this, "first_name") } value={this.state.first_name}/>                
            //   <input type="text" placeholder="last" onChange={ this.handleChange.bind(this, "last_name") } value={this.state.last_name}/>                
            //   <input type="text" placeholder="username" onChange={ this.handleChange.bind(this, "username") } value={this.state.username}/>                
            //   <input type="text" placeholder="password" onChange={ this.handleChange.bind(this, "password") } value={this.state.password}/>                
            //   <input type="text" placeholder="phone" onChange={ this.handleChange.bind(this, "phone") } value={this.state.phone}/>                
            //   <input type="text" placeholder="facebook" onChange={ this.handleChange.bind(this, "facebook") } value={this.state.facebook}/>                
            //   <input type="text" placeholder="about" onChange={ this.handleChange.bind(this, "about") } value={this.state.about}/>                
            //   <input type="text" placeholder="past residence" onChange={ this.handleChange.bind(this, "past_residence") } value={this.state.past_residence}/>                
            //   <input type="text" placeholder="occupation" onChange={ this.handleChange.bind(this, "occupation") } value={this.state.occupation}/>                
            //   <input type="text" placeholder="spouse first" onChange={ this.handleChange.bind(this, "spouse_first") } value={this.state.spouse_first}/>                
            //   <input type="text" placeholder="spouse last" onChange={ this.handleChange.bind(this, "spouse_last") } value={this.state.spouse_last}/>                
            //   <input type="text" placeholder="children" onChange={ this.handleChange.bind(this, "children") } value={this.state.children}/>                
            //   <input type="text" placeholder="memories" onChange={ this.handleChange.bind(this, "memories") } value={this.state.memories}/>                
            //   {this.state.users.map(user => {
            //     return (
            //       <div key={user.id}>
            //         <h2>{user.first_name + ' ' + user.last_name}</h2>
            //       </div>
            //     ); 
            //   })}
            //   <FileUpload user={this.state.currentUser}></FileUpload>
            //   <button type="button" onClick={this.createUser}>Big old button</button>
              // {/* TODO: This is the format for user photos, where everything after brighton-high-1987, which is the bucket name, is the name and extension of the photo in the question */}
              // {/* <img alt="nothing" src="https://s3-us-west-2.amazonaws.com/brighton-high-1987/withJpegExtension.jpeg" /> */}
            // </div>
        );
    }
}

export default ProfilePage;