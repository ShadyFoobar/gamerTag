import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

var MyProfileData = React.createClass({
    render: function() {
        return (
            <div className="myProfileData">
                <Row className="show-grid">
                    <Col xs={12}>
                        <div className="profilePic">
                            <img src={require('../../img/blackSquare.png')} alt="profile-pic"/>
                        </div>
                        <p className="tag">gamerTAG: {this.props.gamerTAG}</p>
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

module.exports = MyProfileData;
