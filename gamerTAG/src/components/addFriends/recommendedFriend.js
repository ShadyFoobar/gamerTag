import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Paper from 'material-ui/Paper';

var RecommendedFriend = React.createClass({
    render: function() {
        return (
            <div>
              <Paper zDepth={3} className="friend">
                <Row className="show-grid">
                    <Col xs={12} sm={10} md={10}>
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

module.exports = RecommendedFriend;
