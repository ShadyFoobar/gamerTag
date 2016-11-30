import React from 'react';

var Friend = React.createClass({

    render: function() {
        return (
            <div className="friendsList">
                <img src={require('../../../img/gamertag.jpg')} alt="tagType" height="42" width="42"/>
                <h1>FriendName:{this.props.friendName}</h1>
                <p>Status:{this.props.friendStatus}</p>
                <p>Recent Game:{this.props.friendRecent}</p>
            </div>
        )
    }
});

module.exports = Friend;
