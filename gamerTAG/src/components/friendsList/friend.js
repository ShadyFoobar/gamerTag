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
                        <Col xs={5} sm={2} md={2} lg={1} className="friendProfilePic">
                            <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                        </Col>
                        <Col xs={7} sm={10} md={10} lg={11}>
                            <div className="friendData">
                                <p>{this.props.friendName}</p>
                                <p>Status: {this.props.friendStatus}</p>
                                <p>Current: {this.props.friendRecent}</p>
                            </div>
                        </Col>
                    </Row>
                </Paper>
            </div>
        )
    }
});

module.exports = Friend;
