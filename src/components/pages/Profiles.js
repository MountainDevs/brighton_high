import React, { Component } from 'react';

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
                        Profile Details
                     </div>
                </div> 

                <div className="details-table-wrapper">
                    <table className="details-table">
                        <thead>
                            <th className="table-header header-name">Name</th>
                            <th className="table-header header-attending">Attending?</th>
                        </thead>

                        <tbody>
                            <tr className="table-row">
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

                </div>

            </div>
        );
    }
}

export default Profiles;