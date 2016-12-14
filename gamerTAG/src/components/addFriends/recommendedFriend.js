import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import './recommendedFriend.css';

var RecommendedFriend = React.createClass({
    render: function() {
        return (
            <div>
              <Paper zDepth={3} className="reccomendedFriend">
                <Row className="show-grid">
                    <Col xs={12} sm={10} md={10}>
                        <div className="friendData">
                          <Row>
                            <Col xs={12} id="reccomended-friend-name">
                              <p>{this.props.friendName}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={6}>
                              <p>Current: {this.props.friendRecent}</p>
                              <p>Status: {this.props.friendStatus}</p>
                            </Col>
                            <Col xs={6}>
                              <p>Status: {this.props.friendStatus}</p>
                              <p>Play Style: Casual</p>
                            </Col>
                          </Row>

                        </div>
                    </Col>
                </Row>
              </Paper>
            </div>
        )
    }
});

module.exports = RecommendedFriend;
