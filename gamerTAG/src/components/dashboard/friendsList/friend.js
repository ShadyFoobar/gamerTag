import React from 'react';
import {Row, Col} from 'react-bootstrap';

var Friend = React.createClass({

    render: function() {
        return (
            <div className="friend">
                <Row className="show-grid">
                    <Col xs={3}></Col>
                    <Col xs={7}>
                        <div>
                            <p>{this.props.friendName}</p>
                            <p>Status:{this.props.friendStatus}</p>
                            <p>Recent:{this.props.friendRecent}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = Friend;
