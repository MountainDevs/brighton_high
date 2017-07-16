import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Pay.css';

class Pay extends Component {
    render() {
        return (
            <div className='pay-bg'>
                <div className='pay-wrapper'>
                    <div className='pay-header'>Registration Fee</div>
                    <div className='pay-body'>
                        <p>Here we will explain a little about the fees and what they are paying for.</p>
                        <section className='stripe-code'>
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
                        </section>
                        <div className='pay-buttons'>
                            <Link to='/register/additional'>Back</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Pay;