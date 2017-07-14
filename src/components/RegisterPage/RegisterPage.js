import React, { Component } from 'react';

import logo from '../../assets/brighton-logo.png';

import '../EventPage/DetailComponent/DetailComponent.css';
import '../../styles/common.css';

class RegisterPage extends Component {
    render() {
        return (
            <div className="details-container">
              <div className="details-left">
                <h1 className="details-left-big">Registration:</h1>
                <h3 className="details-left-medium">Early registration avaible until August 1 - $94 for alumni and $63 for spouses.</h3>
                <h3 className="details-left-medium">Registration is $104 after August 1st, and $120 the day of the event (October 14).</h3>
                {/* spacing */}
                <br />

                <h5>Why so expensive?</h5>

                <p className="details-left-small">
                    The venue charges $47.65 for a meal, plus a 22% service charge + 9.45% sales tax. 
                    Thus, the meal alone is $63.63. It'll be delicious, we promise.
                </p>

                <br></br>

                <p className="details-left-small">
                  The company that we hire to find our classmates charges $30 per student for their services, including the website. 
                  There are also fees at the venue like the AV, signage, name badges, etc. that are paid for out of that budget.
                  Spouses are not charge for the $30 fee to locate alumni so you only pay it once (hence the lower fee for spouses).
                </p>

                <br />

                <h5>Why does the price increase?</h5>

                <p className="details-left-small">
                  The venue requires that the food and beverage expense be paid for 30 days in advance of the event. 
                  Planning an event like this is tricky because no one wants to be stuck with expenses beyond what is collected from alumni.
                  The lower 'early-bird' price encourages alumni courtesy in letting us know as soon as possible that you will attend so that we can adequately plan.
                </p>

            </div>
            <div className="details-right flex-column column-spread">
                <img className="logo no-margin" src={logo} alt="Brighton Bengals"/>
                <button type="button" className="btn btn-primary margin-left-60">Register</button>
            </div>
        </div>
        );
    }
}

export default RegisterPage;