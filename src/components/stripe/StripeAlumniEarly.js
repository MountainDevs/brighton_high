import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { sendToStripe, userData, checkUser, userHasPaid } from '../../dataService.js';

class StripeAlumniEarly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 9400,
      id: userData.id,
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      middleName: userData.middleName
    }
    this.userPaid = this.userPaid.bind(this);
  }

  onToken = (token) => {
    token.amount = this.state.amount;
    token.chargeDescription = `Early: ${this.state.firstName} ${this.state.middleName} ${this.state.lastName} --${this.state.id}--`;
    sendToStripe(token)
      .then(response => {
        alert("Payment successful");
        this.userPaid();
            //Catch throwing even when successful
            // .catch(alert("Payment was successful, but there was a problem registering your account. Please contact Jessica@brightonhigh1987.com"));
      });
      //Somehow both the then and catch are being thrown. Don't know what to do about that. 
      // .catch(alert("There was a problem processing your payment, please verify you have the correct information and try again"))
  }

  userPaid() {
    console.log(userData);
    if (!userData.id) {
      checkUser().then(res => {
        userHasPaid().then(res => res);
      })
    } else {
      userHasPaid().then(res => res);
    }
  }

  render() {
    return (
      <div>
        <StripeCheckout
          name="Early Registration"
          description="Alumni Only"
          panelLabel="Register"
          amount={this.state.amount}
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

export default StripeAlumniEarly;