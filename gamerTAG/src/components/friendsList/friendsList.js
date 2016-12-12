import React from 'react';
import Friend from './friend';
import 'react-bootstrap';
import data from '../../data.js';

var FriendsList = React.createClass({
  getInitialState : function(){
    return data;
  },
    render: function() {
        return (
            <div className="friendsList">
                <div>
                    <h1>Friends List</h1>
                </div>
                <div>
                    {this.state.user.friends.map(function(user, index) {
                        return (<Friend key={index} friendName={user.gamerTAG} friendStatus={user.status} friendRecent={user.recentGame}/>)
                    })}
                </div>
            </div>
        )
    }
});

module.exports = FriendsList;
