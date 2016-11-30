import React from 'react';
import Friend from './friend';

var FriendsList = React.createClass({
    render: function() {
        return (
            <div className="friendsList">
              <Friend friendName="THE NAME" friendStatus="Online" friendRecent="Overwatch"/>
              <Friend friendName="BLITZMAN" friendStatus="ONline" friendRecent="CoD"/>
              <Friend friendName="RUNNEDED" friendStatus="Offline" friendRecent="Halo"/>
            </div>
        )
    }
});

module.exports = FriendsList;
