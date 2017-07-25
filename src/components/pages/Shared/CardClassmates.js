import React, { Component } from 'react';
import { userData, removeClassmate } from '../../../dataService';

// CSS
import './CardClassmates.css';

class CardClassmates extends Component {
  constructor(props) {
    super(props);

  }

  removeClassmateComponent(id) {
    removeClassmate(id)
      .then(res => {
        this.props.reloadClassmates();
      });
  }

    render() {
    return (
        <div className="class-card">
            <div className="class-card-left">
                <div className="card-left-text">{this.props.name}</div>
            </div>
            <div className="card-right">{this.props.found}</div>
            {userData.permissions === 'admin' ? (
                <div 
                    className='delete-button' 
                    onClick={this.removeClassmateComponent.bind(this, this.props.id)}
                >
                Person Found
            </div>
            ) : null }
        </div>
    );
};

}

export default CardClassmates;