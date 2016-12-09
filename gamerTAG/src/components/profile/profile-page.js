import React from 'react';
import MyProfileData from './myProfileData';
import GameStats from './gameStats';
import TagInfo from './tagInfo';
import AddGame from './addGame';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import data from '../../data.js';

var ProfilePage = React.createClass({
   getInitialState : function(){
     return data;
   },
   componentDidMount: function(){
      this.props.changeLogIn();
   },
    render: function() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Row className="show-grid my-summary-info">
                              <Col xs={4}>
                                <div>
                                    <MyProfileData gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
                                </div>
                              </Col>
                              <Col xs={4}>
                                <div>
                                    <TagInfo />
                                </div>
                              </Col>
                              <Col xs={4}>
                                <div>
                                    <AddGame />
                                </div>
                              </Col>
                            </Row>

                            <Row className="show-grid my-summary-info">
                              <h2>My Games</h2>
                                <div>
                                    <GameStats />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = ProfilePage;
