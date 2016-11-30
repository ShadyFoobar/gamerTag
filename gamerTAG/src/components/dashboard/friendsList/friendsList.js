import React from 'react';
import Friend from './friend';

var FriendsList = React.createClass({
  getInitialState: function() {
      return {
          friendsList: this.props.friends
      };
  },

    render: function() {
        return (
            <div className="friendsList">
              <Friend friendName={this.state.friendsList[0].gamerTAG} friendStatus={this.state.friendsList[0].status} friendRecent={this.state.friendsList[0].recentGame}/>
              <Friend friendName={this.state.friendsList[1].gamerTAG} friendStatus={this.state.friendsList[1].status} friendRecent={this.state.friendsList[1].recentGame}/>
              <Friend friendName={this.state.friendsList[2].gamerTAG} friendStatus={this.state.friendsList[2].status} friendRecent={this.state.friendsList[2].recentGame}/>
            </div>
        )
    }
});

module.exports = FriendsList;
