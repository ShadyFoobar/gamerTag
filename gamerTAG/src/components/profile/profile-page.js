import React from 'react';
import MyProfileData from './myProfileData';
import GameStats from './gameStats';
import TagInfo from './tagInfo';
import AddGame from './addGame';
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
                            <div>
                                <MyProfileData gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="show-grid profilePageSplit">
                        <Col xs={6}>
                            <div>
                                <AddGame/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div>
                                <TagInfo/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="show-grid profilePageSplit">
                        <Col xs={12}>
                            <div>
                                <GameStats/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = ProfilePage;
