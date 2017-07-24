import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { sendToStripe, userData } from '../../dataService.js';

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

  componentWillMount() {
    // login(this.state.email, this.state.password).then(data => {
    // });
    // this.setState({
    //   id: userData.id,
    //   email: userData.email,
    //   password: userData.password,
    //   firstName: userData.firstName,
    //   lastName: userData.lastName,
    //   middleName: userData.middleName
    // });

    // checkUser().then(data => {
    //   this.setState({
    //     id: userData.id,
    //     email: userData.email,
    //     password: userData.password,
    //     firstName: userData.firstName,
    //     lastName: userData.lastName,
    //     middleName: userData.middleName
    //   });
    // })
    // .catch(err => {
    //   console.log("Error checking data");
    // });
  }

  onToken = (token) => {
    token.amount = this.state.amount;
    console.log("On token state: ", this.state);
    console.log("On token data: ", userData);
    token.chargeDescription = `${this.state.email}`;
    sendToStripe(token)
      .then(response => {
        alert("Payment successful");
        console.log(response.data);
        this.userPaid(response.data.stripeData.id);
            //Catch throwing even when successful
            // .catch(alert("Payment was successful, but there was a problem registering your account. Please contact Jessica@brightonhigh1987.com"));
      })
      .catch(err => {console.log(err)});
      //Somehow both the then and catch are being thrown. Don't know what to do about that. 
      // .catch(alert("There was a problem processing your payment, please verify you have the correct information and try again"))
  }

  userPaid(value) {
    userData.stripe_token = value;
    console.log("value of return: ", value);
    console.log("user paid userDAta: ", userData);
    this.setState({
        id: userData.id,
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        middleName: userData.middleName
      }); 
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