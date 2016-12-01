import React from 'react';
import FriendsList from './friendsList/friendsList';
import MyAccountInfo from './account/myAccountInfo';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

var Dashboard = React.createClass({
    getInitialState: function() {
        return {
            user: {
                gamerTAG: "Shady Foobar",
                name: "Nic T",
                location: "STL",
                status: "Online",
                recentGame: "Overwatch",
                gameData : {
                  battlenet : "Prodigy",
                  league : "Shady Foobar",
                  xbox : "TOPGUNCHIEF14",
                  playstation : ""
                },
                friends: [
                    {
                        gamerTAG: "THE NAME",
                        name: "Nic T",
                        location: "STL",
                        status: "Online",
                        recentGame: "Overwatch"
                    }, {
                        gamerTAG: "BLITZMAN",
                        name: "Nic R",
                        location: "LA",
                        status: "Online",
                        recentGame: "Cod"
                    }, {
                        gamerTAG: "RUNNEDED",
                        name: "Nic P",
                        location: "CHI",
                        status: "Offline",
                        recentGame: "Halo"
                    }
                ]
            }
        };
    },

    render: function() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={9}>
                            <div>
                                <MyAccountInfo gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <FriendsList friends={this.state.user.friends}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = Dashboard;
