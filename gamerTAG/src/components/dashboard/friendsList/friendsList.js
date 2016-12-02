import React from 'react';
import Friend from './friend';
import 'react-bootstrap';

var FriendsList = React.createClass({
    render: function() {
        return (
            <div className="friendsList">
                <div>
                    <h1>Friends List</h1>
                </div>
                <div>
                    {this.props.friends.map(function(user, index) {
                        return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                    })}
                </div>

            </div>
        )
    }
});

module.exports = FriendsList;
