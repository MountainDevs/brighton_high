import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router-dom';
import { sendToStripe, userData } from '../../dataService.js';

class StripeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: userData.id,
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      middleName: userData.middleName,
      redirect: false
    }
  }

  onToken = (token) => {
    token.amount = this.props.amount;
    token.chargeDescription = `-${userData.id}- ${userData.firstName} ${userData.lastName} ${this.state.email}`;
    sendToStripe(token)
      .then(response => {
        userData.stripe_token = response.data.stripeData.id;
        this.setState({
          redirect: true
        })
      })
      .catch(err => {console.log(err)});
  }

  render() {
    return this.state.redirect ? <Redirect to="/register/continue"/> : (
      <div>
         <StripeCheckout
          name={this.props.name}
          description={this.props.description}
          panelLabel="Register"
          amount={this.props.amount}
          email={this.state.email}
          currency="USD"
          stripeKey="pk_test_mjnzkL9ebrh2Zbb5vy8hzniN" 
          zipCode={false}
          allowRememberMe
          token={this.onToken}
          reconfigureOnUpdate={false}
          >
        </StripeCheckout> 
      </div>

    )
  }
}

export default StripeComponent;