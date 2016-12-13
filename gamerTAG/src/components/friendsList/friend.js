import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './friend.css';

var Friend = React.createClass({
    render: function() {
        return (
            <div className="friend">
                <Row className="show-grid">
                    <Col xs={3} sm={2} md={2} className="friendProfilePic">
                      <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                    </Col>
                    <Col xs={9} sm={10} md={10}>
                        <div className="friendData">
                            <p>{this.props.friendName}</p>
                            <p>Status: {this.props.friendStatus}</p>
                            <p>Current Game: {this.props.friendRecent}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = Friend;
