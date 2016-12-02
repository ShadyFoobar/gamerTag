import React from 'react';
import Friend from './../friendsList/friend';
import {Row, Col} from 'react-bootstrap';

var Search = React.createClass({
    render: function() {
        return (
            <div className="myAccountInfo">
                <Row className="show-grid">
                    <Col xs={12}>
                        <h1>FIND A FRIEND</h1>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6}>
                        {this.props.allUsers.filter(function(user, index) {
                            if (index % 2 === 0) {
                                return user;
                            }
                        }).map(function(user, index) {
                            return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                        })}
                    </Col>
                    <Col xs={6}>
                        {this.props.allUsers.filter(function(user, index) {
                            if (index % 2 !== 0) {
                                return user;
                            }
                        }).map(function(user, index) {
                            return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                        })}
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = Search;
