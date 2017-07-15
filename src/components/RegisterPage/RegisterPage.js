import React, { Component } from 'react';
import StripeAlumniPre from '../Stripe/StripeAlumniPre'
import StripeAlumniSpousePre from '../Stripe/StripeAlumniSpousePre'
import StripeAlumni from '../Stripe/StripeAlumni'
import StripeAlumniSpouse from '../Stripe/StripeAlumniSpouse'
import StripeAlumniDayOf from '../Stripe/StripeAlumniDayOf'
import StripeAlumniSpouseDayOf from '../Stripe/StripeAlumniSpouseDayOf'
import logo from '../../assets/brighton-logo.png';

import '../EventPage/DetailComponent/DetailComponent.css';
import '../../styles/common.css';

class RegisterPage extends Component {
    render() {
        return (
            <div className="details-container">
              <div className="details-left">
                <h1 className="details-left-big">Registration:</h1>
                <h3 className="details-left-medium">Early registration available until August 1 - $94 and $63 for spouse</h3>
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
                <h3>
                    Early Registration
                </h3>
                <table>
                    <tr>
                        <td>Alumni Only </td>
                        <td>$94</td>
                        <td><StripeAlumniPre /></td>
                    </tr>
                    <tr>
                        <td>Alumni + Spouse </td>
                        <td>$157</td>
                        <td><StripeAlumniSpousePre /></td>
                    </tr>
                </table>
                <h3>
                    Registration
                </h3>
                <table>
                    <tr>
                        <td>Alumni Only </td>
                        <td>$104</td>
                        <td><StripeAlumni /></td>
                    </tr>
                    <tr>
                        <td>Alumni + Spouse </td>
                        <td>$167</td>
                        <td><StripeAlumniSpouse /></td>
                    </tr>
                </table>
                <h3>
                    Day Of Registration
                </h3>
                <table>
                    <tr>
                        <td>Day Of - Alumni Only </td>
                        <td>$120</td>
                        <td><StripeAlumniDayOf /></td>
                    </tr>
                    <tr>
                        <td>Day Of - Alumni + Spouse </td>
                        <td>$183</td>
                        <td><StripeAlumniSpouseDayOf /></td>
                    </tr>
                </table>
            </div>
        </div>
        );
    }
}

export default RegisterPage;