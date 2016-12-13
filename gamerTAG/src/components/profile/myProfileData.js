import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {CardMedia, CardTitle} from 'material-ui/Card';
import './myProfileData.css';
var styles = {
  cardTitle: {
    padding: '0 10px'
  }
}
var MyProfileData = React.createClass({
    render: function() {
        return (
            <Row className="myProfileData">
              <h2>Profile</h2>
              <Col xs={12} sm={4}>
                <div className="profilePic">
                  <CardMedia
                    overlay={<CardTitle
                      title={this.props.gamerTAG}
                      subtitle="Pro"
                      style={styles.cardTitle} />}
                   >
                    <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                  </CardMedia>
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
