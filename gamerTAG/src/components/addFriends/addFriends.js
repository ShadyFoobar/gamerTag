import React from 'react';
import RecommendedFriend from './../addFriends/recommendedFriend';
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
                    <Col xs={12} className="recommendedFriendPageHeader">
                        <h1>FIND A FRIEND</h1>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={12} sm={6}>
                        {this.state.allUsers.filter(function(user, index) {
                            if (index % 2 === 0) {
                                return user;
                            }
                        }).map(function(user, index) {
                            return (<RecommendedFriend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                        })}
                    </Col>
                    <Col xs={12} sm={6}>
                        {this.state.allUsers.filter(function(user, index) {
                            if (index % 2 !== 0) {
                                return user;
                            }
                        }).map(function(user, index) {
                            return (<RecommendedFriend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                        })}
                    </Col>
                </Row>
              </Grid>
            </div>
        )
    }
});

module.exports = addFriends;
