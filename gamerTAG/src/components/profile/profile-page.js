import React from 'react';
import MyProfileData from './myProfileData';
import AllGameStats from './gameStats/allGameStats';
import GamerTagInfo from './gamerTagInfo/gamerTagInfo';
import AddGame from './addGame/addGame';
import {Row, Col, Grid} from 'react-bootstrap';
import data from '../../data.js';
import {Card} from 'material-ui/Card';
import {orange600} from 'material-ui/styles/colors';
import {CardMedia, CardTitle} from 'material-ui/Card';
import './profile-page.css';

var ProfilePage = React.createClass({
    getInitialState: function() {
        return data;
    },
    componentDidMount: function() {
        this.props.changeLogIn();
    },
    render: function() {
        const styles = {
            customWidth: {
                width: 150
            },
            card: {
                maxWidth: '10000px',
                margin: '0 auto',
                padding: '10px 0',
                backgroundColor: '#eee'
            },
            floatingLabel: {
                color: orange600
            }
        };
        return (
                <Grid>
                    <Card style={styles.card}>
                        <Row className="show-grid">
                            <Col xs={12} className="profilePageHeader">
                                <h1>- My Profile -</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={4}>
                                <div className="profilePic">
                                  <CardMedia
                                    overlay={<CardTitle
                                      title={this.props.gamerTAG}
                                      subtitle="Pro"
                                      style={styles.cardTitle} />}
                                   >
                                    <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                                  </CardMedia>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div>
                                    <p>
                                        <strong>Name</strong>: {this.state.user.name}
                                    </p>
                                    <p>
                                        <strong>Location</strong>: {this.state.user.location}
                                    </p>
                                    <p>
                                        <strong>Status</strong>: {this.state.user.status}
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Row>
                                    <Col sm={12}>
                                        <div>
                                            <p><strong>LoL Summoner Name</strong></p>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div>
                                            <p><strong>Blizzard BattleTag</strong></p>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div>
                                            <p><strong>Xbox Gamertag</strong></p>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div>
                                            <p><strong>Playstation UserName</strong></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <AllGameStats/>
                            </Col>
                        </Row>
                    </Card>
                </Grid>
        )
    }
});

module.exports = ProfilePage;
