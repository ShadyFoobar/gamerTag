import React from 'react';
import {Row, Col} from 'react-bootstrap';

var PossibleFriend = React.createClass({
    render: function() {
        return (
            <div className="friend">
                <Row className="show-grid">
                    <Col xs={12} sm={10} md={10}>
                        <div className="friendData">
                            <p>{this.props.friendName}</p>
                            <p>Status: {this.props.friendStatus}</p>
                            <p>Current: {this.props.friendRecent}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = PossibleFriend;
