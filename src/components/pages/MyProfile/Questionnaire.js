import React, { Component } from 'react';

import './Questionnaire.css';

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16: '',
      q17: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="questionnaire-wrapper">
      <div className="questionnaire-header">QUESTIONNAIRE</div>
        <div className="questionnaire-body">
          <section>
            <div>
              <label>Where do you currently live?</label>
              <textarea id="q1" name='q1' cols="30" rows="10" value={this.state.q1} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Where have you lived since graduation?</label>
              <textarea id="q2" name='q2' cols="30" rows="10" value={this.state.q2} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Tell us about your family: Married?  If so, where did you meet your spouse?  Children?  If so, how many?  Ages?  Grandchildren?!!!  Brag about your children if you would like, but don’t tell us about your woes, we already know about those because we have them too!  ;)</label>
              <textarea id="q3" name='q3' cols="30" rows="10" value={this.state.q3} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Did you serve in the military?  What branch?  How many years of service</label>
              <textarea id="q4" name='q4' cols="30" rows="10" value={this.state.q4} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Did you serve in the military?  What branch?  How many years of service</label>
              <textarea id="q5" name='q5' cols="30" rows="10" value={this.state.q5} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Current occupation?  Tell us about your about career to get to where you are today.</label>
              <textarea id="q6" name='q6' cols="30" rows="10" value={this.state.q6} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>After Brighton, did you attend college?  Where?</label>
              <textarea id="q7" name='q7' cols="30" rows="10" value={this.state.q7} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Great accomplishments or have you been honored for anything (it’s OK to brag just this once!)?</label>
              <textarea id="q8" name='q8' cols="30" rows="10" value={this.state.q8} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What is your favorite hobby today?</label>
              <textarea id="q9" name='q9' cols="30" rows="10" value={this.state.q9} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Where is the best place you have traveled to?</label>
              <textarea id="q10" name='q10' cols="30" rows="10" value={this.state.q10} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What is your best high school memory?</label>
              <textarea id="q11" name='q11' cols="30" rows="10" value={this.state.q11} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What is your worst high school memory?</label>
              <textarea id="q12" name='q12' cols="30" rows="10" value={this.state.q12} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What was the dumbest or most embarrassing thing you did in high school (would you be put in jail for it today?)?</label>
              <textarea id="q13" name='q13' cols="30" rows="10" value={this.state.q13} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Who were you secret high school crushes?</label>
              <textarea id="q14" name='q14' cols="30" rows="10" value={this.state.q14} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>According to the calendar, we are aging (note this is our 30-year reunion), what changes have you noticed (it’s OK to be honest, but maybe not too honest!)?</label>
              <textarea id="q15" name='q15' cols="30" rows="10" value={this.state.q15} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Now that retirement is within sight (ouch!), what are your plans?</label>
              <textarea id="q16" name='q16' cols="30" rows="10" value={this.state.q16} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Where do you see yourself 10 years from now (this question may haunt you at the next reunion!)?</label>
              <textarea id="q17" name='q17' cols="30" rows="10" value={this.state.q17} onChange={this.handleInputChange}></textarea>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Questionnaire;