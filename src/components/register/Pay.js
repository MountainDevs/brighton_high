import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StripeAlumniEarly from '../Stripe/StripeAlumniEarly';
import StripeAlumniSpouseEarly from '../Stripe/StripeAlumniSpouseEarly';
import StripeAlumni from '../Stripe/StripeAlumni';
import StripeAlumniSpouse from '../Stripe/StripeAlumniSpouse';
import StripeAlumniSpouseDayOf from '../Stripe/StripeAlumniSpouseDayOf';
import StripeAlumniDayOf from '../Stripe/StripeAlumniDayOf';
import StripeAlumniNonAttending from '../Stripe/StripeAlumniNonAttending';
import { postUser, permissions } from '../../dataService'
import './Pay.css';

class Pay extends Component {
    constructor(props){
        super(props);
        this.state = {
            early_registration: false,
            registration: false,
            day_of_registration: false,
            event_over: false,
            corp_sponsor: false,
            more_info: false
        }
    }

    componentWillUnmount(){
        permissions.payed = true;
    }

    componentDidMount () {
        const time = new Date()
        const month = time.getMonth()
        const day = time.getDate()
        const year = time.getFullYear()

        if (year > 2017 || month >= 10 && day > 14) {
            this.setState({
                early_registration: false,
                registration: false,
                day_of_registration: false,
                event_over: true
            })
        } else if (month === 10 && day === 14) {
            this.setState({
                early_registration: false,
                registration: false,
                day_of_registration: true
            })
        } else if (month < 8) {
            this.setState({
                early_registration: true,
                registration: false,
                day_of_registration: false
            })
        } else {
            this.setState({
                early_registration: false,
                registration: true,
                day_of_registration: false
            })

        }
    }

    _handleCorpSponsor = () => {
        if (this.state.corp_sponsor) {
            this.setState({
                corp_sponsor: false
            })
        } else {
            this.setState({
                corp_sponsor: true
            })
        }
    }

    _handleShowMoreInfo = () => {
        if (this.state.more_info) {
            this.setState({
                more_info: false
            })
        } else {
            this.setState({
                more_info: true
            })
        }
    }

    render() {
        const styles=this.styles()
        return (
            <div className='pay-bg'>
                <div className='pay-wrapper'>
                    <div className='pay-header'>Registration Fee</div>
                    <div className='pay-body'>

                        {this.state.early_registration ? (
                            <p>Early Registration is open until August 1st. </p>
                        ) : null}

                        {this.state.registration ? (
                            <p>Registration is open until Oct. 13th.</p>
                        ) : null}

                        {this.state.day_of_registration ? (
                            <p>Today is the Day! </p>
                        ) : null}

                        <section className='stripe-code'>

                            {this.state.early_registration ? (
                                <div style={styles.table}>
                                    <h3>
                                        Early Registration
                                    </h3>
                                    <table>
                                        <tr style={styles.table_row_border}>
                                            <td style={styles.table_description}>Alumni Only </td>
                                            <td style={styles.table_cost}>$94</td>
                                            <td style={styles.table_button}><StripeAlumniEarly /></td>
                                        </tr>
                                        <tr style={styles.table_row_border}>
                                            <td style={styles.table_description}>Alumni + Spouse </td>
                                            <td style={styles.table_cost}>$157</td>
                                            <td style={styles.table_button}><StripeAlumniSpouseEarly /></td>
                                        </tr>
                                        <tr style={styles.table_row_no_border}>
                                            <td style={styles.table_description}>Non-Attending Alumni </td>
                                            <td style={styles.table_cost}>$30</td>
                                            <td style={styles.table_button}><StripeAlumniNonAttending /></td>
                                            <td style={styles.more_info} onClick={this._handleShowMoreInfo}>More Info</td>
                                        </tr>
                                    </table>
                                </div>
                            ) : null}

                            {this.state.registration ? (
                                <div style={styles.table}>
                                    <h3>
                                        Registration
                                    </h3>
                                    <table style={styles.table}>
                                        <tr style={styles.table_row_border}>
                                            <td style={styles.table_description}>Alumni Only </td>
                                            <td style={styles.table_cost}>$104</td>
                                            <td style={styles.table_button}><StripeAlumni /></td>
                                        </tr>
                                        <tr style={styles.table_row_border}>
                                            <td style={styles.table_description}>Alumni + Spouse </td>
                                            <td style={styles.table_cost}>$167</td>
                                            <td style={styles.table_button}><StripeAlumniSpouse /></td>
                                        </tr>
                                        <tr style={styles.table_row_no_border}>
                                            <td style={styles.table_description}>Non-Attending Alumni </td>
                                            <td style={styles.table_cost}>$30</td>
                                            <td style={styles.table_button}><StripeAlumniNonAttending /></td>
                                        </tr>
                                    </table>
                                </div>
                            ) : null}

                            {this.state.day_of_registration ? (
                                <div style={styles.table}>
                                    <h3>
                                        Day Of Registration
                                    </h3>
                                    <table style={styles.table}>
                                        <tr style={styles.table_row_border}>
                                            <td style={styles.table_description}>Day Of - Alumni Only </td>
                                            <td style={styles.table_cost}>$120</td>
                                            <td style={styles.table_button}><StripeAlumniDayOf /></td>
                                        </tr>
                                        <tr style={styles.table_row_border}>
                                            <td style={styles.table_description}>Day Of - Alumni + Spouse </td>
                                            <td style={styles.table_cost}>$183</td>
                                            <td style={styles.table_button}><StripeAlumniSpouseDayOf /></td>
                                        </tr>
                                        <tr style={styles.table_row_no_border}>
                                            <td style={styles.table_description}>Non-Attending Alumni </td>
                                            <td style={styles.table_cost}>$30</td>
                                            <td style={styles.table_button}><StripeAlumniNonAttending /></td>
                                        </tr>
                                    </table>
                                </div>) : null}

                            {this.state.corp_sponsor ? (
                                <div style={styles.registration_desc}>
                                    <h3>
                                        Become a Corporate Sponsor!
                                    </h3>
                                    <p>
                                        Would your corporation or business benefit from having its name advertised to your classmates?
                                    </p>
                                    <div style={styles.sponsor_list}>
                                        <ul>
                                            What you get:
                                            <li>
                                                - 60" x 30" banner displayed at registration
                                            </li>
                                            <li>
                                                - Recognition on the video display
                                            </li>
                                            <li>
                                                - Recognition from the microphone during the reunion
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        Corporate sponsorship will reduce the cost for attending alumni.
                                    </p>
                                    <p>
                                        If you're interested in becoming a corporate sponsor please contact Jessica at 
                                        <br/>
                                        (801) 673-4462 or email at jessica@brightonhigh1987.com
                                    </p>
                                </div>
                            ) : null}
                            
                            {this.state.more_info ? (
                                <div style={styles.registration_desc}>
                                    <h3>
                                        Non-Attending Alumni
                                    </h3>
                                    <p>
                                        We so sorry if you are unable to attend! If you would like to access your classmates profiles, sign up for the Non-Attending Alumni. The price is necessary to help cover the cost of locating all alumni.  You'll have complete access to the profiles!
                                    </p>
                                </div>
                            ) : null}

                            {this.state.event_over ? (
                                <div style={styles.event_over}>
                                    We're sorry we missed you!  We'll see you next time!
                                </div>
                            ) : (
                                <div>
                                    <div style={styles.registration_desc}>
                                        <h3>
                                            Registration Fee Breakdown
                                        </h3>
                                        <p>
                                            The venue charges $47.65 for a meal, plus a 22% service charge + 9.45% sales tax. Thus, the meal alone is $63.63. It'll be delicious, we promise.
                                        </p>
                                        <p>
                                            The company that we hire to find our classmates charges $30 per student for their services, including the website. There are also fees at the venue like the AV, signage, name badges, etc. that are paid for out of that budget.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </section>

                        <p>Here is a breakdown of what you're paying for:</p>
                        <section className='stripe-code'>
                            <ul>
                                <li>Early registration = $94 for alumni and $63 for spouses</li>
                                <li>Early registration is available until August 1, 2017</li>
                                <li>Registration will be $104 per person after August 1</li>
                                <li>Registration will be $120 per person when registering the day of the event</li>
                            </ul>
                        </section>
                            <div style={styles.corp_sponsor}>
                                Interested in becoming a corporate sponsor?
                                <span onClick={this._handleCorpSponsor} style={styles.corp_button}> Click Here</span>
                            </div>
                        <div className='pay-buttons'>
                            <Link to='/register'>Back</Link>
                            <Link to='/register/personal'>Continue</Link>
                        </div> 
                    </div>
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
                padding: 5,
                width: 200,
                borderRight: 'solid 1px #EAEAEA'
            },
            table_cost: {
                padding: 5,
                width: 75,
                borderRight: 'solid 1px #EAEAEA',
                textAlign: 'center'
            },
            table_button: {
                padding: 5,
                width: 150
            },
            table_row_border: {
                borderBottom: 'solid 1px #EAEAEA',
                margin: 5,
                padding: 5,
                height: 40
            },
            table_row_no_border:{
                margin: 5,
                padding: 5,
                height: 40
            },
            registration_desc : {
                margin: 5,
                paddingTop: 15,
                borderTop: 'solid 1px #EAEAEA'
            },
            event_over: {
                margin: 5,
                paddingTop: 15,
            },
            sponsor_list: {
                margin: 20
            },
            corp_sponsor: {
                margin: 25
            },
            corp_button: {
                cursor: 'pointer',
                textDecoration: 'underline'
            },
            more_info: {
                cursor: 'pointer',
                textDecoration: 'underline'
            }

        }
    }
}

export default Pay;