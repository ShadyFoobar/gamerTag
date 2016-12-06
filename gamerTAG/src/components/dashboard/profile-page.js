import React from 'react';
import FriendsList from './friendsList/friendsList';
import MyAccountInfo from './account/myAccountInfo';
import Search from './search/search';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import data from '../../data.js';

var ProfilePage = React.createClass({
   getInitialState : function(){
     return data;
   },
    render: function() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Row className="show-grid">
                                <div>
                                    <MyAccountInfo gamerTAG={this.state.user.gamerTAG} name={this.state.user.name} location={this.state.user.location} status={this.state.user.status} recentGame={this.state.user.recentGame}/>
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
