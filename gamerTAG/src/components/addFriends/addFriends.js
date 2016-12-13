import React from 'react';
import Friend from './../friendsList/friend';
import {Row, Col, Grid} from 'react-bootstrap';
import data from '../../data.js';

var addFriends = React.createClass({
  getInitialState : function(){
    return data;
  },
  componentDidMount: function(){
     this.props.changeLogIn();
  },
    render: function() {
        return (
            <div>
              <Grid className="all-page-layout" fluid>
                <Row className="show-grid">
                    <Col xs={12}>
                        <h1>FIND A FRIEND</h1>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6}>
                        {this.state.allUsers.filter(function(user, index) {
                            if (index % 2 === 0) {
                                return user;
                            }
                        }).map(function(user, index) {
                            return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                        })}
                    </Col>
                    <Col xs={6}>
                        {this.state.allUsers.filter(function(user, index) {
                            if (index % 2 !== 0) {
                                return user;
                            }
                        }).map(function(user, index) {
                            return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                        })}
                    </Col>
                </Row>
              </Grid>
            </div>
        )
    }
});

module.exports = addFriends;
