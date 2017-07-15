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
        const styles = this.styles()
        return (
            <div className="details-container">
              <div className="details-left">
                <h1 className="details-left-big">Registration:</h1>
                <h3 className="details-left-medium">Early registration available until August 1 - $94 and $63 for spouse</h3>
                <h3 className="details-left-medium">Registration is $104 after August 1st, and $120 the day of the event (October 14).</h3>
                {/* spacing */}
                <br />

                <h3>
                    Early Registration
                </h3>
                <table style={styles.table}>
                    <tr>
                        <td style={styles.table_description}>Alumni Only </td>
                        <td style={styles.table_cost}>$94</td>
                        <td style={styles.table_button}><StripeAlumniPre /></td>
                    </tr>
                    <tr>
                        <td style={styles.table_description}>Alumni + Spouse </td>
                        <td style={styles.table_cost}>$157</td>
                        <td style={styles.table_button}><StripeAlumniSpousePre /></td>
                    </tr>
                </table>
                <br />
                <h3>
                    Registration
                </h3>
                <table style={styles.table}>
                    <tr>
                        <td style={styles.table_description}>Alumni Only </td>
                        <td style={styles.table_cost}>$104</td>
                        <td style={styles.table_button}><StripeAlumni /></td>
                    </tr>
                    <tr>
                        <td style={styles.table_description}>Alumni + Spouse </td>
                        <td style={styles.table_cost}>$167</td>
                        <td style={styles.table_button}><StripeAlumniSpouse /></td>
                    </tr>
                </table>
                <br />
                <h3>
                    Day Of Registration
                </h3>
                <table style={styles.table}>
                    <tr>
                        <td style={styles.table_description}>Day Of - Alumni Only </td>
                        <td style={styles.table_cost}>$120</td>
                        <td style={styles.table_button}><StripeAlumniDayOf /></td>
                    </tr>
                    <tr>
                        <td style={styles.table_description}>Day Of - Alumni + Spouse </td>
                        <td style={styles.table_cost}>$183</td>
                        <td style={styles.table_button}><StripeAlumniSpouseDayOf /></td>
                    </tr>
                </table>

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
            </div>
        </div>
        );
    }

    styles () {
        return {
            table: {
                margin: 10
            },
            table_description: {
                width: 200
            },
            table_cost: {
                width: 75
            },
            table_button: {
                width: 150
            }
        }
    }
}

export default RegisterPage;