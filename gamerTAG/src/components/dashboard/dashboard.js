import React from 'react';
import FriendsList from './friendsList/friendsList';
import MyAccountInfo from './account/myAccountInfo';
import Search from './search/search';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

var Dashboard = React.createClass({
    render: function() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={9}>
                            <Row className="show-grid">
                                <div>
                                    <MyAccountInfo gamerTAG={this.props.user.gamerTAG} name={this.props.user.name} location={this.props.user.location} status={this.props.user.status} recentGame={this.props.user.recentGame}/>
                                </div>
                            </Row>
                            <Row className="show-grid">
                                <Search allUsers={this.props.allUsers}/>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <FriendsList friends={this.props.user.friends}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = Dashboard;
