import React from 'react';
import MyProfileData from './myProfileData';
import AllGameStats from './gameStats/allGameStats';
import GamerTagInfo from './gamerTagInfo/gamerTagInfo';
import AddGame from './addGame/addGame';
import {Row, Col, Grid} from 'react-bootstrap';
import data from '../../data.js';
import './profile-page.css';

var ProfilePage = React.createClass({
    getInitialState: function() {
        return data;
    },
    componentDidMount: function() {
        this.props.changeLogIn();
    },
    render: function() {
        return (
            <div>
                <Grid className="all-page-layout">
                    <Row className="show-grid profilePageSplit">
                        <Col xs={12}>
                            <MyProfileData gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
                        </Col>
                    </Row>
                    <Row className="show-grid profilePageSplit">
                        <Col xs={12} sm={6}>
                            <AddGame/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <GamerTagInfo/>
                        </Col>
                    </Row>
                    <Row className="show-grid profilePageSplit bottomPageSplit">
                        <Col xs={12}>
                            <AllGameStats/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = ProfilePage;
