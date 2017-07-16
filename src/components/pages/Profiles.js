import React, { Component } from 'react';

// Components
import Card from './Profiles/Card';

// Images
import prof_pic from '../../assets/profile_pic.png'
// CSS
import './Profiles.css';

class Profiles extends Component {
    render() {
        return (
            <div className="profiles-wrapper">
                <div className="profiles-top">
                     <div className="details-top-title">
                        Classmate Profiles
                     </div>
                </div> 


                <div className="profiles-table">
                    <div className="table-header">
                        <div>Name</div>
                        <div>Attending?</div>
                    </div>

                    <Card name="Gustav Nordstrom" imageUrl={prof_pic} attending="Yes"/>
                    <Card name="Jon Myrick" imageUrl={prof_pic} attending="Yes"/>
                    <Card name="Steven Nagie" imageUrl={prof_pic} attending="Yes"/>
                    <Card name="Abraham Lincoln" imageUrl={prof_pic} attending="Yes"/>
                </div>





                 {/* <div className="details-table-wrapper">

                    <table className="details-table">
                       
                        <thead>
                            <tr>
                                <th className="table-header header-name">Name</th>
                                <th className="table-header header-attending">Attending?</th>
                            </tr>
                        </thead>

                      
                        <tbody>
                            <tr>
                                <td className="table-row-item-name">
                                    <div className="table-row-item-card">
                                        <div className="card-img">
                                            <img src={prof_pic} className="card-pic" alt="Profile Pic"/>
                                        </div>
                                        <div className="card-name">
                                            Gustav
                                        </div>

                                    </div>
                                </td>
                                <td className="table-row-item-bool">
                                    <div>Yes</div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>  */}

            </div>
        );
    }
}

export default Profiles;