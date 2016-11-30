import React from 'react';
import FriendsList from './friendsList/friendsList';
import MyAccountInfo from './account/myAccountInfo';

{/* <NewFriendSearch />
<MyUserInfo /> */}

var Dashboard = React.createClass({
    render: function() {
        return (
            <div>
              <MyAccountInfo />
              <FriendsList />

            </div>
        )
    }
});

module.exports = Dashboard;
