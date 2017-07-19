import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StripeAlumniEarly from '../stripe/StripeAlumniEarly';
import StripeAlumniSpouseEarly from '../stripe/StripeAlumniSpouseEarly';
import StripeAlumni from '../stripe/StripeAlumni';
import StripeAlumniSpouse from '../stripe/StripeAlumniSpouse';
import StripeAlumniSpouseDayOf from '../stripe/StripeAlumniSpouseDayOf';
import StripeAlumniDayOf from '../stripe/StripeAlumniDayOf';
import './Pay.css';

class Pay extends Component {
    constructor(props){
        super(props);
        this.state = {
            early_registration: false,
            registration: false,
            day_of_registration: false,
            event_over: false
        }
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
                                        <tr style={styles.table_row_no_border}>
                                            <td style={styles.table_description}>Alumni + Spouse </td>
                                            <td style={styles.table_cost}>$157</td>
                                            <td style={styles.table_button}><StripeAlumniSpouseEarly /></td>
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
                                        <tr style={styles.table_row_no_border}>
                                            <td style={styles.table_description}>Alumni + Spouse </td>
                                            <td style={styles.table_cost}>$167</td>
                                            <td style={styles.table_button}><StripeAlumniSpouse /></td>
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
                                        <tr style={styles.table_row_no_border}>
                                            <td style={styles.table_description}>Day Of - Alumni + Spouse </td>
                                            <td style={styles.table_cost}>$183</td>
                                            <td style={styles.table_button}><StripeAlumniSpouseDayOf /></td>
                                        </tr>
                                    </table>
                                </div>) : null}
                            
                            {this.state.event_over ? (
                                <div style={styles.event_over}>
                                    We're sorry we missed you!  We'll see you next time!
                                </div>
                            ) : (
                                <div style={styles.registration_desc}>
                                    <h3>
                                        Registration Fee Breakdown
                                    </h3>
                                    <p>
                                        The venue charges $47.65 for a meal, plus a 22% service charge + 9.45% sales tax. Thus, the meal alone is $63.63. It'll be delicious, we promise.</p>
                                    <p>
                                        The company that we hire to find our classmates charges $30 per student for their services, including the website. There are also fees at the venue like the AV, signage, name badges, etc. that are paid for out of that budget.
                                    </p>
                                </div>
                            )}

                        </section>
                        <div className='pay-buttons'>
                            <Link to='/register/additional'>Back</Link>
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
            }

        }
    }
}

export default Pay;