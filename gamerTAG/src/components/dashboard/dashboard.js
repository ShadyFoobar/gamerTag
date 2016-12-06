import React from 'react';
import FriendsList from './friendsList/friendsList';
import MyAccountInfo from './account/myAccountInfo';
import Search from './search/search';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import data from '../../data.js';

var Dashboard = React.createClass({
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
                        <Col xs={9}>
                            <Row className="show-grid my-summary-info">
                                <div>
                                    <MyAccountInfo gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
                                </div>
                            </Row>
                            <Row className="show-grid my-friend-suggestion">
                                <Search allUsers={this.state.allUsers}/>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <div className="my-friends">
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
