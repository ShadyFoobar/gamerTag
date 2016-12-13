import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './myProfileData.css';

var MyProfileData = React.createClass({
    render: function() {
        return (
            <Row className="myProfileData">
              <h2>Profile</h2>
              <Col xs={12} sm={4}>
                <div className="profilePic">
                  <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="userInfo">
                  <p className="tag"><strong>gamerTAG</strong>: {this.props.gamerTAG}</p>
                  <p className="name"><strong>Name</strong>: {this.props.name}</p>
                  <p className="location"><strong>Location</strong>: {this.props.location}</p>
                  <p className="status"><strong>Status</strong>: {this.props.status}</p>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <Row>
                  <Col xs={12} sm={12}>
                    <p className="current-game"><strong>Current Game</strong>: {this.props.recentGame}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
        )
    }
});

module.exports = MyProfileData;
