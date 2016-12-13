import React from 'react';
import MyProfileData from './myProfileData';
import GameStats from './gameStats/gameStats';
import TagInfo from './gamerTags/tagInfo';
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
                <Grid className="all-page-layout" fluid>
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
                            <TagInfo/>
                        </Col>
                    </Row>
                    <Row className="show-grid profilePageSplit">
                        <Col xs={12}>
                            <GameStats/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = ProfilePage;
