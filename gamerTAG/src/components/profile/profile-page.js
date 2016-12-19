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
import {GridList} from 'material-ui/GridList';
import tilesData from '../../data';
import SingleGameStat from './gameStats/singleGameStat';
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
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto'
            }
        };
        return (
            <Grid>
                <Card style={styles.card}>
                    <Row className="show-grid profilePageHeader">
                        <Col xs={12} className="">
                            <h1>- My Profile -</h1>
                        </Col>
                    </Row>
                    <Row className="profilePageInfo">
                        <Col xs={12} sm={4}>
                            <div className="profilePic">
                                <CardMedia overlay={< CardTitle title={
                                    this.props.gamerTAG
                                }
                                subtitle="Pro" style={
                                    styles.cardTitle
                                } />}>
                                    <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                                </CardMedia>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Row>
                                <Col sm={12} className="sectionHeader">
                                    <div>
                                        <h3>- Personal Info -</h3>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>Name:
                                            </strong>
                                            {this.state.user.name}
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>Location:
                                            </strong>
                                            {this.state.user.location}
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>Status:
                                            </strong>
                                            {this.state.user.status}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Row>
                                <Col sm={12} className="sectionHeader">
                                    <div>
                                        <h3>- Tag Info -</h3>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>LoL Summoner Name:
                                            </strong>
                                            {this.state.user.gametag.league}</p>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>Blizzard BattleTag:
                                            </strong>
                                            {this.state.user.gametag.battlenet}</p>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>Xbox Gamertag:
                                            </strong>
                                            {this.state.user.gametag.xbox}</p>
                                    </div>
                                </Col>
                                <Col sm={12} className="sectionInfo">
                                    <div>
                                        <p>
                                            <strong>Playstation UserName:
                                            </strong>
                                            {this.state.user.gametag.playstation}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="show-grid profilePageGames">
                        <Col xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <div className="profilePageGamesHeader">
                                        <h3>- My Games -</h3>
                                    </div>
                                    <div className="allGameStat" style={styles.root}>
                                        <GridList className="all-games-grid-list" style={styles.gridList} cols={2.2}>
                                            {tilesData.user.myGames.map((tile, index) => (<SingleGameStat tile={tile} index={index} key={tile.id}/>))}
                                        </GridList>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Grid>
        )
    }
});

module.exports = ProfilePage;
