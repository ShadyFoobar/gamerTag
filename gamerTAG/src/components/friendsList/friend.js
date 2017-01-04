import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './friend.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {blueGrey500} from 'material-ui/styles/colors';

var Friend = React.createClass({
  removeFriendFromFriendList: function(){
    this.props.removeFriend(this.props.currentUserID, this.props.friendID)
  },
    render: function() {
        return (
            <div className="friend">
                <Row>
                    <Col xs={4} sm={3} md={2} lg={2} className="friendProfilePic">
                        <img src='/images/default_avatar.jpg' alt="profile-pic"/>
                    </Col>
                    <Col xs={8} sm={9} md={10} lg={10} className="friendData">
                        <p id="friend-name">{this.props.friendFirstName} {this.props.friendLastName}</p>
                        <p id="friend-status">Status: {this.props.friendStatus}</p>
                  </Col>
                </Row>
            </div>
        )
    }
});

module.exports = Friend;
