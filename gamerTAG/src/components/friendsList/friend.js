import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './friend.css';
import Paper from 'material-ui/Paper';

var Friend = React.createClass({
    render: function() {
        return (
            <div>
                <Paper zDepth={3} className="friend">
                    <Row className="show-grid">
                        <Col xs={4} sm={3} md={2} lg={2} className="friendProfilePic">
                            <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                        </Col>
                        <Col xs={8} sm={9} md={10} lg={10} className="friendData">
                            <p id="friend-name">{this.props.friendName}</p>
                            <p id="friend-status">Status: {this.props.friendStatus}</p>
                            <p id="friend-recent">Current: {this.props.friendRecent}</p>
                        </Col>
                    </Row>
                </Paper>
            </div>
        )
    }
});

module.exports = Friend;
