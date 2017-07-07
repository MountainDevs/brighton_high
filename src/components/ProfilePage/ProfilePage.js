import React, { Component } from 'react';
import FileUpload from './FileUpload';

class ProfilePage extends Component {
    render() {
        return (
            <div style={{'color': 'white', 'margin': '20px', 'font-size': '20px'}}>
                Classmate Profiles will be Available July 15, 2017
            <FileUpload></FileUpload>
            </div>
        );
    }
}

export default ProfilePage;