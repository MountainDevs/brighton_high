import React, { Component } from 'react';
import { userData, updateUser } from '../../../dataService'
import './Questionnaire.css';

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      facebookPage: userData.facebookPage || '',
      family: userData.family || '', 
      pastResidence: userData.pastResidence || '',
      millitaryService: userData.millitaryService || '',
      occupation: userData.occupation || '',
      college: userData.college || '',
      hobbies: userData.hobbies || '',
      honors: userData.honors || '',
      travel: userData.travel || '',
      bestMemory: userData.bestMemory || '',
      worstMemory: userData.worstMemory || '',
      dumb: userData.dumb || '',
      crushes: userData.crushes || '',
      changes: userData.changes || '',
      retirement: userData.retirement || '',
      tenYears: userData.tenYears || ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit() {
      userData.facebookPage = this.state.facebookPage
      userData.family = this.state.family
      userData.pastResidence = this.state.pastResidence
      userData.millitaryService = this.state.millitaryService
      userData.occupation = this.state.occupation
      userData.college = this.state.college
      userData.hobbies = this.state.hobbies
      userData.honors = this.state.honors
      userData.travel = this.state.travel
      userData.bestMemory = this.state.bestMemory
      userData.worstMemory = this.state.worstMemory
      userData.dumb = this.state.dumb
      userData.crushes = this.state.crushes
      userData.changes = this.state.changes
      userData.retirement = this.state.retirement
      userData.tenYears = this.state.tenYears
  
      updateUser().then(res => {
        alert("Saved successfully");
      })
      .catch(err => {
        alert("There's been a problem, please try again");
      });
  }

  render() {
    return (
      <div className="questionnaire-wrapper">
      <div className="questionnaire-header">QUESTIONNAIRE</div>
        <div className="questionnaire-body">
          <section>
            <div>
              <label>Put you facebook profile url here</label>
              <textarea id="facebook" name='facebook' cols="30" rows="10" value={this.state.facebook} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Where have you lived since graduation?</label>
              <textarea id="pastResidence" name='pastResidence' cols="30" rows="10" value={this.state.pastResidence} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Tell us about your family: Married?  If so, where did you meet your spouse?  Children?  If so, how many?  Ages?  Grandchildren?!!!  Brag about your children if you would like, but don’t tell us about your woes, we already know about those because we have them too!  ;)</label>
              <textarea id="family" name='family' cols="30" rows="10" value={this.state.family} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Did you serve in the military?  What branch?  How many years of service</label>
              <textarea id="millitaryService" name='millitaryService' cols="30" rows="10" value={this.state.millitaryService} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Current occupation?  Tell us about your about career to get to where you are today.</label>
              <textarea id="occupation" name='occupation' cols="30" rows="10" value={this.state.occupation} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>After Brighton, did you attend college?  Where?</label>
              <textarea id="college" name='college' cols="30" rows="10" value={this.state.college} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Great accomplishments or have you been honored for anything (it’s OK to brag just this once!)?</label>
              <textarea id="honors" name='honors' cols="30" rows="10" value={this.state.honors} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What is your favorite hobby today?</label>
              <textarea id="hobbies" name='hobbies' cols="30" rows="10" value={this.state.hobbies} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Where is the best place you have traveled to?</label>
              <textarea id="travel" name='travel' cols="30" rows="10" value={this.state.travel} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What is your best high school memory?</label>
              <textarea id="bestMemory" name='bestMemory' cols="30" rows="10" value={this.state.bestMemory} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What is your worst high school memory?</label>
              <textarea id="worstMemory" name='worstMemory' cols="30" rows="10" value={this.state.worstMemory} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>What was the dumbest or most embarrassing thing you did in high school (would you be put in jail for it today?)?</label>
              <textarea id="dumb" name='dumb' cols="30" rows="10" value={this.state.dumb} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Who were you secret high school crushes?</label>
              <textarea id="crushes" name='crushes' cols="30" rows="10" value={this.state.crushes} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>According to the calendar, we are aging (note this is our 30-year reunion), what changes have you noticed (it’s OK to be honest, but maybe not too honest!)?</label>
              <textarea id="changes" name='changes' cols="30" rows="10" value={this.state.changes} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Now that retirement is within sight (ouch!), what are your plans?</label>
              <textarea id="retirement" name='retirement' cols="30" rows="10" value={this.state.retirement} onChange={this.handleInputChange}></textarea>
            </div>
            <div>
              <label>Where do you see yourself 10 years from now (this question may haunt you at the next reunion!)?</label>
              <textarea id="tenYears" name='tenYears' cols="30" rows="10" value={this.state.tenYears} onChange={this.handleInputChange}></textarea>
            </div>
          </section>
          <div className='button-container'>
              <button type="button" className="blue-button" onClick={this.handleSubmit}>Save</button>
          </div> 
        </div>
      </div>
    );
  }
}

export default Questionnaire;