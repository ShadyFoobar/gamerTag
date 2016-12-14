import React from 'react';
import Friend from './friend';
import 'react-bootstrap';
import data from '../../data.js';
import {Row, Col, Grid} from 'react-bootstrap';
import './friend.css';

var FriendsList = React.createClass({
    getInitialState: function() {
        return data;
    },
    componentDidMount: function() {
        this.props.changeLogIn();
    },
    render: function() {
        return (
            <div >
                <Grid className="all-page-layout">
                    <Row className="show-grid">
                        <Col xs={12} className="friendsPageHeader">
                              <h1>- FRIENDS LIST -</h1>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <div>
                                {this.state.user.friends.map(function(user, index) {
                                    return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                                })}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = FriendsList;
