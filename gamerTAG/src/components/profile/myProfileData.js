import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './profile-page.css';

var MyProfileData = React.createClass({
    render: function() {
        return (
            <div>
                <Col xs={12} className="myProfileData">
                  <Col xs={12} sm={4}>
                    <h2>Profile</h2>
                        <div className="profilePic">
                            <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className="userInfo">
                            <p className="tag">gamerTAG: {this.props.gamerTAG}</p>
                            <p>Name: {this.props.name}</p>
                            <p>Location: {this.props.location}</p>
                            <p>Status: {this.props.status}</p>

                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                      <Col xs={12} sm={12}>
                        <p>Current Game:</p>
                      </Col>
                        <Col xs={12} sm={12}>
                          <p>{this.props.recentGame}</p>
                        </Col>


                    </Col>
                </Col>
            </div>
        )
    }
});

module.exports = MyProfileData;
