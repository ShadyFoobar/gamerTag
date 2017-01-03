import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './recommendedFriend.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {blueGrey500} from 'material-ui/styles/colors';


var RecommendedFriend = React.createClass({
    addFriendToFriendList: function(){
      this.props.addFriend(this.props.currentUserID, this.props.friendID)
    },
    render: function() {
        return (
            <div>
              <Row className="reccomendedFriend">
                    <Col xs={12}>
                        <div className="friendData">
                            <Row>
                                <Col xs={9} md={10} id="reccomended-friend-name">
                                    <p>{this.props.friendName}</p>
                                </Col>
                                <Col xs={3} md={2}>
                                    <FloatingActionButton
                                      onClick={this.addFriendToFriendList}
                                      className="addFriendButton"
                                      mini={true}
                                      backgroundColor={blueGrey500}
                                    >
                                        <ContentAdd/>
                                    </FloatingActionButton>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <p>Current: {this.props.friendRecent}</p>
                                    <p>Status: {this.props.friendStatus}</p>
                                </Col>
                                <Col xs={6}>
                                    <p>Status: {this.props.friendStatus}</p>
                                    <p>Play Style: Casual</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = RecommendedFriend;
