import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

var MyAccountInfo = React.createClass({
    render: function() {
        return (
            <div className="myAccountInfo">
                <Row className="show-grid">

                    <Col xs={4}>
                        <p>This is where the icon goes</p>
                    </Col>
                    <Col xs={8}>
                        <p>gamerTAG: {this.props.gamerTAG}</p>
                        <p>Name: {this.props.name}</p>
                        <p>Location: {this.props.location}</p>
                        <p>Status: {this.props.status}</p>
                        <p>Recent Game: {this.props.recentGame}</p>
                    </Col>
                </Row>

            </div>
        )
    }
});

module.exports = MyAccountInfo;
