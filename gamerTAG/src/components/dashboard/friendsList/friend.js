import React from 'react';

var Friend = React.createClass({

    render: function() {
        return (
            <div className="friendsList">
                <h1>FriendName: {this.props.friendName}</h1>
                <p>Status: {this.props.friendStatus}</p>
                <p>Recent Game: {this.props.friendRecent}</p>
            </div>
        )
    }
});

module.exports = Friend;
